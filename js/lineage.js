// ============================================================
// Church families and pastor succession (shown in the Lineage panel)
// Each step is a person or event with an optional place on the map. Dates follow data.js; debated dates are marked.
// ============================================================

export const families = [
  {
    id: "horsleydown",
    en: { title: "Keach's Horsleydown to the Metropolitan Tabernacle", intro: "One congregation, followed through its pastors from the years of persecution to Spurgeon." },
    es: { title: "De Horsleydown de Keach al Tabernáculo Metropolitano", intro: "Una sola congregación, seguida a través de sus pastores desde los años de persecución hasta Spurgeon." },
    steps: [
      { years: "1668–1704", en: "Benjamin Keach", es: "Benjamin Keach", noteEn: "Pastor at Horsleydown; promoted congregational hymn singing.", noteEs: "Pastor en Horsleydown; promovió el canto congregacional de himnos.", place: "horsleydown" },
      { years: "1704–1718", en: "Benjamin Stinton", es: "Benjamin Stinton", noteEn: "Keach's son-in-law and successor.", noteEs: "Yerno y sucesor de Keach." },
      { years: "1719/20–1771", en: "John Gill", es: "John Gill", noteEn: "Theologian; the start of his pastorate is dated 1719 or 1720.", noteEs: "Teólogo; el inicio de su pastorado se data en 1719 o 1720.", place: "horsleydown" },
      { years: "1773–1836", en: "John Rippon", es: "John Rippon", noteEn: "Editor of a widely used hymn collection; the church later moved to New Park Street.", noteEs: "Editor de un himnario muy usado; la iglesia se trasladó después a New Park Street." },
      { years: "1854–1861", en: "Spurgeon at New Park Street", es: "Spurgeon en New Park Street", noteEn: "Called at age nineteen; the congregation outgrew the chapel.", noteEs: "Llamado a los diecinueve años; la congregación desbordó la capilla.", place: "new-park-street" },
      { years: "1861–1892", en: "Metropolitan Tabernacle", es: "Tabernáculo Metropolitano", noteEn: "Spurgeon preached here until his death in 1892.", noteEs: "Spurgeon predicó aquí hasta su muerte en 1892.", place: "metropolitan-tabernacle" },
    ],
  },
  {
    id: "jlj",
    en: { title: "From the Southwark church to the first Particular Baptists", intro: "How a semi-separatist congregation became the seedbed of the Particular Baptists." },
    es: { title: "De la iglesia de Southwark a los primeros Bautistas Particulares", intro: "Cómo una congregación semi-separatista se convirtió en el semillero de los Bautistas Particulares." },
    steps: [
      { years: "1616", en: "Henry Jacob", es: "Henry Jacob", noteEn: "Gathers the Southwark congregation; leaves for Virginia in 1622.", noteEs: "Reúne la congregación de Southwark; parte hacia Virginia en 1622.", place: "southwark-jlj" },
      { years: "1624", en: "John Lathrop", es: "John Lathrop", noteEn: "Leads the church after Jacob.", noteEs: "Dirige la iglesia después de Jacob." },
      { years: "1633", en: "Spilsbury's group separates", es: "Se separa el grupo de Spilsbury", noteEn: "Traditionally the first Particular Baptist congregation; details are debated.", noteEs: "Tradicionalmente la primera congregación Bautista Particular; los detalles se discuten.", place: "southwark-jlj" },
      { years: "1637", en: "Henry Jessey", es: "Henry Jessey", noteEn: "Becomes pastor of the older church.", noteEs: "Se convierte en pastor de la iglesia más antigua." },
      { years: "1644", en: "First London Confession", es: "Primera Confesión de Londres", noteEn: "Seven churches sign it, including Devonshire Square under Kiffin.", noteEs: "La firman siete iglesias, entre ellas Devonshire Square bajo Kiffin.", place: "devonshire-square" },
    ],
  },
  {
    id: "wapping",
    en: { title: "The Wapping church", intro: "A church with a long record, linked by tradition to Spilsbury." },
    es: { title: "La iglesia de Wapping", intro: "Una iglesia con un largo historial, vinculada por la tradición a Spilsbury." },
    steps: [
      { years: "1638", en: "Spilsbury (traditional link)", es: "Spilsbury (vínculo tradicional)", noteEn: "Recent scholarship questions the Spilsbury–Wapping link.", noteEs: "La investigación reciente cuestiona el vínculo entre Spilsbury y Wapping.", place: "wapping" },
      { years: "1677–c. 1702", en: "Hercules Collins", es: "Hercules Collins", noteEn: "Described as the third pastor; imprisoned in Newgate 1683–84.", noteEs: "Descrito como el tercer pastor; encarcelado en Newgate 1683–84.", place: "wapping" },
    ],
  },
  {
    id: "bristol",
    en: { title: "Broadmead and the Bristol Academy", intro: "A church that trained ministers for the whole West Country." },
    es: { title: "Broadmead y la Academia de Bristol", intro: "Una iglesia que formó ministros para todo el oeste de Inglaterra." },
    steps: [
      { years: "1640", en: "Dorothy Hazzard and others found Broadmead", es: "Dorothy Hazzard y otros fundan Broadmead", noteEn: "The first dissenting church in Bristol.", noteEs: "La primera iglesia disidente de Bristol.", place: "broadmead-bristol" },
      { years: "1679", en: "Edward Terrill's deed", es: "La escritura de Edward Terrill", noteEn: "Funds ministerial training.", noteEs: "Financia la formación ministerial.", place: "broadmead-bristol" },
      { years: "1720", en: "Bernard Foskett", es: "Bernard Foskett", noteEn: "Pastor and tutor of the academy.", noteEs: "Pastor y tutor de la academia.", place: "broadmead-bristol" },
      { years: "1743", en: "Benjamin Beddome at Bourton", es: "Benjamin Beddome en Bourton", noteEn: "A Bristol-trained pastor and hymn writer.", noteEs: "Pastor y autor de himnos formado en Bristol.", place: "bourton" },
    ],
  },
  {
    id: "mission",
    en: { title: "The circle behind the missionary society", intro: "Pastors who prayed, wrote and gave until the mission began." },
    es: { title: "El círculo detrás de la sociedad misionera", intro: "Pastores que oraron, escribieron y dieron hasta que comenzó la misión." },
    steps: [
      { years: "1775–1814", en: "John Sutcliff at Olney", es: "John Sutcliff en Olney", noteEn: "Proposed the 1784 prayer call.", noteEs: "Propuso el llamado a la oración de 1784.", place: "olney" },
      { years: "1782–1815", en: "Andrew Fuller at Kettering", es: "Andrew Fuller en Kettering", noteEn: "Author of The Gospel Worthy of All Acceptation.", noteEs: "Autor de The Gospel Worthy of All Acceptation.", place: "kettering" },
      { years: "1792", en: "Baptist Missionary Society", es: "Sociedad Misionera Bautista", noteEn: "Founded at Kettering on 2 October.", noteEs: "Fundada en Kettering el 2 de octubre.", place: "kettering" },
      { years: "1800", en: "William Carey at Serampore", es: "William Carey en Serampore", noteEn: "The first fruit of the mission.", noteEs: "El primer fruto de la misión.", place: "serampore" },
    ],
  },
  {
    id: "atlantic",
    en: { title: "Wales and the Atlantic family", intro: "Welsh and English Baptist streams that carried the Confession to America." },
    es: { title: "Gales y la familia atlántica", intro: "Corrientes bautistas galesas e inglesas que llevaron la Confesión a América." },
    steps: [
      { years: "1649", en: "John Myles at Ilston", es: "John Myles en Ilston", noteEn: "Usually called the first Baptist church in Wales; Olchon claims an earlier date.", noteEs: "Suele llamarse la primera iglesia bautista de Gales; Olchon reclama una fecha anterior.", place: "ilston" },
      { years: "1688", en: "Elias Keach at Pennepek", es: "Elias Keach en Pennepek", noteEn: "A son of Benjamin Keach gathers a church in Pennsylvania.", noteEs: "Un hijo de Benjamin Keach reúne una iglesia en Pensilvania.", place: "pennepek" },
      { years: "1701", en: "The Welsh Tract", es: "El Welsh Tract", noteEn: "A Welsh congregation emigrates to Delaware.", noteEs: "Una congregación galesa emigra a Delaware.", place: "welsh-tract" },
      { years: "1707", en: "Philadelphia Association", es: "Asociación de Filadelfia", noteEn: "The first Baptist association in America.", noteEs: "La primera asociación bautista de América.", place: "philadelphia" },
      { years: "1742", en: "Philadelphia Confession", es: "Confesión de Filadelfia", noteEn: "Follows the 1689 Confession with two added chapters.", noteEs: "Sigue la Confesión de 1689 con dos capítulos añadidos.", place: "philadelphia" },
      { years: "1751", en: "Charleston Association", es: "Asociación de Charleston", noteEn: "The first Baptist association in the South.", noteEs: "La primera asociación bautista del Sur.", place: "charleston" },
    ],
  },
];

