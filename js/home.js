var showingMenu = false;
var headerHeight = 0;

function init() {
    console.log("initialize start.")
    initStyles();
    initParams();
    initMenuPosition();
    console.log("initialize end.")
}

function initMenuPosition() {
    var menu = document.getElementById("dropdownMenu");
    var x = menu.offsetLeft;
    var y = -menu.clientHeight;
    menu.style.top = y + "px";
    menu.style.left = x + "px";
}

function initParams() {
    console.log("initialize params start.");
    headerHeight = document.getElementsByTagName("header")[0].clientHeight;
    console.log("height of header:"+ headerHeight);
}

function initStyles() {
    document.getElementsByClassName("window")[0].style.height = window.innerHeight+"px";
}

function menu(obj) {
    showingMenu = !showingMenu;
    var menu = document.getElementById(obj.dataset.triggleid);
    if (showingMenu) {
        menuBeforeAnimate(obj, menu);
        transition(obj);
        animate(menu, headerHeight);
        updatePositionY(menu, headerHeight);
    } else {
        obj.blur();
    }
}

function hideMenu(obj) {
    showingMenu = false;
    var menu = document.getElementById(obj.dataset.triggleid);
    transition(obj);
    animate(menu, -menu.clientHeight);
    updatePositionY(menu, -menu.clientHeight);
}

function transition(obj) {
    var path = obj.getElementsByTagName("path")[0];
    var color = path.getAttribute("fill");
    if (color != "#ffffff") {
        obj.style.backgroundColor = color;
        path.setAttribute("fill", "#ffffff");
    } else {
        obj.style.backgroundColor = "";
        path.setAttribute("fill", "#663399");
    }
}

function menuBeforeAnimate(obj, menu) {
    var x = getX(obj);
    var y = -menu.clientHeight;
    console.log("before animation position:" + x + "," + y);
    menu.style.left = x + "px";
    menu.style.top = y + "px";
}

function animate(obj, destY) {
    var srcY = obj.offsetTop;
    console.log("animate from " + srcY + " to " + destY);
    obj.animate([{top: srcY + "px"}, {top: destY + "px"}], 2000);
}

function updatePositionY(obj, y) {
    obj.style.top = y + "px";
}