admob.initAdmob("ca-app-pub-2789022727093400/9133177509");

document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();


admob.isInterstitialReady(function(isReady){
    if(isReady){
        admob.showInterstitial();
    }
});