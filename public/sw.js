// Service Worker de Linarópolis
// Permite que la app funcione sin conexión a internet

const CACHE_NAME = 'linaropolis-v1';

// Al instalar el Service Worker, cacheamos los archivos básicos
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
      ]);
    })
  );
});

// Estrategia: primero intenta la red, si falla usa la caché
self.addEventListener('fetch', (evento) => {
  evento.respondWith(
    fetch(evento.request)
      .then((respuesta) => {
        // Guardamos una copia en caché de cada recurso que descargamos
        const copiaRespuesta = respuesta.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(evento.request, copiaRespuesta);
        });
        return respuesta;
      })
      .catch(() => {
        // Si no hay red, buscamos en la caché
        return caches.match(evento.request);
      })
  );
});
