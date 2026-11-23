/**
 * 1689 Heritage Trail — Main Application
 * ArcGIS Maps SDK for JavaScript 5.0
 *
 * CONFIGURATION: To use Esri's premium basemaps (e.g. Human Geography),
 * get a free API key at https://developers.arcgis.com/ and paste it below.
 * Without a key, the app uses Esri World Light Gray Canvas tiles (public, no key required).
 */
const ARCGIS_API_KEY = "";

import { eras, locations, routes, figures, timeline, eraIndex, locationIndex, YEAR_MIN, YEAR_MAX, eraForYear } from "./data.js";
import { chapters, confessionLinks, confessionIntro } from "./confession.js";
import { families, today } from "./lineage.js";
import {
  lang, setLang, t, eraText, locationText, eventText, figureText, storedLang,
  allLocationText, allEventText, allFigureText,
} from "./i18n.js";

// ============================================================
// Small helpers
// ============================================================
const $ = (id) => document.getElementById(id);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const fold = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const langSelector = $("langSelector");
const splash = $("splash");
const loaderBar = document.querySelector(".splash-loader-bar");

function focusEl(el) {
  if (!el) return;
  if (typeof el.setFocus === "function") el.setFocus();
  else el.focus();
}

// Localized text accessors (English comes from data.js, Spanish from content-es.js)
const locName = (loc) => locationText(loc.id, "name") || loc.name;
const locModern = (loc) => locationText(loc.id, "modernName") || loc.modernName;
const locRegion = (loc) => locationText(loc.id, "region") || loc.region;
const evtTitle = (loc, evt) => eventText(evt.id, "title") || evt.title;
const evtDesc = (loc, evt) => eventText(evt.id, "description") || evt.description;
const evtSource = (loc, evt) => eventText(evt.id, "source") || evt.source || "";
const figField = (fig, field) => figureText(fig.id, field) || fig[field];

// ============================================================
// Toast
// ============================================================
let toastTimer;
function toast(msg) {
  const el = $("toast");
  el.textContent = msg;
  el.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("visible"), 2200);
}

// ============================================================
// Modals (focus is moved in, trapped, and restored on close)
// ============================================================
const openOverlays = [];
const returnFocus = new Map();

function openModal(id) {
  const el = $(id);
  returnFocus.set(id, document.activeElement);
  el.classList.remove("hidden");
  if (!openOverlays.includes(id)) openOverlays.push(id);
  const first = el.querySelector(".modal-close");
  setTimeout(() => focusEl(first), 30);
}

function closeModal(id) {
  const el = $(id);
  el.classList.add("hidden");
  const i = openOverlays.indexOf(id);
  if (i >= 0) openOverlays.splice(i, 1);
  const back = returnFocus.get(id);
  returnFocus.delete(id);
  if (back && document.contains(back)) focusEl(back);
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(overlay.id); });
});
$("closeInfo").addEventListener("click", () => closeModal("infoOverlay"));
$("closeDonate").addEventListener("click", () => closeModal("donateOverlay"));

