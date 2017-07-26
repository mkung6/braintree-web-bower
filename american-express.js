!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).americanExpress=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){"use strict";function n(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=n},{}],2:[function(e,t,r){"use strict";function n(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=n},{}],3:[function(e,t,r){"use strict";function n(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=n},{}],4:[function(e,t,r){"use strict";function n(e){return function(){var t,r=Array.prototype.slice.call(arguments),n=r[r.length-1];return"function"==typeof n&&(t=r.pop(),t=i(o(t))),s(e.apply(this,r),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");n.wrapPrototype=function(e,t){var r,o,i;return t=t||{},o=t.ignoreMethods||[],i=t.transformPrivateMethods===!0,r=Object.getOwnPropertyNames(e.prototype).filter(function(t){var r,n="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===o.indexOf(t);return r=i?!0:"_"!==t.charAt(0),n&&r&&s}),r.forEach(function(t){var r=e.prototype[t];e.prototype[t]=n(r)}),e},t.exports=n},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,r){!function(e){function r(){}function n(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._state?s:c)(t.promise,e._value);var n;try{n=r(e._value)}catch(o){return void c(t.promise,o)}s(t.promise,n)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof o)return e._state=3,e._value=t,void a(e);if("function"==typeof r)return void f(n(r,t),e)}e._state=1,e._value=t,a(e)}catch(i){c(e,i)}}function c(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;r>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function f(e,t){var r=!1;try{e(function(e){r||(r=!0,s(t,e))},function(e){r||(r=!0,c(t,e))})}catch(n){if(r)return;r=!0,c(t,n)}}var p=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return i(this,new u(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,r){function n(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var c=s.then;if("function"==typeof c)return void c.call(s,function(e){n(i,e)},r)}t[i]=s,0===--o&&e(t)}catch(a){r(a)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)n(i,t[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,r){r(e)})},o.race=function(e){return new o(function(t,r){for(var n=0,o=e.length;o>n;n++)e[n].then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){p(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],6:[function(e,t,r){"use strict";function n(e){this._client=e.client}var o=e("../lib/braintree-error"),i=e("./errors"),s=e("../lib/assign").assign,c=e("../lib/promise"),a=e("@braintree/wrap-promise");n.prototype.getRewardsBalance=function(e){var t,r=e.nonce;return r?(t=s({_meta:{source:"american-express"},paymentMethodNonce:r},e),delete t.nonce,this._client.request({method:"get",endpoint:"payment_methods/amex_rewards_balance",data:t})["catch"](function(e){return c.reject(new o({type:i.AMEX_NETWORK_ERROR.type,code:i.AMEX_NETWORK_ERROR.code,message:"A network error occurred when getting the American Express rewards balance.",details:{originalError:e}}))})):c.reject(new o({type:i.AMEX_NONCE_REQUIRED.type,code:i.AMEX_NONCE_REQUIRED.code,message:"getRewardsBalance must be called with a nonce."}))},n.prototype.getExpressCheckoutProfile=function(e){return e.nonce?this._client.request({method:"get",endpoint:"payment_methods/amex_express_checkout_cards/"+e.nonce,data:{_meta:{source:"american-express"},paymentMethodNonce:e.nonce}})["catch"](function(e){return c.reject(new o({type:i.AMEX_NETWORK_ERROR.type,code:i.AMEX_NETWORK_ERROR.code,message:"A network error occurred when getting the American Express Checkout nonce profile.",details:{originalError:e}}))}):c.reject(new o({type:i.AMEX_NONCE_REQUIRED.type,code:i.AMEX_NONCE_REQUIRED.code,message:"getExpressCheckoutProfile must be called with a nonce."}))},t.exports=a.wrapPrototype(n)},{"../lib/assign":9,"../lib/braintree-error":10,"../lib/promise":13,"./errors":7,"@braintree/wrap-promise":4}],7:[function(e,t,r){"use strict";var n=e("../lib/braintree-error");t.exports={AMEX_NONCE_REQUIRED:{type:n.types.MERCHANT,code:"AMEX_NONCE_REQUIRED"},AMEX_NETWORK_ERROR:{type:n.types.NETWORK,code:"AMEX_NETWORK_ERROR"}}},{"../lib/braintree-error":10}],8:[function(e,t,r){"use strict";function n(e){var t;return null==e.client?a.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating American Express."})):(t=e.client.getVersion(),t!==c?a.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t+") and American Express (version "+c+") components must be from the same SDK version."})):a.resolve(new i(e)))}var o=e("../lib/braintree-error"),i=e("./american-express"),s=e("../lib/errors"),c="3.20.1",a=e("../lib/promise"),u=e("@braintree/wrap-promise");t.exports={create:u(n),VERSION:c}},{"../lib/braintree-error":10,"../lib/errors":12,"../lib/promise":13,"./american-express":6,"@braintree/wrap-promise":4}],9:[function(e,t,r){"use strict";function n(e){var t,r,n;for(t=1;t<arguments.length;t++){r=arguments[t];for(n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}var o="function"==typeof Object.assign?Object.assign:n;t.exports={assign:o,_assign:n}},{}],10:[function(e,t,r){"use strict";function n(e){if(!n.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),n.findRootError=function(e){return e instanceof n&&e.details&&e.details.originalError?n.findRootError(e.details.originalError):e},t.exports=n},{"./enumerate":11}],11:[function(e,t,r){"use strict";function n(e,t){return t=null==t?"":t,e.reduce(function(e,r){return e[r]=t+r,e},{})}t.exports=n},{}],12:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:n.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:n.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:n.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":10}],13:[function(e,t,r){(function(r){"use strict";var n=r.Promise||e("promise-polyfill");t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}]},{},[8])(8)});