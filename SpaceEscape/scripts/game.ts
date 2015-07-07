﻿/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/plane.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/energy.ts" />

//game framework variables 
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var assets: createjs.LoadQueue;


//game variables
var background: createjs.Bitmap;
var plane: objects.Plane;
var energy: objects.Energy;
var asteroid: objects.Asteroid;



function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "background", src: "assets/images/background.jpg" },
        { id: "plane", src: "assets/images/plane.png" },
        { id: "energy", src: "assets/images/energy.png" },
        { id: "asteroid", src: "assets/images/asteroid1.png" },
        
        
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
    plane.update(); //look for the plane to change position
    energy.update(); //update the position of the energy
    //asteroid.update();
    stage.update(); //update/refresh state
    stats.end();
}




/*function blueButtonClickEvent(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
}
*/

//our main game function
function main() {
    console.log("Game is Running");

    //add background
    background = new createjs.Bitmap("assets/images/background.jpg");
    stage.addChild(background);

    //add energy objects to stage
    energy = new objects.Energy(assets.getResult("energy"));
    stage.addChild(energy);

    //add plane object to the stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);

    //add asteroid object to the stage
    //asteroid = new objects.Asteroid(assets.getResult("asteroid"));
    //stage.addChild(asteroid);

    }

