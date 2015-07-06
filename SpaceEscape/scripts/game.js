/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
//game framework variables 
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
//game variables
var plane;
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "plane", src: "assets/images/plane.png" },
        { id: "clicked", src: "assets/sounds/clicked.wav" }
    ]);
    setupStats();
}
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //make the mouse known
    createjs.Ticker.setFPS(60); //framerate for the game 
    createjs.Ticker.on("tick", gameLoop); //same like useEventListener, every tick access the gameLoop function
    main();
}
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    //align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//Our main Game loop access 60 fps / runs on the back 
function gameLoop() {
    stats.begin();
    stage.update(); //update/refresh state
    stats.end();
}
function blueButtonClickEvent(event) {
    createjs.Sound.play("clicked");
}
//our main game function
function main() {
    console.log("Game is Running");
    plane = new createjs.Bitmap(assets.getResult("plane"));
    plane.regX = plane.getBounds().width * 0.5;
    plane.regY = plane.getBounds().height * 0.5;
    plane.x = 60;
    plane.y = 270;
    stage.addChild(plane);
}
//# sourceMappingURL=game.js.map