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



//game framework variables 
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;


//game variables
var space: objects.Space;
var plane: objects.Plane;
var energy: objects.Energy;
var asteroids: objects.Asteroid[] = [];
var scoreboard: objects.ScoreBord;

//game managers
var collision: managers.Collision;
var assets: managers.Assets;


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
    space.update();
    plane.update(); //look for the plane to change position
    //asteroid.update();
    for (var asteroid = 0; asteroid < 3; asteroid++) {
        asteroids[asteroid].update();
        collision.check(asteroids[asteroid]);
       // checkCollision(asteroids[asteroid]);
    }   
    //update the scoreboard
    scoreboard.update();

    //checkCollision(energy);
    collision.check(energy);

    energy.update(); //update the position of the energy
    stage.update(); //update/refresh state
    stats.end();
}

//our main game function
function main() {
    console.log("Game is Running");

    //add background
    space = new objects.Space(assets.loader.getResult("space"));
    stage.addChild(space);

    //add energy objects to stage
    energy = new objects.Energy(assets.loader.getResult("energy"));
    stage.addChild(energy);

    //add plane object to the stage
    plane = new objects.Plane(assets.loader.getResult("plane"));
    stage.addChild(plane);

    //add asteroid object to the stage
    for (var asteroid = 0; asteroid < 3; asteroid++) {
        asteroids[asteroid] = new objects.Asteroid(assets.loader.getResult("asteroid"));
        stage.addChild(asteroids[asteroid]);
    }

    //add scoreboard 
    scoreboard = new objects.ScoreBord();

    //add collision manager
    collision = new managers.Collision();

    }

