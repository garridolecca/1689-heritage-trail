// ============================================================
// 1689 Heritage Trail — Internationalization Module
// English / Spanish bilingual support
// ============================================================

export let lang = "en";

export function setLang(newLang) {
  lang = newLang;
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
    btnScripture: "Sources",
    infoTitle: "About This Map",
    infoLegendTitle: "Four Eras",
    infoFeaturesTitle: "Features",
    infoFeature1: "35+ historical locations across England and Wales",
    infoFeature2: "Click any location to read detailed historical narratives",
    infoFeature3: "Filter by era to explore specific periods",
    infoFeature4: "Navigate between stops with Previous / Next buttons",
    infoFeature5: "Toggle between historical and modern place names",
    infoVerse: '"Remember those who led you, who spoke the word of God to you; and considering the result of their conduct, imitate their faith." — Hebrews 13:7',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to preserve and share the rich heritage of the Particular Baptists. If you find it helpful, consider supporting the project.",
    donateButton: "Donate",
    donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Modern:",
    sheetRegionLabel: "Region:",
    eventSingular: "event",
    eventPlural: "events",
    sourcePanelTitle: "Historical Sources",
    sourceSearchPlaceholder: "Search sources...",
    showingHistorical: "Showing: Historical Names",
    showingModern: "Showing: Modern Names",
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
    btnScripture: "Fuentes",
    infoTitle: "Sobre Este Mapa",
    infoLegendTitle: "Cuatro Eras",
    infoFeaturesTitle: "Características",
    infoFeature1: "Más de 35 ubicaciones históricas en Inglaterra y Gales",
    infoFeature2: "Haga clic en cualquier ubicación para leer narrativas históricas detalladas",
    infoFeature3: "Filtre por era para explorar períodos específicos",
    infoFeature4: "Navegue entre paradas con los botones Anterior / Siguiente",
    infoFeature5: "Alterne entre nombres históricos y modernos",
    infoVerse: '"Acordaos de vuestros pastores, que os hablaron la palabra de Dios; considerad cuál haya sido el resultado de su conducta, e imitad su fe." — Hebreos 13:7',
    donateTitle: "Apoya Este Proyecto",
    donateText: "Este mapa interactivo fue creado para preservar y compartir la rica herencia de los Bautistas Particulares. Si lo encuentra útil, considere apoyar el proyecto.",
    donateButton: "Donar",
    donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Moderno:",
    sheetRegionLabel: "Región:",
    eventSingular: "evento",
    eventPlural: "eventos",
    sourcePanelTitle: "Fuentes Históricas",
    sourceSearchPlaceholder: "Buscar fuentes...",
    showingHistorical: "Mostrando: Nombres Históricos",
    showingModern: "Mostrando: Nombres Modernos",
  },
};

export function t(key) {
  return ui[lang]?.[key] || ui.en[key] || key;
}

// Era translations
const eraTranslations = {
  en: {
    1: { name: "Origins & First Churches", shortName: "Origins", dateRange: "1612–1644", description: "From the first Baptist church on English soil to the signing of the First London Confession of Faith." },
    2: { name: "Confession & Persecution", shortName: "Persecution", dateRange: "1644–1689", description: "The era of the Clarendon Code — Baptists are driven underground while the Second London Confession is secretly drafted." },
    3: { name: "Toleration & Growth", shortName: "Toleration", dateRange: "1689–1792", description: "The Toleration Act brings freedom. The 1689 Confession is publicly adopted by over 100 churches." },
    4: { name: "Mission & Revival", shortName: "Mission", dateRange: "1792–1892", description: "Andrew Fuller breaks the hyper-Calvinist deadlock. William Carey sails for India. Spurgeon fills the Metropolitan Tabernacle." },
  },
  es: {
    1: { name: "Orígenes y Primeras Iglesias", shortName: "Orígenes", dateRange: "1612–1644", description: "Desde la primera iglesia bautista en suelo inglés hasta la firma de la Primera Confesión de Londres." },
    2: { name: "Confesión y Persecución", shortName: "Persecución", dateRange: "1644–1689", description: "La era del Código Clarendon — los bautistas se ven obligados a la clandestinidad mientras se redacta en secreto la Segunda Confesión de Londres." },
    3: { name: "Tolerancia y Crecimiento", shortName: "Tolerancia", dateRange: "1689–1792", description: "El Acta de Tolerancia trae libertad. La Confesión de 1689 es adoptada públicamente por más de 100 iglesias." },
    4: { name: "Misión y Avivamiento", shortName: "Misión", dateRange: "1792–1892", description: "Andrew Fuller rompe el callejón sin salida del hiper-calvinismo. William Carey zarpa hacia la India. Spurgeon llena el Tabernáculo Metropolitano." },
  },
};

