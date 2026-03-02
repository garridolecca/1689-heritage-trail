// ============================================================
// 1689 Heritage Trail — Application Module
// ArcGIS Maps SDK + Calcite Design System
// ============================================================

import { eras, locations, routes, figures, timeline, eraIndex } from "./data.js";

// ---- ArcGIS Imports ----
const [
  Map,
  MapView,
  GraphicsLayer,
  Graphic,
  Point,
  Polyline,
  SimpleMarkerSymbol,
  SimpleLineSymbol,
  TextSymbol,
  PopupTemplate,
] = await Promise.all([
  import("https://js.arcgis.com/4.31/@arcgis/core/Map.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/views/MapView.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/layers/GraphicsLayer.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/Graphic.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/geometry/Point.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/geometry/Polyline.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/symbols/SimpleMarkerSymbol.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/symbols/SimpleLineSymbol.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/symbols/TextSymbol.js").then((m) => m.default),
  import("https://js.arcgis.com/4.31/@arcgis/core/PopupTemplate.js").then((m) => m.default),
]);

// ---- State ----
let activeEra = "all";

// ---- Layers ----
const routesLayer = new GraphicsLayer({ title: "Routes" });
const labelsLayer = new GraphicsLayer({ title: "Labels" });
const locationsLayer = new GraphicsLayer({ title: "Locations" });
const geoLabelsLayer = new GraphicsLayer({ title: "GeoLabels" });

// ---- Map & View ----
const map = new Map({
  basemap: "dark-gray-vector",
  layers: [geoLabelsLayer, routesLayer, locationsLayer, labelsLayer],
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-1.5, 52.0], // Center of England
  zoom: 6,
  constraints: {
    minZoom: 5,
    maxZoom: 16,
  },
  popup: {
    autoOpenEnabled: false,
  },
  ui: {
    components: ["zoom"],
  },
});

// ---- Marker Sizes ----
const markerSizes = { major: 14, moderate: 10, minor: 7 };

// ---- Build Routes ----
function buildRoutes() {
  routes.forEach((route) => {
    const era = eraIndex[route.era];
    const line = new Graphic({
      geometry: new Polyline({
        paths: [route.path],
        spatialReference: { wkid: 4326 },
      }),
      symbol: new SimpleLineSymbol({
        color: [...era.color, 0.5],
        width: 2.5,
        style: "dash",
      }),
      attributes: { era: route.era },
    });
    routesLayer.add(line);
  });
}

// ---- Build Location Markers ----
function buildLocations() {
  locations.forEach((loc) => {
    // Determine the primary era for coloring
    const primaryEra = eraIndex[loc.eras[0]];
    const size = markerSizes[loc.significance] || 10;

    // Marker
    const marker = new Graphic({
      geometry: new Point({
        longitude: loc.lng,
        latitude: loc.lat,
        spatialReference: { wkid: 4326 },
      }),
      symbol: new SimpleMarkerSymbol({
        style: "circle",
        color: [...primaryEra.color, 0.85],
        size: size,
        outline: {
          color: [255, 255, 255, 0.6],
          width: 1.5,
        },
      }),
      attributes: {
        id: loc.id,
        name: loc.name,
        eras: loc.eras,
      },
    });
    locationsLayer.add(marker);

    // Text label
    const label = new Graphic({
      geometry: new Point({
        longitude: loc.lng,
        latitude: loc.lat,
        spatialReference: { wkid: 4326 },
      }),
      symbol: new TextSymbol({
        text: loc.name.length > 28 ? loc.name.substring(0, 25) + "..." : loc.name,
        color: [237, 224, 212, 0.9],
        font: {
          size: 9,
          family: "Inter, sans-serif",
          weight: "normal",
        },
        haloColor: [26, 17, 25, 0.85],
        haloSize: 1.5,
        yoffset: -(size / 2 + 10),
        horizontalAlignment: "center",
      }),
      attributes: {
        id: loc.id,
        eras: loc.eras,
      },
    });
    labelsLayer.add(label);
  });
}

