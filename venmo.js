!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).venmo=e()}}(function(){return function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){"use strict";var i=e("./is-android"),o=e("./is-chrome"),r=e("./is-ie"),s=e("./is-ie9"),a=e("./is-ie10"),u=e("./is-ie11"),c=e("./is-edge"),f=e("./is-ios"),d=e("./is-ios-firefox"),l=e("./is-ios-safari"),p=e("./is-ios-uiwebview"),y=e("./is-ios-webview"),h=e("./is-ios-wkwebview"),_=e("./is-mobile-firefox"),m=e("./is-samsung"),E=e("./supports-popups"),v=e("./supports-payment-request-api");t.exports={isAndroid:i,isChrome:o,isIe:r,isIe9:s,isIe10:a,isIe11:u,isEdge:c,isIos:f,isIosFirefox:d,isIosSafari:l,isIosUIWebview:p,isIosWebview:y,isIosWKWebview:h,isMobileFirefox:_,isSamsungBrowser:m,supportsPaymentRequestApi:v,supportsPopups:E}},{"./is-android":2,"./is-chrome":3,"./is-edge":4,"./is-ie":5,"./is-ie10":6,"./is-ie11":7,"./is-ie9":8,"./is-ios":14,"./is-ios-firefox":9,"./is-ios-safari":10,"./is-ios-uiwebview":11,"./is-ios-webview":12,"./is-ios-wkwebview":13,"./is-mobile-firefox":15,"./is-samsung":16,"./supports-payment-request-api":17,"./supports-popups":18}],2:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/Android/.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){"use strict";var i=e("./is-edge"),o=e("./is-samsung");t.exports=function(e){return e=e||navigator.userAgent,!(-1===e.indexOf("Chrome")&&-1===e.indexOf("CriOS")||i(e)||o(e))}},{"./is-edge":4,"./is-samsung":16}],4:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Edge/")}},{}],5:[function(e,t,n){(function(n){"use strict";var i=e("./is-ie11");t.exports=function(e){return e=e||n.navigator.userAgent,-1!==e.indexOf("MSIE")||i(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ie11":7}],6:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("MSIE 10")}},{}],7:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Trident/7")}},{}],8:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("MSIE 9")}},{}],9:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/FxiOS/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){"use strict";function i(e){return e.match(r)}var o=e("./is-ios"),r=/webkit/i;t.exports=function(e){return e=e||navigator.userAgent,o(e)&&i(e)&&-1===e.indexOf("CriOS")}},{"./is-ios":14}],11:[function(e,t,n){(function(n){"use strict";var i=e("./is-ios-webview");t.exports=function(e,t){return t="undefined"!=typeof t?t:n.statusbar.visible,i(e)&&!t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-webview":12}],12:[function(e,t,n){(function(n){"use strict";function i(e){return/\bGSA\b/.test(e)}var o=e("./is-ios");t.exports=function(e){return e=e||n.navigator.userAgent,o(e)?i(e)?!0:/.+AppleWebKit(?!.*Safari)/.test(e):!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios":14}],13:[function(e,t,n){(function(n){"use strict";var i=e("./is-ios-webview");t.exports=function(e,t){return t="undefined"!=typeof t?t:n.statusbar.visible,i(e)&&t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-webview":12}],14:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){(function(n){"use strict";var i=e("./is-ios-firefox");t.exports=function(e){return e=e||n.navigator.userAgent,i(e)||/iPhone|iPod|iPad|Mobile|Tablet/i.test(e)&&/Firefox/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-firefox":9}],16:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/SamsungBrowser/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,n){(function(n){"use strict";function i(e){var t,n=e.match(/Chrome\/(\d+)\./);return n?(t=parseInt(n[1],10),t>=r):!1}var o=e("./is-chrome"),r=61;t.exports=function(e){return e=e||n.navigator.userAgent,n.PaymentRequest?o(e)?i(e):!0:!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-chrome":3}],18:[function(e,t,n){(function(n){"use strict";function i(e){var t,i;return e=e||n.navigator.userAgent,(t=e.match(/CriOS\/(\d+)\./))?(i=parseInt(t[1],10),a>i):!1}function o(e){return e=e||n.navigator.userAgent,e.indexOf("Opera Mini")>-1}function r(e){var t=/Version\/[\d\.]+/;return e=e||n.navigator.userAgent,u(e)?t.test(e)&&!o(e):!1}function s(e){return!d(e)&&!l(e)&&/samsung/i.test(e)}var a=48,u=e("./is-android"),c=e("./is-ios-firefox"),f=e("./is-ios-webview"),d=e("./is-chrome"),l=e("./is-samsung");t.exports=function(e){return e=e||n.navigator.userAgent,!(f(e)||c(e)||r(e)||o(e)||i(e)||s(e))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-android":2,"./is-chrome":3,"./is-ios-firefox":9,"./is-ios-webview":12,"./is-samsung":16}],19:[function(e,t,n){"use strict";function i(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=i},{}],20:[function(e,t,n){"use strict";function i(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=i},{}],21:[function(e,t,n){"use strict";function i(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=i},{}],22:[function(e,t,n){"use strict";function i(e){return function(){var t,n=Array.prototype.slice.call(arguments),i=n[n.length-1];return"function"==typeof i&&(t=n.pop(),t=r(o(t))),s(e.apply(this,n),t)}}var o=e("./lib/deferred"),r=e("./lib/once"),s=e("./lib/promise-or-callback");i.wrapPrototype=function(e,t){var n,o,r;return t=t||{},o=t.ignoreMethods||[],r=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,i="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===o.indexOf(t);return n=r?!0:"_"!==t.charAt(0),i&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=i(n)}),e},t.exports=i},{"./lib/deferred":19,"./lib/once":20,"./lib/promise-or-callback":21}],23:[function(e,t,n){!function(e){function n(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function r(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var i;try{i=n(e._value)}catch(o){return void a(t.promise,o)}s(t.promise,i)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void f(i(n,t),e)}e._state=1,e._value=t,u(e)}catch(r){a(e,r)}}function a(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)r(e,e._deferreds[t]);e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(i){if(n)return;n=!0,a(t,i)}}var d=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var i=new this.constructor(n);return r(this,new c(e,t,i)),i},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){i(r,e)},n)}t[r]=s,0===--o&&e(t)}catch(u){n(u)}}if(0===t.length)return e([]);for(var o=t.length,r=0;r<t.length;r++)i(r,t[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){d(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],24:[function(e,t,n){"use strict";function i(e,t){var n,i=t?r(t):{},a=o(e.authorization).attrs,u=r(e.analyticsMetadata);i.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in i._meta)i._meta.hasOwnProperty(n)&&(u[n]=i._meta[n]);return i._meta=u,a.tokenizationKey?i.tokenizationKey=a.tokenizationKey:i.authorizationFingerprint=a.authorizationFingerprint,i}var o=e("./create-authorization-data"),r=e("./json-clone"),s=e("./constants");t.exports=i},{"./constants":28,"./create-authorization-data":29,"./json-clone":32}],25:[function(e,t,n){"use strict";function i(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),a=e._request,u=i(Date.now()),c=o.gatewayConfiguration.analytics.url,f={analytics:[{kind:r.ANALYTICS_PREFIX+t,timestamp:u}]};a({url:c,method:"post",data:s(o,f),timeout:r.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var r=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":24,"./constants":28}],26:[function(e,t,n){"use strict";function i(e){var t,n,i;return e?(i=e.name,t=e.client,null==t?r.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+i+"."})):(n=t.getVersion(),n!==a?r.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+i+" (version "+a+") components must be from the same SDK version."})):r.resolve())):r.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var o=e("./braintree-error"),r=e("./promise"),s=e("./errors"),a="3.24.1";t.exports={verify:i}},{"./braintree-error":27,"./errors":31,"./promise":34}],27:[function(e,t,n){"use strict";function i(e){if(!i.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),i.findRootError=function(e){return e instanceof i&&e.details&&e.details.originalError?i.findRootError(e.details.originalError):e},t.exports=i},{"./enumerate":30}],28:[function(e,t,n){"use strict";var i="3.24.1",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:i,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+i}},{}],29:[function(e,t,n){"use strict";function i(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],i=t.slice(2).join("_");return{merchantId:i,environment:n}}function r(e){var t,n,r={attrs:{},configUrl:""};return i(e)?(n=o(e),r.attrs.tokenizationKey=e,r.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),r.attrs.authorizationFingerprint=t.authorizationFingerprint,r.configUrl=t.configUrl),r}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=r},{"../lib/polyfill":33}],30:[function(e,t,n){"use strict";function i(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=i},{}],31:[function(e,t,n){"use strict";var i=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:i.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:i.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:i.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:i.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:i.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:i.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:i.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":27}],32:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],33:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,i,o,r,s,a,u,c=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="";if(!c.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");u=0;do o=f.indexOf(e.charAt(u++)),r=f.indexOf(e.charAt(u++)),s=f.indexOf(e.charAt(u++)),a=f.indexOf(e.charAt(u++)),t=(63&o)<<2|r>>4&3,n=(15&r)<<4|s>>2&15,i=(3&s)<<6|63&a,d+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(i?String.fromCharCode(i):"");while(u<e.length);return d}var i="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return i.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],34:[function(e,t,n){(function(n){"use strict";var i=n.Promise||e("promise-polyfill");t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":23}],35:[function(e,t,n){(function(e){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function i(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"[object Array]"===Object.prototype.toString.call(e)||!1}function o(t){var n,i;return t=t||e.location.href,/\?/.test(t)?(n=t.replace(/#.*$/,"").replace(/^.*\?/,"").split("&"),i=n.reduce(function(e,t){var n=t.split("="),i=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[i]=o,e},{})):{}}function r(e,t){var n,o,s,a=[];for(s in e)e.hasOwnProperty(s)&&(o=e[s],n=t?i(e)?t+"[]":t+"["+s+"]":s,"object"==typeof o?a.push(r(o,n)):a.push(encodeURIComponent(n)+"="+encodeURIComponent(o)));return a.join("&")}function s(e,t){return e=e||"",null!=t&&"object"==typeof t&&n(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=r(t)),e}t.exports={parse:o,stringify:r,queryify:s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],36:[function(e,t,n){"use strict";function i(e){return r.verify({name:"Venmo",client:e.client}).then(function(){var t,n=e.client.getConfiguration();return n.gatewayConfiguration.payWithVenmo?(t=new c(e),o.sendEvent(e.client,"venmo.initialized"),t._initialize()):f.reject(new u(s.VENMO_NOT_ENABLED))})}var o=e("../lib/analytics"),r=e("../lib/basic-component-verification"),s=e("./shared/errors"),a=e("@braintree/wrap-promise"),u=e("../lib/braintree-error"),c=e("./venmo"),f=e("../lib/promise"),d="3.24.1";t.exports={create:a(i),VERSION:d}},{"../lib/analytics":25,"../lib/basic-component-verification":26,"../lib/braintree-error":27,"../lib/promise":34,"./shared/errors":38,"./venmo":39,"@braintree/wrap-promise":22}],37:[function(e,t,n){"use strict";t.exports={DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY:500,PROCESS_RESULTS_DELAY:1e3,VENMO_OPEN_URL:"https://venmo.com/braintree/checkout"}},{}],38:[function(e,t,n){"use strict";var i=e("../../lib/braintree-error");t.exports={VENMO_NOT_ENABLED:{type:i.types.MERCHANT,code:"VENMO_NOT_ENABLED",message:"Venmo is not enabled for this merchant."},VENMO_TOKENIZATION_REQUEST_ACTIVE:{type:i.types.MERCHANT,code:"VENMO_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},VENMO_APP_FAILED:{type:i.types.UNKNOWN,code:"VENMO_APP_FAILED",message:"Venmo app encountered a problem."},VENMO_APP_CANCELED:{type:i.types.CUSTOMER,code:"VENMO_APP_CANCELED",message:"Venmo app authorization was canceled."},VENMO_CANCELED:{type:i.types.CUSTOMER,code:"VENMO_CANCELED",message:"User canceled Venmo authorization, or Venmo app is not available."}}},{"../../lib/braintree-error":27}],39:[function(e,t,n){(function(n){"use strict";function i(e){var t;this._client=e.client,t=this._client.getConfiguration(),this._isDebug=t.isDebug,this._assetsUrl=t.gatewayConfiguration.assetsUrl+"/web/"+_,this._allowNewBrowserTab=e.allowNewBrowserTab!==!1}function o(){var e=n.location.hash.substring(1).split("&");return e.reduce(function(e,t){var n=t.split("="),i=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[i]=o,e},{})}function r(){"function"==typeof n.history.replaceState&&history.pushState({},"",n.location.href.slice(0,n.location.href.indexOf("#")))}function s(e,t){return{nonce:t?t.nonce:e.paymentMethodNonce,type:"VenmoAccount",details:{username:e.username}}}function a(){var e;return"undefined"!=typeof document.hidden?e="visibilitychange":"undefined"!=typeof document.msHidden?e="msvisibilitychange":"undefined"!=typeof document.webkitHidden&&(e="webkitvisibilitychange"),e}var u=e("../lib/analytics"),c=e("@braintree/browser-detection"),f=e("./shared/constants"),d=e("./shared/errors"),l=e("../lib/querystring"),p=e("@braintree/wrap-promise"),y=e("../lib/braintree-error"),h=e("../lib/promise"),_="3.24.1";i.prototype._initialize=function(){var e=n.location.href.replace(n.location.hash,""),t=l.parse(n.location.href),i=this._client.getConfiguration(),o=i.gatewayConfiguration.payWithVenmo,r=this._client.getConfiguration().analyticsMetadata,s={_meta:{version:r.sdkVersion,integration:r.integration,platform:r.platform,sessionId:r.sessionId}};return t["x-success"]=e+"#venmoSuccess=1",t["x-cancel"]=e+"#venmoCancel=1",t["x-error"]=e+"#venmoError=1",t.ua=n.navigator.userAgent,t.braintree_merchant_id=o.merchantId,t.braintree_access_token=o.accessToken,t.braintree_environment=o.environment,t.braintree_sdk_data=btoa(JSON.stringify(s)),this._url=f.VENMO_OPEN_URL+"?"+l.stringify(t),h.resolve(this)},i.prototype.isBrowserSupported=function(){var e=c.isAndroid()&&c.isChrome(),t=c.isIos()&&c.isChrome(),n=c.isIosSafari()||e,i=t||c.isSamsungBrowser()||c.isMobileFirefox();return n||this._allowNewBrowserTab&&i},i.prototype.hasTokenizationResult=function(){var e=o();return"undefined"!=typeof(e.venmoSuccess||e.venmoError||e.venmoCancel)},i.prototype.tokenize=function(){var e=this;return this._tokenizationInProgress===!0?h.reject(new y(d.VENMO_TOKENIZATION_REQUEST_ACTIVE)):this.hasTokenizationResult()?this._processResults():new h(function(t,i){e._tokenizationInProgress=!0,e._previousHash=n.location.hash,n.open(e._url),e._visibilityChangeListener=function(){document.hidden||(e._tokenizationInProgress=!1,setTimeout(function(){e._processResults().then(t)["catch"](i).then(function(){n.location.hash=e._previousHash,document.removeEventListener(a(),e._visibilityChangeListener),delete e._visibilityChangeListener})},f.PROCESS_RESULTS_DELAY))},setTimeout(function(){document.addEventListener(a(),e._visibilityChangeListener)},f.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY)})},i.prototype._processResults=function(){var e=this,t=o();return new h(function(n,i){t.venmoSuccess?(u.sendEvent(e._client,"venmo.appswitch.handle.success"),n(s(t))):t.venmoError?(u.sendEvent(e._client,"venmo.appswitch.handle.error"),i(new y({type:d.VENMO_APP_FAILED.type,code:d.VENMO_APP_FAILED.code,message:d.VENMO_APP_FAILED.message,details:{originalError:{message:decodeURIComponent(t.errorMessage),code:t.errorCode}}}))):t.venmoCancel?(u.sendEvent(e._client,"venmo.appswitch.handle.cancel"),i(new y(d.VENMO_APP_CANCELED))):(u.sendEvent(e._client,"venmo.appswitch.cancel-or-unavailable"),i(new y(d.VENMO_CANCELED))),r()})},t.exports=p.wrapPrototype(i)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":25,"../lib/braintree-error":27,"../lib/promise":34,"../lib/querystring":35,"./shared/constants":37,"./shared/errors":38,"@braintree/browser-detection":1,"@braintree/wrap-promise":22}]},{},[36])(36)});