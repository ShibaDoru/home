'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "725f9986328d906f168235c70de26cf0",
"index.html": "c61a8b2e31f42aae50266f0230cfcf56",
"/": "c61a8b2e31f42aae50266f0230cfcf56",
"main.dart.js": "52fe7ec05d108756de28a4928b709296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "996ef2ea8684b5dad6c0d0c75f50e21b",
".git/config": "e05c38b2376b473bec2e399094a13833",
".git/objects/0d/b6b03197cdf6bd753b50caab20c29877544024": "e9132903020fc5f8240a20c8c9adb0cc",
".git/objects/95/7673fa53697243da7ef1c1f277306551f6c520": "40bfaf95e6541089822eba7d2fdcf590",
".git/objects/68/af3267977dcd08343050576026640199bb2be8": "6acebe6a8fa9bce6ce51285edaa5ba64",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/1deabb928ea6a0c7f78b8e00897031222d3f56": "843ccdb6081854f31cba85c204612bb6",
".git/objects/56/25646b26997624bd5454cfb8dd181784a9adbc": "e5799f9e8c09144bed5ee4d1ab645891",
".git/objects/9c/6e77d10208c689bfb49954a3690f82a9b497d9": "22f15cca60634eb26e4bfa8509c3de70",
".git/objects/bb/0745cda82a3f2dea2f8982d02d6fb9ada64d6d": "e5a3951485f0f85811fc83139d11bea1",
".git/objects/b3/3276c4bfcfa55bb214beda212023fea4b52c02": "bafb76f98dd1f3853a41d3593a1ffa43",
".git/objects/b3/b9a9bf90a175c3a7496badb259fe2ef4e85105": "0847f4fc989f7f8cdc474ac2b852a370",
".git/objects/bd/dd98ef877e31b38d92c5958b370cbbae25195c": "992b2d42f235c5b06e44db1573a0b1a3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/a2b21c3b088338368948f7beb906259a9ff79c": "acf9b7b683675394c2c16bae20d45696",
".git/objects/eb/56f232ea3123e2c7b906eafc12afaa836ad12f": "b35831aefa15cf026e3a6befd94f823c",
".git/objects/c7/9d33c956fc2957cf9712ffff9935cd3aee8642": "e07dbdc65c26f66cc2dbe6695c42bdb8",
".git/objects/c9/f1ea280b15f6be8f7c21a6f5a1ebb87afd9d10": "88b6df0d0075e327fde7d86040fdc366",
".git/objects/f5/42b332bafbc36ea1ef383297ea679631669bd4": "7a23696e4812de48a457ff320c3056ce",
".git/objects/f5/5cb0f776e96492e81428b2999ec11252787161": "5811eb6c4207d7a47ffcf3066c53dc44",
".git/objects/e4/22bc8d30ded7af722351a999d4b20091465382": "f722ff816e36c36874853a759a7ec996",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/0597b83cd71ec385aaf7e86771f8394c36795c": "ebba39c58d336b59a21aa2b80c20dbd2",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1c0682e824c17b166ac5fc9dac3a16e2cb7b74": "df35108e1d336acf2aa9e439ab19ad89",
".git/objects/21/b6da82084ea0cb86ac90f7bff3420dd47faf4b": "58b85c9939eb994b10ecf160d75bb69d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f8ff46887e6b5d8bdc291821c642dea3283c63": "cc3ceb274f35586d99be5bd03d8f5c59",
".git/objects/9a/99a49c7ff63df1a883c509daf4b401468ce0cb": "d533934b06e751990d10b03afd745dd4",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/62/0e7e3cf533818f32c44635430d2b595dc90633": "2b0fbd7a60ab307d9054c890e1005cba",
".git/objects/3f/0524085bec6c8cd8be1ea02beff016857f8e27": "25d3fa014b4a35425f99a8e2b8272798",
".git/objects/6d/fc4bebdbe61560a667c0093607eb2d6d7aa5be": "f2f56274f34c38345b9c2b521a41c1fa",
".git/objects/a0/23c27b17f3b5679202bc9327d93a423d078462": "ef7464b6f4add920aab849989e253de5",
".git/objects/af/2ad346bf440b639842c67981a1020939eef4aa": "096e373351be9a934460e0bc24ec2245",
".git/objects/af/736a207c9c1b82e274d92309dcc0f8d946bc72": "9b011a04fd6aca37ce6d0723ea6ed142",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/c70ef0dfd61f8e3c6a3dd8dcaaae4393163713": "2d997d593822d93058d77d51b386c474",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/dfa1635f55fbfe5e14c9f441b71f55311e7ff2": "504381c86bff18d4e2ce3bff8614506e",
".git/objects/f0/faf98e253a1586c31afd9569d6f3a3c0418b86": "f41ab160bd78b9df38263734ff2b7e55",
".git/objects/f7/3abeac64406bf042a47b1672d60128b31b6bc7": "04d4116c25397dd7c3d770d99165af62",
".git/objects/c5/d6d379d694f70ff39dc89a2ff5b4f671ca6c66": "ad406a24d25e6a43c654ab73260e5b5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/2795b56fbafca15270dcc0aadf4919fb2c4b61": "6aab685b8e5f25a91beb907744127b20",
".git/objects/1b/5f500013e9733e011225a00e03d001de228342": "45e6c50b412bba436784b77b43cc5e8f",
".git/objects/77/4915328d3ed69d450999b9fd0de17d741683b2": "50eab1943b8a43d76793f97edb439ec8",
".git/objects/8c/c4f55d430765524512645e509290cb27444ba9": "18a426cb10dc9eb6444ccf5465ebec9a",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/2b/f3f7693ffb7f603a37c1db5f9f8ab642cffa30": "821f96f5b36f7a54101fe18f9228eaf7",
".git/objects/47/d9f1be218a853f54bcaebd7fd5350554f3a1a1": "3b325d03831029b23f28daa32325c217",
".git/objects/78/ffda280c3a6253f1e36caf7c475a784b1d2ec2": "e894f22d96d48a786bbccbc752e389f1",
".git/objects/13/1a171546e5ab86aa3251c97a016554eae8d179": "edc2aaa97f19a8349eaa30f4fccd8486",
".git/objects/13/6823f0bf91aed554d59da2b8f989e29e1084f4": "2f2b1c60b9729f9f96346b27d3095ac3",
".git/objects/7a/de7567881b6db0764e5afd9315a40c5b1bb3c1": "66596021f28d86715ee7adcad4c96a71",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "62d4650f85b5f2f2ef581dcf3723bb9b",
".git/logs/refs/heads/master": "62d4650f85b5f2f2ef581dcf3723bb9b",
".git/logs/refs/remotes/origin/master": "51a439e0827711c7f75170b469e68411",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "7da205134a529fdb72a5f88a496ea72b",
".git/refs/remotes/origin/master": "7da205134a529fdb72a5f88a496ea72b",
".git/index": "c6921cef899ef057d5ac23502c4064b1",
".git/COMMIT_EDITMSG": "03a6ecc1dbc74cfaacfeb8b1f09b8998",
".git/FETCH_HEAD": "5509bfe302be42a22899dd7a05c52a1f",
".git/sourcetreeconfig": "817ebb0ae82489a9b6f7ac6c7577e3a0",
"assets/AssetManifest.json": "40c5dab8dc7923d8d3d24812712ee219",
"assets/NOTICES": "9bb66a70fa86a00d05f295b75419bae8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/1353734.jpg": "68f7132986fb4b9f7128358094008956",
"assets/assets/images/1358099.jpg": "a16c9c7e66192a16d11d605f34f2e026",
"assets/assets/images/1345382.jpg": "8ad2b93ab0c62d2e5b4075b7d7f395d4",
"assets/assets/images/1358101.jpg": "c190687662da79a657c67ca92d7a642c",
"assets/assets/images/1358100.jpg": "8ad94bdd26468a420456e9ec26e11c10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
