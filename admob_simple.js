alert("inainte");

function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options:
      admob.setOptions({
        publisherId:          "pub-2789022727093400",  // Required
        interstitialAdId:     "ca-app-pub-2789022727093400/9133177509",  // Optional
        tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:           0.5                                        // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

alert("dupa");