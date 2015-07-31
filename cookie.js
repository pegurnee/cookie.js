var CookieHandler = (function() {
  "use strict";

  function getCookieString(key, value) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';';
  };

  CookieHandler = function(options) {
    this.theOptions = options;
  }

  CookieHandler.prototype.set = function(key, value) {
    document.cookie = getCookieString(key, value);
  }

  CookieHandler.prototype.get = function(key) {
    var indexOfKey, value, encodedKey, lengthOfKey;

    encodedKey = encodeURIComponent(key) + '=';
    lengthOfKey = encodedKey.length;
    indexOfKey = document.cookie.indexOf(encodedKey);
    value = '';

    if (indexOfKey > -1) {
      value = decodeURIComponent(document.cookie.substring(indexOfKey + lengthOfKey));
    }
    return value;
  }

  CookieHandler.prototype.cookie = function(key, value) {
    return ((arguments.length === 1) ?
      Cookies.get(key) : Cookies.set(key, value));
  }

  return CookieHandler;
})();
