IAP = {
  list: [ "adfree"]
};


IAP.load = function () {
 
     // Check availability of the storekit plugin
     if (!window.storekit) {
          console.log("In-App Purchases not available");
          return;
     }
 
     // Initialize
     storekit.init({
          debug:    true, // Enable IAP messages on the console
          ready:    IAP.onReady,
          purchase: IAP.onPurchase,
          restore:  IAP.onRestore,
          error:    IAP.onError
     });
 
};

IAP.onReady = function () {
     storekit.load(IAP.list, function (products, invalidIds) {
          IAP.products = products;
          IAP.loaded = true;
          for (var i = 0; i < invalidIds.length; ++i) {
               console.log("Error: could not load " + invalidIds[i]);
          }
     });
};

IAP.onPurchase = function (transactionId, productId, receipt) {
     if(productId === 'adfree'){
          alert("Ads Removed!");
          //Code to remove ads for the user
          alert("gataa s a cumparat");
     }
};

IAP.onRestore = function (transactionId, productId, transactionReceipt) {
     if(productId == 'adfree'){
          //Code to remove ads for the user
          alert("gataa s a cumparat");

     }
};

IAP.onError = function (errorCode, errorMessage) {
     console.log(errorCode);
     console.log(errorMessage);
};

IAP.buy = function(productId){
     storekit.purchase(productId);
};

IAP.restore = function(){
     storekit.restore();
};

document.addEventListener("deviceready", function(){
     IAP.load();
}, false);

function cumparaFull(){
  IAP.buy('adfree');
  alert();
  document.getElementById('bio1112').style.visibility = 'hidden';
}
// 