var showingMenu = false;
var headerHeight = 0;


var height4PieceOfSourceImg = 64;
var width4PieceOfSourceImg = 64;

var gridCountX;
var gridCountY;
var perWidth;
var perHeight;

function init() {
    console.log("initialize start.");
    initParams();
    initStyles();
    initMenuPosition();
    // initSignPicPosition();
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

    // var source = document.getElementById('source');
    // width4PieceOfSourceImg = source.clientWidth;
    // height4PieceOfSourceImg = source.clientHeight;
    // console.log("width 4 piece of source image :" + width4PieceOfSourceImg);
    // console.log("height 4 piece of source image :" + height4PieceOfSourceImg);
    //
    // var signPic = document.getElementById('signPic');
    // gridCountX = Math.floor(signPic.clientWidth/width4PieceOfSourceImg);
    // gridCountY = Math.floor(signPic.clientHeight/height4PieceOfSourceImg);
    // console.log("grid x count:" + gridCountX);
    // console.log("grid y count:" + gridCountY);
    //
    // perWidth = signPic.clientWidth/gridCountX;
    // perHeight = signPic.clientHeight/gridCountY;
    // console.log("per width: " + perWidth);
    // console.log("per height: " + perHeight);
}

function initStyles() {
    document.getElementsByClassName("window")[0].style.height = window.innerHeight+"px";

    // var dest = document.getElementById('destination');
    // dest.style.width = width4PieceOfSourceImg+"px";
    // dest.style.height = height4PieceOfSourceImg+"px";
}

function menu(obj) {
    showingMenu = !showingMenu;
    var menu = document.getElementById(obj.dataset.triggleid);
    obj.focus();
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

function initSignPicPosition() {
    var root = document.getElementById("signPic");
    var srcPos = decideSrcPosition();
    console.log(srcPos);
    var destPos = decideDestPosition();
    console.log(destPos);
    setupSrcPicPosition(document.getElementById('source'), srcPos);
    setupDestPicPosition(document.getElementById('destination'), destPos);
}

function decideSrcPosition() {
    var randomX = Math.random();
    randomX = randomX<0.5?randomX:randomX-0.5;
    var randomY = Math.random();
    return new Position(Math.floor(randomX*gridCountX), Math.floor(randomY*gridCountY));
}

function decideDestPosition() {
    var randomX = Math.random();
    randomX = randomX>0.5?randomX:randomX+0.5;
    var randomY = Math.random();
    return new Position(Math.abs(gridCountX-Math.floor(randomX*gridCountX)),
        Math.abs(gridCountY-Math.floor(randomY*gridCountY)));
}

function setupSrcPicPosition(target, pos) {
    var position = translateSrcPosition(pos);
    target.style.marginTop = position.y+"px";
    target.style.marginLeft = position.x+"px";
}

function setupDestPicPosition(target, pos) {
    var position = translateDestPosition(pos);
    target.style.marginBottom = position.y+"px";
    target.style.marginRight = position.x+"px";
}

function translateSrcPosition(pos) {
    return new Position(pos.x*perWidth, pos.y*perHeight);
}

function translateDestPosition(pos) {
    return new Position(pos.x*perWidth, pos.y*perHeight);
}

function beforeDrag() {
    console.log("drag start : " + event.target.id);
    event.dataTransfer.setData("sourceId", event.target.id);
}

function dragOver() {
    // console.log("oooooooooover");
    event.preventDefault();
}

function drop() {
    // console.log("drrrrrrrrrrop");
    // event.preventDefault();
    event.target.appendChild(document.getElementById(event.dataTransfer.getData("sourceId")));
}

var Position = function (x, y) {
    this.x = x;
    this.y = y;
}




























