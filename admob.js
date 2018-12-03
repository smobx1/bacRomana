    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-2789022727093400/1079470197",
            interstitial : "ca-app-pub-2789022727093400/9133177509"
          },
          android : {
            banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
            interstitial : "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII"
          }
        };
    	  
        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            
        admob.setOptions({
          publisherId: "pub-2789022727093400"
        });

        registerAdEvents();
        
      } else {
        alert('AdMobAds plugin not ready');
      }
    }
    
    
    
    
        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      admob.createBannerView();
        
      // request an interstitial
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);