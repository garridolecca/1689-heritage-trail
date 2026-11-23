// ============================================================
// 1689 Heritage Trail — Internationalization Module
// English / Spanish bilingual support
// ============================================================
import { eras } from "./data.js";
import { eventsEs, figuresEs, eraDescriptionsEs } from "./content-es.js";

export let lang = "en";
const LANG_KEY = "ht-lang";

export function setLang(newLang) {
  lang = newLang === "es" ? "es" : "en";
  document.documentElement.lang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }
}

/** Language from ?lang= first, then the one remembered from the last visit; null on a first visit. */
export function storedLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "en" || q === "es") return q;
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === "en" || s === "es") return s;
  } catch (e) { /* storage unavailable */ }
  return null;
}

const ui = {
  en: {
    appTitle: "1689 Heritage Trail",
    appSubtitle: "Particular Baptist History",
    splashVerse: '"Contend earnestly for the faith which was once for all delivered to the saints."',
    splashVerseRef: "Jude 1:3",
    chipAll: "All Eras",
    chip1: "Origins",
    chip2: "Persecution",
    chip3: "Toleration",
    chip4: "Mission",
    btnTimeline: "Timeline",
    btnFigures: "Figures",
    btnNames: "Names",
    btnSupport: "Support",
    btnLocations: "Places",
    btnScripture: "Sources",
    infoTitle: "About This Map",
    infoLegendTitle: "Four Eras",
    infoFeaturesTitle: "Features",
    infoFeature1: "47 historical places across England, Wales, North America and India",
    infoFeature2: "Click any location to read detailed historical narratives",
    infoFeature3: "Filter by era to explore specific periods",
    infoFeature4: "Navigate between stops with Previous / Next buttons",
    infoFeature5: "Toggle between historical and modern place names",
    infoHowTitle: "How to use this map",
    infoHow1: "Search places, events and people in English or Spanish with the search box under the title bar.",
    infoHow2: "Press Play on the year bar at the bottom to watch the heritage unfold from 1612 to 1892, or drag the slider to any year. Locations, routes and events appear as their dates are reached.",
    infoHow3: "Use the Share button to copy a link to what you are looking at (language, era, place and year are kept in the link).",
    infoHow4: "Prefer the keyboard? Open Places for a list of every location, press Tab to move, Enter to open an item, and Escape to close any panel or window.",
    infoHow5: "Your language is remembered, and you can change it any time with the ES / EN button.",
    infoHow6: "Open Confession to read a short guide to each of the 32 chapters of the 1689 Confession, and Lineage to follow church families and their pastors.",
    infoHow7: "In Places you can jump to Britain, North America or India, download the places on screen as GeoJSON, or print an itinerary.",
    infoSourcesNote: "Historical details were checked against Wikipedia and published sources; where a point is debated or unverified, the card says so and names its source.",
    infoVerse: '"Remember those who led you, who spoke the word of God to you; and considering the result of their conduct, imitate their faith." — Hebrews 13:7',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to preserve and share the rich heritage of the Particular Baptists. If you find it helpful, consider supporting the project.",
    donateButton: "Donate",
    donateQr: "Or scan this QR code (Venmo):",
    donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Modern:",
    sheetRegionLabel: "Region:",
    eventSingular: "event",
    eventPlural: "events",
    sourcePanelTitle: "Historical Sources",
    sourceSearchPlaceholder: "Search sources...",
    showingHistorical: "Showing: Historical Names",
    showingModern: "Showing: Modern Names",
    previous: "Previous",
    next: "Next",
    timelineTitle: "Historical Timeline",
    figuresTitle: "Key Figures",
    locationsTitle: "All Places",
    searchPlaceholder: "Search places, events, people…",
    btnConfession: "Confession",
    confessionTitle: "The 1689 Confession",
    chapterWord: "Chapter",
    wcfLabel: "Westminster 1646",
    wcfNone: "no matching chapter",
    savoyLabel: "Savoy 1658",
    savoySame: "same number",
    refsLabel: "Representative Scripture texts (open in Logos)",
    cmpLabel: "Compared with Westminster and Savoy",
    placesLabel: "On the map",
    fullTextLabel: "Full texts",
    fullText1689: "1689 Confession",
    fullTextWcf: "Westminster Confession",
    fullTextSavoy: "Savoy Declaration",
    btnLineage: "Lineage",
    lineageTitle: "Church Families",
    lineageNote: "Pastors and congregations followed through time. Select a place name to open it on the map. Debated dates are marked in the notes.",
    todayLabel: "Today",
    todayNote: "Check details with the church or site before visiting.",
    regionUK: "Britain",
    regionAmerica: "North America",
    regionIndia: "India",
    regionAll: "Everywhere",
    exportGeojson: "GeoJSON",
    exportPrint: "Print itinerary",
    exportGeojsonTip: "Download the places currently shown as a GeoJSON file",
    printTitle: "1689 Heritage Trail: itinerary",
    printNote: "Stops in the order shown in the app, for the current filters.",
    skipLink: "Skip to the map",
    stopWord: "Stop",
    searchLabel: "Search places, events and people",
    searchNone: "No matches",
    searchResultsLabel: "Search results",
    typePlace: "Place",
    typeEvent: "Event",
    typePerson: "Person",
    share: "Share",
    shareLabel: "Copy a link to this view",
    shareCopied: "Link copied",
    shareFailed: "Could not copy; the address bar has the link",
    play: "Play",
    pause: "Pause",
    playLabel: "Play the timeline",
    pauseLabel: "Pause the timeline",
    yearSliderLabel: "Year, from 1612 to 1892",
    yearAll: "All years",
    yearReset: "Show all years",
    eraNow: "Era",
    noEventsYet: "Nothing has happened here yet in this year.",
    sourceLabel: "Source note:",
    infoLabel: "About this map and how to use it",
    langLabel: "Switch language to Spanish",
    closeLabel: "Close",
    mapLabel: "Map of Particular Baptist heritage sites in England and Wales. A list of all places is under the Places button.",
    listOpen: "Open",
    stopOf: "of",
    dialogOpened: "opened",
  },
  es: {
    appTitle: "Ruta del Patrimonio 1689",
    appSubtitle: "Historia Bautista Particular",
    splashVerse: '"Contended ardientemente por la fe que una vez fue entregada a los santos."',
    splashVerseRef: "Judas 1:3",
    chipAll: "Todas las Eras",
    chip1: "Orígenes",
    chip2: "Persecución",
    chip3: "Tolerancia",
    chip4: "Misión",
    btnTimeline: "Cronología",
    btnFigures: "Figuras",
    btnNames: "Nombres",
    btnSupport: "Apoya",
    btnLocations: "Lugares",
    btnScripture: "Fuentes",
    infoTitle: "Sobre Este Mapa",
    infoLegendTitle: "Cuatro Eras",
    infoFeaturesTitle: "Características",
    infoFeature1: "47 lugares históricos en Inglaterra, Gales, Norteamérica e India",
    infoFeature2: "Haga clic en cualquier ubicación para leer narrativas históricas detalladas",
    infoFeature3: "Filtre por era para explorar períodos específicos",
    infoFeature4: "Navegue entre paradas con los botones Anterior / Siguiente",
    infoFeature5: "Alterne entre nombres históricos y modernos",
    infoHowTitle: "Cómo usar este mapa",
    infoHow1: "Busque lugares, acontecimientos y personas en inglés o en español con el cuadro de búsqueda bajo la barra de título.",
    infoHow2: "Pulse Reproducir en la barra de años de abajo para ver cómo se desarrolla la herencia desde 1612 hasta 1892, o arrastre el control a cualquier año. Los lugares, las rutas y los acontecimientos aparecen al llegar a su fecha.",
    infoHow3: "Use el botón Compartir para copiar un enlace a lo que está viendo (el idioma, la era, el lugar y el año se guardan en el enlace).",
    infoHow4: "¿Prefiere el teclado? Abra Lugares para ver una lista de todas las ubicaciones, use Tab para moverse, Intro para abrir un elemento y Escape para cerrar cualquier panel o ventana.",
    infoHow5: "Se recuerda su idioma, y puede cambiarlo en cualquier momento con el botón ES / EN.",
    infoHow6: "Abra Confesión para leer una breve guía de cada uno de los 32 capítulos de la Confesión de 1689, y Linaje para seguir a las familias de iglesias y sus pastores.",
    infoHow7: "En Lugares puede saltar a Gran Bretaña, Norteamérica o la India, descargar los lugares en pantalla como GeoJSON o imprimir un itinerario.",
    infoSourcesNote: "Los datos históricos se contrastaron con Wikipedia y con fuentes publicadas; cuando un punto es debatido o no está verificado, la tarjeta lo indica y nombra su fuente.",
    infoVerse: '"Acordaos de vuestros pastores, que os hablaron la palabra de Dios; considerad cuál haya sido el resultado de su conducta, e imitad su fe." — Hebreos 13:7',
    donateTitle: "Apoya Este Proyecto",
    donateText: "Este mapa interactivo fue creado para preservar y compartir la rica herencia de los Bautistas Particulares. Si lo encuentra útil, considere apoyar el proyecto.",
    donateButton: "Donar",
    donateQr: "O escanea este código QR (Venmo):",
    donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Moderno:",
    sheetRegionLabel: "Región:",
    eventSingular: "evento",
    eventPlural: "eventos",
    sourcePanelTitle: "Fuentes Históricas",
    sourceSearchPlaceholder: "Buscar fuentes...",
    showingHistorical: "Mostrando: Nombres Históricos",
    showingModern: "Mostrando: Nombres Modernos",
    previous: "Anterior",
    next: "Siguiente",
    timelineTitle: "Cronología Histórica",
    figuresTitle: "Figuras Clave",
    locationsTitle: "Todos los Lugares",
    searchPlaceholder: "Buscar lugares, hechos, personas…",
    btnConfession: "Confesión",
    confessionTitle: "La Confesión de 1689",
    chapterWord: "Capítulo",
    wcfLabel: "Westminster 1646",
    wcfNone: "sin capítulo equivalente",
    savoyLabel: "Savoy 1658",
    savoySame: "mismo número",
    refsLabel: "Textos bíblicos representativos (abrir en Logos)",
    cmpLabel: "Comparación con Westminster y Savoy",
    placesLabel: "En el mapa",
    fullTextLabel: "Textos completos",
    fullText1689: "Confesión de 1689",
    fullTextWcf: "Confesión de Westminster",
    fullTextSavoy: "Declaración de Savoy",
    btnLineage: "Linaje",
    lineageTitle: "Familias de iglesias",
    lineageNote: "Pastores y congregaciones seguidos a lo largo del tiempo. Seleccione el nombre de un lugar para abrirlo en el mapa. Las fechas discutidas se indican en las notas.",
    todayLabel: "Hoy",
    todayNote: "Confirme los detalles con la iglesia o el sitio antes de visitarlo.",
    regionUK: "Gran Bretaña",
    regionAmerica: "Norteamérica",
    regionIndia: "India",
    regionAll: "Todo",
    exportGeojson: "GeoJSON",
    exportPrint: "Imprimir itinerario",
    exportGeojsonTip: "Descargar los lugares que se muestran como archivo GeoJSON",
    printTitle: "Ruta del Patrimonio 1689: itinerario",
    printNote: "Paradas en el orden que muestra la aplicación, según los filtros actuales.",
    skipLink: "Ir al mapa",
    stopWord: "Parada",
    searchLabel: "Buscar lugares, acontecimientos y personas",
    searchNone: "Sin resultados",
    searchResultsLabel: "Resultados de la búsqueda",
    typePlace: "Lugar",
    typeEvent: "Evento",
    typePerson: "Persona",
    share: "Compartir",
    shareLabel: "Copiar un enlace a esta vista",
    shareCopied: "Enlace copiado",
    shareFailed: "No se pudo copiar; el enlace está en la barra de direcciones",
    play: "Reproducir",
    pause: "Pausa",
    playLabel: "Reproducir la cronología",
    pauseLabel: "Pausar la cronología",
    yearSliderLabel: "Año, de 1612 a 1892",
    yearAll: "Todos los años",
    yearReset: "Mostrar todos los años",
    eraNow: "Era",
    noEventsYet: "Todavía no ha ocurrido nada aquí en este año.",
    sourceLabel: "Nota de fuente:",
    infoLabel: "Acerca de este mapa y cómo usarlo",
    langLabel: "Cambiar el idioma a inglés",
    closeLabel: "Cerrar",
    mapLabel: "Mapa de los lugares del patrimonio Bautista Particular en Inglaterra y Gales. Una lista de todos los lugares está bajo el botón Lugares.",
    listOpen: "Abrir",
    stopOf: "de",
    dialogOpened: "abierto",
  },
};

