# 1689 Heritage Trail

An interactive historical atlas tracing the Particular Baptist heritage across England and Wales, from the first congregations of the 1610s and 1630s through the era of Spurgeon and the Metropolitan Tabernacle, centered on the **1689 Second London Baptist Confession of Faith**. The whole app is bilingual (English / Español).

**Live Site:** [https://garridolecca.github.io/1689-heritage-trail/](https://garridolecca.github.io/1689-heritage-trail/)

## Four Eras

| Era | Period | Theme |
|-----|--------|-------|
| **Origins** | 1612–1644 | First churches and the 1644 Confession |
| **Persecution** | 1644–1689 | The Clarendon Code and the 1677 Confession |
| **Toleration** | 1689–1792 | Public confession and institutional growth |
| **Mission** | 1792–1892 | Global mission and the Prince of Preachers |

## Features

- Interactive map with **38 historical locations** across England and Wales, **45 dated events** and **16 key figures**
- Color-coded markers and routes by era, with era filtering
- **Search** across places, events and people, in English or Spanish at once (accent-insensitive), with arrow-key navigation
- **Year bar with Play / Pause (1612–1892)**: drag the slider or press Play and locations, routes and events appear as their dates are reached; the current era and the latest event are shown
- **Deep links**: `?lang=`, `era=`, `year=` and `loc=` are kept in the address bar as you navigate, and a **Share** button copies the link
- Language is remembered between visits (the splash chooser is skipped on return; switch any time with the ES / EN button)
- Timeline panel, Key Figures panel and an "All Places" list that works as a keyboard alternative to the map markers
- Each card carries a **source note** where a point was corrected, is debated or is cautiously worded
- Support / contact window and a "How to use" section (English and Spanish)
- Responsive design (mobile, tablet, desktop)

### Accessibility

Controls have accessible names, windows trap and restore focus, **Escape** closes the top-most window, search list, panel or place card, the places list is fully keyboard-operable, the muted text colors meet the 4.5:1 contrast minimum, and **`prefers-reduced-motion`** turns off animations and makes playback step by decades without map movement.

## Tech Stack

- **ArcGIS Maps SDK for JavaScript 5.0**: mapping and geospatial visualization (public Esri Light Gray tiles, no API key)
- **Calcite Design System**: UI components
- **Vanilla ES Modules**: zero-build, no dependencies
- **GitHub Pages**: static hosting

Files: `js/data.js` (locations, events, figures, routes), `js/content-es.js` (Spanish text for events and figures), `js/i18n.js` (interface text and language handling), `js/app.js` (map and UI).

Run it locally with any static server, for example `python -m http.server 5192`, then open `http://localhost:5192/`.

## Data and corrections

The historical data was checked against Wikipedia and published sources (see below). Points that were wrong or unsupported were corrected or softened, and the card for each one says what changed. Examples: the 1612 Spitalfields church is now described as the first **General** Baptist church; John Bunyan was chosen pastor in 1671 while still in gaol; Spurgeon's halls are in the right order (Exeter Hall, then Surrey Gardens); the 1357 date for Hill Cliffe is marked as local tradition; and figures that could not be verified (the Particular Baptist Fund's opening sum, Collins's membership numbers, Vavasor Powell's number of churches) were removed.

Debated points that are shown with a caution rather than settled: the Spilsbury–Wapping link, the date Kiffin became pastor of Devonshire Square (1639 or 1653), the date of the Maze Pond split over hymn singing (1673 or 1691), the start of John Gill's pastorate (1719 or 1720), and Spurgeon's start at Waterbeach (1851 or 1852).

## Sources

Historical data compiled from:
- [Petty France](https://pettyfrance.wordpress.com/): Ressourcing Baptistic Congregationalist and Particular Baptist History
- Wikipedia articles on the people, places, the First and Second London Confessions and the Toleration Act
- Baptist Historical Society and *Baptist Quarterly* articles; B. R. White's work on English Separatism
- Historic England listings (Keach's Meeting House, Winslow; Bunhill Fields); Coflein (Llanwenarth)
- Our Christian Heritage (Carey Mission House); BMS World Mission; the Baptist Union of Great Britain

## License

MIT
