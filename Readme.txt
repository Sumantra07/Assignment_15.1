For Solving the Problem :
Web-server extension of chrome is used for serving.
The data is fetched from a custom json file available on Github link. The sole purpose of using this was to reduce the hassle
and to make it available for all devices (specially mobile connected to same Wifi network).

Since Service-worker registration only happens  for 'secure origins' - either Localhost or https ,
the Service-worker registration will only succeed when it runs on localhost and not for the other url provided by chrome serviceWorker

Supporting link :

https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
