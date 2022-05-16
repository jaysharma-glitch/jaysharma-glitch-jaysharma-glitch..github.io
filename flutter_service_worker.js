'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fc428f5291e9bb5016bf1833ead88138",
"index.html": "f5bb8885df4208dde15598cc6284f0e8",
"/": "f5bb8885df4208dde15598cc6284f0e8",
"main.dart.js": "d9f81aa707c27f5d77ec5b854fd0e188",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1fe016660fd4a5825d1fd61e393ce9d0",
".git/config": "a9f5bc25b5a692fc5398fe4a182e1c92",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/606dc16d43bda7ab065e065625ccedc79c9296": "218ed376f74dad498747c380cdd79a06",
".git/objects/03/cf8504c9aa35a3d3c75417347ffb62e34336cf": "0cce5aa2da7a2db43472de8e5e416414",
".git/objects/6a/7f025f6fd046ed46c4e12b20e7cb7441cef4b9": "e7157850abfe3e5be490528929863ea1",
".git/objects/51/35747761ff2b2ccc947d9f0cd6533483fcadad": "c793b0f14628da0c571446a25c38bee0",
".git/objects/67/93d7e0d4eb691c3649d381fc9f5d554dab4556": "3c83af08d85a6db0feb106afa0aaaa26",
".git/objects/5f/7a8f178cb2d84b68373b803eab2dffe3837d40": "c2ba48afe0ec24135409431cafc23bdf",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a4/9c60dc0aa9e28a8af770bcd91cc7994d15dac6": "e51a1efe17c42d4a12b14dd8eed990c8",
".git/objects/bb/2667342fcdcaaa80e96f31f1685df41731508c": "1d84bcc36bb16cd5829560526e62d19c",
".git/objects/a5/526d308110b98f9a1608d2f60858901507da70": "99547d6924d3be2a49798ec82faab4ae",
".git/objects/bd/fbeb9517953a2bd7b83084c085b1a85300cb3c": "e16747e65defeb7f6893e54a6579bed2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/4dd483463b468592e747b585e52288b3f7d87b": "7476a065b9269720fcee4bd83158e3cf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/e275ba0ae72ecebcc3185d6baedc6654adfa4e": "7250306f0eec800fec53bc05c10ce171",
".git/objects/fb/fbdec2e1322f94a2f016fdc62744b7dc317e1a": "389f55fe1c2d6b8fb490547cce1e9c32",
".git/objects/ec/e6f5ba90b19c1754dd11fa613ddbc5763ab87f": "649d049d40cb869d78f756fc09be368a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/87/397ed6d94116f3ba5cc40c7e4004fdefd38684": "c64ba5b4233b0da4ed88dc52fbeff402",
".git/objects/1a/d3e23da43425767811b9c75c150d74b628b525": "74f3ac687e3e62559be9981cff512e76",
".git/objects/8f/155a6be5328f9a9dd579e3499f860d1ae6094b": "cb58bececd6e299795734f6a058b97f0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/6c672ce9b952661150cfe6800ab91fd9790186": "261fca7dbc7025fb156ac74239cdf68a",
".git/objects/5d/10de16a56d616fd12fcb584d612899f91f3781": "bf2308c29c90d831d764aefc5a4fe285",
".git/objects/3a/82e50e5581bfe8b04b149512653d3539b6930a": "4798394608af3cc0cda76e78d22b8927",
".git/objects/53/73ca71c9a540508453deb536094b9b60e7b080": "b0c614905d67bbc78e10a90b499b9a3b",
".git/objects/aa/80bfb83405e5d038efcd7c2ad4611b7cc26d45": "d26e6b19357ed07aacf5f71ad7f8609d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/fa/8b6ce2b29ce162d0e3a992d14f537860e1dab9": "393571f9bb4a98868201c299b64ba267",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/7af05b3ec60af021ebaeb1cd4254871be9a680": "1967adf9d3b5ea6f56f9827c4f7b90cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/e2c6ee0bca50e0c8570b781cc403c77036d0f1": "51f1864989cc2ecb848c2289ca4f826f",
".git/objects/84/f56612f1a27cb61eff36a7ae198c6a185c30e1": "2d7787c27a30c6bac12bc5e19aad5e6d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/3df9f5004455e7c8860cdba1274439c4dabbbe": "5894542d2f42c02e089b0ddb268b6355",
".git/objects/15/a8939d64d3da34c00fb63a14f64b2f6d15f750": "05309e446fecbf2f26a67619da373f07",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/26c19292c15ff954622c8f969bcc5fe3f01556": "c1f7e557a172f2e2d9097ddf855e7695",
".git/objects/13/623974e47bc43c5a1c22deefaa781e05bb5fa6": "36fd6522d88bd7d8a4b4bca626f368cc",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "772a26c94240c53ebd8388424ea4ddff",
".git/logs/refs/heads/master": "772a26c94240c53ebd8388424ea4ddff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "88e74352c3ee0e270b8b6e08616368d6",
".git/index": "8ab19c256cb087684757f986141a3ac5",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "2e23d8d73ad0ae8b32ba8493a28852a2",
"assets/NOTICES": "55dea068b0f83deb9a916e2d9429fae6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/main-bg.png": "7641e705e94221255f4ba5eb52ebba72",
"assets/assets/images/circle-leaf.png": "e6cc698f42267c659c096a01e7bfd307",
"assets/assets/images/hemp-box.png": "c4b845e9b3c7d087028f8188784007ef",
"assets/assets/images/right-w.png": "1648bea23c9d6ac0a139f2386419d48f",
"assets/assets/images/left-w.png": "c6e391e073f6f7d666e511e437b12158",
"assets/assets/images/big-w.png": "e9a6aea8baf349a2cfc746e4e40c14ed",
"assets/assets/images/top-bg.png": "af6030c0bca203d081e4dddec8dc4d74",
"assets/assets/images/v-resume.png": "2ad9487724fca213b48947de71e712db",
"assets/assets/images/find.png": "902bbb92ecfb43d2e3ae4606a0dee2c7",
"assets/assets/images/interview.png": "c2076e85308b9a65f6539c46d8134969",
"assets/assets/images/logo.png": "0bb7794f3eea46a6188034146ee5dbdd",
"assets/assets/images/schedule.png": "72f916d945c9a870b6e367cc4e643c77",
"assets/assets/images/contact-bg.png": "a46dc5041446e28ad3780efea57a4b60",
"assets/assets/images/video-con.png": "63e4cc527e610db7d27ad9498cde3944",
"assets/assets/images/main-bg-with-bg.png": "e51189ab05d6756f95bcf882224ba1ea",
"assets/assets/images/bottom-bg.png": "c572c6be86f8ed6c2b5100c76f2e9933",
"assets/assets/images/w-bud.png": "4e91ab35cf88aeaf77fdb8ff49f0d119",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
