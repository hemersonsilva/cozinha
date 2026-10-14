// Minimal service worker: only what Chrome needs to offer "Install app", so that
// "Compartilhar → Meus Centavos" appears in Android's share sheet. Requests go straight to the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
