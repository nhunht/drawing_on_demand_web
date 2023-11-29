'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0cdb6d86ff38178d519c341cc1820c26",
"assets/AssetManifest.json": "0ae9e7531dcb7f48de2e8217baf6f626",
"assets/FontManifest.json": "e14833c4dad144afe5aae37991bf06a7",
"assets/fonts/MaterialIcons-Regular.otf": "5c3fbce98e83ab6a08b3e9243e244d8f",
"assets/images/b.png": "c6c28ceff05db701b75a9ef91da16981",
"assets/images/banner.png": "2579f65682d95f1841be52568e9ff191",
"assets/images/bg.png": "602750d7d52e96249aa8a971b136e782",
"assets/images/bg.svg": "ac466baa7d25b879151b193a8b03512b",
"assets/images/bg2.png": "cab7718464b3561a8cf386a5cfdfd482",
"assets/images/bkash.png": "1152e676657c42366be7c89bf0d33e53",
"assets/images/bkash2.png": "81296cd34085e35d6d8ff00d34e5c0b1",
"assets/images/card.png": "eb06c7ab852bf615f561a756352f86ca",
"assets/images/cardbg.png": "87b285b964ca246c0a175d0b535f7330",
"assets/images/cb.png": "1cd6eb0a592eadd949f3c76973c7b031",
"assets/images/co.png": "8759704c70cb6d0a6b3480620eee622d",
"assets/images/creditcard.png": "b72361b964134405250bb72dd3427f2e",
"assets/images/dev1.png": "536a470d373a4c6d9f235d348cf3bb34",
"assets/images/dev2.png": "37e6481fa99e2646e8b8c008cf03c6b7",
"assets/images/dm.png": "8d167fab3d27ee849cd48bcf6d676392",
"assets/images/Ellipse%25207.png": "0013d9fdfb0e60c630beb37dc2771b3f",
"assets/images/emptyservice.png": "2102054e3fa9bc389feba7979bf8f0ba",
"assets/images/file.png": "48ee813fa5a798e5915ebdb5f1fa36f0",
"assets/images/google.png": "32525c53f6cc4b96481d0eba6c4aa921",
"assets/images/graphic.png": "74b1ab6c5fce96eebfd4479296aa42fe",
"assets/images/graphics.png": "85d705c397a0e96bae7390f118abe3d4",
"assets/images/io.png": "09bf05e197d059a9a4d7de6a25f572cf",
"assets/images/l.png": "2d4f14316ce9765893741e6139493eb7",
"assets/images/logo.png": "a1c866db03e5b3d74aed0a3a21f82b4c",
"assets/images/logo2.png": "1c93ae934865578fb112057bbeb5f085",
"assets/images/onboard1.png": "753849f4fa784df63cd30e590ffa96dc",
"assets/images/onboard2.png": "2ce41d9ee5c980440c70e275d451c1eb",
"assets/images/onboard3.png": "9c6aadc678e43390589b8756305fbd88",
"assets/images/p.png": "378af94d5935bdf7fcf0842046add20c",
"assets/images/paypal.png": "925a34148dd130b4904b2afe63a81038",
"assets/images/paypal2.png": "1fcc13609a1cfdf93215570b4db8f39f",
"assets/images/pic1.png": "7cf65db48a6b7cbeecb6231ed3bf3594",
"assets/images/pic2.png": "d28e7e1ca619abbc843cb2765cbb1080",
"assets/images/profile1.png": "7e2e0baa83e709ae0943aa13010dbc1e",
"assets/images/profile2.png": "e606fde90dbe9ef6c853f27af3150f8e",
"assets/images/profile3.png": "27e229bc34027b1e8519c270dcbe451b",
"assets/images/profilepic.png": "0013d9fdfb0e60c630beb37dc2771b3f",
"assets/images/profilepic2.png": "591ec63296e153a96e74668b2205b0c3",
"assets/images/refer.png": "c4b9d61431b7fbdd940ddb382eea5879",
"assets/images/robot.png": "01c5733e629ea8534b27e35d9d5c6723",
"assets/images/shot1.png": "36e70f73999ce700b4a5ecb6c05d27f1",
"assets/images/shot2.png": "b9ec1350aa76cdc0b671c43e2aac31bd",
"assets/images/shot3.png": "d47281d304dc42716a6c1b793b1cf13e",
"assets/images/shot4.png": "55aa8e81616afefd86116044ff511ee8",
"assets/images/shot5.png": "295795b37ded77b9ef8890cc08110228",
"assets/images/success.png": "53f6715578e39d361a5a8b32955d82c1",
"assets/images/t.png": "57fe1ac9d614ac96af86aeba7721205d",
"assets/images/td.png": "14f5318b4cbcab80f8f09a1b350caa54",
"assets/images/thumbs.png": "3b0c8bfa82e4eee8802315c8f875b7eb",
"assets/images/to.png": "b2f6cceac93a53912993e2287bd66476",
"assets/images/tt.png": "ec14336659fe74dbe6512d84813d42a2",
"assets/images/usericon.png": "627ed97553e1083ee0c04d6e5e9e8f12",
"assets/images/video.png": "278ff775a99d88a25a32f8f7dfe2f0ca",
"assets/images/videoicon.png": "72b9e31285c515f286ad864175fad5f9",
"assets/NOTICES": "74ec2da022850f6e8b63197fc63704b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "479c6f5b75352f78038dfe9cdb47fab2",
"/": "479c6f5b75352f78038dfe9cdb47fab2",
"main.dart.js": "e8e43bca41a9cafa8faa18c97a0f1280",
"manifest.json": "11d6ecce0c1c705c06faf0e59a1eb85a",
"version.json": "8714b18422dc87cee2010a47c6c3badf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
