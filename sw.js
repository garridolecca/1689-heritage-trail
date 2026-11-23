// Offline shell: this app's own files are cached; the map SDK and tiles always come from the network.
const VER = "ht-v2";
const SHELL = ["./", "index.html", "css/styles.css", "css/fonts.css", "js/app.js", "js/data.js", "js/i18n.js", "js/content-es.js", "js/confession.js", "fonts/cinzel.woff2", "fonts/inter.woff2", "img/venmo-qr.svg", "icon.svg", "manifest.webmanifest"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VER).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VER).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // network first so updates show up, cache when offline
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok) { const copy = r.clone(); caches.open(VER).then((c) => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then((m) => m || caches.match("index.html"))));
});
