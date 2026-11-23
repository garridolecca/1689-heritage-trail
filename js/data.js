// ============================================================
// 1689 Heritage Trail — Historical Data Module
// Particular Baptist Heritage in England and Wales (1612–1892)
//
// Data notes
//  - `source` on an event is a short note on where a point was checked or why it is worded cautiously.
//  - Stop numbers (`order`) and each location's `eras` are derived at the bottom of this file from the
//    events' years, so they cannot drift out of step with the data.
//  - Spanish text for events and figures lives in content-es.js (keyed by location id + year, figure id).
// ============================================================

export const YEAR_MIN = 1612;
export const YEAR_MAX = 1892;

export const eras = [
  {
    id: 1,
    name: "Origins & First Churches",
    shortName: "Origins",
    dateRange: "1612–1644",
    color: [201, 168, 76],
    hexColor: "#C9A84C",
    description:
      "From the first Baptist congregation on English soil (the General Baptist church of Thomas Helwys, 1612) to the First London Confession of Faith (1644). The Particular Baptists emerge from the Jacob-Lathrop-Jessey church in Southwark, affirming believer's baptism and the doctrines of grace.",
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
      "The era of the Clarendon Code (the Corporation Act, Act of Uniformity, Conventicle Acts and Five Mile Act) drives Baptists underground. Despite persecution, the Second London Baptist Confession is published anonymously in 1677; Nehemiah Coxe and William Collins are traditionally credited with a key part in preparing it.",
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
      "The Toleration Act of 1689 brings freedom of worship to Dissenters who take the required oaths. Representatives of over 100 Baptist churches adopt the 1677 Confession, now known as the 1689 Confession. New meeting houses are built, associations flourish, and the Particular Baptist Fund is founded in 1717. Yet hyper-Calvinism begins to stifle evangelism.",
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
      "Andrew Fuller's theology breaks the hyper-Calvinist deadlock. William Carey sails for India. Spurgeon fills the Metropolitan Tabernacle with thousands of hearers. But the Downgrade Controversy signals theological drift in the Baptist Union.",
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
    events: [
      {
        era: 1,
        year: 1612,
        title: "First General Baptist Church on English Soil",
        description:
          "Thomas Helwys and a small congregation return from Amsterdam, where they had been part of John Smyth's exiled church, and found what is generally regarded as the first Baptist church on English soil, at Spitalfields, London. It was a General Baptist (Arminian) congregation, distinct from the Particular Baptists who emerged later. Helwys is soon imprisoned in Newgate for his writing on religious liberty and dies there around 1616.",
        figure: "Thomas Helwys",
        source: "Wikipedia, Thomas Helwys; Baptist Union timeline. The 1612 church was General Baptist, not Particular Baptist.",
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
    events: [
      {
        era: 1,
        year: 1616,
        title: "Henry Jacob's Independent Church",
        description:
          "Henry Jacob gathers a semi-separatist independent congregation in Southwark, generally regarded as the first continuing congregational church in England: the Jacob-Lathrop-Jessey (JLJ) church. This congregation becomes the seedbed from which the Particular Baptists will emerge. After Jacob sails for Virginia (1622), leadership passes to John Lathrop (1624) and then Henry Jessey (1637).",
        figure: "Henry Jacob",
        source: "Wikipedia, Henry Jacob (1563–1624).",
      },
      {
        era: 1,
        year: 1633,
        title: "First Particular Baptist Separation",
        description:
          "A group within the JLJ church, convinced of believer's baptism, separates under John Spilsbury; this is traditionally counted as the first Particular Baptist congregation. They reject infant baptism while holding Calvinistic doctrine, which distinguishes them from the Arminian General Baptists. Accounts differ on details, and some say this group merged with another in 1638.",
        figure: "John Spilsbury",
        source: "Themelios, 'Origins of the Particular Baptists'; sources agree on 1633 but differ on location and later merger.",
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
    events: [
      {
        era: 1,
        year: 1638,
        title: "Spilsbury's Church, Traditionally at Wapping",
        description:
          "Tradition places John Spilsbury's Particular Baptist congregation, practising believer's baptism by immersion, at Old Gravel Lane, Wapping, and counts it among the seven churches that issued the 1644 First London Confession. A recent scholarly article questions the explicit link between Spilsbury and Wapping, so the origins are murkier than the traditional story.",
        figure: "John Spilsbury",
        source: "Hercules Collins is described as the third pastor of this church after Spilsbury; the Spilsbury–Wapping link is questioned in a 2023 Baptist Quarterly article (doi 10.1080/0005576X.2023.2247693).",
      },
      {
        era: 2,
        year: 1677,
        title: "Hercules Collins at Wapping",
        description:
          "Hercules Collins is installed as pastor of the Wapping church on 23 March 1677, the date of the earliest surviving church minute book. He serves for about 25 years. He publishes 'An Orthodox Catechism' (1680), adapting the Heidelberg Catechism for Baptist use, and is imprisoned in Newgate in 1683–1684 for nonconformity.",
        figure: "Hercules Collins",
        source: "Wikipedia, Hercules Collins; N. Sherman, The Wapping Baptists (church minute book 1677–1712). Earlier membership figures were removed as unverified.",
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
    events: [
      {
        era: 1,
        year: 1639,
        title: "Kiffin and the Devonshire Square Church",
        description:
          "The Devonshire Square Particular Baptist church traditionally dates its beginnings to 1639, when William Kiffin and others are said to have left the Jacob-Lathrop-Jessey congregation. Kiffin, a wealthy merchant, serves as its pastor until his death in 1701, though some accounts date his settlement as pastor to 1653. The church opens a new meeting house in Meeting-house Yard on 1 March 1667.",
        figure: "William Kiffin",
        source: "Wikipedia, William Kiffin: his settlement with the congregation 'is usually dated in 1653'; the church itself counts from 1639. The 'over 60 years' wording was removed.",
      },
      {
        era: 1,
        year: 1644,
        title: "First London Confession Signed",
        description:
          "Seven Particular Baptist churches in London, including Devonshire Square, sign the First London Baptist Confession of Faith (1LCF). The confession distinguishes Particular Baptists from the General Baptists and from the feared Anabaptists of Münster, affirming Calvinist doctrine with believer's baptism.",
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
    events: [
      {
        era: 1,
        year: 1646,
        title: "Hanserd Knollys Gathers a Church",
        description:
          "Hanserd Knollys, born in Cawkwell, Lincolnshire, and educated at Cambridge, gathers a church in 1646 that meets first for about a year at Great St Helen's, Bishopsgate, before moving to other London sites; the figure of '1,000 auditors' is traditionally reported. Knollys becomes a prominent Particular Baptist leader, subscribing the 1646 second edition of the First London Confession and later the 1689 Confession.",
        figure: "Hanserd Knollys",
        source: "Wikipedia, Hanserd Knollys: church gathered 1646, first at Great St Helen's, ultimately at Broken Wharf.",
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
    events: [
      {
        era: 1,
        year: 1640,
        title: "Dorothy Hazzard Founds Broadmead",
        description:
          "Dorothy Hazzard (formerly Kelly), who in 1640 marries the Puritan preacher Matthew Hazzard, and four other dissenters found the first dissenting church in Bristol; it later became a Baptist church. In 1679 Edward Terrill gives a deed of gift that funds ministerial training; the academy that grew from it, Bristol Baptist College, is commonly described as the oldest Baptist theological college in the world, with its work beginning in earnest under Bernard Foskett from 1720.",
        figure: "Dorothy Hazzard",
        source: "Wikipedia, Dorothy Hazzard and Broadmead Baptist Church; Baptist Quarterly on Terrill's 1679 deed. 'Oldest in the world' is the usual description, not independently verified.",
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
    events: [
      {
        era: 1,
        year: 1633,
        title: "Local Tradition of Early Baptist Witness",
        description:
          "Local Baptist tradition dates a dissenting congregation in the remote Olchon Valley to 1633. The valley's isolation is said to have helped preserve dissenting worship through the years of persecution. These claims rest on local tradition and could not be corroborated in the sources checked.",
        figure: null,
        source: "Not corroborated: the earlier claims of Lollard activity and attendance at the 1653 Abergavenny meeting were removed.",
      },
    ],
  },
  {
    id: "hill-cliffe",
    name: "Hill Cliffe Baptist Chapel",
    modernName: "Appleton, near Warrington, Cheshire",
    region: "North West",
    lat: 53.37,
    lng: -2.58,
    significance: "moderate",
    events: [
      {
        era: 1,
        year: 1357,
        title: "Ancient Baptist Chapel (traditional date)",
        description:
          "Hill Cliffe is said to be one of the oldest surviving non-established congregations in Britain, and the chapel is documented before the English Civil War. Local tradition gives 1357 as the start of worship on the site, but that date is not independently documented, so treat it as tradition rather than established history.",
        figure: null,
        source: "Findmypast and local listings; no source found for a 1357 gravestone or a Lollard origin, so those claims were removed.",
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
    events: [
      {
        era: 1,
        year: 1623,
        title: "Earliest Documented Baptist Property",
        description:
          "A deed of 1623 conveying property to the local Baptist cause is the earliest documentary evidence for the Tewkesbury congregation, one of the oldest Baptist churches in Britain; its exact founding date is unknown. The Old Baptist Chapel, a late medieval house converted to a chapel around 1690, stands off an alleyway running from Church Street towards the river.",
        figure: null,
        source: "Tewkesbury Baptist Church history; Historic England listing. The '175 years of continuous use' claim was removed.",
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
    events: [
      {
        era: 1,
        year: 1616,
        title: "Thomas Helwys Dies in Prison",
        description:
          "Thomas Helwys, founder of the first Baptist church on English soil, dies around 1616 after being imprisoned in Newgate. He had written 'A Short Declaration of the Mistery of Iniquity' (1612), one of the first English works to argue for universal religious liberty, addressed to King James I.",
        figure: "Thomas Helwys",
        source: "Wikipedia, Thomas Helwys (c. 1575 – c. 1616).",
      },
      {
        era: 2,
        year: 1683,
        title: "Hercules Collins Imprisoned",
        description:
          "Hercules Collins, pastor of the Wapping church, is imprisoned in Newgate from 1683 to 1684 for nonconformist worship, part of the wider crackdown on Dissenters under Charles II. He continues to write during his imprisonment.",
        figure: "Hercules Collins",
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
    events: [
      {
        era: 1,
        year: 1598,
        title: "Hanserd Knollys Born",
        description:
          "Hanserd Knollys is born in Cawkwell, Lincolnshire, in 1598. Educated at Cambridge, he serves as a Church of England clergyman before his convictions lead him to become one of the foremost Particular Baptist leaders of the 17th century; he dies in his ninety-third year.",
        figure: "Hanserd Knollys",
        source: "Wikipedia, Hanserd Knollys (1598–1691).",
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
    events: [
      {
        era: 2,
        year: 1662,
        title: "Petty France Under Persecution",
        description:
          "The Petty France Particular Baptist congregation at Bishopsgate Without, whose origins W. T. Whitley traced to baptisms in 1641, is among the churches harassed after the Restoration: on 15 June 1662 soldiers remove its preacher. In the mid-1670s (1675 in some accounts) Nehemiah Coxe and William Collins are ordained as its elders.",
        figure: "Nehemiah Coxe",
        source: "Baptist Quarterly article on Petty France; baptists.net gives 1673–74 for some of the ordination details. The earlier 1656 founding date could not be confirmed and was removed.",
      },
      {
        era: 2,
        year: 1677,
        title: "Second London Confession Published",
        description:
          "Amid ongoing persecution under the Clarendon Code, the Second London Baptist Confession of Faith (2LCF) is published anonymously in London in 1677. A revision of the Savoy Declaration (itself a revision of the Westminster Confession), it adapts Reformed theology to Baptist convictions on baptism and church government. Nehemiah Coxe and William Collins are traditionally credited with a key part in preparing it, though its exact authorship cannot be stated with certainty.",
        figure: "Nehemiah Coxe",
        source: "Wikipedia, Second London Baptist Confession and Nehemiah Coxe ('likely played a key editorial role ... alongside William Collins').",
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
    events: [
      {
        era: 2,
        year: 1668,
        title: "Benjamin Keach's Ministry Begins",
        description:
          "Benjamin Keach, who had been pilloried in 1664 for publishing a children's catechism, becomes pastor of the church at Horsleydown, Southwark, and remains for 36 years until his death in 1704. A meeting house is built for the church in 1672 and is enlarged until it holds nearly a thousand people. In 1673 he has the congregation sing a hymn at the close of the Lord's Supper, and he later promotes congregational hymn singing, a practice that divides Baptist churches.",
        figure: "Benjamin Keach",
        source: "Wikipedia, Benjamin Keach; J. M. Cramp on the meeting house. Keach is generally credited as the first to introduce regular congregational hymn singing in English worship.",
      },
      {
        era: 3,
        year: 1719,
        title: "John Gill Begins a Long Pastorate",
        description:
          "John Gill, born in Kettering, becomes pastor of the Goat Yard Chapel in Horsleydown (Keach's former congregation) and serves for more than 50 years until his death in 1771. His 'Exposition of the Old and New Testaments' and 'A Body of Doctrinal Divinity' make him the first major Baptist theological writer, though he is accused of fostering hyper-Calvinism.",
        figure: "John Gill",
        source: "Wikipedia, John Gill (1719); the Metropolitan Tabernacle history says 1720 for the start of his pastorate (51 years), so the exact year varies.",
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
    events: [
      {
        era: 2,
        year: 1672,
        title: "Bunyan Freed, Pastor of Bedford Meeting",
        description:
          "John Bunyan, born in nearby Elstow, is chosen as pastor of the Bedford Meeting in 1671 while still in Bedford gaol, and is released in May 1672 under the Declaration of Indulgence after twelve years' imprisonment. In prison he writes 'Grace Abounding' and begins work on 'The Pilgrim's Progress', which is completed during a later, shorter imprisonment and published in 1678. Bunyan welcomes paedobaptists to the Lord's table, which puts him at odds with strict Particular Baptists such as Kiffin.",
        figure: "John Bunyan",
        source: "Wikipedia, John Bunyan (chosen pastor 1671; freed 1672). The old wording said he was elected 'after' release and wrote Pilgrim's Progress during the twelve years.",
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
    events: [
      {
        era: 2,
        year: 1628,
        title: "John Bunyan Born",
        description:
          "John Bunyan is born in 1628 in Elstow, near Bedford. The son of a tinker, he serves in the Parliamentary army before a dramatic conversion. His spiritual struggles are recorded in 'Grace Abounding to the Chief of Sinners'. 'The Pilgrim's Progress' becomes one of the most published books in the English language.",
        figure: "John Bunyan",
        source: "Wikipedia, John Bunyan (baptised 30 November 1628). The claim of 'most widely read author after Shakespeare' was removed.",
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
    events: [
      {
        era: 2,
        year: 1664,
        title: "Keach Pilloried",
        description:
          "Benjamin Keach is tried at Aylesbury for publishing 'The Child's Instructor', a primer teaching Baptist principles to children. He is sentenced to two weeks' imprisonment and a fine, and pilloried for several hours at Aylesbury and at Winslow, where a copy of his book is burned. This does not deter him: he moves to London and becomes one of the most influential Baptist pastors of the century.",
        figure: "Benjamin Keach",
        source: "Wikipedia, Benjamin Keach (1664 trial before Sir Robert Hyde).",
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
    events: [
      {
        era: 2,
        year: 1691,
        title: "Knollys' Final Ministry",
        description:
          "Hanserd Knollys' church ends at Broken Wharf on Thames Street after earlier meeting places at Great St Helen's, Coleman Street and Whitechapel. He dies on 19 September 1691, in his ninety-third year, having been one of the signatories of the 1689 Confession two years earlier, and is buried at Bunhill Fields.",
        figure: "Hanserd Knollys",
        source: "Wikipedia, Hanserd Knollys (died 19 September 1691, in his ninety-third year).",
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
    events: [
      {
        era: 2,
        year: 1652,
        title: "Oldest Surviving Welsh Baptist Fellowship",
        description:
          "Llanwenarth is founded in 1652 as the oldest continuing Baptist fellowship in Wales. The present chapel building dates from 1695 (some sources say 1696), later remodelled, and it is the oldest Baptist chapel in Wales, still standing in the village of Govilon. The church's own history says the Welsh Baptist Union was formed there in 1866.",
        figure: null,
        source: "Wikipedia and Coflein (built 1695); Llanwenarth church history. The earlier claim of an association meeting there in 1700 was removed.",
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
    events: [
      {
        era: 2,
        year: 1673,
        title: "Nehemiah Coxe at Hitchin",
        description:
          "Nehemiah Coxe, a member of John Bunyan's Bedford church since 1669, is called in 1673 to serve as pastor of its sub-congregation at Hitchin. After a dispute at Bedford (possibly over open versus closed membership) he moves to the closed-membership Petty France church. His writings on covenant theology strongly influence the later Confession.",
        figure: "Nehemiah Coxe",
        source: "Wikipedia, Nehemiah Coxe.",
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
    events: [
      {
        era: 2,
        year: 1653,
        title: "Early Welsh Baptist Meeting",
        description:
          "On 14–15 July 1653 messengers from several Baptist churches meet at Abergavenny, the earliest Welsh Baptist association meeting recorded by Joshua Thomas, who counted five churches present. It followed earlier gatherings of the Ilston group at Carmarthen (1651). The word 'association' is Thomas's later usage and does not appear in the original records.",
        figure: null,
        source: "Joshua Thomas, History of the Baptist Association in Wales; Journal of Ecclesiastical History article on the Particular Baptists 1644–1660. The earlier list of named churches was removed as unverified.",
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
    events: [
      {
        era: 2,
        year: 1652,
        title: "Abingdon Association Begins",
        description:
          "The Abingdon Association of Particular Baptist churches, drawing churches from Berkshire, Oxfordshire, Buckinghamshire, Hertfordshire, Bedfordshire and Hampshire, begins its life in October 1652. Associations like this one provided mutual support, doctrinal accountability and collective witness during the years of persecution.",
        figure: null,
        source: "Baptist Historical Society records (B. R. White, The Abingdon Association). The claim of 'five regional associations by the 1650s' was removed.",
      },
    ],
  },
  {
    id: "knocklas",
    name: "Knucklas — Vavasor Powell",
    modernName: "Knucklas, Radnorshire, Wales",
    region: "Wales",
    lat: 52.36,
    lng: -3.08,
    significance: "minor",
    events: [
      {
        era: 2,
        year: 1617,
        title: "Vavasor Powell Born",
        description:
          "Vavasor Powell, a Welsh Puritan and Fifth Monarchist (he was not a Baptist), is born in Knucklas, Radnorshire, in 1617. He becomes a fiery itinerant preacher across Wales and an adviser to Parliament on spreading the gospel there. Imprisoned repeatedly after the Restoration, he dies in prison on 27 October 1670.",
        figure: "Vavasor Powell",
        source: "Wikipedia, Vavasor Powell. Claims about founding over 20 churches and a quotation about preaching in 'two or three places in a day' were removed as unverified. He is included for his Welsh nonconformist witness, not as a Baptist.",
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
    events: [
      {
        era: 2,
        year: 1665,
        title: "Dissenters' Burial Ground",
        description:
          "Bunhill Fields serves as the principal burial ground for Nonconformists from the 17th to the 19th centuries. Among the Baptists buried here are William Kiffin, Hanserd Knollys, John Gill and Nehemiah Coxe (in the Portman family vault near John Owen's grave). John Bunyan, John Owen, Daniel Defoe, Susanna Wesley and Isaac Watts also rest here.",
        figure: null,
        source: "Wikipedia and Historic England (Gill's chest tomb); the burial ground dates from the 1660s. The earlier date of 1689 was only a label.",
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
    events: [
      {
        era: 3,
        year: 1689,
        title: "Toleration Act Passed",
        description:
          "The Toleration Act receives royal assent on 24 May 1689, allowing freedom of worship to Protestant Dissenters, such as Baptists, who take the oaths of allegiance and supremacy and reject transubstantiation. After decades of persecution under the Clarendon Code (the Corporation Act of 1661, Act of Uniformity of 1662, Conventicle Acts of 1664 and 1670, and Five Mile Act of 1665), Dissenters can register their own meeting houses, though they remain barred from public office and the universities.",
        figure: null,
        source: "Wikipedia, Toleration Act 1688 (royal assent 24 May 1689).",
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
    events: [
      {
        era: 3,
        year: 1689,
        title: "The 1689 Confession Publicly Adopted",
        description:
          "From 3 to 12 September, representatives of over 100 Particular Baptist churches meet in London and endorse the 1677 Confession, now known as the 1689 Second London Baptist Confession of Faith. It is signed by William Kiffin, Hanserd Knollys, Benjamin Keach and many others. Nehemiah Coxe, who likely played a key editorial role in preparing it, had died on 5 May, four months earlier.",
        figure: "William Kiffin",
        source: "Wikipedia, Second London Baptist Confession (assembly 3–12 September 1689) and Nehemiah Coxe (died 5 May 1689).",
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
    events: [
      {
        era: 3,
        year: 1695,
        title: "Keach's Meeting House",
        description:
          "A meeting house at Winslow, Buckinghamshire, linked to Benjamin Keach's early ministry there, is usually dated to 1695 (its porch carries that date, though Historic England notes the dating is uncertain). It is a Grade II* listed building and is thought to be the oldest surviving nonconformist chapel in Buckinghamshire.",
        figure: "Benjamin Keach",
        source: "Historic England list entry; Buckinghamshire heritage portal. The old claim of 'one of the few surviving 17th-century Baptist meeting houses in England' was removed.",
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
    events: [
      {
        era: 3,
        year: 1691,
        title: "Maze Pond: Split Over Hymn Singing",
        description:
          "Members who opposed congregational hymn singing leave Benjamin Keach's Horsleydown church and form the Maze Pond congregation in Southwark, a church that kept its opposition to hymn singing for decades. Sources date the split differently, to 1673 or to 1691, the year of Keach's 'The Breach Repaired in God's Worship'. The chapel stood near what is now Guy's Hospital.",
        figure: null,
        source: "Wikipedia, Benjamin Keach (1673); other sources (1691, a vote of 1 March 1691). The earlier wording 'split from Carter Lane' was anachronistic and was removed.",
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
    events: [
      {
        era: 3,
        year: 1717,
        title: "Particular Baptist Fund Established",
        description:
          "Six London Particular Baptist churches form the Particular Baptist Fund in 1717 to support ministers and ministerial students and to help plant churches. Other churches soon join it. The Fund still operates today as a registered charity.",
        figure: null,
        source: "Baptist Union of Great Britain, '300 year anniversary'; T. Grass, Money, Mission and Ministry (2018). The earlier exact date, sum and 'iron chest' details could not be verified and were removed.",
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
    events: [
      {
        era: 3,
        year: 1775,
        title: "Andrew Fuller Becomes Pastor at Soham",
        description:
          "Andrew Fuller, born in nearby Wicken in 1754, begins his pastoral ministry at Soham, Cambridgeshire, where he serves until 1782. Here he wrestles with the hyper-Calvinism that had paralysed Particular Baptist evangelism, the notion that the gospel offer cannot be made to the unregenerate. His answer, 'The Gospel Worthy of All Acceptation' (1785), will transform Baptist mission theology.",
        figure: "Andrew Fuller",
        source: "Wikipedia, Andrew Fuller (Soham 1775–1782, Kettering 1782–1815).",
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
    events: [
      {
        era: 4,
        year: 1792,
        title: "Baptist Missionary Society Founded",
        description:
          "On 2 October 1792, at the house of Beeby and Martha Wallis on Lower Street, fourteen men (some accounts count twelve ministers), including Andrew Fuller and William Carey, form the Particular Baptist Society for the Propagation of the Gospel among the Heathen, later the Baptist Missionary Society. They pledge £13 2s 6d. The table and chairs they used are still in the room, now the Carey Mission House. Fuller serves as Secretary, and Carey sails for India the following year.",
        figure: "Andrew Fuller",
        source: "Our Christian Heritage (Carey Mission House); BMS World Mission; Christian Today (the £13 2s 6d pledged).",
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
    events: [
      {
        era: 4,
        year: 1789,
        title: "William Carey's Pastorate",
        description:
          "William Carey becomes the full-time pastor of Harvey Lane Baptist Church in 1789, the last church he serves in England before leaving for India. In 1792 he publishes 'An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens' and preaches the 'Deathless Sermon' on Isaiah 54:2–3 with its famous call: 'Expect great things from God; attempt great things for God.' He sails in 1793 and becomes known as the 'Father of Modern Missions'.",
        figure: "William Carey",
        source: "Wikipedia, William Carey. The old wording placed the sermon at Leicester; it is usually associated with the Nottingham ministers' meeting of 1792.",
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
    events: [
      {
        era: 4,
        year: 1761,
        title: "William Carey Born",
        description:
          "William Carey is born on 17 August 1761 at Pury End in the parish of Paulerspury, the oldest of five children of Edmund and Elizabeth Carey, who were weavers. At 14 he is apprenticed to a shoemaker at Piddington. His self-taught knowledge of languages and geography fuels a passion for world mission that changes the course of evangelical Christianity.",
        figure: "William Carey",
        source: "Wikipedia, William Carey.",
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
    events: [
      {
        era: 4,
        year: 1834,
        title: "Charles Haddon Spurgeon Born",
        description:
          "Charles Haddon Spurgeon is born on 19 June 1834 in Kelvedon, Essex, son and grandson of Independent (Congregational) ministers. The family moves to Colchester when he is ten months old, and he spends formative childhood years with his grandfather at Stambourne, Essex.",
        figure: "Charles Haddon Spurgeon",
        source: "Wikipedia, Charles Spurgeon.",
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
    events: [
      {
        era: 4,
        year: 1850,
        title: "Spurgeon's Conversion",
        description:
          "On 6 January 1850, a snowstorm drives fifteen-year-old Charles Spurgeon into a Primitive Methodist chapel in Artillery Street, Colchester. A lay preacher takes the text from Isaiah 45:22: 'Look unto me, and be ye saved, all the ends of the earth.' Spurgeon later recalls that at that moment the cloud on his heart was gone, the darkness rolled away, and he saw the Sun of Righteousness.",
        figure: "Charles Haddon Spurgeon",
        source: "Wikipedia, Charles Spurgeon (6 January 1850, Artillery Street, Isaiah 45:22).",
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
    events: [
      {
        era: 4,
        year: 1852,
        title: "Spurgeon's First Pastorate",
        description:
          "While still a teenager, Spurgeon becomes pastor of the small Baptist chapel at Waterbeach, Cambridgeshire. Under his preaching the congregation grows and the village is transformed. Within two years his fame reaches London, and he is called to New Park Street Chapel in Southwark.",
        figure: "Charles Haddon Spurgeon",
        source: "Sources date his Waterbeach pastorate to 1851 or 1852 (DNB and Britannica say 1852); the earlier wording 'at just 17' was removed.",
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
    events: [
      {
        era: 4,
        year: 1854,
        title: "Spurgeon Called to London",
        description:
          "In April 1854, at age 19 and after three months on probation, Spurgeon is called to the historic New Park Street Chapel in Southwark, the church once pastored by Benjamin Keach and John Gill. The congregation quickly outgrows the building and moves to Exeter Hall, then to the Surrey Gardens Music Hall (which could hold some 10,000), until the Metropolitan Tabernacle is built.",
        figure: "Charles Haddon Spurgeon",
        source: "Wikipedia, Charles Spurgeon (April 1854, age 19; Exeter Hall, then Surrey Gardens). The earlier text had the two halls in the wrong order.",
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
    events: [
      {
        era: 4,
        year: 1861,
        title: "Metropolitan Tabernacle Opens",
        description:
          "The congregation moves to the newly built Metropolitan Tabernacle at Elephant and Castle, Southwark, opened on 18 March 1861 with seating for about 5,000 and standing room for another 1,000, the largest nonconformist church of its day. Spurgeon preaches there for more than 30 years. He founds a pastors' college, an orphanage and a colportage association, and his sermons are published weekly and translated worldwide, earning him the title 'The Prince of Preachers'.",
        figure: "Charles Haddon Spurgeon",
        source: "Wikipedia, Charles Spurgeon and Metropolitan Tabernacle (5,000 seated plus 1,000 standing; 'largest nonconformist church of its day'). The old text said 'largest church building in the world'.",
      },
      {
        era: 4,
        year: 1887,
        title: "The Downgrade Controversy",
        description:
          "Spurgeon publishes articles in 'The Sword and the Trowel' warning of theological decline within the Baptist Union, including liberalism, denial of biblical inspiration, and loss of substitutionary atonement. He withdraws from the Baptist Union in October 1887, and its Council censures him in January 1888. Spurgeon, in failing health, dies on 31 January 1892 in Menton, France.",
        figure: "Charles Haddon Spurgeon",
        source: "Wikipedia, Charles Spurgeon and Downgrade Controversy; Christian History Institute (the censure vote, January 1888). The exact day of the resignation was not confirmed.",
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
    events: [
      {
        era: 2,
        year: 1640,
        title: "Benjamin Keach Born",
        description:
          "Benjamin Keach is born on 29 February 1640 at Stoke Hammond, Buckinghamshire. He begins preaching at 18 and ministers at Winslow before persecution drives him to London, where he becomes one of the most important Particular Baptist pastors of the 17th century. His Horsleydown congregation is a direct ancestor of Spurgeon's Metropolitan Tabernacle.",
        figure: "Benjamin Keach",
        source: "Wikipedia, Benjamin Keach; Metropolitan Tabernacle.",
      },
    ],
  },
];

// Route connections between locations for each era (the vertices match location coordinates exactly)
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
      [-2.16, 51.99], // Tewkesbury
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
      [-0.089, 51.524], // Bunhill Fields
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
      [-0.08, 51.5], // Horsleydown (Gill)
      [-0.085, 51.51], // PBF
      [-0.088, 51.504], // Maze Pond
      [-0.88, 51.95], // Winslow
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
    role: "Founder of the first General Baptist church in England",
    bio: "Established the first Baptist church on English soil (General Baptist) at Spitalfields in 1612. Wrote one of the first English works to argue for universal religious liberty. Died in Newgate Prison around 1616.",
  },
  {
    id: "henry-jacob",
    name: "Henry Jacob",
    years: "1563–1624",
    role: "Founder of the Jacob-Lathrop-Jessey Church",
    bio: "Gathered the semi-separatist independent church in Southwark (1616) from which the Particular Baptists would emerge. Sailed for Virginia in 1622 and died in 1624.",
  },
  {
    id: "john-spilsbury",
    name: "John Spilsbury",
    years: "fl. 1630s–1660s",
    role: "Early Particular Baptist leader",
    bio: "Traditionally credited with leading the first Particular Baptist congregation, formed in 1633, and with practising believer's baptism by immersion. Signatory of the 1644 First London Confession. His link with Wapping is disputed.",
  },
  {
    id: "william-kiffin",
    name: "William Kiffin",
    years: "1616–1701",
    role: "Pastor of Devonshire Square; leader of London Baptists",
    bio: "Wealthy merchant who pastored the Devonshire Square church until his death in 1701. Signatory of the 1644 and 1689 Confessions. One of the most influential Baptists of the 17th century.",
  },
  {
    id: "hanserd-knollys",
    name: "Hanserd Knollys",
    years: "1598–1691",
    role: "Prominent Particular Baptist minister",
    bio: "Born in Lincolnshire, educated at Cambridge. Gathered a church in 1646 that met first at Great St Helen's. Subscribed the 1646 edition of the First London Confession and the 1689 Confession. Died in his ninety-third year and was buried at Bunhill Fields.",
  },
  {
    id: "henry-jessey",
    name: "Henry Jessey",
    years: "1601–1663",
    role: "Third pastor of the JLJ Church",
    bio: "Led the Jacob-Lathrop-Jessey church from 1637. Under his pastorate the church moved toward Baptist views. A bridge figure between Independency and the Particular Baptists.",
  },
  {
    id: "dorothy-hazzard",
    name: "Dorothy Hazzard",
    years: "d. 1674",
    role: "Founder of Broadmead Church, Bristol",
    bio: "Formerly Dorothy Kelly. With four others she founded the first dissenting church in Bristol in 1640, the congregation that became Broadmead Baptist Church. Also played a part in the defence of Bristol during the Civil War.",
  },
  {
    id: "benjamin-keach",
    name: "Benjamin Keach",
    years: "1640–1704",
    role: "Pastor of Horsleydown; hymn singing pioneer",
    bio: "Pilloried at Aylesbury in 1664 for publishing a children's catechism. Pastored Horsleydown for 36 years. Promoted congregational hymn singing. Attended the 1689 General Assembly. His church became the Metropolitan Tabernacle.",
  },
  {
    id: "nehemiah-coxe",
    name: "Nehemiah Coxe",
    years: "d. 1689",
    role: "Key editor of the 1677/1689 Confession",
    bio: "Pastor at Hitchin and then Petty France. Likely played a key editorial role in the Second London Baptist Confession alongside William Collins. Died on 5 May 1689, four months before the General Assembly. A leading Baptist covenant theologian.",
  },
  {
    id: "hercules-collins",
    name: "Hercules Collins",
    years: "1647–1702",
    role: "Pastor of Wapping; catechist and confessor",
    bio: "Pastored the Wapping church for about 25 years from 1677. Published 'An Orthodox Catechism' (1680). Imprisoned in Newgate in 1683–1684.",
  },
  {
    id: "vavasor-powell",
    name: "Vavasor Powell",
    years: "1617–1670",
    role: "Welsh Puritan itinerant preacher (not a Baptist)",
    bio: "Born in Knucklas, Radnorshire. A Fifth Monarchist and adviser to Parliament on the gospel in Wales. Repeatedly imprisoned; died in prison in 1670.",
  },
  {
    id: "john-bunyan",
    name: "John Bunyan",
    years: "1628–1688",
    role: "Author of 'The Pilgrim's Progress'; pastor of Bedford",
    bio: "Imprisoned twelve years for nonconformity (1660–1672). Chosen pastor of the Bedford Meeting in 1671. Author of one of the most published books in English. An open-communion Baptist.",
  },
  {
    id: "john-gill",
    name: "John Gill",
    years: "1697–1771",
    role: "Theologian; pastor of Horsleydown for over 50 years",
    bio: "Born in Kettering. The first major Baptist theological writer, author of 'A Body of Doctrinal Divinity' and a commentary on the whole Bible. Served the Horsleydown congregation (Keach's church) from 1719 until his death. Buried at Bunhill Fields.",
  },
  {
    id: "andrew-fuller",
    name: "Andrew Fuller",
    years: "1754–1815",
    role: "Theologian; Secretary of the Baptist Missionary Society",
    bio: "His 'Gospel Worthy of All Acceptation' (1785) broke the hyper-Calvinist deadlock. Pastor at Soham (1775–1782) and Kettering (1782–1815). Co-founded the BMS at Kettering in 1792 and served as its Secretary until his death.",
  },
  {
    id: "william-carey",
    name: "William Carey",
    years: "1761–1834",
    role: "Father of Modern Missions",
    bio: "Born in Paulerspury. Self-taught linguist. Published 'An Enquiry' urging Christian mission. Sailed for India in 1793. Translated the Bible into Bengali, Sanskrit, Marathi and other languages.",
  },
  {
    id: "charles-spurgeon",
    name: "Charles Haddon Spurgeon",
    years: "1834–1892",
    role: "The Prince of Preachers",
    bio: "Converted at 15. Pastor of New Park Street from 1854 and of the Metropolitan Tabernacle from 1861. Founded a college, an orphanage and a colportage association. Led the Downgrade Controversy against theological liberalism.",
  },
];

// Source references linked to locations (shown in the About panel and README)
export const sources = [
  { location: "spitalfields", ref: "Helwys, 'A Short Declaration of the Mistery of Iniquity', 1612" },
  { location: "southwark-jlj", ref: "B.R. White, 'The English Separatist Tradition', 1971" },
  { location: "wapping", ref: "First London Confession of Faith, 1644; N. Sherman, 'The Wapping Baptists'" },
  { location: "devonshire-square", ref: "First London Confession of Faith, 1644; Kiffin, 'Remarkable Passages in the Life of William Kiffin', 1823" },
  { location: "petty-france", ref: "Second London Baptist Confession of Faith, 1677/1689; Petty France blog, pettyfrance.wordpress.com" },
  { location: "bunyan-bedford", ref: "Bunyan, 'Grace Abounding to the Chief of Sinners', 1666; 'The Pilgrim's Progress', 1678" },
  { location: "metropolitan-tabernacle", ref: "Spurgeon, 'The Sword and the Trowel', 1887; 'Autobiography', 1897–1900" },
  { location: "kettering", ref: "Fuller, 'The Gospel Worthy of All Acceptation', 1785; Carey, 'An Enquiry', 1792" },
];

// ------------------------------------------------------------
// Derived data (built once at load)
// ------------------------------------------------------------

// Stop numbers: within each era, events are numbered in chronological order.
(() => {
  [1, 2, 3, 4].forEach((eraId) => {
    const evts = [];
    locations.forEach((loc, li) => loc.events.forEach((evt, ei) => { if (evt.era === eraId) evts.push({ evt, li, ei }); }));
    evts.sort((a, b) => a.evt.year - b.evt.year || a.li - b.li || a.ei - b.ei);
    evts.forEach((x, i) => { x.evt.order = i + 1; });
  });
  // each location's eras come from its events, so filters never show a location with nothing to read
  locations.forEach((loc) => {
    loc.eras = [...new Set(loc.events.map((e) => e.era))].sort((a, b) => a - b);
    loc.firstYear = Math.min(...loc.events.map((e) => e.year));
  });
})();

/** The era a year belongs to (years before the first era count as era 1). */
export function eraForYear(year) {
  if (year < 1644) return 1;
  if (year < 1689) return 2;
  if (year < 1792) return 3;
  return 4;
}

export const eraIndex = (() => {
  const idx = {};
  eras.forEach((era) => { idx[era.id] = era; });
  return idx;
})();

export const locationIndex = (() => {
  const idx = {};
  locations.forEach((loc) => { idx[loc.id] = loc; });
  return idx;
})();

export const figureIndex = (() => {
  const idx = {};
  figures.forEach((fig) => { idx[fig.id] = fig; });
  return idx;
})();

// Timeline: all events flattened and sorted by year
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
