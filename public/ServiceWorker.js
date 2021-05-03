const cacheName="Expense-Web-App";


const addFile=[
          '/ServiceWorker.js',
        '/static/js/bundle.js',   
       '/static/js/main.chunk.js',
       '/static/js/vendors~main.chunk.js',
       'favicon.ico',
       'logo192.png',
       'logo512.png',
       'manifest.json',
       '/index.html',      
       '/',
];
this.addEventListener('activate',() =>{
    console.log("Service Worker Activated");
});

// we are making this for saving our file in cache to offline avaliable
this.addEventListener('install',(event) =>{
     console.log("Service Worker Install");
     event.waitUntil(
         caches.open(cacheName).then(function(data) {
          return   data.addAll(addFile)   
         }).catch(function(err) {
                 console.log(err);
         })
    )
});

// we are making this whenever we call later it will automatically  fetch from here if here not avalaible then we fetch from uer function
this.addEventListener('fetch', (event) =>{
    //   console.log("Fetch Data if not avaliable", event.request.url);
     event.respondWith(
         caches.match(event.request).then((response) =>{
            //  console.log(response);
               return response || fetch(event.request)
         }).catch((err) =>{
              console.log(err);
         })
     ) 
})