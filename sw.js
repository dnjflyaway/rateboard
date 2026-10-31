const CACHE="rateboard-shell-v3",SHELL=["./","./index.html","./fonts/archivo-latin.woff2","./fonts/archivo-latin-ext.woff2","./icon.svg","./icon-192.png","./icon-512.png","./manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// App shell: network-first so updates show up; cache as offline fallback. Rate APIs are not cached here (the page keeps its own saved copy).
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 if(new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy));return res}).catch(()=>caches.match(r).then(m=>m||caches.match("./index.html"))))});
