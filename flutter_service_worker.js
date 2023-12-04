'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6822f722fab261c8e01e9529a549076f",
".git/config": "f3b852ea222fad8a7ac72acf98872dfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e0599eb4529ae72c24d5cb1971fa41e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61b8dcddf9c92346326fb8005f814f09",
".git/logs/refs/heads/main": "36c6b3c47f4a310c40c868c22f116c16",
".git/logs/refs/remotes/origin/main": "52bcc04692fbc93a02c7e0511ac77d93",
".git/objects/02/3375ad0dbf0c1c8c74f3737f7ed3efa80f96fc": "b4e8fa8e57d2122f7b74a2d62909dacf",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/5dd7ec32df17d6af21a8a24719112b2042dfd9": "04f0be7970b34677fa95267d5b11a196",
".git/objects/0b/c11219e9fca748ad87c3d49c67992a51b3a768": "b1f5ac372ae24b0160e61e96deae9e61",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2d/63dd56e75800948abb23033dadb6cd80f42583": "b26f0d5030a51105124975be8150d1d4",
".git/objects/31/f700d4784413601f001b58ac2ce390cfa01612": "d9f9be1c4157f8dfbab2a7868d89b808",
".git/objects/32/1605a6e6d1ae3a4c3f9335b2c4e9c928ab53a0": "9276197ae4ae38d2ceb817d8e5e1038c",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/6190d66d4b5a6c6c18f05f54685de0001b41ea": "6f2cbd1654cd5a7416db106c88f09195",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/7b5418f31ce4789c11c82f2afefb0b6ffade9c": "31dbc9a21a4e92faad71025de08c5a3b",
".git/objects/5a/85c70e87f661ba69cdb3262683ee8519893c90": "ef305220934374cd65cacbd4d3160d29",
".git/objects/62/2fbf3f1e6ea37a80fe21f86f980347cd67570d": "4afd2b814ff95ded9df0fdbb8a946697",
".git/objects/6b/cdb4c8b520c6e47ebc391271eb0a787cc0e78c": "fb9bdba57b4351560425d0ceae3515f3",
".git/objects/7f/b3c497fa05e7d2e9e2005d8ab21d940af22ef3": "5e90e1be5f26dc16568bba6a41c6b376",
".git/objects/85/2c7f6e0bb84407989d5389f34db66792c86fcd": "a2900676b4d792b2c26c7957b9fc7099",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9d835ae129fc1a205eac9a85b09410591ffe06": "f697bdf101ba7d27280ed3278fae0393",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/b85851ceebd3e22e2bcc8c953a39a51b1c1b33": "7db21092397ec758df8ee6ddb783fc18",
".git/objects/c0/dc5c6456ebdccd6cc1f792e631658383124e5b": "a4b7b1c19cb2d437b28d4b88ca9fcfe0",
".git/objects/c9/36ee56997bb8e3494c4f8fec151b3f0a901ac1": "82aa59d7587b88068b230f140f34e00d",
".git/objects/cd/e09dbb3883674706ecc76a7f42dcd1eefe34c6": "5f682f4dbb22e4b1bfc668fdb54c8d87",
".git/objects/d5/6e96aa2b526ea705106032729cec3b27ee0c3b": "39f9ef19ec0c01baaecd08af381124a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/c27ca2d7ff92ec7624e434205dbc9ea5fd1e82": "0b0f67e8ef9a62796b3958feabbc7223",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/dd/85a48a9ce83eb368731a4c16b388f5c68a3520": "4324d62bd5badfc786eb8e36caa25f8d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/b1776399ebf0ccede95b8e0f96b3d025bdab4a": "934ff60182f77ebd278f656b27494cb3",
".git/objects/f9/e7223de7b95f71761357a4d48d75e694f90c50": "0b520a944a4aaacb759de1f87bdce87a",
".git/refs/heads/main": "db7175db60246993cd34215675f891e6",
".git/refs/remotes/origin/main": "db7175db60246993cd34215675f891e6",
"assets/AssetManifest.bin": "65a29e4660bb1d8269a8eec82327e6ac",
"assets/AssetManifest.bin.json": "87348e3f24af8a54d50d16f680f256a6",
"assets/AssetManifest.json": "744c193b87f779ff1121af3d891283cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9bbacdd0576713dc6be1079fc82f5e5f",
"assets/lib/images_insta/image1.jpg": "6ef3e11cd3dd51c3949844476e3e02b0",
"assets/lib/images_insta/image1.png": "234ce4879d65e9aa76d99eddff052fae",
"assets/lib/images_insta/image10.jpg": "0e114cab15a37af6f9c186b8a523b953",
"assets/lib/images_insta/image11.jpg": "e780fe3c4ed110152189a08803966eb0",
"assets/lib/images_insta/image2.jpg": "e212d25c5695bf82f3774d905bd1ab09",
"assets/lib/images_insta/image2.png": "67aa186ad9cc3f1c0cdba3552066d5d4",
"assets/lib/images_insta/image3.jpg": "ea29f37d853ca4b4686d4916117e2492",
"assets/lib/images_insta/image4.jpg": "0a86954e2d01b456f32db4967247385b",
"assets/lib/images_insta/image5.jpg": "96ab81398cfac1ccd7af7aebe80b82a5",
"assets/lib/images_insta/image6.jpg": "6525869d0918f8bb90f62d93f861c2c5",
"assets/lib/images_insta/image7.jpg": "0ae7399e60aec710e7efbe9008a6a97c",
"assets/lib/images_insta/image8.jpg": "d7bc4705f6522dab37240304e5c71017",
"assets/lib/images_insta/image9.jpg": "82d547701f667094e68f588d4b47ba0d",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ef6bdf0c59ad12f1861d37c909c113f",
"/": "6ef6bdf0c59ad12f1861d37c909c113f",
"main.dart.js": "43984a0ae80c60d415bddc98756b1cd3",
"manifest.json": "a84b22462d5edcf2abc0a7a494c176ba",
"README.md": "7b34e6222a26a59f106436192bcaa5c1",
"version.json": "6bddbb7ee610d3e30e114144d87300e5"};
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
