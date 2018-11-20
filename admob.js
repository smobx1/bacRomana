		function initAds() {
	      if (admob) {
	        var adPublisherIds = {
	          ios : {
	            // banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
	            interstitial : "ca-app-pub-2789022727093400/9133177509"
	          },
	          android : {
	            // banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
	            interstitial : "ca-app-pub-2789022727093400/5800437153"
	          }
	        };
	    	  
	        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
	            
	        admob.setOptions({
	          publisherId:      admobid.banner,
	          interstitialAdId: admobid.interstitial,
	          tappxIdiOS:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
	          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
	          tappxShare:       0.5
	        });

	        registerAdEvents();
	        
	      } else {
	        alert('AdMobAds plugin not ready');
	      }
	    }
    
    function onAdLoaded(e) {
      if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
        admob.showInterstitialAd();
        showNextInterstitial = setTimeout(function() {
          admob.requestInterstitialAd();
        }, 2 * 60 * 1000); // 2 minutes
      }
    }
    
    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
    }
        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      // admob.createBannerView();
        
        // request an interstitial
        
        // aman 1 secunda reclama
	    setTimeout(doSomething, 750);

		function doSomething() {
		   //do whatever you want here
		   admob.requestInterstitialAd();
		}
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);