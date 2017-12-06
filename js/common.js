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

