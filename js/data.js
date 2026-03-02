// ============================================================
// 1689 Heritage Trail — Historical Data Module
// Particular Baptist Heritage in England (1612–1892)
// ============================================================

export const eras = [
  {
    id: 1,
    name: "Origins & First Churches",
    shortName: "Origins",
    dateRange: "1612–1644",
    color: [201, 168, 76],
    hexColor: "#C9A84C",
    description:
      "From the first Baptist church on English soil to the signing of the First London Confession of Faith. The Particular Baptists emerge from the Jacob-Lathrop-Jessey church in Southwark, affirming believer's baptism by immersion and the doctrines of grace.",
    keyTheme: "Emergence of Particular Baptist identity",
  },
  {
    id: 2,
    name: "Confession & Persecution",
    shortName: "Persecution",
    dateRange: "1644–1689",
    color: [138, 79, 125],
    hexColor: "#8A4F7D",
    description:
      "The era of the Clarendon Code — the Act of Uniformity, Conventicle Acts, and Five Mile Act drive Baptists underground. Despite fierce persecution, the Second London Baptist Confession is secretly drafted in 1677 by Nehemiah Coxe and William Collins.",
    keyTheme: "Suffering and confessional identity",
  },
  {
    id: 3,
    name: "Toleration & Growth",
    shortName: "Toleration",
    dateRange: "1689–1792",
    color: [86, 130, 89],
    hexColor: "#568259",
    description:
      "The Toleration Act of 1689 brings freedom of worship. The 1689 Confession is publicly adopted by over 100 churches. New meeting houses are built, associations flourish, and the Particular Baptist Fund is established. Yet hyper-Calvinism begins to stifle evangelism.",
    keyTheme: "Public confession and institutional growth",
  },
  {
    id: 4,
    name: "Mission & Revival",
    shortName: "Mission",
    dateRange: "1792–1892",
    color: [163, 75, 75],
    hexColor: "#A34B4B",
    description:
      "Andrew Fuller's theology breaks the hyper-Calvinist deadlock. William Carey sails for India. Spurgeon fills the Metropolitan Tabernacle with 6,000 hearers. But the Downgrade Controversy signals theological drift in the Baptist Union.",
    keyTheme: "Global mission and the prince of preachers",
  },
];