export function eraText(eraId, field) {
  return eraTranslations[lang]?.[eraId]?.[field] || eraTranslations.en[eraId]?.[field] || "";
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
    "hill-cliffe": { name: "Capilla Bautista de Hill Cliffe", modernName: "Cerca de Warrington, Cheshire", region: "Noroeste" },
    "petty-france": { name: "Casa de Reunión Petty France", modernName: "Bishopsgate Without, Londres", region: "Londres" },
    "horsleydown": { name: "Horsleydown — Pasaje Goat Yard", modernName: "Southwark, Londres", region: "Londres" },
    "bunyan-bedford": { name: "Reunión de Bunyan, Bedford", modernName: "Bedford, Bedfordshire", region: "Este" },
    "newgate-prison": { name: "Prisión de Newgate", modernName: "Ciudad de Londres", region: "Londres" },
    "aylesbury": { name: "Plaza del Mercado de Aylesbury", modernName: "Aylesbury, Buckinghamshire", region: "Sureste" },
    "broken-wharf": { name: "Broken Wharf, Thames Street", modernName: "Ciudad de Londres", region: "Londres" },
    "llanwenarth": { name: "Capilla Bautista de Llanwenarth", modernName: "Govilon, Monmouthshire, Gales", region: "Gales" },
    "hitchin": { name: "Sub-congregación de Hitchin", modernName: "Hitchin, Hertfordshire", region: "Este" },
    "westminster": { name: "Westminster — Parlamento", modernName: "Westminster, Londres", region: "Londres" },
    "london-assembly": { name: "Asamblea General de 1689", modernName: "Ciudad de Londres", region: "Londres" },
    "bunhill-fields": { name: "Bunhill Fields", modernName: "City Road, Londres", region: "Londres" },
    "keachs-winslow": { name: "Casa de Reunión de Keach", modernName: "Winslow, Buckinghamshire", region: "Sureste" },
    "tewkesbury": { name: "Antigua Capilla Bautista de Tewkesbury", modernName: "Tewkesbury, Gloucestershire", region: "Suroeste" },
    "particular-baptist-fund": { name: "Fondo Bautista Particular", modernName: "Ciudad de Londres", region: "Londres" },
    "abingdon": { name: "Asociación de Abingdon", modernName: "Abingdon, Berkshire", region: "Sureste" },
    "abergavenny": { name: "Abergavenny", modernName: "Abergavenny, Monmouthshire, Gales", region: "Gales" },
    "kettering": { name: "Kettering — Casa de Misión Carey", modernName: "Kettering, Northamptonshire", region: "Midlands del Este" },
    "leicester": { name: "Iglesia Bautista de Harvey Lane", modernName: "Leicester", region: "Midlands del Este" },
    "paulerspury": { name: "Paulerspury — Lugar de Nacimiento de Carey", modernName: "Paulerspury, Northamptonshire", region: "Midlands del Este" },
    "kelvedon": { name: "Kelvedon — Lugar de Nacimiento de Spurgeon", modernName: "Kelvedon, Essex", region: "Este" },
    "waterbeach": { name: "Capilla Bautista de Waterbeach", modernName: "Waterbeach, Cambridgeshire", region: "Este" },
    "new-park-street": { name: "Capilla de New Park Street", modernName: "Southwark, Londres", region: "Londres" },
    "metropolitan-tabernacle": { name: "Tabernáculo Metropolitano", modernName: "Elephant and Castle, Londres", region: "Londres" },
    "elstow": { name: "Elstow — Lugar de Nacimiento de Bunyan", modernName: "Elstow, Bedfordshire", region: "Este" },
    "stoke-hammond": { name: "Stoke Hammond", modernName: "Stoke Hammond, Buckinghamshire", region: "Sureste" },
    "cawkwell": { name: "Cawkwell — Lugar de Nacimiento de Knollys", modernName: "Cawkwell, Lincolnshire", region: "Midlands del Este" },
    "knocklas": { name: "Knocklas — Vavasor Powell", modernName: "Knocklas, Radnorshire, Gales", region: "Gales" },
    "maze-pond": { name: "Capilla Bautista de Maze Pond", modernName: "Southwark, Londres", region: "Londres" },
    "soham": { name: "Soham — Ministerio Temprano de Fuller", modernName: "Soham, Cambridgeshire", region: "Este" },
    "colchester": { name: "Colchester — Conversión de Spurgeon", modernName: "Colchester, Essex", region: "Este" },
  },
};

export function locationText(locId, field) {
  return locationTranslations[lang]?.[locId]?.[field] || null;
}

// Event translations for Spanish
const eventTranslations = {
  es: {
    "spitalfields": {
      1: { title: "Primera Iglesia Bautista en Inglaterra", description: "Thomas Helwys establece la primera iglesia bautista en suelo inglés — una congregación Bautista General. Helwys había regresado de Ámsterdam. Más tarde es encarcelado en Newgate por sus escritos abogando por la libertad religiosa, donde muere alrededor de 1616." },
    },
    "southwark-jlj": {
      1616: { title: "Iglesia Independiente de Henry Jacob", description: "Henry Jacob reúne una congregación independiente semi-separatista en Southwark — la iglesia Jacob-Lathrop-Jessey (JLJ). Esta congregación se convierte en el semillero del cual emergerán los Bautistas Particulares." },
      1633: { title: "Primera Separación Bautista Particular", description: "Un grupo dentro de la iglesia JLJ, convencido del bautismo de creyentes, se separa para formar lo que tradicionalmente se considera la primera congregación Bautista Particular." },
    },
  },
};

export function eventText(locId, year, field) {
  return eventTranslations[lang]?.[locId]?.[year]?.[field] || null;
}
