self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!="GET")return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open("gray-fog-v1").then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
