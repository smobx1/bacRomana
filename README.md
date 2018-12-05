<img src="screenshot.png?a"/>

# cordova-inapppurchases-app

A sample app to demonstrate in app purchases using the [cordova-plugin-inapppurchase](https://github.com/AlexDisler/cordova-plugin-inapppurchase) plugin on iOS and Android. See [blog post](https://alexdisler.com/2016/02/29/in-app-purchases-ionic-cordova/).

## Instructions

You will need an app with in app purchases configured on iTunes connect or Google Play.

Make sure you have the [required plugins](https://github.com/AlexDisler/inapppurchases-app/blob/master/package.json#L17) installed.

Update the package name to the one of your app in the [config.xml](https://github.com/AlexDisler/inapppurchases-app/blob/master/config.xml#L2) file.

Add your app's product ids in the [www/js/app.js](https://github.com/AlexDisler/inapppurchases-app/blob/master/www/js/app.js#L18) file.

On ***Android*** add your Google Play Store key to the [www/manifest.json](https://github.com/AlexDisler/inapppurchases-app/blob/master/www/manifest.json#L1) file.

Build & run the app on a device with an account that can test in app purchases.

## License

The MIT License

Alex Disler

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
