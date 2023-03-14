
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching';


declare var self: ServiceWorkerGlobalScope;

/**
 * Применяем версию воркера немедленно для всех вкладок
 */
setCacheNameDetails({
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache",
});

clientsClaim();

/**
 * Получаем существующий кэш-манифест или устанавливаем пустой
 */
const manifest = self.__WB_MANIFEST || [];

/**
 * Устанавливаем манифест
 */
cleanupOutdatedCaches();
precacheAndRoute(manifest, {
  ignoreURLParametersMatching: [/.*/]
});

const navigationHandler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(navigationHandler);

registerRoute(navigationRoute);


/**
 * Устанавливаем стратегию получения ресурса шрифтов первоначально из кэша.
 * Время хранения 180 дней
 */
const CACHE_ENV_NAME = `env-precache`;
const CACHE_FONTS_NAME = `fonts-precache`;
const CACHE_IMAGES_NAME = `images-precache`;
const CACHE_MANIFEST_NAME = `manifest-precache`;


registerRoute( ({ request }) => {
  return request.destination === 'font';
}, new CacheFirst({
  cacheName: CACHE_FONTS_NAME,
  plugins: [
    new ExpirationPlugin ({
      maxEntries: 10,
      maxAgeSeconds: 180 * 24 * 60 * 60, // 180 дней
    }),
  ],
}));

registerRoute( ({ request }) => {
  return request.destination === 'image';
}, new NetworkFirst({
  cacheName: CACHE_IMAGES_NAME,
  plugins: [
    new ExpirationPlugin ({
      maxEntries: 50,
      maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
    }),
  ],
}));


registerRoute(
  ({ url }) => url.pathname.match(/(manifest.json)/),
  new CacheFirst({
    cacheName: CACHE_MANIFEST_NAME,
    plugins: [
      new ExpirationPlugin ({
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60, // 1 дней
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.pathname.match(/(env.js)/),
  new CacheFirst({
    cacheName: CACHE_ENV_NAME,
    plugins: [
      new ExpirationPlugin ({
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60, // 7 дней
      }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting()
      .then(() => console.log('Все вкладки были обновлены'));
  }
});
