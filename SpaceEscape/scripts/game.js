/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/energy.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/over.ts" />
//game framework variables 
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
var gOver;
var labelText;
//game variables
var space;
var plane;
var energy;
var asteroids = [];
var scoreboard;
var gameOver = 0;
var btnPlayAgain;
var labelScore;
//game managers
var collision;
var assets;
//Game states
var play;
var over;
//preload function
function preload() {
    assets = new managers.Assets();
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
    if (gameOver == 0) {
        play.update();
    }
    else if (gameOver == 1) {
        overFun();
    }
    stage.update(); //update/refresh state    
    stats.end();
}
//our main game function
function main() {
    console.log("Game is Running");
    //instantiate play state conatainer
    play = new states.Play();
    //add to the stages 
    stage.addChild(game);
}
function overFun() {
    if (gameOver) {
        gameOver = 2;
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        over = new states.Over();
        stage.addChild(gOver);
    }
}
//# sourceMappingURL=game.js.map