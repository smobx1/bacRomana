var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    // banner: 'ca-app-pub-6869992474017983/9375997553',
    interstitial: 'ca-app-pub-2789022727093400/5194583579'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    // banner: 'ca-app-pub-6869992474017983/4806197152',
    interstitial: 'ca-app-pub-2789022727093400/7090119175'
  };
} else {
  admobid = { // for Windows Phone
    // banner: 'ca-app-pub-6869992474017983/8878394753',
    // interstitial: 'ca-app-pub-6869992474017983/1355127956'
  };
}



function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }


  setInterval(function() {
        // this will create a banner on startup
        AdMob.createBanner( {
          adId: admobid.banner,
          position: AdMob.AD_POSITION.BOTTOM_CENTER,
          // isTesting: true, // TODO: remove this line when release
          overlap: false,
          offsetTopBar: false,
          bgColor: 'black'
        } );

        // this will load a full screen ad on startup
        AdMob.prepareInterstitial({
          adId: admobid.interstitial,
          // isTesting: true, // TODO: remove this line when release
          autoShow: true
        });
  }, 8000);

}
// setInterval(function() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
          document.addEventListener('deviceready', initApp, false);
      } else {
          initApp();
      }
// }, 10000);
