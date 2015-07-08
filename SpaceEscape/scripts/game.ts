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



//game framework variables 
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;
var intro: createjs.Container;

        //game variables
        var space: objects.Space;
        var plane: objects.Plane;
        var energy: objects.Energy;
        var asteroids: objects.Asteroid[] = [];
        var scoreboard: objects.ScoreBord;

        //game managers
        var collision: managers.Collision;
        var assets: managers.Assets;

//Game states
var play: states.Play;

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
    play.update();
    stage.update(); //update/refresh state
    stats.end();
    
}


//our main game function
function main() {
    console.log("Game is Running");

    //instantiate new game conatainer
    game = new createjs.Container();

    //instantiate play state conatainer
    play = new states.Play();
    

    

    //add to the stages 
    //stage.addChild(intro);
    stage.addChild(game);
    
    }

