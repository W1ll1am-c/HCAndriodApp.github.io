'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c8254b12db6086622d1703c501629d2",
"assets/AssetManifest.bin.json": "0df7a794f3d195cf160eb711d98ab4f5",
"assets/AssetManifest.json": "9aef820e7f945c1990491a04caa5e08a",
"assets/assets/icons/3DHoloBox.svg": "c2940e5bc6de3baf3accd475c15d8fed",
"assets/assets/icons/Arrow%2520-%2520Left%25202.svg": "4fe3160ddfd0740b6e0467f691a2cb55",
"assets/assets/icons/bgTEMP1.svg": "2e209bebf2ac16ab8bef0f0954e8886f",
"assets/assets/icons/Cardback.svg": "32e9f279c954e281f7e9d24d525d6302",
"assets/assets/icons/cerberus.svg": "2d824f51c400229b8280eed1f66381df",
"assets/assets/icons/ContactUs.svg": "9ca8d1168473b5790c9517e8e4b30c16",
"assets/assets/icons/gorgon.svg": "53e5169eb7ec269c8f681472b493265c",
"assets/assets/icons/HCimg.svg": "07393a7b8bf9f80842f78901521f2cf5",
"assets/assets/icons/homeBGTEMP.svg": "e9fdfe6a9e3f19d9fea2b9fcf11e9bd5",
"assets/assets/icons/MainLogo.svg": "69f9b7112ff64d980c22ce13280b9f5b",
"assets/assets/icons/satyr.svg": "4ebc304feef50902e3831b80b92efdfb",
"assets/FontManifest.json": "8ba6d4db5565e4845c7b56ec728541e4",
"assets/fonts/aclonica.ttf": "ee86cb631d423ec0e6b07132fb67a47d",
"assets/fonts/Gotham-Ultra.otf": "ec117378abcef78692f7be3dcf12952f",
"assets/fonts/GothamNarrow-Medium.otf": "2b7a6f09249d6f4b8bae57d92772ffb8",
"assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "6c1feaf9cdb65501d77ffc684f703174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"boilerplate.html": "2f32d9e2259db50d7ab99dd4451cc7f1",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"css/aclonica.ttf": "ee86cb631d423ec0e6b07132fb67a47d",
"css/animation.css": "c645340cd468689539dd28b6e00d94fc",
"css/Gotham-Ultra.otf": "ec117378abcef78692f7be3dcf12952f",
"css/GothamNarrow-Medium.otf": "2b7a6f09249d6f4b8bae57d92772ffb8",
"css/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"css/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"css/index.css": "e4a6ab86a7ec9d2d3f0870db4515ec98",
"css/learn.css": "16e8f2ef52765cab1f8cbad9b31c0b10",
"css/style.css": "42da16c9e5032457505857508f96931a",
"css/update.css": "c9b8a46b691fb03154c5fef064a956f1",
"database.html": "db1517d52b9a172ffcaafe5f4e56c200",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "847a6cd0b0d8f30d8c4ff073bf27035b",
"image/bc.png": "559ff25334a5642c7bb869957933415d",
"image/c.PNG": "b741f0cb3ea58c43955dbcc4f16079e0",
"image/cb.png": "ea3ebc266e1a3231c1702be3c14674ca",
"image/favicon.png": "d57e5da47b50496f647e585913b0d573",
"image/g.PNG": "0140ba0d8660c213194a5fc8a8547908",
"image/HC-No-BG.png": "8a30a8849dc9685530e816593b2af6b5",
"image/HC.png": "77a81b73c306aa85f4e2cc5ca3e22861",
"image/m.PNG": "3b1be1ffefc5bb841aa66fd085161530",
"image/pp.png": "cf48797bbeea0b0f94426b91ad029ad9",
"image/satyr.PNG": "283cf7ed14c17d12f1b324e0b2468293",
"image/sc.png": "1a753e7bbcb340a89d68d7496fb20689",
"image/ta.PNG": "b5c35ce78caaa697a94615ee2eec67df",
"image/th.PNG": "b9ece351e3394cedec3bef3d8f17077e",
"image/uc.png": "2133f6f6ba18686fff6ff5f440f835fe",
"index.html": "b8f19aace47323d1e04cb030ffb09a71",
"/": "b8f19aace47323d1e04cb030ffb09a71",
"learn.html": "adfb1a54023d2d96ce9902eb18ae9b9e",
"main.dart.js": "5a5c92d07f19a9c990e0e50a316f34df",
"manifest.json": "a721970d77a66d605803827e86b734f7",
"playnow.html": "9d0bcf0fe16b84fb0dc5cffbb6a79945",
"Scripts/blink.js": "8eed273f494ea67e7508621b6c67dfe7",
"Scripts/script.js": "0d192bc7d4665cc6dce850c470842bd8",
"Scripts/scroll.js": "d4beb303f60ef54d354a905df769f820",
"update.html": "e0de3542dc0eb886e2d56e7c363d8e53",
"version.json": "9bc0b69892f13cd69ebd83c4a6839e2e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
