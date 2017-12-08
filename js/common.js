/**
 * this javascript contains the common used functions.Details sees below:
 *
 */


/**
 * get the offsetLeft of the element or its parent node if the current element's value is undefined.
 * @param obj the dom element
 */
function getX(obj){

    if(!obj) {
        return 0;
    }
    var x = obj.offsetLeft==undefined?getX(obj.parentNode):obj.offsetLeft;
    return x;
}


/**
 * get the offsetTop of the element or its parent node if the current element's value is undefined.
 * @param obj the dom element
 */
function getY(obj){
    if(!obj) {
        return 0;
    }
    var y = obj.offsetTop==undefined?getY(obj.parentNode):obj.offsetTop;
    return y;
}

/**
 * set the cookie by the given name=value pair and max live age.
 * @param name cookie name
 * @param value cookie value
 * @param maxAgeInSeconds
 */
function setCookie(name, value, maxAgeInSeconds) {
    var cookie = name + "=" + value + ";max-age=" + maxAgeInSeconds;
    document.cookie = cookie;
}

/**
 * get the cookie va the name.
 * @param name name of cookie
 */
function getCookie(name) {
    var index = document.cookie.indexOf(name);
    if(index != -1){
        var cookie = document.cookie.substr(index);
        return cookie.substring(name.length+1, cookie.indexOf(';'));
    }

    return '';
}