export const locations = [
  // ===== ERA 1: Origins & First Churches (1612-1644) =====
  {
    id: "spitalfields",
    name: "Spitalfields",
    modernName: "Spitalfields, London",
    region: "London",
    lat: 51.52,
    lng: -0.075,
    significance: "major",
    eras: [1],
    events: [
      {
        era: 1,
        order: 1,
        year: 1612,
        title: "First Baptist Church in England",
        description:
          "Thomas Helwys establishes the first Baptist church on English soil — a General Baptist congregation. Helwys had returned from Amsterdam, where he had been part of John Smyth's exiled congregation. He is later imprisoned in Newgate for his writings advocating religious liberty, where he dies around 1616.",
        figure: "Thomas Helwys",
      },
    ],
  },
  {
    id: "southwark-jlj",
    name: "Southwark — Jacob-Lathrop-Jessey Church",
    modernName: "Southwark, London",
    region: "London",
    lat: 51.505,
    lng: -0.09,
    significance: "major",
    eras: [1, 2],
    events: [
      {
        era: 1,
        order: 2,
        year: 1616,
        title: "Henry Jacob's Independent Church",
        description:
          "Henry Jacob gathers a semi-separatist independent congregation in Southwark — the Jacob-Lathrop-Jessey (JLJ) church. This congregation becomes the seedbed from which the Particular Baptists will emerge. After Jacob, leadership passes to John Lathrop (1624) and then Henry Jessey (1637).",
        figure: "Henry Jacob",
      },
      {
        era: 1,
        order: 5,
        year: 1633,
        title: "First Particular Baptist Separation",
        description:
          "A group within the JLJ church, convinced of believer's baptism, separates to form what is traditionally considered the first Particular Baptist congregation. They reject infant baptism while holding to Calvinistic soteriology — distinguishing them from the Arminian General Baptists.",
        figure: "John Spilsbury",
      },
    ],
  },
  {
    id: "wapping",
    name: "Wapping — Old Gravel Lane",
    modernName: "Wapping, London",
    region: "London",
    lat: 51.51,
    lng: -0.058,
    significance: "major",
    eras: [1, 2],
    events: [
      {
        era: 1,
        order: 6,
        year: 1638,
        title: "Spilsbury's Particular Baptist Church",
        description:
          "John Spilsbury forms a clearly Particular Baptist congregation practising believer's baptism by immersion at Old Gravel Lane, Wapping. This church becomes one of the seven signatories of the 1644 First London Confession. Recent scholarship notes the origins may be murkier than traditionally supposed.",
        figure: "John Spilsbury",
      },
      {
        era: 2,
        order: 8,
        year: 1677,
        title: "Hercules Collins at Wapping",
        description:
          "Hercules Collins becomes pastor of the Wapping church, serving for approximately 25 years. He doubles membership to around 280 with some 700 hearers. He publishes 'An Orthodox Catechism' (1680), adapting the Heidelberg Catechism for Baptist use. Imprisoned in Newgate 1683–1684 for nonconformity.",
        figure: "Hercules Collins",
      },
    ],
  },
  {
    id: "devonshire-square",
    name: "Devonshire Square Church",
    modernName: "Devonshire Square, London",
    region: "London",
    lat: 51.518,
    lng: -0.079,
    significance: "major",
    eras: [1, 2, 3],
    events: [
      {
        era: 1,
        order: 7,
        year: 1639,
        title: "Kiffin's Church Established",
        description:
          "William Kiffin, a wealthy wool merchant, becomes pastor of the Devonshire Square Particular Baptist Church in Meeting-house Yard. He serves for over 60 years, making it one of the most influential Baptist congregations of the 17th century. The church opens a new meeting house on 1 March 1667.",
        figure: "William Kiffin",
      },
      {
        era: 1,
        order: 10,
        year: 1644,
        title: "First London Confession Signed",
        description:
          "Seven Particular Baptist churches in London, including Devonshire Square, sign the First London Baptist Confession of Faith (1LCF). The confession distinguishes Particular Baptists from both the General Baptists and the feared Anabaptists of Münster, affirming Calvinist soteriology with believer's baptism.",
        figure: "William Kiffin",
      },
    ],
  },
  {
    id: "great-st-helens",
    name: "Great St Helen's, Bishopsgate",
    modernName: "Bishopsgate, London",
    region: "London",
    lat: 51.515,
    lng: -0.082,
    significance: "moderate",
    eras: [1, 2],
    events: [
      {
        era: 1,
        order: 8,
        year: 1646,
        title: "Hanserd Knollys Gathers 1,000",
        description:
          "Hanserd Knollys, born in Cawkwell, Lincolnshire, educated at Cambridge, gathers a congregation of '1,000 auditors' at Great St Helen's, Bishopsgate. Knollys becomes one of the most prominent Particular Baptist leaders, signing both the 1646 revised First London Confession and later the 1689 Confession.",
        figure: "Hanserd Knollys",
      },
    ],
  },
  {
    id: "broadmead-bristol",
    name: "Broadmead Baptist Church",
    modernName: "Bristol",
    region: "South West",
    lat: 51.457,
    lng: -2.591,
    significance: "major",
    eras: [1, 2, 3],
    events: [
      {
        era: 1,
        order: 9,
        year: 1640,
        title: "Dorothy Hazzard Founds Broadmead",
        description:
          "Dorothy Hazzard, wife of a Bristol clergyman, leads a group of dissenters to form the Broadmead congregation — the first dissenting church in Bristol. Edward Terrill later endows it with funds that establish the Bristol Baptist Academy, the oldest Baptist theological college in the world.",
        figure: "Dorothy Hazzard",
      },
    ],
  },
  {
    id: "olchon-valley",
    name: "Olchon Valley",
    modernName: "Herefordshire / Wales Border",
    region: "Wales Border",
    lat: 51.94,
    lng: -3.08,
    significance: "moderate",
    eras: [1],
    events: [
      {
        era: 1,
        order: 3,
        year: 1633,
        title: "Ancient Baptist Witness",
        description:
          "Baptist records in the Olchon Valley date from 1633, though Lollard activity in this remote valley stretches back much further. The congregation is represented at the first Welsh Baptist Association meeting in Abergavenny in 1653. The valley's isolation helped preserve dissenting worship through centuries of persecution.",
        figure: null,
      },
    ],
  },
  {
    id: "hill-cliffe",
    name: "Hill Cliffe Baptist Chapel",
    modernName: "Near Warrington, Cheshire",
    region: "North West",
    lat: 53.37,
    lng: -2.58,
    significance: "moderate",
    eras: [1, 2],
    events: [
      {
        era: 1,
        order: 4,
        year: 1357,
        title: "Ancient Baptist Chapel",
        description:
          "Hill Cliffe is one of the oldest Baptist chapel sites in England, with a gravestone dated 1357 and records of a minister, Mr Weyerburton, who died in 1594. The chapel maintained a cellar for secret worship during persecution. Its position where county boundaries met allowed worshippers to flee across jurisdictions to evade authorities.",
        figure: null,
      },
    ],
  },

  // ===== ERA 2: Confession & Persecution (1644-1689) =====
  {
    id: "petty-france",
    name: "Petty France Meeting House",
    modernName: "Bishopsgate Without, London",
    region: "London",
    lat: 51.518,
    lng: -0.078,
    significance: "major",
    eras: [2, 3],
    events: [
      {
        era: 2,
        order: 1,
        year: 1656,
        title: "Petty France Church Founded",
        description:
          "The Petty France Particular Baptist congregation is established at Bishopsgate Without. From 1675, it is co-pastored by Nehemiah Coxe and William Collins — the primary architects of the 1677 Second London Baptist Confession. The church faces violent persecution: on 15 June 1662, soldiers remove the preacher by force; they return with drawn swords, wound members, and break down the gallery.",
        figure: "Nehemiah Coxe",
      },
      {
        era: 2,
        order: 6,
        year: 1677,
        title: "Second London Confession Drafted",
        description:
          "In secret, due to ongoing persecution under the Clarendon Code, Nehemiah Coxe and William Collins draft the Second London Baptist Confession of Faith (2LCF). Drawing heavily on the Westminster Confession and the Savoy Declaration, they adapt Reformed theology to Baptist convictions on baptism and church government. It is printed anonymously.",
        figure: "Nehemiah Coxe",
      },
    ],
  },
  {
    id: "horsleydown",
    name: "Horsleydown — Goat Yard Passage",
    modernName: "Southwark, London",
    region: "London",
    lat: 51.5,
    lng: -0.08,
    significance: "major",
    eras: [2, 3, 4],
    events: [
      {
        era: 2,
        order: 2,
        year: 1668,
        title: "Benjamin Keach's Ministry Begins",
        description:
          "Benjamin Keach, who had been pilloried at Aylesbury in 1664 for publishing a children's catechism, becomes pastor of the Horsleydown Particular Baptist Church in Southwark. In 1672, he erects a wooden meeting house in Goat Yard Passage, eventually seating around 1,000. He introduces hymn singing at the Lord's Supper in 1673 — a controversial innovation that causes a church split.",
        figure: "Benjamin Keach",
      },
      {
        era: 3,
        order: 3,
        year: 1719,
        title: "John Gill Begins 52-Year Pastorate",
        description:
          "John Gill, born in Kettering, becomes pastor of the Goat Yard Chapel (same congregation as Keach), serving for nearly 52 years. He becomes the first Baptist to write both a complete systematic theology ('A Body of Doctrinal Divinity') and a full Bible commentary. Though accused of fostering hyper-Calvinism, his scholarly output remains unmatched in Baptist history.",
        figure: "John Gill",
      },
    ],
  },
  {
    id: "bunyan-bedford",
    name: "Bunyan Meeting, Bedford",
    modernName: "Bedford, Bedfordshire",
    region: "East",
    lat: 52.137,
    lng: -0.461,
    significance: "major",
    eras: [2],
    events: [
      {
        era: 2,
        order: 3,
        year: 1672,
        title: "Bunyan Elected Pastor",
        description:
          "John Bunyan, born in nearby Elstow, is elected pastor of the Bedford dissenting congregation after 12 years of imprisonment in Bedford County Gaol. During his imprisonment he writes 'The Pilgrim's Progress' — the most widely read allegory in English. Bunyan is an open-communion Baptist, welcoming paedobaptists to the Lord's table, which puts him at odds with strict Particular Baptists like Kiffin.",
        figure: "John Bunyan",
      },
    ],
  },
  {
    id: "newgate-prison",
    name: "Newgate Prison",
    modernName: "City of London",
    region: "London",
    lat: 51.516,
    lng: -0.102,
    significance: "moderate",
    eras: [1, 2],
    events: [
      {
        era: 1,
        order: 11,
        year: 1616,
        title: "Thomas Helwys Dies in Prison",
        description:
          "Thomas Helwys, founder of the first Baptist church on English soil, dies in Newgate Prison around 1616. He had written 'A Short Declaration of the Mystery of Iniquity' — the first English-language work advocating universal religious liberty, addressed to King James I.",
        figure: "Thomas Helwys",
      },
      {
        era: 2,
        order: 7,
        year: 1683,
        title: "Hercules Collins Imprisoned",
        description:
          "Hercules Collins, pastor of the Wapping church, is imprisoned in Newgate from 1683 to 1684 for nonconformist worship. His imprisonment is part of the wider crackdown on Dissenters under Charles II. Despite persecution, Collins continues to write and publish theological works.",
        figure: "Hercules Collins",
      },
    ],
  },
  {
    id: "aylesbury",
    name: "Aylesbury Market Square",
    modernName: "Aylesbury, Buckinghamshire",
    region: "South East",
    lat: 51.82,
    lng: -0.81,
    significance: "minor",
    eras: [2],
    events: [
      {
        era: 2,
        order: 4,
        year: 1664,
        title: "Keach Pilloried",
        description:
          "Benjamin Keach is convicted for publishing 'The Child's Instructor', a primer teaching Baptist principles to children. He is pilloried in Aylesbury market square and his books are publicly burned. The sentence reads: 'to stand upon the pillory... for two hours... with a paper upon your head.' This does not deter him — he moves to London and becomes one of the most influential Baptist pastors of the century.",
        figure: "Benjamin Keach",
      },
    ],
  },
  {
    id: "broken-wharf",
    name: "Broken Wharf, Thames Street",
    modernName: "City of London",
    region: "London",
    lat: 51.509,
    lng: -0.098,
    significance: "moderate",
    eras: [2],
    events: [
      {
        era: 2,
        order: 5,
        year: 1691,
        title: "Knollys' Final Ministry",
        description:
          "Hanserd Knollys serves his final congregation at Broken Wharf on Thames Street until his death in 1691, aged 93. He had signed the 1689 Confession just two years earlier at the General Assembly — one of the last acts of a ministry spanning over 50 years. He is buried at Bunhill Fields.",
        figure: "Hanserd Knollys",
      },
    ],
  },
  {
    id: "llanwenarth",
    name: "Llanwenarth Baptist Chapel",
    modernName: "Govilon, Monmouthshire, Wales",
    region: "Wales",
    lat: 51.81,
    lng: -3.1,
    significance: "moderate",
    eras: [2],
    events: [
      {
        era: 2,
        order: 9,
        year: 1652,
        title: "Oldest Welsh Baptist Fellowship",
        description:
          "Llanwenarth is founded as the oldest surviving Baptist fellowship in Wales. The present chapel building dates from 1696–1697. The congregation hosts the first Baptist Association for Wales meeting after the Restoration (1700). The chapel still stands in the village of Govilon.",
        figure: null,
      },
    ],
  },
  {
    id: "hitchin",
    name: "Hitchin Sub-Congregation",
    modernName: "Hitchin, Hertfordshire",
    region: "East",
    lat: 51.95,
    lng: -0.28,
    significance: "minor",
    eras: [2],
    events: [
      {
        era: 2,
        order: 10,
        year: 1673,
        title: "Nehemiah Coxe at Hitchin",
        description:
          "Before co-pastoring Petty France, Nehemiah Coxe leads a sub-congregation at Hitchin, connected to John Bunyan's Bedford church. Coxe is developing the covenant theology that will undergird the 1677/1689 Confession — articulating how the New Covenant relates to the Old in a distinctly Baptist framework.",
        figure: "Nehemiah Coxe",
      },
    ],
  },

  // ===== ERA 3: Toleration & Growth (1689-1792) =====
  {
    id: "westminster",
    name: "Westminster — Parliament",
    modernName: "Westminster, London",
    region: "London",
    lat: 51.5,
    lng: -0.12,
    significance: "major",
    eras: [3],
    events: [
      {
        era: 3,
        order: 1,
        year: 1689,
        title: "Toleration Act Passed",
        description:
          "Parliament passes the Toleration Act, granting freedom of worship to Protestant Dissenters who swear allegiance. After decades of persecution under the Clarendon Code — the Corporation Act (1661), Act of Uniformity (1662), Conventicle Acts (1664, 1670), and Five Mile Act (1665) — Baptists can finally worship openly and build meeting houses without fear of prosecution.",
        figure: null,
      },
    ],
  },
  {
    id: "london-assembly",
    name: "General Assembly of 1689",
    modernName: "City of London",
    region: "London",
    lat: 51.515,
    lng: -0.09,
    significance: "major",
    eras: [3],
    events: [
      {
        era: 3,
        order: 2,
        year: 1689,
        title: "The 1689 Confession Publicly Adopted",
        description:
          "From 3–12 September, representatives of over 100 Particular Baptist churches gather in London for a General Assembly. They publicly adopt the 1677 Confession — now known as the 1689 Second London Baptist Confession of Faith. It is signed by William Kiffin, Hanserd Knollys, Benjamin Keach, and many others. Nehemiah Coxe, the confession's primary architect, had died on 5 May — just four months before seeing his life's work publicly affirmed.",
        figure: "William Kiffin",
      },
    ],
  },
  {
    id: "bunhill-fields",
    name: "Bunhill Fields",
    modernName: "City Road, London",
    region: "London",
    lat: 51.524,
    lng: -0.089,
    significance: "major",
    eras: [2, 3],
    events: [
      {
        era: 3,
        order: 4,
        year: 1689,
        title: "Dissenters' Burial Ground",
        description:
          "Bunhill Fields serves as the principal burial ground for Nonconformists from the 17th to 19th centuries. Among the Baptist leaders buried here: William Kiffin, Hanserd Knollys, John Gill, Nehemiah Coxe (in the Portman family vault near John Owen's grave), and many others. John Owen, Daniel Defoe, Susanna Wesley, and Isaac Watts also rest here — a who's who of English Dissent.",
        figure: null,
      },
    ],
  },
  {
    id: "keachs-winslow",
    name: "Keach's Meeting House",
    modernName: "Winslow, Buckinghamshire",
    region: "South East",
    lat: 51.95,
    lng: -0.88,
    significance: "minor",
    eras: [3],
    events: [
      {
        era: 3,
        order: 5,
        year: 1695,
        title: "Keach's Meeting House Built",
        description:
          "A meeting house is built in Winslow, Buckinghamshire, associated with Benjamin Keach's early ministry in the area. The building still exists today as one of the few surviving 17th-century Baptist meeting houses in England.",
        figure: "Benjamin Keach",
      },
    ],
  },
  {
    id: "tewkesbury",
    name: "Tewkesbury Old Baptist Chapel",
    modernName: "Tewkesbury, Gloucestershire",
    region: "South West",
    lat: 51.99,
    lng: -2.16,
    significance: "minor",
    eras: [1, 3],
    events: [
      {
        era: 3,
        order: 6,
        year: 1623,
        title: "One of the Oldest Baptist Properties",
        description:
          "The Tewkesbury Old Baptist Chapel holds a property deed from 1623, making it one of the oldest Baptist properties in England. The congregation met in an alleyway chapel for 175 years of continuous use — a testament to faithful Baptist witness through generations of change.",
        figure: null,
      },
    ],
  },
  {
    id: "particular-baptist-fund",
    name: "Particular Baptist Fund",
    modernName: "City of London",
    region: "London",
    lat: 51.51,
    lng: -0.085,
    significance: "moderate",
    eras: [3],
    events: [
      {
        era: 3,
        order: 7,
        year: 1717,
        title: "Particular Baptist Fund Established",
        description:
          "Six London Particular Baptist churches form the Particular Baptist Fund on 4 June 1717. Initial gifts total 788 pounds 14 shillings and 6 pence. The Fund is kept in an iron chest with three separate locks — each held by a different trustee. It supports ministerial training and church planting, becoming a vital institution for Baptist growth.",
        figure: null,
      },
    ],
  },
  {
    id: "abingdon",
    name: "Abingdon Association",
    modernName: "Abingdon, Berkshire",
    region: "South East",
    lat: 51.67,
    lng: -1.28,
    significance: "moderate",
    eras: [2, 3],
    events: [
      {
        era: 2,
        order: 11,
        year: 1652,
        title: "Berkshire Association Begins",
        description:
          "The Berkshire (Abingdon) Association of Particular Baptist churches begins regular meetings — one of the earliest regional associations. These associations provide mutual support, doctrinal accountability, and collective witness during the years of persecution. By the 1650s, five regional associations are active across England and Wales.",
        figure: null,
      },
    ],
  },
  {
    id: "abergavenny",
    name: "Abergavenny",
    modernName: "Abergavenny, Monmouthshire, Wales",
    region: "Wales",
    lat: 51.82,
    lng: -3.02,
    significance: "moderate",
    eras: [2],
    events: [
      {
        era: 2,
        order: 12,
        year: 1653,
        title: "First Welsh Baptist Association",
        description:
          "The first Welsh Baptist Association meeting is held in Abergavenny, bringing together representatives from Baptist churches across Wales including those from the Olchon Valley, Swansea, Carmarthen, and Llantrisaint. This marks the beginning of organized Baptist cooperation in Wales.",
        figure: null,
      },
    ],
  },

  // ===== ERA 4: Mission & Revival (1792-1892) =====
  {
    id: "kettering",
    name: "Kettering — Carey Mission House",
    modernName: "Kettering, Northamptonshire",
    region: "East Midlands",
    lat: 52.397,
    lng: -0.723,
    significance: "major",
    eras: [3, 4],
    events: [
      {
        era: 4,
        order: 1,
        year: 1792,
        title: "Baptist Missionary Society Founded",
        description:
          "On 2 October 1792, at Widow Beeby Wallis's house on Lower Street, Andrew Fuller, William Carey, and 12 others found the Baptist Missionary Society. The original table and chairs from the meeting are preserved in the Carey Mission House. Fuller serves as General Secretary; Carey will sail for India the following year. Fuller's theology — 'The Gospel Worthy of All Acceptation' — has broken the hyper-Calvinist deadlock that had stifled Baptist evangelism for decades.",
        figure: "Andrew Fuller",
      },
    ],
  },
  {
    id: "leicester",
    name: "Harvey Lane Baptist Church",
    modernName: "Leicester",
    region: "East Midlands",
    lat: 52.63,
    lng: -1.13,
    significance: "moderate",
    eras: [4],
    events: [
      {
        era: 4,
        order: 2,
        year: 1789,
        title: "William Carey's Pastorate",
        description:
          "William Carey, born in Paulerspury, Northamptonshire, serves as pastor of Harvey Lane Baptist Church from 1789 to 1793. Here he publishes 'An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens' (1792) and preaches his famous sermon: 'Expect great things from God; attempt great things for God.' He departs for India in 1793, becoming the 'Father of Modern Missions'.",
        figure: "William Carey",
      },
    ],
  },
  {
    id: "paulerspury",
    name: "Paulerspury — Carey's Birthplace",
    modernName: "Paulerspury, Northamptonshire",
    region: "East Midlands",
    lat: 52.12,
    lng: -1.01,
    significance: "minor",
    eras: [4],
    events: [
      {
        era: 4,
        order: 3,
        year: 1761,
        title: "William Carey Born",
        description:
          "William Carey is born at Pury End in the parish of Paulerspury. The son of a weaver, he is apprenticed as a shoemaker at Piddington. His self-taught knowledge of languages and geography — studying a map on his workshop wall — fuels his passion for world mission that changes the course of evangelical Christianity.",
        figure: "William Carey",
      },
    ],
  },
  {
    id: "kelvedon",
    name: "Kelvedon — Spurgeon's Birthplace",
    modernName: "Kelvedon, Essex",
    region: "East",
    lat: 51.84,
    lng: 0.7,
    significance: "moderate",
    eras: [4],
    events: [
      {
        era: 4,
        order: 4,
        year: 1834,
        title: "Charles Haddon Spurgeon Born",
        description:
          "Charles Haddon Spurgeon is born in Kelvedon, Essex, son and grandson of Independent (Congregational) ministers. He spends formative childhood years with his grandfather at Stambourne, Essex, where he reads 'The Pilgrim's Progress' repeatedly. His conversion comes at age 15 in a Primitive Methodist chapel in Colchester during a snowstorm in January 1850.",
        figure: "Charles Haddon Spurgeon",
      },
    ],
  },
  {
    id: "waterbeach",
    name: "Waterbeach Baptist Chapel",
    modernName: "Waterbeach, Cambridgeshire",
    region: "East",
    lat: 52.27,
    lng: 0.19,
    significance: "minor",
    eras: [4],
    events: [
      {
        era: 4,
        order: 5,
        year: 1852,
        title: "Spurgeon's First Pastorate",
        description:
          "At just 17 years old, Spurgeon becomes pastor of the Waterbeach Baptist Chapel. Under his preaching, the small congregation grows dramatically and the village is transformed. Within two years, his fame reaches London, and he receives a call to New Park Street Chapel in Southwark.",
        figure: "Charles Haddon Spurgeon",
      },
    ],
  },
  {
    id: "new-park-street",
    name: "New Park Street Chapel",
    modernName: "Southwark, London",
    region: "London",
    lat: 51.505,
    lng: -0.091,
    significance: "moderate",
    eras: [4],
    events: [
      {
        era: 4,
        order: 6,
        year: 1854,
        title: "Spurgeon Called to London",
        description:
          "At age 20, Spurgeon is called to the historic New Park Street Chapel in Southwark — the church once pastored by Benjamin Keach and John Gill. The congregation quickly outgrows the building. They temporarily use the Surrey Gardens Music Hall (which seats 10,000) and then Exeter Hall while the Metropolitan Tabernacle is being constructed.",
        figure: "Charles Haddon Spurgeon",
      },
    ],
  },
  {
    id: "metropolitan-tabernacle",
    name: "Metropolitan Tabernacle",
    modernName: "Elephant and Castle, London",
    region: "London",
    lat: 51.4942,
    lng: -0.1011,
    significance: "major",
    eras: [4],
    events: [
      {
        era: 4,
        order: 7,
        year: 1861,
        title: "Metropolitan Tabernacle Opens",
        description:
          "The Metropolitan Tabernacle opens on 18 March 1861 with seating for 6,000 — the largest church building in the world at the time. Spurgeon preaches to capacity crowds for over 30 years. He founds a pastors' college, an orphanage, and a colportage (book distribution) association. His sermons are published weekly and translated worldwide, earning him the title 'The Prince of Preachers'.",
        figure: "Charles Haddon Spurgeon",
      },
      {
        era: 4,
        order: 8,
        year: 1887,
        title: "The Downgrade Controversy",
        description:
          "Spurgeon publishes articles in 'The Sword and the Trowel' warning of theological decline within the Baptist Union — liberalism, rejection of biblical inerrancy, and abandonment of substitutionary atonement. He withdraws from the Baptist Union on 28 October 1887. The Union censures him in January 1888. Spurgeon, heartbroken and in failing health, dies on 31 January 1892 in Menton, France.",
        figure: "Charles Haddon Spurgeon",
      },
    ],
  },
  {
    id: "elstow",
    name: "Elstow — Bunyan's Birthplace",
    modernName: "Elstow, Bedfordshire",
    region: "East",
    lat: 52.11,
    lng: -0.47,
    significance: "minor",
    eras: [2],
    events: [
      {
        era: 2,
        order: 13,
        year: 1628,
        title: "John Bunyan Born",
        description:
          "John Bunyan is born in Elstow, near Bedford. The son of a tinker, he serves in the Parliamentary army before experiencing a dramatic conversion. His spiritual struggles are recorded in 'Grace Abounding to the Chief of Sinners'. He becomes the most widely read author in English after Shakespeare.",
        figure: "John Bunyan",
      },
    ],
  },
  {
    id: "stoke-hammond",
    name: "Stoke Hammond",
    modernName: "Stoke Hammond, Buckinghamshire",
    region: "South East",
    lat: 51.93,
    lng: -0.78,
    significance: "minor",
    eras: [2],
    events: [
      {
        era: 2,
        order: 14,
        year: 1640,
        title: "Benjamin Keach Born",
        description:
          "Benjamin Keach is born in Stoke Hammond, Buckinghamshire. He begins preaching at 18 in Winslow before persecution drives him to London, where he becomes one of the most important Particular Baptist pastors of the 17th century. His congregation at Horsleydown is the direct ancestor of Spurgeon's Metropolitan Tabernacle.",
        figure: "Benjamin Keach",
      },
    ],
  },
  {
    id: "cawkwell",
    name: "Cawkwell — Knollys' Birthplace",
    modernName: "Cawkwell, Lincolnshire",
    region: "East Midlands",
    lat: 53.32,
    lng: -0.12,
    significance: "minor",
    eras: [1],
    events: [
      {
        era: 1,
        order: 12,
        year: 1598,
        title: "Hanserd Knollys Born",
        description:
          "Hanserd Knollys is born in Cawkwell, Lincolnshire. Educated at Cambridge, he serves as a Church of England clergyman before his dissenting convictions lead him to become one of the foremost Particular Baptist leaders of the 17th century — serving for over 50 years until his death at 93.",
        figure: "Hanserd Knollys",
      },
    ],
  },
  {
    id: "knocklas",
    name: "Knocklas — Vavasor Powell",
    modernName: "Knocklas, Radnorshire, Wales",
    region: "Wales",
    lat: 52.36,
    lng: -3.08,
    significance: "minor",
    eras: [2],
    events: [
      {
        era: 2,
        order: 15,
        year: 1617,
        title: "Vavasor Powell Born",
        description:
          "Vavasor Powell is born in Knocklas, Radnorshire. He becomes a fiery itinerant evangelist across Wales, 'frequently preaching in two or three places in a day', founding over 20 churches with memberships of 200–500 each. He is repeatedly imprisoned for nonconformity and dies in prison in 1670.",
        figure: "Vavasor Powell",
      },
    ],
  },
  {
    id: "maze-pond",
    name: "Maze Pond Baptist Chapel",
    modernName: "Southwark, London",
    region: "London",
    lat: 51.504,
    lng: -0.088,
    significance: "minor",
    eras: [3],
    events: [
      {
        era: 3,
        order: 8,
        year: 1694,
        title: "Maze Pond Church Split",
        description:
          "The Maze Pond Baptist congregation forms in the 1690s as a split from Carter Lane over the controversy of hymn singing — introduced by Benjamin Keach. The site is now under Guy's Hospital. This is one of several churches that arise from debates over worship practice within the Particular Baptist community.",
        figure: null,
      },
    ],
  },
  {
    id: "soham",
    name: "Soham — Fuller's Early Ministry",
    modernName: "Soham, Cambridgeshire",
    region: "East",
    lat: 52.33,
    lng: 0.34,
    significance: "minor",
    eras: [3],
    events: [
      {
        era: 3,
        order: 9,
        year: 1775,
        title: "Andrew Fuller's Conversion & Call",
        description:
          "Andrew Fuller begins his pastoral ministry at Soham, Cambridgeshire, born in nearby Wicken. Here he begins wrestling with the hyper-Calvinism that had paralysed Particular Baptist evangelism — the notion that the gospel 'offer' cannot be made to the unregenerate. His resolution of this tension in 'The Gospel Worthy of All Acceptation' (1785) will transform Baptist mission theology.",
        figure: "Andrew Fuller",
      },
    ],
  },
  {
    id: "colchester",
    name: "Colchester — Spurgeon's Conversion",
    modernName: "Colchester, Essex",
    region: "East",
    lat: 51.89,
    lng: 0.9,
    significance: "moderate",
    eras: [4],
    events: [
      {
        era: 4,
        order: 9,
        year: 1850,
        title: "Spurgeon's Conversion",
        description:
          "On a snowy January morning, 15-year-old Charles Spurgeon ducks into a Primitive Methodist chapel in Artillery Street, Colchester. A lay preacher, possibly a deacon, takes the text from Isaiah 45:22: 'Look unto me, and be ye saved, all the ends of the earth.' Spurgeon later writes: 'I did look, and then and there the cloud on my heart was gone, the darkness rolled away, and I saw the Sun of Righteousness.'",
        figure: "Charles Haddon Spurgeon",
      },
    ],
  },
];

