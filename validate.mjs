// Data checks for the 1689 Heritage Trail. Run: node validate.mjs   (exit code 1 when anything fails)
import { locations, figures, routes, eras, timeline, YEAR_MIN, YEAR_MAX, eraForYear } from "./js/data.js";
import { eventsEs, figuresEs } from "./js/content-es.js";
import { readFileSync } from "node:fs";

const problems = [];
const bad = (m) => problems.push(m);
const warn = [];

// i18n.js touches `document`/`location`, so read its Spanish place names as text instead of importing it
const i18nSrc = readFileSync(new URL("./js/i18n.js", import.meta.url), "utf8");
const esPlaces = new Set([...i18nSrc.matchAll(/^\s+"?([a-z0-9-]+)"?: \{ name:/gm)].map((m) => m[1]));

const ids = new Set();
for (const loc of locations) {
  if (ids.has(loc.id)) bad(`duplicate location id ${loc.id}`);
  ids.add(loc.id);
  if (!(loc.lat >= -90 && loc.lat <= 90 && loc.lng >= -180 && loc.lng <= 180)) bad(`${loc.id}: coordinates out of range`);
  if (!esPlaces.has(loc.id)) bad(`${loc.id}: no Spanish place name`);
  if (!loc.events.length) bad(`${loc.id}: no events`);
  for (const e of loc.events) {
    if (e.year > YEAR_MAX) bad(`${e.id}: year after ${YEAR_MAX}`);
    if (e.year < YEAR_MIN) warn.push(`${e.id}: year ${e.year} is before the slider start (${YEAR_MIN}); it shows from the first year`);
    if (e.era !== eraForYear(e.year)) bad(`${e.id}: era ${e.era} does not match year ${e.year}`);
    if (!e.title || !e.description) bad(`${e.id}: missing title or description`);
    if (!e.source) warn.push(`${e.id}: no source note`);
    const es = eventsEs[e.id];
    if (!es) bad(`${e.id}: no Spanish text`);
    else for (const f of ["title", "description", "source"]) if (e.source || f !== "source") { if (!es[f]) bad(`${e.id}: Spanish ${f} missing`); }
  }
}
const evtIds = new Set(timeline.map((e) => e.id));
for (const k of Object.keys(eventsEs)) if (!evtIds.has(k)) bad(`content-es.js has "${k}" which matches no event`);
const evtKeys = timeline.map((e) => e.id);
if (new Set(evtKeys).size !== evtKeys.length) bad("two events share one id (same place and year)");

for (const f of figures) {
  if (!figuresEs[f.id]) bad(`figure ${f.id}: no Spanish text`);
  const named = locations.some((l) => l.events.some((e) => e.figure === f.name));
  if (!named) warn.push(`figure ${f.name}: appears in no event (the Figures panel cannot jump to a place)`);
}
for (const l of locations) for (const e of l.events) if (e.figure && !figures.some((f) => f.name === e.figure)) bad(`${e.id}: figure "${e.figure}" has no entry in figures`);

const coords = new Set(locations.map((l) => `${l.lng},${l.lat}`));
for (const r of routes) r.path.forEach((p, i) => { if (!coords.has(p.join(","))) bad(`route era ${r.era} vertex ${i} [${p}] matches no location`); });

const gaps = [];
for (let d = 1610; d < 1900; d += 10) if (!timeline.some((e) => e.year >= d && e.year < d + 10)) gaps.push(d);
console.log(`${locations.length} places, ${timeline.length} events, ${figures.length} figures, ${routes.length} routes`);
console.log(`Decades with no event: ${gaps.length ? gaps.map((d) => d + "s").join(", ") : "none"}`);
if (warn.length) console.log("Notes:\n  " + warn.join("\n  "));
if (problems.length) { console.error("PROBLEMS:\n  " + problems.join("\n  ")); process.exit(1); }
console.log("All checks passed.");