// ---- Build Geographic Region Labels ----
function buildGeoLabels() {
  const regions = [
    { text: "LONDON", lat: 51.51, lng: -0.08, size: 13 },
    { text: "WALES", lat: 52.2, lng: -3.5, size: 12 },
    { text: "SOUTH WEST", lat: 51.2, lng: -2.8, size: 10 },
    { text: "EAST MIDLANDS", lat: 52.6, lng: -0.9, size: 10 },
    { text: "EAST", lat: 52.1, lng: 0.3, size: 10 },
    { text: "NORTH WEST", lat: 53.5, lng: -2.5, size: 10 },
  ];

  regions.forEach((r) => {
    const label = new Graphic({
      geometry: new Point({
        longitude: r.lng,
        latitude: r.lat,
        spatialReference: { wkid: 4326 },
      }),
      symbol: new TextSymbol({
        text: r.text,
        color: [122, 109, 98, 0.4],
        font: {
          size: r.size,
          family: "Cinzel, serif",
          weight: "bold",
        },
        horizontalAlignment: "center",
      }),
    });
    geoLabelsLayer.add(label);
  });
}

// ---- Era Filtering ----
function filterByEra(era) {
  activeEra = era;

  // Update routes
  routesLayer.graphics.forEach((g) => {
    const eraId = g.attributes?.era;
    if (era === "all") {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.5;
    } else if (eraId === parseInt(era)) {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.7;
    } else {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.08;
    }
  });

  // Update location markers
  locationsLayer.graphics.forEach((g) => {
    const locEras = g.attributes?.eras || [];
    if (era === "all") {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.85;
      g.visible = true;
    } else if (locEras.includes(parseInt(era))) {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 1;
      g.visible = true;
    } else {
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.1;
      g.visible = true;
    }
  });

  // Update labels
  labelsLayer.graphics.forEach((g) => {
    const locEras = g.attributes?.eras || [];
    if (era === "all") {
      g.visible = true;
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 0.9;
    } else if (locEras.includes(parseInt(era))) {
      g.visible = true;
      g.symbol = g.symbol.clone();
      g.symbol.color.a = 1;
    } else {
      g.visible = false;
    }
  });
}

// ---- Bottom Sheet ----
function openBottomSheet(locationId) {
  const loc = locations.find((l) => l.id === locationId);
  if (!loc) return;

  const sheet = document.getElementById("bottomSheet");
  const title = document.getElementById("sheetTitle");
  const subtitle = document.getElementById("sheetSubtitle");
  const content = document.getElementById("sheetContent");

  title.textContent = loc.name;
  subtitle.textContent = `${loc.modernName} — ${loc.region}`;

  // Filter events by active era
  let events = loc.events;
  if (activeEra !== "all") {
    const eraNum = parseInt(activeEra);
    events = events.filter((e) => e.era === eraNum);
  }
  // Sort by year
  events.sort((a, b) => a.year - b.year);

  content.innerHTML = events
    .map((evt) => {
      const era = eraIndex[evt.era];
      return `
      <div class="event-card">
        <div class="event-year" style="color: ${era.hexColor}">${evt.year} — ${era.shortName}</div>
        <div class="event-title">${evt.title}</div>
        <div class="event-description">${evt.description}</div>
        ${evt.figure ? `<span class="event-figure">${evt.figure}</span>` : ""}
      </div>
    `;
    })
    .join("");

  sheet.classList.remove("hidden");
}

function closeBottomSheet() {
  document.getElementById("bottomSheet").classList.add("hidden");
}

// ---- Timeline Panel ----
function buildTimelinePanel() {
  const content = document.getElementById("timelineContent");
  content.innerHTML = timeline
    .map((evt) => {
      const era = eraIndex[evt.era];
      return `
      <div class="timeline-item" data-location="${evt.locationId}">
        <div class="timeline-dot" style="background: ${era.hexColor}"></div>
        <div class="timeline-year" style="color: ${era.hexColor}">${evt.year}</div>
        <div class="timeline-title">${evt.title}</div>
        <div class="timeline-location">${evt.locationName}</div>
      </div>
    `;
    })
    .join("");

  // Click to navigate to location
  content.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", () => {
      const locId = item.dataset.location;
      const loc = locations.find((l) => l.id === locId);
      if (loc) {
        view.goTo(
          { center: [loc.lng, loc.lat], zoom: 12 },
          { duration: 800 }
        );
        openBottomSheet(locId);
        togglePanel("timelinePanel", false);
      }
    });
  });
}