// Route connections between locations for each era
export const routes = [
  {
    era: 1,
    label: "Origins & First Churches",
    path: [
      [-0.075, 51.52], // Spitalfields
      [-0.09, 51.505], // Southwark JLJ
      [-0.058, 51.51], // Wapping
      [-0.079, 51.518], // Devonshire Square
      [-0.082, 51.515], // Great St Helen's
      [-2.591, 51.457], // Bristol
    ],
  },
  {
    era: 2,
    label: "Confession & Persecution",
    path: [
      [-0.078, 51.518], // Petty France
      [-0.08, 51.5], // Horsleydown
      [-0.102, 51.516], // Newgate
      [-0.058, 51.51], // Wapping
      [-0.098, 51.509], // Broken Wharf
      [-0.461, 52.137], // Bedford
      [-0.47, 52.11], // Elstow
      [-0.28, 51.95], // Hitchin
      [-0.81, 51.82], // Aylesbury
      [-3.1, 51.81], // Llanwenarth
      [-3.02, 51.82], // Abergavenny
      [-1.28, 51.67], // Abingdon
    ],
  },
  {
    era: 3,
    label: "Toleration & Growth",
    path: [
      [-0.12, 51.5], // Westminster
      [-0.09, 51.515], // Assembly London
      [-0.089, 51.524], // Bunhill Fields
      [-0.079, 51.518], // Devonshire Square
      [-0.078, 51.518], // Petty France
      [-0.08, 51.5], // Horsleydown (Gill)
      [-0.085, 51.51], // PBF
      [-0.88, 51.95], // Winslow
      [-2.16, 51.99], // Tewkesbury
    ],
  },
  {
    era: 4,
    label: "Mission & Revival",
    path: [
      [-0.723, 52.397], // Kettering
      [-1.13, 52.63], // Leicester
      [-1.01, 52.12], // Paulerspury
      [0.34, 52.33], // Soham
      [0.7, 51.84], // Kelvedon
      [0.9, 51.89], // Colchester
      [0.19, 52.27], // Waterbeach
      [-0.091, 51.505], // New Park Street
      [-0.1011, 51.4942], // Metropolitan Tabernacle
    ],
  },
];