// "Then and now": a few places where a congregation or institution is still active.
// Kept short on purpose: check opening times and details with the church before visiting.
export const today = {
  "broadmead-bristol": { en: "Broadmead Baptist Church still meets in Bristol, and Bristol Baptist College continues its work in the city.", es: "La Iglesia Bautista de Broadmead sigue reuniéndose en Bristol, y el Bristol Baptist College continúa su obra en la ciudad." },
  "bunyan-bedford": { en: "Bunyan Meeting, a church descended from Bunyan's congregation, still meets in Bedford and has a museum of his life.", es: "Bunyan Meeting, una iglesia descendiente de la congregación de Bunyan, sigue reuniéndose en Bedford y tiene un museo sobre su vida." },
  "metropolitan-tabernacle": { en: "The Metropolitan Tabernacle still meets at Elephant and Castle, on the site of Spurgeon's church (the building was rebuilt after fire and war damage).", es: "El Tabernáculo Metropolitano sigue reuniéndose en Elephant and Castle, en el lugar de la iglesia de Spurgeon (el edificio fue reconstruido tras un incendio y daños de guerra)." },
  "kettering": { en: "The Carey Mission House (the old Wallis home) is kept as a heritage site, and Fuller Baptist Church continues in Kettering.", es: "La Carey Mission House (la antigua casa de los Wallis) se conserva como sitio patrimonial, y la Iglesia Bautista Fuller continúa en Kettering." },
  "llanwenarth": { en: "Llanwenarth Baptist Church still meets in its 1695 chapel at Govilon.", es: "La Iglesia Bautista de Llanwenarth sigue reuniéndose en su capilla de 1695 en Govilon." },
  "new-park-street": { en: "Spurgeon's College, which grew from the Pastors' College, still trains ministers in London.", es: "Spurgeon's College, surgido del Colegio de Pastores, sigue formando ministros en Londres." },
};
