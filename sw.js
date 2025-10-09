const CACHE = "v1-portfolio";
const ASSETS = [
  "/", "/index.html", "/styles.css", "/script.js",
  "/blog/index.html",
  "/site.webmanifest",
  "/assets/og-img.png"          // 必要に応じて追記
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  // HTML はネット優先、それ以外はキャッシュ優先
  if (req.headers.get("accept")?.includes("text/html")) {
    e.respondWith(
      fetch(req).then(r => {
        const clone = r.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
        return r;
      }).catch(() => caches.match(req))
    );
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
  }
});