// Keep Tab inside the open modal
document.addEventListener("keydown", (e) => {
  if (e.key !== "Tab" || !openOverlays.length) return;
  const box = $(openOverlays[openOverlays.length - 1]).querySelector(".modal-box");
  const items = [...box.querySelectorAll("a[href], button:not([disabled])")].filter((n) => n.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// ============================================================
// Donate & Info
// ============================================================
function fillDonateModal() {
  $("donateModalTitle").textContent = t("donateTitle");
  $("donateText").textContent = t("donateText");
  $("donateBtnLabel").textContent = t("donateButton") + " via Venmo";
  $("donatePaypalLabel").textContent = t("donateButton") + " via PayPal";
  $("donateQrLabel").textContent = t("donateQr");
  $("donateEmailLabel").textContent = t("donateEmailLabel");
}

function fillInfoModal() {
  $("infoModalTitle").textContent = t("infoTitle");
  const legendItems = eras.map((e) =>
    `<div class="legend-item"><span class="legend-line" style="background:${e.hexColor}"></span>${eraText(e.id, "name")} (${eraText(e.id, "dateRange")})</div>`
  ).join("");
  $("infoModalContent").innerHTML = `
    <p>${eraText(1, "description")}</p>
    <div class="info-legend">
      <h4>${t("infoLegendTitle")}</h4>
      ${legendItems}
    </div>
    <div class="info-features">
      <h4>${t("infoHowTitle")}</h4>
      <ul>
        <li>${t("infoHow1")}</li>
        <li>${t("infoHow2")}</li>
        <li>${t("infoHow3")}</li>
        <li>${t("infoHow4")}</li>
        <li>${t("infoHow5")}</li>
        <li>${t("infoHow6")}</li>
        <li>${t("infoHow7")}</li>
      </ul>
    </div>
    <div class="info-features">
      <h4>${t("infoFeaturesTitle")}</h4>
      <ul>
        <li>${t("infoFeature1")}</li>
        <li>${t("infoFeature2")}</li>
        <li>${t("infoFeature3")}</li>
        <li>${t("infoFeature4")}</li>
        <li>${t("infoFeature5")}</li>
      </ul>
    </div>
    <p class="info-note">${t("infoSourcesNote")}</p>
    <div class="info-verse">${t("infoVerse")}</div>
  `;
}

$("btnDonate").addEventListener("click", () => { fillDonateModal(); openModal("donateOverlay"); });
$("btnInfo").addEventListener("click", () => { fillInfoModal(); openModal("infoOverlay"); });

// ============================================================
// Language flow: skip the chooser when a language is already known (?lang= or last visit)
// ============================================================
function beginApp() {
  langSelector.classList.add("hidden");
  splash.classList.remove("hidden");
  $("splashTitle").textContent = t("appTitle");
  $("splashSubtitle").textContent = t("appSubtitle");
  $("splashVerse").textContent = t("splashVerse");
  $("splashRef").textContent = "— " + t("splashVerseRef");
  initMap();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => { setLang(btn.dataset.lang); beginApp(); });
});

// ============================================================
// Splash helpers
// ============================================================
let progress = 0;
let progressInterval;

function startProgress() {
  progressInterval = setInterval(() => {
    progress += Math.random() * 12;
    if (progress > 90) progress = 90;
    loaderBar.style.width = progress + "%";
  }, 250);
}

function dismissSplash() {
  clearInterval(progressInterval);
  loaderBar.style.width = "100%";
  setTimeout(() => splash.classList.add("hidden"), reducedMotion.matches ? 0 : 500);
}

function showError(msg) {
  clearInterval(progressInterval);
  const el = document.createElement("p");
  el.style.cssText = "color:#E08A8A;font-size:13px;margin-top:1rem;";
  el.textContent = msg;
  document.querySelector(".splash-content").appendChild(el);
}

// ============================================================
// Static text (labels, aria attributes) for the current language
// ============================================================
function applyTranslations() {
  document.documentElement.lang = lang;
  document.title = `${t("appTitle")} — ${t("appSubtitle")}`;
  const navLogo = $("navLogo");
  navLogo.setAttribute("heading", t("appTitle"));
  navLogo.setAttribute("description", t("appSubtitle"));

  $("timelineBtnText").textContent = t("btnTimeline");
  $("figuresBtnText").textContent = t("btnFigures");
  $("namesBtnText").textContent = t("btnNames");
  $("shareBtnText").textContent = t("share");
  $("donateBtnText").textContent = t("btnSupport");
  $("langBtnText").textContent = lang === "en" ? "ES" : "EN";
  $("locationsBtnText").textContent = t("btnLocations");
  $("confessionBtnText").textContent = t("btnConfession");
  $("lineageBtnText").textContent = t("btnLineage");
  $("btnConfession").setAttribute("label", t("confessionTitle"));
  $("btnConfession").setAttribute("title", t("confessionTitle"));
  $("skipLink").textContent = t("skipLink");
  $("appH1").textContent = `${t("appTitle")} — ${t("appSubtitle")}`;
  $("geojsonBtnText").textContent = t("exportGeojson");
  $("printBtnText").textContent = t("exportPrint");
  $("btnGeojson").setAttribute("title", t("exportGeojsonTip"));
  $("confessionPanelTitle").textContent = t("confessionTitle");
  $("lineagePanelTitle").textContent = t("lineageTitle");

  // calcite buttons take an accessible name from `label`
  $("btnTimeline").setAttribute("label", t("timelineTitle"));
  $("btnFigures").setAttribute("label", t("figuresTitle"));
  $("btnToggleNames").setAttribute("label", t("btnNames"));
  $("btnShare").setAttribute("label", t("shareLabel"));
  $("btnShare").setAttribute("title", t("shareLabel"));
  $("btnDonate").setAttribute("label", t("donateTitle"));
  $("btnDonate").setAttribute("title", t("donateTitle"));
  $("btnLang").setAttribute("label", t("langLabel"));
  $("btnLang").setAttribute("title", t("langLabel"));
  $("btnInfo").setAttribute("label", t("infoLabel"));
  $("btnInfo").setAttribute("title", t("infoLabel"));
  ["closeTimeline", "closeFigures", "closeLocations", "closeConfession", "closeLineage", "closeSheet"].forEach((id) => $(id).setAttribute("label", t("closeLabel")));
  ["closeInfo", "closeDonate"].forEach((id) => $(id).setAttribute("aria-label", t("closeLabel")));

  document.querySelectorAll(".journey-chip").forEach((chip) => {
    const labelEl = chip.querySelector(".chip-label");
    const key = labelEl?.dataset?.i18n;
    if (key) labelEl.textContent = t(key);
  });
  document.querySelector(".journey-chips").setAttribute("aria-label", t("infoLegendTitle"));

  $("searchInput").setAttribute("placeholder", t("searchPlaceholder"));
  $("searchInput").setAttribute("aria-label", t("searchLabel"));
  $("searchResults").setAttribute("aria-label", t("searchResultsLabel"));

  $("timelinePanelTitle").textContent = t("timelineTitle");
  $("figuresPanelTitle").textContent = t("figuresTitle");
  $("locationsPanelTitle").textContent = t("locationsTitle");
  $("prevLabel").textContent = t("previous");
  $("nextLabel").textContent = t("next");
  $("viewDiv").setAttribute("aria-label", t("mapLabel"));
  $("yearSlider").setAttribute("aria-label", t("yearSliderLabel"));
  $("btnYearReset").setAttribute("aria-label", t("yearReset"));
  $("btnYearReset").setAttribute("title", t("yearReset"));
  $("nameLabel").textContent = t("showingHistorical");
}

// ============================================================
// Main init
// ============================================================
let mapInitialized = false;

async function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;
  startProgress();

  setTimeout(() => {
    if (!splash.classList.contains("hidden")) { dismissSplash(); }
  }, 15000);

  applyTranslations();

  // ArcGIS imports via $arcgis.import()
  let Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
    SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol,
    WebTileLayer, Basemap, esriConfig, reactiveUtils;

  try {
    [esriConfig, Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
      SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol,
      WebTileLayer, Basemap, reactiveUtils,
    ] = await $arcgis.import([
      "@arcgis/core/config.js",
      "@arcgis/core/Map.js",
      "@arcgis/core/views/MapView.js",
      "@arcgis/core/layers/GraphicsLayer.js",
      "@arcgis/core/Graphic.js",
      "@arcgis/core/geometry/Point.js",
      "@arcgis/core/geometry/Polyline.js",
      "@arcgis/core/symbols/SimpleMarkerSymbol.js",
      "@arcgis/core/symbols/SimpleLineSymbol.js",
      "@arcgis/core/symbols/TextSymbol.js",
      "@arcgis/core/layers/WebTileLayer.js",
      "@arcgis/core/Basemap.js",
      "@arcgis/core/core/reactiveUtils.js",
    ]);
  } catch (err) {
    console.error("Failed to load ArcGIS modules:", err);
    showError(lang === "es"
      ? "Error al cargar el mapa. Verifica tu conexión."
      : "Failed to load map SDK. Check your connection and refresh.");
    throw err;
  }

  // Basemap
  let mapBasemap;
  if (ARCGIS_API_KEY) {
    esriConfig.apiKey = ARCGIS_API_KEY;
    mapBasemap = "arcgis/human-geography";
  } else {
    // Esri World Light Gray Canvas tiles: public, no API key required
    // (CARTO's basemaps.cartocdn.com tiles now require an API key).
    const esriTiles = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/";
    const grayBase = new WebTileLayer({
      urlTemplate: esriTiles + "World_Light_Gray_Base/MapServer/tile/{level}/{row}/{col}",
      copyright: "Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
    });
    const grayLabels = new WebTileLayer({
      urlTemplate: esriTiles + "World_Light_Gray_Reference/MapServer/tile/{level}/{row}/{col}",
    });
    mapBasemap = new Basemap({ baseLayers: [grayBase], referenceLayers: [grayLabels] });
  }

  // ----------------------------------------------------------
  // State (restored from the URL on load, written back as you navigate)
  // ----------------------------------------------------------
  const state = { era: "all", year: YEAR_MAX };
  let showHistoricalNames = true;
  let selectedLocation = null;
  let orderedStops = [];
  let currentStopIndex = -1;
  let sheetOpener = null;

  const goOpts = (ms) => ({ duration: reducedMotion.matches ? 0 : ms });
  const yearOn = () => state.year < YEAR_MAX;

  // Events of a location that pass the era filter and have happened by the current year
  function locEvents(loc) {
    return loc.events.filter((e) => (state.era === "all" || e.era === state.era) && (!yearOn() || e.year <= state.year));
  }
  const locVisible = (loc) => locEvents(loc).length > 0;

  function readUrl() {
    const p = new URLSearchParams(location.search);
    const era = p.get("era");
    const year = parseInt(p.get("year"), 10);
    const loc = p.get("loc");
    return {
      era: era && ["1", "2", "3", "4"].includes(era) ? parseInt(era, 10) : "all",
      year: Number.isFinite(year) ? Math.min(YEAR_MAX, Math.max(YEAR_MIN, year)) : YEAR_MAX,
      loc: loc && locationIndex[loc] ? loc : null,
    };
  }

  let urlTimer = 0;
  function writeUrl() {
    const p = new URLSearchParams();
    p.set("lang", lang);
    if (state.era !== "all") p.set("era", String(state.era));
    if (yearOn()) p.set("year", String(state.year));
    if (selectedLocation && bottomSheet.classList.contains("open")) p.set("loc", selectedLocation.id);
    const url = `${location.pathname}?${p.toString()}`;
    try { history.replaceState(null, "", url); } catch (e) { /* ignore */ }
  }
  // the year changes many times a second during playback, so writes are spaced out
  function syncUrl() {
    clearTimeout(urlTimer);
    urlTimer = setTimeout(writeUrl, 350);
  }

  // Layers
  const geoLayer = new GraphicsLayer({ title: "GeoLabels" });
  const routeLayer = new GraphicsLayer({ title: "Routes" });
  const cityLayer = new GraphicsLayer({ title: "Locations" });
  const labelLayer = new GraphicsLayer({ title: "Labels" });

  // Geographic labels
  const geoLabels = [
    { en: "ENGLAND", es: "INGLATERRA", lat: 52.5, lng: -1.2, size: 14, color: [100, 90, 80] },
    { en: "WALES", es: "GALES", lat: 52.0, lng: -3.8, size: 11, color: [100, 90, 80] },
    { en: "SCOTLAND", es: "ESCOCIA", lat: 56.5, lng: -4.0, size: 11, color: [100, 90, 80] },
    { en: "IRELAND", es: "IRLANDA", lat: 53.5, lng: -8.0, size: 11, color: [100, 90, 80] },
    { en: "FRANCE", es: "FRANCIA", lat: 47.0, lng: 2.5, size: 12, color: [100, 90, 80] },
    { en: "NETHERLANDS", es: "PAÍSES BAJOS", lat: 52.3, lng: 5.3, size: 9, color: [100, 90, 80] },
    { en: "BELGIUM", es: "BÉLGICA", lat: 50.8, lng: 4.3, size: 8, color: [100, 90, 80] },
    { en: "North\nSea", es: "Mar\ndel Norte", lat: 55.0, lng: 2.5, size: 11, italic: true, color: [70, 100, 140] },
    { en: "English Channel", es: "Canal de la Mancha", lat: 50.2, lng: -1.5, size: 9, italic: true, color: [70, 100, 140] },
    { en: "Irish\nSea", es: "Mar\nde Irlanda", lat: 53.5, lng: -5.0, size: 9, italic: true, color: [70, 100, 140] },
    { en: "Bristol\nChannel", es: "Canal de\nBristol", lat: 51.2, lng: -4.5, size: 8, italic: true, color: [70, 100, 140] },
    { en: "Celtic\nSea", es: "Mar\nCéltico", lat: 50.5, lng: -7.0, size: 9, italic: true, color: [70, 100, 140] },
  ];

  function drawGeoLabels() {
    geoLayer.removeAll();
    if (ARCGIS_API_KEY) return;
    geoLabels.forEach((geo) => {
      const text = lang === "es" ? geo.es : geo.en;
      geoLayer.add(new Graphic({
        geometry: new Point({ longitude: geo.lng, latitude: geo.lat }),
        symbol: new TextSymbol({
          text,
          color: [...geo.color, 190],
          haloColor: [240, 237, 232, 255],
          haloSize: 3,
          font: { size: geo.size, family: "Avenir Next LT Pro", weight: "bold", style: geo.italic ? "italic" : "normal" },
          horizontalAlignment: "center",
          verticalAlignment: "middle",
          lineWidth: 200,
        }),
      }));
    });
  }

  // Map & View
  const map = new Map({ basemap: mapBasemap, layers: [geoLayer, routeLayer, cityLayer, labelLayer] });

  const view = new MapView({
    container: "viewDiv",
    map,
    center: [-1.5, 52.3],
    zoom: window.innerWidth < 768 ? 6 : 7,
    // the Esri gray tiles end at level 13, so zooming further would only stretch them
    constraints: { minZoom: 2, maxZoom: 13 },
    popup: { autoOpenEnabled: false },
    ui: { components: ["zoom"] },
    navigation: { mouseWheelZoomEnabled: true, browserTouchPanEnabled: true },
  });

  view.ui.move("zoom", "bottom-right");

  // Regions: the home view fits the places in Britain; the others jump to the Atlantic coast and India
  const REGIONS = {
    uk: { key: "regionUK", box: { xmin: -5.2, ymin: 50.7, xmax: 1.6, ymax: 53.6 } },
    america: { key: "regionAmerica", box: { xmin: -82, ymin: 31.5, xmax: -73, ymax: 41.2 } },
    india: { key: "regionIndia", box: { xmin: 86, ymin: 21, xmax: 90.6, ymax: 24.5 } },
    all: { key: "regionAll", box: { xmin: -90, ymin: 15, xmax: 100, ymax: 58 } },
  };
  function goRegion(id, ms = 800) {
    const r = REGIONS[id] || REGIONS.uk;
    view.goTo({ ...r.box, spatialReference: { wkid: 4326 } }, goOpts(ms));
  }
  const goHome = (ms) => goRegion("uk", ms);

  // Drawing helpers
  const getEraColor = (eraId) => eraIndex[eraId]?.color || [150, 150, 150];

  function getLocationSize(significance) {
    switch (significance) {
      case "major": return 18;
      case "moderate": return 15;
      default: return 12;
    }
  }

  function getStopNumber(loc) {
    const ev = locEvents(loc)[0];
    return ev ? ev.order : null;
  }

  function getStopEraColor(loc) {
    if (state.era !== "all") return getEraColor(state.era);
    const ev = locEvents(loc)[0];
    return getEraColor(ev ? ev.era : loc.eras[0]);
  }

  // Routes: whole era paths normally; with the year slider in use, only the legs whose two ends have appeared
  const coordIndex = {};
  locations.forEach((l) => { coordIndex[`${l.lng},${l.lat}`] = l; });

  function drawRoutes() {
    routeLayer.removeAll();
    routes.forEach((route) => {
      const era = eraIndex[route.era];
      if (!era) return;
      if (state.era !== "all" && state.era !== route.era) return;
      const symbol = new SimpleLineSymbol({ color: [...era.color, 180], width: 2.5, style: "dash", cap: "round", join: "round" });
      if (!yearOn()) {
        if (route.path && route.path.length > 1) {
          routeLayer.add(new Graphic({ geometry: new Polyline({ paths: [route.path] }), symbol, attributes: { era: route.era } }));
        }
        return;
      }
      for (let i = 0; i < route.path.length - 1; i++) {
        const a = coordIndex[route.path[i].join(",")];
        const b = coordIndex[route.path[i + 1].join(",")];
        if (a && b && locVisible(a) && locVisible(b)) {
          routeLayer.add(new Graphic({
            geometry: new Polyline({ paths: [[route.path[i], route.path[i + 1]]] }),
            symbol, attributes: { era: route.era },
          }));
        }
      }
    });
  }

  // ============================================================
  // Zoom-Based Labeling with Collision Detection
  // ============================================================
  const LONDON_BOX = { latMin: 51.48, latMax: 51.53, lngMin: -0.13, lngMax: -0.04 };

  function isInLondon(loc) {
    return loc.lat >= LONDON_BOX.latMin && loc.lat <= LONDON_BOX.latMax &&
           loc.lng >= LONDON_BOX.lngMin && loc.lng <= LONDON_BOX.lngMax;
  }

  // Priority for label display (lower = more important, shown first)
  const LABEL_PRIORITY = {
    "metropolitan-tabernacle": 1,
    "broadmead-bristol": 1,
    "bunyan-bedford": 1,
    "kettering": 1,
    "hill-cliffe": 1,
    "kelvedon": 2,
    "colchester": 2,
    "llanwenarth": 2,
    "olchon-valley": 2,
    "knocklas": 2,
    "cawkwell": 2,
    "leicester": 2,
    "waterbeach": 2,
    "abergavenny": 2,
  };

  function getLabelMinZoom(loc) {
    const priority = LABEL_PRIORITY[loc.id];
    if (priority === 1) return 6;
    if (priority === 2) return 7;
    if (isInLondon(loc)) {
      if (loc.significance === "major") return 9;
      if (loc.significance === "moderate") return 10;
      return 11;
    }
    if (loc.significance === "major") return 7;
    if (loc.significance === "moderate") return 8;
    return 10;
  }

  function deconflictLabels(candidates) {
    const placed = [];
    return candidates.filter((c) => {
      const screenPt = view.toScreen(new Point({ longitude: c.lng, latitude: c.lat }));
      if (!screenPt) return false;
      const charWidth = c.fontSize * 0.55;
      const w = c.text.length * charWidth + 18;
      const h = c.fontSize + 9;
      const box = { x: screenPt.x - w / 2, y: screenPt.y - c.yoffset - h, w, h };
      const overlaps = placed.some((p) =>
        box.x < p.x + p.w && box.x + box.w > p.x && box.y < p.y + p.h && box.y + box.h > p.y);
      if (!overlaps) { placed.push(box); return true; }
      return false;
    });
  }

  function drawLocations() {
    cityLayer.removeAll();
    labelLayer.removeAll();
    const zoom = view.zoom;

    locations.forEach((loc) => {
      if (!locVisible(loc)) return;
      const markerColor = getStopEraColor(loc);
      const size = getLocationSize(loc.significance);
      const stopNumber = getStopNumber(loc);
      const point = new Point({ longitude: loc.lng, latitude: loc.lat });

      if (loc.significance === "major") {
        cityLayer.add(new Graphic({
          geometry: point,
          symbol: new SimpleMarkerSymbol({
            style: "circle", size: size + 12,
            color: [markerColor[0], markerColor[1], markerColor[2], 40],
            outline: { color: [0, 0, 0, 0], width: 0 },
          }),
          attributes: { locId: loc.id, type: "glow" },
        }));
      }

      cityLayer.add(new Graphic({
        geometry: point,
        symbol: new SimpleMarkerSymbol({
          style: "circle", size,
          color: [...markerColor, 255],
          outline: { color: [60, 40, 50, 200], width: loc.significance === "major" ? 2.5 : 2 },
        }),
        attributes: { locId: loc.id, type: "city" },
      }));

      if (stopNumber != null) {
        const numFontSize = loc.significance === "major" ? 9 : loc.significance === "moderate" ? 8 : 7;
        cityLayer.add(new Graphic({
          geometry: point,
          symbol: new TextSymbol({
            text: String(stopNumber),
            color: [255, 255, 255, 255],
            haloColor: [0, 0, 0, 120],
            haloSize: 0.5,
            font: { size: numFontSize, family: "Arial", weight: "bold" },
            yoffset: 0, xoffset: 0,
            horizontalAlignment: "center",
            verticalAlignment: "middle",
          }),
          attributes: { locId: loc.id, type: "stopNumber" },
        }));
      }
    });

    const labelCandidates = [];
    locations.forEach((loc) => {
      if (!locVisible(loc)) return;
      if (zoom < getLabelMinZoom(loc)) return;
      const size = getLocationSize(loc.significance);
      const labelText = showHistoricalNames ? locName(loc) : locModern(loc);
      const displayText = labelText.length > 28 ? labelText.substring(0, 25) + "..." : labelText;
      const fontSize = loc.significance === "major" ? 11 : 9;
      const priority = LABEL_PRIORITY[loc.id] || (loc.significance === "major" ? 3 : loc.significance === "moderate" ? 4 : 5);
      labelCandidates.push({
        loc, text: displayText, fontSize,
        fontWeight: loc.significance === "major" ? "bold" : "normal",
        yoffset: size / 2 + 8, lat: loc.lat, lng: loc.lng, priority,
      });
    });
    labelCandidates.sort((a, b) => a.priority - b.priority);

    deconflictLabels(labelCandidates).forEach((c) => {
      labelLayer.add(new Graphic({
        geometry: new Point({ longitude: c.lng, latitude: c.lat }),
        symbol: new TextSymbol({
          text: c.text,
          color: [40, 25, 35, 255],
          haloColor: [255, 255, 255, 220],
          haloSize: 2,
          font: { size: c.fontSize, family: "Avenir Next LT Pro", weight: c.fontWeight },
          yoffset: c.yoffset,
        }),
        attributes: { locId: c.loc.id, type: "label" },
      }));
    });

    // ring around the open location
    if (selectedLocation && locVisible(selectedLocation) && bottomSheet.classList.contains("open")) {
      cityLayer.add(new Graphic({
        geometry: new Point({ longitude: selectedLocation.lng, latitude: selectedLocation.lat }),
        symbol: new SimpleMarkerSymbol({
          style: "circle",
          size: getLocationSize(selectedLocation.significance) + 12,
          color: [201, 168, 76, 35],
          outline: { color: [201, 168, 76, 200], width: 2 },
        }),
        attributes: { locId: selectedLocation.id, type: "highlight" },
      }));
    }
  }

  function refresh() {
    drawGeoLabels();
    drawRoutes();
    drawLocations();
    buildLocationsPanel();
  }

  // ============================================================
  // Panels
  // ============================================================
  const PANEL_BUTTONS = { timelinePanel: "btnTimeline", figuresPanel: "btnFigures", locationsPanel: "btnLocations", confessionPanel: "btnConfession", lineagePanel: "btnLineage" };
  const panelReturn = {};

  function togglePanel(panelId, show, opts = {}) {
    const panel = $(panelId);
    if (show === undefined) show = panel.classList.contains("hidden");
    if (show) {
      Object.keys(PANEL_BUTTONS).forEach((id) => { if (id !== panelId) togglePanel(id, false, { quiet: true }); });
      panelReturn[panelId] = document.activeElement;
      panel.classList.remove("hidden");
      $(PANEL_BUTTONS[panelId])?.setAttribute("aria-expanded", "true");
      if (!opts.quiet) {
        setTimeout(() => focusEl(panel.querySelector("[data-focus], .list-item, .timeline-item, .figure-card, .chap-head, .fam button") || panel.querySelector("calcite-button")), 40);
      }
    } else {
      if (panel.classList.contains("hidden")) return;
      panel.classList.add("hidden");
      $(PANEL_BUTTONS[panelId])?.setAttribute("aria-expanded", "false");
      if (!opts.quiet && !opts.noReturn) {
        const back = panelReturn[panelId];
        if (back && document.contains(back)) focusEl(back);
      }
    }
  }

  function anyPanelOpen() {
    return Object.keys(PANEL_BUTTONS).find((id) => !$(id).classList.contains("hidden")) || null;
  }

  $("btnTimeline").addEventListener("click", () => togglePanel("timelinePanel"));
  $("btnFigures").addEventListener("click", () => togglePanel("figuresPanel"));
  $("btnLocations").addEventListener("click", () => togglePanel("locationsPanel"));
  $("btnConfession").addEventListener("click", () => togglePanel("confessionPanel"));
  $("btnLineage").addEventListener("click", () => togglePanel("lineagePanel"));
  $("closeConfession").addEventListener("click", () => togglePanel("confessionPanel", false));
  $("closeLineage").addEventListener("click", () => togglePanel("lineagePanel", false));
  $("closeTimeline").addEventListener("click", () => togglePanel("timelinePanel", false));
  $("closeFigures").addEventListener("click", () => togglePanel("figuresPanel", false));
  $("closeLocations").addEventListener("click", () => togglePanel("locationsPanel", false));

  function makeKeyboardClickable(el, handler) {
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.addEventListener("click", handler);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(e); }
    });
  }

  // Timeline panel
  function buildTimelinePanel() {
    const content = $("timelineContent");
    content.innerHTML = timeline.map((evt, i) => {
      const era = eraIndex[evt.era];
      const loc = locationIndex[evt.locationId];
      return `
        <div class="timeline-item" data-i="${i}" data-location="${evt.locationId}">
          <div class="timeline-dot" style="background:${era.hexColor}"></div>
          <div class="timeline-year" style="color:${era.hexColor}">${evt.year}</div>
          <div class="timeline-title">${evtTitle(loc, evt)}</div>
          <div class="timeline-location">${locName(loc)}</div>
        </div>
      `;
    }).join("");
    content.querySelectorAll(".timeline-item").forEach((item) => {
      makeKeyboardClickable(item, () => {
        const loc = locationIndex[item.dataset.location];
        togglePanel("timelinePanel", false, { noReturn: true });
        selectLocation(loc.id, { zoom: true });
      });
    });
  }

  // Figures panel
  function buildFiguresPanel() {
    const content = $("figuresContent");
    content.innerHTML = figures.map((fig) => `
      <div class="figure-card" data-figure="${fig.id}">
        <div class="figure-name">${fig.name}</div>
        <div class="figure-years">${figField(fig, "years")}</div>
        <div class="figure-role">${figField(fig, "role")}</div>
        <div class="figure-bio">${figField(fig, "bio")}</div>
      </div>
    `).join("");
    content.querySelectorAll(".figure-card").forEach((card) => {
      makeKeyboardClickable(card, () => {
        const loc = locationOfFigure(card.dataset.figure);
        if (loc) {
          togglePanel("figuresPanel", false, { noReturn: true });
          selectLocation(loc.id, { zoom: true });
        }
      });
    });
  }

  function locationOfFigure(figId) {
    const fig = figures.find((f) => f.id === figId);
    if (!fig) return null;
    const hits = [];
    locations.forEach((l) => l.events.forEach((e) => { if (e.figure === fig.name) hits.push({ l, year: e.year }); }));
    hits.sort((a, b) => a.year - b.year);
    return hits[0]?.l || null;
  }

  // Locations panel: every place currently shown, as a keyboard-operable list
  function buildLocationsPanel() {
    const content = $("locationsContent");
    const list = locations.filter(locVisible).sort((a, b) => locName(a).localeCompare(locName(b), lang));
    content.innerHTML = list.map((loc) => {
      const first = locEvents(loc)[0];
      const era = eraIndex[first.era];
      return `
        <div class="list-item" data-loc="${loc.id}">
          <span class="list-dot" style="background:${era.hexColor}"></span>
          <span class="list-text"><span class="list-name">${locName(loc)}</span><span class="list-sub">${locModern(loc)} · ${first.year}</span></span>
        </div>`;
    }).join("");
    content.querySelectorAll(".list-item").forEach((item) => {
      makeKeyboardClickable(item, () => {
        togglePanel("locationsPanel", false, { noReturn: true });
        selectLocation(item.dataset.loc, { zoom: true });
      });
    });
  }

  // Confession explorer: 32 chapters, each expands to a summary, key texts and a comparison
  const refUrl = (ref) => `https://ref.ly/${encodeURIComponent(ref)};${lang === "es" ? "rvr60" : "niv"}`;
  const esc = (x) => String(x ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = (obj) => (lang === "es" ? obj.es : obj.en);

  function buildConfessionPanel() {
    const content = $("confessionContent");
    const open = new Set([...content.querySelectorAll(".chap-head[aria-expanded='true']")].map((b) => b.dataset.n));
    content.innerHTML = `<p class="panel-note">${esc(L(confessionIntro))}</p>` + chapters.map((c) => {
      const isOpen = open.has(String(c.n));
      const places = (c.places || []).filter((id) => locationIndex[id]);
      return `
      <div class="chap">
        <button type="button" class="chap-head" data-n="${c.n}" aria-expanded="${isOpen}" aria-controls="chap-${c.n}">
          <span class="chap-num">${c.n}</span><span>${esc(lang === "es" ? c.es : c.en)}</span>
        </button>
        <div class="chap-body" id="chap-${c.n}" role="region" aria-label="${esc(t("chapterWord"))} ${c.n}"${isOpen ? "" : " hidden"}>
          <p>${esc(lang === "es" ? c.sumEs : c.sumEn)}</p>
          <h4>${esc(t("refsLabel"))}</h4>
          <p>${c.refs.map((r) => `<a href="${refUrl(r)}" target="_blank" rel="noopener">${esc(r)}</a>`).join(" · ")}</p>
          <h4>${esc(t("cmpLabel"))}</h4>
          <p class="chap-compare">${esc(L(c.cmp))}</p>
          <p><b>${esc(t("wcfLabel"))}:</b> ${c.wcf ? `${esc(t("chapterWord"))} ${c.wcf}` : esc(t("wcfNone"))} · <b>${esc(t("savoyLabel"))}:</b> ${esc(t("chapterWord"))} ${c.n} (${esc(t("savoySame"))})</p>
          ${places.length ? `<h4>${esc(t("placesLabel"))}</h4><div class="chap-places">${places.map((id) => `<button type="button" class="tool-btn" data-place="${id}">${esc(locName(locationIndex[id]))}</button>`).join("")}</div>` : ""}
        </div>
      </div>`;
    }).join("") + `<p class="panel-note"><b>${esc(t("fullTextLabel"))}:</b>
      <a href="${confessionLinks.full}" target="_blank" rel="noopener" style="color:var(--gold-light)">${esc(t("fullText1689"))}</a> ·
      <a href="${confessionLinks.wcf}" target="_blank" rel="noopener" style="color:var(--gold-light)">${esc(t("fullTextWcf"))}</a> ·
      <a href="${confessionLinks.savoy}" target="_blank" rel="noopener" style="color:var(--gold-light)">${esc(t("fullTextSavoy"))}</a></p>`;
    content.querySelectorAll(".chap-head").forEach((btn) => {
      btn.addEventListener("click", () => {
        const body = $(btn.getAttribute("aria-controls"));
        const show = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(show));
        body.hidden = !show;
      });
    });
    content.querySelectorAll("[data-place]").forEach((btn) => {
      btn.addEventListener("click", () => {
        togglePanel("confessionPanel", false, { noReturn: true });
        selectLocation(btn.dataset.place, { zoom: true });
      });
    });
  }

  // Lineage: church families followed through their pastors
  function buildLineagePanel() {
    const content = $("lineageContent");
    content.innerHTML = `<p class="panel-note">${esc(t("lineageNote"))}</p>` + families.map((f) => `
      <section class="fam" aria-label="${esc(L(f).title)}">
        <h4>${esc(L(f).title)}</h4>
        <p>${esc(L(f).intro)}</p>
        <ol>${f.steps.map((st) => {
          const loc = st.place && locationIndex[st.place];
          const label = lang === "es" ? st.es : st.en;
          const nm = loc ? `<button type="button" class="place-link" data-place="${st.place}">${esc(label)}</button>` : esc(label);
          return `<li><b>${esc(st.years)}</b> · ${nm}<small>${esc(lang === "es" ? st.noteEs : st.noteEn)}</small></li>`;
        }).join("")}</ol>
      </section>`).join("");
    content.querySelectorAll("[data-place]").forEach((btn) => {
      btn.addEventListener("click", () => {
        togglePanel("lineagePanel", false, { noReturn: true });
        selectLocation(btn.dataset.place, { zoom: true });
      });
    });
  }

  // Region buttons and export tools live at the top of the Places panel
  function buildRegionButtons() {
    const box = $("regionBtns");
    box.innerHTML = Object.entries(REGIONS).map(([id, r]) => `<button type="button" class="tool-btn" data-region="${id}">${esc(t(r.key))}</button>`).join("");
    box.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => goRegion(b.dataset.region)));
  }

  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // GeoJSON of the places currently shown (respects the era and year filters)
  $("btnGeojson").addEventListener("click", () => {
    const feats = locations.filter(locVisible).map((loc) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [loc.lng, loc.lat] },
      properties: {
        id: loc.id, name: loc.name, modernName: loc.modernName, region: loc.region, significance: loc.significance,
        events: locEvents(loc).map((e) => ({ year: e.year, era: e.era, title: e.title, figure: e.figure || null, source: e.source || null })),
      },
    }));
    download("1689-heritage-trail.geojson", JSON.stringify({ type: "FeatureCollection", name: "1689 Heritage Trail", features: feats }, null, 1), "application/geo+json");
    toast(`${feats.length} ${t("typePlace").toLowerCase()}`);
  });

  // Printable itinerary: the stops in the app's order for the current filters
  $("btnPrint").addEventListener("click", () => {
    buildStopList();
    const sheet = $("printSheet");
    sheet.innerHTML = `<h1>${esc(t("printTitle"))}</h1><p class="when">${esc(t("printNote"))}</p>` + orderedStops.map((loc, i) => `
      <div class="stop">
        <h2>${i + 1}. ${esc(locName(loc))}</h2>
        <p class="when">${esc(locModern(loc))} · ${esc(locRegion(loc))}</p>
        ${locEvents(loc).map((e) => `<p><b>${e.year}</b> · ${esc(evtTitle(loc, e))}. ${esc(evtDesc(loc, e))}</p>${evtSource(loc, e) ? `<p class="src">${esc(t("sourceLabel"))} ${esc(evtSource(loc, e))}</p>` : ""}`).join("")}
        ${today[loc.id] ? `<p class="src"><b>${esc(t("todayLabel"))}:</b> ${esc(L(today[loc.id]))}</p>` : ""}
      </div>`).join("");
    document.body.classList.add("printing");
    const done = () => { document.body.classList.remove("printing"); window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done);
    window.print();
  });

  // ============================================================
  // Bottom sheet (location details)
  // ============================================================
  const bottomSheet = $("bottomSheet");
  const sheetLocationName = $("sheetLocationName");
  const sheetModernName = $("sheetModernName");
  const sheetEvents = $("sheetEvents");
  const sheetHandle = $("sheetHandle");
  const setSheetHidden = (hide) => { bottomSheet.toggleAttribute("inert", hide); bottomSheet.setAttribute("aria-hidden", String(hide)); };
  setSheetHidden(true);

  function buildStopList() {
    const stops = [];
    if (state.era !== "all") {
      locations.forEach((loc) => {
        const ev = locEvents(loc)[0];
        if (ev) stops.push({ loc, order: ev.order, eraId: state.era });
      });
      stops.sort((a, b) => a.order - b.order);
    } else {
      [1, 2, 3, 4].forEach((eraId) => {
        locations.forEach((loc) => {
          const ev = locEvents(loc).find((e) => e.era === eraId);
          if (ev) stops.push({ loc, order: ev.order, eraId });
        });
      });
    }
    const seen = new Set();
    orderedStops = stops.filter((s) => (seen.has(s.loc.id) ? false : (seen.add(s.loc.id), true))).map((s) => s.loc);
  }

  function updateNavButtons() {
    const prevBtn = $("btnPrevStop");
    const nextBtn = $("btnNextStop");
    prevBtn.disabled = currentStopIndex <= 0;
    nextBtn.disabled = currentStopIndex >= orderedStops.length - 1;
    $("stopCounter").textContent = `${currentStopIndex + 1} / ${orderedStops.length}`;
  }

  function navigateToStop(index) {
    if (index < 0 || index >= orderedStops.length) return;
    const loc = orderedStops[index];
    openBottomSheet(loc, { keepFocus: true });
    view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 9) }, goOpts(500));
  }

  $("btnPrevStop").addEventListener("click", () => navigateToStop(currentStopIndex - 1));
  $("btnNextStop").addEventListener("click", () => navigateToStop(currentStopIndex + 1));

  function openBottomSheet(loc, opts = {}) {
    if (!bottomSheet.classList.contains("open") && !opts.keepFocus) sheetOpener = document.activeElement;
    selectedLocation = loc;
    buildStopList();
    currentStopIndex = orderedStops.findIndex((l) => l.id === loc.id);

    sheetLocationName.textContent = locName(loc);
    sheetModernName.textContent = `${t("sheetModernLabel")} ${locModern(loc)}  |  ${t("sheetRegionLabel")} ${locRegion(loc)}`;

    const eventsToShow = locEvents(loc);
    sheetEvents.innerHTML = eventsToShow.length ? eventsToShow.map((event) => {
      const eraShort = eraText(event.era, "shortName");
      const eraDate = eraText(event.era, "dateRange");
      const src = evtSource(loc, event);
      return `
        <div class="event-card" data-era="${event.era}">
          <div class="event-era-tag">${event.year} &bull; ${eraShort} &bull; ${eraDate}</div>
          <div class="event-action">${evtTitle(loc, event)}</div>
          ${event.disputed ? `<span class="disputed-tag" title="${esc(t("disputedTip"))}">${esc(t("disputedLabel"))}</span>` : ""}
          <p class="event-description">${evtDesc(loc, event)}</p>
          ${event.figure ? `<span class="event-figure-tag">${event.figure}</span>` : ""}
          ${src ? `<p class="event-source"><span>${t("sourceLabel")}</span> ${src}</p>` : ""}
        </div>
      `;
    }).join("") : `<p class="event-description">${t("noEventsYet")}</p>`;

    const note = today[loc.id];
    if (note) sheetEvents.insertAdjacentHTML("beforeend", `<div class="today"><b>${esc(t("todayLabel"))}:</b> ${esc(L(note))} <i>${esc(t("todayNote"))}</i></div>`);

    updateNavButtons();
    setSheetHidden(false);
    bottomSheet.classList.add("open");
    $("sheetContent").scrollTop = 0;
    drawLocations();
    syncUrl();
    if (!opts.noFocus) setTimeout(() => sheetLocationName.focus({ preventScroll: true }), 60);
  }

  function closeBottomSheet(opts = {}) {
    if (!bottomSheet.classList.contains("open")) { selectedLocation = null; return; }
    bottomSheet.classList.remove("open");
    setSheetHidden(true);
    selectedLocation = null;
    drawLocations();
    syncUrl();
    if (!opts.silent && sheetOpener && document.contains(sheetOpener) && sheetOpener.offsetParent !== null) focusEl(sheetOpener);
    sheetOpener = null;
  }

  $("closeSheet").addEventListener("click", () => closeBottomSheet());

  // Touch drag to dismiss
  let sheetStartY = 0, sheetCurrentY = 0, isDragging = false;
  sheetHandle.addEventListener("touchstart", (e) => {
    isDragging = true; sheetStartY = e.touches[0].clientY; bottomSheet.style.transition = "none";
  });
  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    sheetCurrentY = e.touches[0].clientY;
    const diff = sheetCurrentY - sheetStartY;
    if (diff > 0) bottomSheet.style.transform = `translateY(${diff}px)`;
  });
  document.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false; bottomSheet.style.transition = "";
    const diff = sheetCurrentY - sheetStartY;
    if (diff > 100) closeBottomSheet();
    bottomSheet.style.transform = "";
  });

  // ============================================================
  // Selecting places (map click, lists, search, timeline, deep link)
  // ============================================================
  function ensureVisible(loc) {
    if (locVisible(loc)) return;
    // the era or the year slider is hiding it: show everything again
    setEra("all", { quiet: true });
    if (yearOn()) setYear(YEAR_MAX, { quiet: true });
  }

  function selectLocation(locId, opts = {}) {
    const loc = locationIndex[locId];
    if (!loc) return;
    if (playing) pause();
    ensureVisible(loc);
    openBottomSheet(loc);
    if (opts.zoom) view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 9) }, goOpts(600));
  }

  view.on("click", (event) => {
    view.hitTest(event).then((response) => {
      const cityGraphic = response.results.find((r) => r.graphic?.attributes?.type === "city");
      if (cityGraphic) {
        const locId = cityGraphic.graphic.attributes.locId;
        selectLocation(locId);
        const loc = locationIndex[locId];
        if (loc) view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 9) }, goOpts(500));
      } else if (!event.native.target.closest(".bottom-sheet")) {
        closeBottomSheet({ silent: true });
      }
    });
  });

  // Debounced label refresh on zoom
  let zoomTimer;
  reactiveUtils.watch(
    () => view.zoom,
    () => { clearTimeout(zoomTimer); zoomTimer = setTimeout(() => drawLocations(), 150); }
  );

  // ============================================================
  // Era chips
  // ============================================================
  const chips = document.querySelectorAll(".journey-chip");

  function setEra(val, opts = {}) {
    state.era = val === "all" ? "all" : parseInt(val, 10);
    chips.forEach((c) => {
      const on = c.dataset.era === String(state.era);
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (opts.quiet) { refresh(); syncUrl(); return; }
    closeBottomSheet({ silent: true });
    refresh();
    syncUrl();
    if (state.era !== "all") {
      const eraLocations = locations.filter(locVisible);
      if (eraLocations.length > 0) zoomToLocations(eraLocations);
    } else {
      goHome(800);
    }
  }
  chips.forEach((chip) => chip.addEventListener("click", () => setEra(chip.dataset.era)));

  function zoomToLocations(all) {
    const inBritain = all.filter((l) => l.lng > -6 && l.lng < 2.5 && l.lat > 50 && l.lat < 56);
    const locs = inBritain.length >= 3 ? inBritain : all;
    const lngs = locs.map((l) => l.lng);
    const lats = locs.map((l) => l.lat);
    view.goTo({
      xmin: Math.min(...lngs) - 1, ymin: Math.min(...lats) - 1,
      xmax: Math.max(...lngs) + 1, ymax: Math.max(...lats) + 1,
      spatialReference: { wkid: 4326 },
    }, goOpts(800));
  }

  // ============================================================
  // Year slider + playback
  // ============================================================
  const slider = $("yearSlider");
  let playing = false;
  let playTimer = null;
  let lastSig = "";
  let lastYear = YEAR_MAX;

  function visibleSignature() {
    let n = 0;
    locations.forEach((l) => { n += locEvents(l).length; });
    return `${state.era}|${n}`;
  }

  function updateTicker(prevYear) {
    const lo = Math.min(prevYear, state.year), hi = Math.max(prevYear, state.year);
    const hits = timeline.filter((e) => e.year > lo && e.year <= hi || (lo === hi && e.year === hi));
    const ticker = $("playTicker");
    if (!yearOn()) { ticker.textContent = ""; return; }
    if (hits.length) {
      const e = hits[hits.length - 1];
      const loc = locationIndex[e.locationId];
      ticker.textContent = `${e.year}: ${evtTitle(loc, e)} (${locName(loc)})`;
    }
  }

  function updateYearUi() {
    const on = yearOn();
    $("yearReadout").textContent = on ? String(state.year) : t("yearAll");
    slider.value = String(state.year);
    slider.setAttribute("aria-valuetext", on ? String(state.year) : t("yearAll"));
    $("btnYearReset").hidden = !on;
    const eraEl = $("eraReadout");
    if (on) {
      const id = eraForYear(state.year);
      eraEl.textContent = `${t("eraNow")}: ${eraText(id, "shortName")}`;
      eraEl.style.color = eraIndex[id].hexColor;
    } else {
      eraEl.textContent = "";
    }
  }

  function setYear(y, opts = {}) {
    const prev = lastYear;
    state.year = Math.min(YEAR_MAX, Math.max(YEAR_MIN, Math.round(y)));
    lastYear = state.year;
    updateYearUi();
    if (!opts.quiet) updateTicker(prev);
    const sig = visibleSignature();
    if (sig !== lastSig || opts.force) {
      lastSig = sig;
      refresh();
      if (selectedLocation && bottomSheet.classList.contains("open")) {
        if (locVisible(selectedLocation)) openBottomSheet(selectedLocation, { keepFocus: true, noFocus: true }); else closeBottomSheet({ silent: true });
      }
    }
    syncUrl();
  }

  function setPlayingUi(on) {
    $("playIcon").style.display = on ? "none" : "";
    $("pauseIcon").style.display = on ? "" : "none";
    $("btnPlay").setAttribute("aria-label", on ? t("pauseLabel") : t("playLabel"));
    $("btnPlay").setAttribute("title", on ? t("pause") : t("play"));
    $("btnPlay").classList.toggle("playing", on);
  }

  function play() {
    if (playing) return;
    closeBottomSheet({ silent: true });
    togglePanel("timelinePanel", false, { quiet: true });
    togglePanel("figuresPanel", false, { quiet: true });
    togglePanel("locationsPanel", false, { quiet: true });
    togglePanel("confessionPanel", false, { quiet: true });
    togglePanel("lineagePanel", false, { quiet: true });
    if (!yearOn() || state.year >= YEAR_MAX) { lastYear = YEAR_MIN - 1; setYear(YEAR_MIN, { force: true }); }
    playing = true;
    setPlayingUi(true);
    // reduced motion: coarse steps, slower, so the map changes calmly
    const step = reducedMotion.matches ? 10 : 1;
    const ms = reducedMotion.matches ? 1400 : 90;
    playTimer = setInterval(() => {
      const next = Math.min(YEAR_MAX, state.year + step);
      setYear(next);
      if (next >= YEAR_MAX) pause();
    }, ms);
  }

  function pause() {
    playing = false;
    clearInterval(playTimer);
    setPlayingUi(false);
  }

  $("btnPlay").addEventListener("click", () => (playing ? pause() : play()));
  slider.addEventListener("input", () => {
    if (playing) pause();
    setYear(parseInt(slider.value, 10));
  });
  $("btnYearReset").addEventListener("click", () => {
    if (playing) pause();
    setYear(YEAR_MAX, { force: true });
    $("playTicker").textContent = "";
    focusEl($("btnPlay"));
  });

  // ============================================================
  // Name toggle
  // ============================================================
  const nameToggle = $("nameToggle");
  const nameLabel = $("nameLabel");
  let nameToggleTimeout;

  $("btnToggleNames").addEventListener("click", () => {
    showHistoricalNames = !showHistoricalNames;
    nameLabel.textContent = showHistoricalNames ? t("showingHistorical") : t("showingModern");
    nameToggle.classList.add("visible");
    clearTimeout(nameToggleTimeout);
    nameToggleTimeout = setTimeout(() => nameToggle.classList.remove("visible"), 2000);
    drawLocations();
  });

  // ============================================================
  // Language switch (in-app)
  // ============================================================
  $("btnLang").addEventListener("click", () => {
    setLang(lang === "en" ? "es" : "en");
    applyTranslations();
    buildTimelinePanel();
    buildFiguresPanel();
    buildConfessionPanel();
    buildLineagePanel();
    buildRegionButtons();
    refresh();
    updateYearUi();
    setPlayingUi(playing);
    buildSearchIndex();
    if ($("searchInput").value) runSearch();
    if (!$("infoOverlay").classList.contains("hidden")) fillInfoModal();
    if (!$("donateOverlay").classList.contains("hidden")) fillDonateModal();
    $("playTicker").textContent = "";
    if (selectedLocation && bottomSheet.classList.contains("open")) openBottomSheet(selectedLocation, { keepFocus: true, noFocus: true });
    writeUrl();
  });

  // ============================================================
  // Share
  // ============================================================
  $("btnShare").addEventListener("click", async () => {
    writeUrl();
    const link = location.href;
    try {
      await navigator.clipboard.writeText(link);
      toast(t("shareCopied"));
    } catch (e) {
      try {
        const ta = document.createElement("textarea");
        ta.value = link; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        toast(ok ? t("shareCopied") : t("shareFailed"));
      } catch (e2) { toast(t("shareFailed")); }
    }
  });

  // ============================================================
  // Search (places, events, people; English and Spanish at once, accent-insensitive)
  // ============================================================
  let searchIndex = [];

  function buildSearchIndex() {
    searchIndex = [];
    locations.forEach((loc) => {
      searchIndex.push({
        type: "place", loc,
        text: fold(`${loc.name} ${loc.modernName} ${loc.region} ${allLocationText(loc.id)}`),
      });
      loc.events.forEach((evt) => {
        searchIndex.push({
          type: "event", loc, evt,
          text: fold(`${evt.title} ${evt.description} ${evt.year} ${evt.figure || ""} ${loc.name} ${allEventText(evt.id)}`),
        });
      });
    });
    figures.forEach((fig) => {
      searchIndex.push({
        type: "person", fig,
        text: fold(`${fig.name} ${fig.role} ${fig.bio} ${fig.years} ${allFigureText(fig.id)}`),
      });
    });
  }

  const labelOf = (item) => item.type === "place" ? locName(item.loc) : item.type === "event" ? evtTitle(item.loc, item.evt) : item.fig.name;
  const subOf = (item) =>
    item.type === "place" ? `${t("typePlace")} · ${locModern(item.loc)}` :
    item.type === "event" ? `${t("typeEvent")} · ${item.evt.year} · ${locName(item.loc)}` :
    `${t("typePerson")} · ${figField(item.fig, "role")}`;

  let results = [];
  let active = -1;
  const input = $("searchInput");
  const resultsEl = $("searchResults");

  function runSearch() {
    const q = fold(input.value).trim();
    if (!q) { closeResults(); return; }
    const terms = q.split(/\s+/);
    const base = { place: 30, person: 20, event: 10 };
    results = searchIndex
      .filter((it) => terms.every((term) => it.text.includes(term)))
      .map((it) => {
        const label = fold(labelOf(it));
        let score = base[it.type];
        if (label.includes(q)) score += 100;
        if (label.startsWith(q)) score += 50;
        return { it, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.it);
    active = results.length ? 0 : -1;
    renderResults();
  }

  function renderResults() {
    resultsEl.classList.remove("hidden");
    input.setAttribute("aria-expanded", "true");
    if (!results.length) {
      resultsEl.innerHTML = `<li class="search-empty" role="presentation">${t("searchNone")}</li>`;
      input.removeAttribute("aria-activedescendant");
      return;
    }
    resultsEl.innerHTML = results.map((it, i) => `
      <li id="sr-${i}" role="option" class="search-item${i === active ? " active" : ""}" aria-selected="${i === active}" data-i="${i}">
        <span class="search-label">${labelOf(it)}</span>
        <span class="search-sub">${subOf(it)}</span>
      </li>`).join("");
    input.setAttribute("aria-activedescendant", `sr-${active}`);
  }

  function closeResults() {
    results = []; active = -1;
    resultsEl.classList.add("hidden");
    resultsEl.innerHTML = "";
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }

  function pickResult(i) {
    const it = results[i];
    if (!it) return;
    closeResults();
    input.value = "";
    if (it.type === "person") {
      const loc = locationOfFigure(it.fig.id);
      if (playing) pause();
      togglePanel("figuresPanel", true, { quiet: true });
      const card = document.querySelector(`.figure-card[data-figure="${it.fig.id}"]`);
      if (card) {
        card.scrollIntoView({ block: "center", behavior: reducedMotion.matches ? "auto" : "smooth" });
        card.classList.add("flash");
        setTimeout(() => card.classList.remove("flash"), 1800);
        focusEl(card);
      }
      if (loc) {
        ensureVisible(loc);
        view.goTo({ center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 8) }, goOpts(600));
      }
    } else {
      selectLocation(it.loc.id, { zoom: true });
    }
  }

  input.addEventListener("input", runSearch);
  input.addEventListener("focus", () => { if (input.value) runSearch(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!results.length) return;
      e.preventDefault();
      active = (active + (e.key === "ArrowDown" ? 1 : -1) + results.length) % results.length;
      renderResults();
      document.getElementById(`sr-${active}`)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      if (active >= 0) { e.preventDefault(); pickResult(active); }
    }
  });
  resultsEl.addEventListener("mousedown", (e) => {
    const li = e.target.closest(".search-item");
    if (li) { e.preventDefault(); pickResult(parseInt(li.dataset.i, 10)); }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-box")) closeResults(); });

  // ============================================================
  // Escape closes the top-most thing: window, search list, panel, then the place card
  // ============================================================
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (openOverlays.length) { closeModal(openOverlays[openOverlays.length - 1]); return; }
    if (!resultsEl.classList.contains("hidden")) { closeResults(); return; }
    const panel = anyPanelOpen();
    if (panel) { togglePanel(panel, false); return; }
    if (bottomSheet.classList.contains("open")) { closeBottomSheet(); return; }
    if (playing) pause();
  });

  // ============================================================
  // Start up
  // ============================================================
  view.when(() => {
    dismissSplash();
    const init = readUrl();
    state.era = init.era;
    state.year = init.year;
    lastYear = init.year;
    chips.forEach((c) => {
      const on = c.dataset.era === String(state.era);
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    lastSig = visibleSignature();
    updateYearUi();
    refresh();
    if (state.era === "all" && !init.loc) goHome(0);
    if (state.era !== "all") {
      const eraLocations = locations.filter(locVisible);
      if (eraLocations.length) zoomToLocations(eraLocations);
    }
    if (init.loc) {
      const loc = locationIndex[init.loc];
      if (loc && locVisible(loc)) {
        openBottomSheet(loc, { keepFocus: true });
        view.goTo({ center: [loc.lng, loc.lat], zoom: 9 }, goOpts(0));
      }
    }
    writeUrl();
  }).catch((err) => {
    console.error("MapView failed:", err);
    showError(lang === "es" ? "El mapa no pudo cargarse." : "Map failed to load.");
    dismissSplash();
  });

  buildTimelinePanel();
  buildFiguresPanel();
  buildConfessionPanel();
  buildLineagePanel();
  buildRegionButtons();
  buildSearchIndex();
  setPlayingUi(false);
}

// ============================================================
// Entry point (last, so every declaration above exists first)
// ============================================================
const rememberedLang = storedLang();
if (rememberedLang) { setLang(rememberedLang); beginApp(); }
else { setTimeout(() => document.querySelector(".lang-btn")?.focus(), 50); }

// Offline support (https only; the map SDK and tiles still come from the network)
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