// Key historical figures with biographical summaries
export const figures = [
  {
    id: "thomas-helwys",
    name: "Thomas Helwys",
    years: "c. 1575–c. 1616",
    role: "Founder of the first Baptist church in England",
    bio: "Established the first Baptist church on English soil (General Baptist) at Spitalfields in 1612. Authored the first English work advocating universal religious liberty. Died in Newgate Prison.",
  },
  {
    id: "henry-jacob",
    name: "Henry Jacob",
    years: "1563–1624",
    role: "Founder of the Jacob-Lathrop-Jessey Church",
    bio: "Gathered the semi-separatist independent church in Southwark from which the Particular Baptists would emerge.",
  },
  {
    id: "john-spilsbury",
    name: "John Spilsbury",
    years: "fl. 1630s–1660s",
    role: "Early Particular Baptist leader",
    bio: "Traditionally credited with forming the first clearly Particular Baptist church at Wapping, practising believer's baptism by immersion. Signatory of the 1644 First London Confession.",
  },
  {
    id: "william-kiffin",
    name: "William Kiffin",
    years: "1616–1701",
    role: "Pastor of Devonshire Square; leader of London Baptists",
    bio: "Wealthy wool merchant who pastored Devonshire Square for over 60 years. Key signatory of both the 1644 and 1689 Confessions. One of the most influential Baptists of the 17th century.",
  },
  {
    id: "hanserd-knollys",
    name: "Hanserd Knollys",
    years: "1598–1691",
    role: "Prominent Particular Baptist minister",
    bio: "Born in Lincolnshire, educated at Cambridge. Gathered '1,000 auditors' at Great St Helen's. Served over 50 years. Signed both the 1646 and 1689 Confessions. Buried at Bunhill Fields aged 93.",
  },
  {
    id: "henry-jessey",
    name: "Henry Jessey",
    years: "1601–1663",
    role: "Third pastor of the JLJ Church",
    bio: "Led the Jacob-Lathrop-Jessey church from 1637. Under his pastorate, the church adopted Baptist views. The foundational bridge figure between Independency and the Particular Baptists.",
  },
  {
    id: "dorothy-hazzard",
    name: "Dorothy Hazzard",
    years: "fl. 1640s",
    role: "Founder of Broadmead Baptist Church, Bristol",
    bio: "Wife of a Bristol clergyman who led a group of dissenters to form the first dissenting church in Bristol in 1640.",
  },
  {
    id: "benjamin-keach",
    name: "Benjamin Keach",
    years: "1640–1704",
    role: "Pastor of Horsleydown; hymn singing pioneer",
    bio: "Pilloried at Aylesbury for publishing. Pastored Horsleydown for 36 years. Introduced hymn singing. Signatory of 1689 Confession. His church became the Metropolitan Tabernacle.",
  },
  {
    id: "nehemiah-coxe",
    name: "Nehemiah Coxe",
    years: "d. 1689",
    role: "Primary architect of the 1677/1689 Confession",
    bio: "Co-pastor of Petty France. Drafted the Second London Baptist Confession with William Collins. Died 5 May 1689, four months before seeing it publicly adopted. Key Baptist covenant theologian.",
  },
  {
    id: "hercules-collins",
    name: "Hercules Collins",
    years: "1647–1702",
    role: "Pastor of Wapping; catechist and confessor",
    bio: "Pastored Wapping for 25 years. Published 'An Orthodox Catechism'. Imprisoned in Newgate 1683–1684. Doubled his church's membership to 280 with 700 hearers.",
  },
  {
    id: "vavasor-powell",
    name: "Vavasor Powell",
    years: "1617–1670",
    role: "Welsh itinerant evangelist",
    bio: "Born in Radnorshire. Founded over 20 churches across Wales. 'Frequently preached in two or three places in a day.' Repeatedly imprisoned. Died in prison for his convictions.",
  },
  {
    id: "john-bunyan",
    name: "John Bunyan",
    years: "1628–1688",
    role: "Author of 'The Pilgrim's Progress'; pastor of Bedford",
    bio: "Imprisoned 12 years for nonconformity. Wrote the most widely read allegory in English. Open-communion Baptist. The most popular author in English after Shakespeare.",
  },
  {
    id: "john-gill",
    name: "John Gill",
    years: "1697–1771",
    role: "Theologian; 52-year pastor of Horsleydown",
    bio: "Born in Kettering. First Baptist to write a complete systematic theology and full Bible commentary. Served the Horsleydown congregation (Keach's church) for nearly 52 years.",
  },
  {
    id: "andrew-fuller",
    name: "Andrew Fuller",
    years: "1754–1815",
    role: "Theologian; Secretary of Baptist Missionary Society",
    bio: "His 'Gospel Worthy of All Acceptation' broke the hyper-Calvinist deadlock. Co-founded the BMS at Kettering in 1792. Served as General Secretary until his death.",
  },
  {
    id: "william-carey",
    name: "William Carey",
    years: "1761–1834",
    role: "Father of Modern Missions",
    bio: "Born in Paulerspury. Self-taught linguist. Published 'An Enquiry' urging Christian mission. Sailed for India in 1793. Translated the Bible into numerous Indian languages.",
  },
  {
    id: "charles-spurgeon",
    name: "Charles Haddon Spurgeon",
    years: "1834–1892",
    role: "The Prince of Preachers",
    bio: "Converted at 15. Pastor of Metropolitan Tabernacle from 1861. Preached to 6,000 weekly. Founded a college, orphanage, and colportage. Led the Downgrade Controversy against theological liberalism.",
  },
];

