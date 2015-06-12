var Cookies = function (key, value, options) {
    "use strict";
    return ((arguments.length === 1) ?
            Cookies.get(key) : Cookies.set(key, value, options));
};
function getCookieString(key, value) {
    "use strict";
    return encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';';
}
Cookies.set = function (key, value, options) {
    "use strict";
    document.cookie = getCookieString(key, value);
};
Cookies.get = function (key) {
    "use strict";
    var indexOfKey, value, encodedKey, lengthOfKey;
    
    encodedKey = encodeURIComponent(key) + '=';
    lengthOfKey = encodedKey.length;
    indexOfKey = document.cookie.indexOf(encodedKey);
    value = '';
    
    if (indexOfKey > -1) {
        value = decodeURIComponent(document.cookie.substring(indexOfKey + lengthOfKey));
    }
    return value;
};