// ---- Figures Panel ----
function buildFiguresPanel() {
  const content = document.getElementById("figuresContent");
  content.innerHTML = figures
    .map(
      (fig) => `
      <div class="figure-card" data-figure="${fig.id}">
        <div class="figure-name">${fig.name}</div>
        <div class="figure-years">${fig.years}</div>
        <div class="figure-role">${fig.role}</div>
        <div class="figure-bio">${fig.bio}</div>
      </div>
    `
    )
    .join("");

  // Click to find first location associated with figure
  content.querySelectorAll(".figure-card").forEach((card) => {
    card.addEventListener("click", () => {
      const figName = card.querySelector(".figure-name").textContent;
      // Find first location with an event mentioning this figure
      const loc = locations.find((l) =>
        l.events.some((e) => e.figure === figName)
      );
      if (loc) {
        view.goTo(
          { center: [loc.lng, loc.lat], zoom: 12 },
          { duration: 800 }
        );
        openBottomSheet(loc.id);
        togglePanel("figuresPanel", false);
      }
    });
  });
}

// ---- Panel Toggle ----
function togglePanel(panelId, show) {
  const panel = document.getElementById(panelId);
  if (show === undefined) {
    show = panel.classList.contains("hidden");
  }
  if (show) {
    // Close other panels first
    document.querySelectorAll(".side-panel").forEach((p) => {
      p.classList.add("hidden");
    });
    panel.classList.remove("hidden");
  } else {
    panel.classList.add("hidden");
  }
}

// ---- Event Handlers ----
function setupEventHandlers() {
  // Era chips
  document.querySelectorAll(".era-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document
        .querySelectorAll(".era-chip")
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const era = chip.dataset.era;
      filterByEra(era);
    });
  });

  // Map click → location marker
  view.on("click", async (event) => {
    const response = await view.hitTest(event, {
      include: [locationsLayer],
    });
    if (response.results.length > 0) {
      const graphic = response.results[0].graphic;
      const locId = graphic.attributes?.id;
      if (locId) {
        openBottomSheet(locId);
        const loc = locations.find((l) => l.id === locId);
        if (loc) {
          view.goTo(
            { center: [loc.lng, loc.lat], zoom: Math.max(view.zoom, 9) },
            { duration: 600 }
          );
        }
      }
    }
  });

  // Cursor pointer on hover
  view.on("pointer-move", async (event) => {
    const response = await view.hitTest(event, {
      include: [locationsLayer],
    });
    view.container.style.cursor =
      response.results.length > 0 ? "pointer" : "default";
  });

  // Bottom sheet close
  document.getElementById("sheetClose").addEventListener("click", closeBottomSheet);

  // Header buttons
  document.getElementById("btnTimeline").addEventListener("click", () => {
    togglePanel("timelinePanel");
  });
  document.getElementById("btnFigures").addEventListener("click", () => {
    togglePanel("figuresPanel");
  });
  document.getElementById("btnAbout").addEventListener("click", () => {
    document.getElementById("aboutOverlay").classList.remove("hidden");
  });

  // About close
  document.getElementById("aboutClose").addEventListener("click", () => {
    document.getElementById("aboutOverlay").classList.add("hidden");
  });

  // Panel close buttons
  document.querySelectorAll(".panel-close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panelId = btn.dataset.panel;
      togglePanel(panelId, false);
    });
  });

  // Close overlay on backdrop click
  document.getElementById("aboutOverlay").addEventListener("click", (e) => {
    if (e.target.id === "aboutOverlay") {
      e.target.classList.add("hidden");
    }
  });
}

// ---- Splash Screen ----
function hideSplash() {
  const splash = document.getElementById("splashScreen");
  splash.classList.add("fade-out");
  setTimeout(() => {
    splash.remove();
  }, 700);
}

// ---- Initialize ----
async function init() {
  buildRoutes();
  buildLocations();
  buildGeoLabels();
  buildTimelinePanel();
  buildFiguresPanel();
  setupEventHandlers();

  // Wait for view to be ready
  await view.when();
  hideSplash();
}

init();