// Scripture / source references linked to events
export const sources = [
  { location: "spitalfields", ref: "Helwys, 'A Short Declaration of the Mystery of Iniquity', 1612" },
  { location: "southwark-jlj", ref: "B.R. White, 'The English Separatist Tradition', 1971" },
  { location: "wapping", ref: "First London Confession of Faith, 1644" },
  { location: "devonshire-square", ref: "First London Confession of Faith, 1644; Kiffin, 'Remarkable Passages in the Life of William Kiffin', 1823" },
  { location: "petty-france", ref: "Second London Baptist Confession of Faith, 1677/1689; Petty France blog, pettyfrance.wordpress.com" },
  { location: "bunyan-bedford", ref: "Bunyan, 'Grace Abounding to the Chief of Sinners', 1666; 'The Pilgrim's Progress', 1678" },
  { location: "metropolitan-tabernacle", ref: "Spurgeon, 'The Sword and the Trowel', 1887; 'Autobiography', 1897–1900" },
  { location: "kettering", ref: "Fuller, 'The Gospel Worthy of All Acceptation', 1785; Carey, 'An Enquiry', 1792" },
];

// Build indexes
export const eraIndex = (() => {
  const idx = {};
  eras.forEach((era) => {
    idx[era.id] = era;
  });
  return idx;
})();

export const locationIndex = (() => {
  const idx = {};
  locations.forEach((loc) => {
    idx[loc.id] = loc;
  });
  return idx;
})();

export const figureIndex = (() => {
  const idx = {};
  figures.forEach((fig) => {
    idx[fig.id] = fig;
  });
  return idx;
})();

// Timeline — all events flattened and sorted by year
export const timeline = (() => {
  const events = [];
  locations.forEach((loc) => {
    loc.events.forEach((evt) => {
      events.push({
        year: evt.year,
        title: evt.title,
        description: evt.description,
        figure: evt.figure,
        locationId: loc.id,
        locationName: loc.name,
        era: evt.era,
      });
    });
  });
  events.sort((a, b) => a.year - b.year);
  return events;
})();