export function t(key) {
  return ui[lang]?.[key] || ui.en[key] || key;
}

// Era translations (English comes straight from data.js)
const eraTranslationsEs = {
  1: { name: "Orígenes y Primeras Iglesias", shortName: "Orígenes", dateRange: "1612–1644" },
  2: { name: "Confesión y Persecución", shortName: "Persecución", dateRange: "1644–1689" },
  3: { name: "Tolerancia y Crecimiento", shortName: "Tolerancia", dateRange: "1689–1792" },
  4: { name: "Misión y Avivamiento", shortName: "Misión", dateRange: "1792–1892" },
};

export function eraText(eraId, field) {
  if (lang === "es") {
    if (field === "description") return eraDescriptionsEs[eraId] || "";
    return eraTranslationsEs[eraId]?.[field] || "";
  }
  return eras.find((e) => e.id === eraId)?.[field] || "";
}

// Location name translations
const locationTranslations = {
  es: {
    "spitalfields": { name: "Spitalfields", modernName: "Spitalfields, Londres", region: "Londres" },
    "southwark-jlj": { name: "Southwark — Iglesia Jacob-Lathrop-Jessey", modernName: "Southwark, Londres", region: "Londres" },
    "wapping": { name: "Wapping — Old Gravel Lane", modernName: "Wapping, Londres", region: "Londres" },
    "devonshire-square": { name: "Iglesia de Devonshire Square", modernName: "Devonshire Square, Londres", region: "Londres" },
    "great-st-helens": { name: "Great St Helen's, Bishopsgate", modernName: "Bishopsgate, Londres", region: "Londres" },
    "broadmead-bristol": { name: "Iglesia Bautista de Broadmead", modernName: "Bristol", region: "Suroeste" },
    "olchon-valley": { name: "Valle de Olchon", modernName: "Frontera Herefordshire/Gales", region: "Frontera con Gales" },
    "hill-cliffe": { name: "Capilla Bautista de Hill Cliffe", modernName: "Appleton, cerca de Warrington, Cheshire", region: "Noroeste" },
    "petty-france": { name: "Casa de Reunión Petty France", modernName: "Bishopsgate Without, Londres", region: "Londres" },
    "horsleydown": { name: "Horsleydown — Pasaje Goat Yard", modernName: "Southwark, Londres", region: "Londres" },
    "bunyan-bedford": { name: "Reunión de Bunyan, Bedford", modernName: "Bedford, Bedfordshire", region: "Este" },
    "newgate-prison": { name: "Prisión de Newgate", modernName: "Ciudad de Londres", region: "Londres" },
    "aylesbury": { name: "Plaza del Mercado de Aylesbury", modernName: "Aylesbury, Buckinghamshire", region: "Sureste" },
    "broken-wharf": { name: "Broken Wharf, Thames Street", modernName: "Ciudad de Londres", region: "Londres" },
    "llanwenarth": { name: "Capilla Bautista de Llanwenarth", modernName: "Govilon, Monmouthshire, Gales", region: "Gales" },
    "hitchin": { name: "Subcongregación de Hitchin", modernName: "Hitchin, Hertfordshire", region: "Este" },
    "westminster": { name: "Westminster — Parlamento", modernName: "Westminster, Londres", region: "Londres" },
    "london-assembly": { name: "Asamblea General de 1689", modernName: "Ciudad de Londres", region: "Londres" },
    "bunhill-fields": { name: "Bunhill Fields", modernName: "City Road, Londres", region: "Londres" },
    "keachs-winslow": { name: "Casa de Reunión de Keach", modernName: "Winslow, Buckinghamshire", region: "Sureste" },
    "tewkesbury": { name: "Antigua Capilla Bautista de Tewkesbury", modernName: "Tewkesbury, Gloucestershire", region: "Suroeste" },
    "particular-baptist-fund": { name: "Fondo Bautista Particular", modernName: "Ciudad de Londres", region: "Londres" },
    "abingdon": { name: "Asociación de Abingdon", modernName: "Abingdon, Berkshire", region: "Sureste" },
    "abergavenny": { name: "Abergavenny", modernName: "Abergavenny, Monmouthshire, Gales", region: "Gales" },
    "kettering": { name: "Kettering — Casa Misión Carey", modernName: "Kettering, Northamptonshire", region: "Midlands del Este" },
    "leicester": { name: "Iglesia Bautista de Harvey Lane", modernName: "Leicester", region: "Midlands del Este" },
    "paulerspury": { name: "Paulerspury — Lugar de Nacimiento de Carey", modernName: "Paulerspury, Northamptonshire", region: "Midlands del Este" },
    "kelvedon": { name: "Kelvedon — Lugar de Nacimiento de Spurgeon", modernName: "Kelvedon, Essex", region: "Este" },
    "waterbeach": { name: "Capilla Bautista de Waterbeach", modernName: "Waterbeach, Cambridgeshire", region: "Este" },
    "new-park-street": { name: "Capilla de New Park Street", modernName: "Southwark, Londres", region: "Londres" },
    "metropolitan-tabernacle": { name: "Tabernáculo Metropolitano", modernName: "Elephant and Castle, Londres", region: "Londres" },
    "elstow": { name: "Elstow — Lugar de Nacimiento de Bunyan", modernName: "Elstow, Bedfordshire", region: "Este" },
    "stoke-hammond": { name: "Stoke Hammond", modernName: "Stoke Hammond, Buckinghamshire", region: "Sureste" },
    "cawkwell": { name: "Cawkwell — Lugar de Nacimiento de Knollys", modernName: "Cawkwell, Lincolnshire", region: "Midlands del Este" },
    "knocklas": { name: "Knucklas — Vavasor Powell", modernName: "Knucklas, Radnorshire, Gales", region: "Gales" },
    "maze-pond": { name: "Capilla Bautista de Maze Pond", modernName: "Southwark, Londres", region: "Londres" },
    "soham": { name: "Soham — Ministerio Temprano de Fuller", modernName: "Soham, Cambridgeshire", region: "Este" },
    "colchester": { name: "Colchester — Conversión de Spurgeon", modernName: "Colchester, Essex", region: "Este" },
    "ilston": { name: "Ilston — Iglesia de John Myles", modernName: "Ilston, Gower, Swansea, Gales", region: "Gales" },
    "little-prescot": { name: "Capilla de Little Prescot Street", modernName: "Goodman's Fields, Whitechapel, Londres", region: "Londres" },
    "bourton": { name: "Iglesia Bautista de Bourton-on-the-Water", modernName: "Bourton-on-the-Water, Gloucestershire", region: "Suroeste" },
    "olney": { name: "Iglesia Bautista de Olney", modernName: "Olney, Buckinghamshire", region: "Sureste" },
    "pennepek": { name: "Iglesia Bautista de Pennepek (Lower Dublin)", modernName: "Lower Dublin, Filadelfia, Pensilvania, EE. UU.", region: "Norteamérica" },
    "welsh-tract": { name: "Iglesia Bautista de Welsh Tract", modernName: "Pencader Hundred, cerca de Newark, Delaware, EE. UU.", region: "Norteamérica" },
    "philadelphia": { name: "Asociación Bautista de Filadelfia", modernName: "Filadelfia, Pensilvania, EE. UU.", region: "Norteamérica" },
    "charleston": { name: "Asociación Bautista de Charleston", modernName: "Charleston, Carolina del Sur, EE. UU.", region: "Norteamérica" },
    "serampore": { name: "Misión de Serampore", modernName: "Serampore, Bengala Occidental, India", region: "India" },
  },
};

export function locationText(locId, field) {
  return locationTranslations[lang]?.[locId]?.[field] || null;
}

/** Spanish title / description / source for an event, or null in English (callers fall back to data.js). */
export function eventText(evtId, field) {
  if (lang !== "es") return null;
  return eventsEs[evtId]?.[field] || null;
}

/** Spanish years / role / bio for a figure, or null in English. */
export function figureText(figId, field) {
  if (lang !== "es") return null;
  return figuresEs[figId]?.[field] || null;
}

/** Both languages' text, used to search across English and Spanish at once. */
export function allLocationText(locId) {
  const es = locationTranslations.es[locId];
  return es ? `${es.name} ${es.modernName} ${es.region}` : "";
}
export function allEventText(evtId) {
  const es = eventsEs[evtId];
  return es ? `${es.title} ${es.description}` : "";
}
export function allFigureText(figId) {
  const es = figuresEs[figId];
  return es ? `${es.role} ${es.bio}` : "";
}
