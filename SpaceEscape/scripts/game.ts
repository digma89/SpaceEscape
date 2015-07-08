/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/energy.ts" />
/// <reference path="objects/asteroid.ts" />



//game framework variables 
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var assets: createjs.LoadQueue;


//game variables
var space: objects.Space;
//var space: createjs.Bitmap;
var plane: objects.Plane;
var energy: objects.Energy;
var asteroids: objects.Asteroid[] = [];




function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "space", src: "assets/images/background.jpg" },
        { id: "plane", src: "assets/images/plane.png" },
        { id: "energy", src: "assets/images/energy.png" },
        { id: "asteroid", src: "assets/images/asteroid1.png" },
        { id: "energyS", src: "assets/sounds/energySound.wav" },
        { id: "explotion", src: "assets/sounds/explotion.wav" },
        
        
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
    space.update();
    plane.update(); //look for the plane to change position
    //asteroid.update();
    for (var asteroid = 0; asteroid < 3; asteroid++) {
        asteroids[asteroid].update();
        planeAsteroid(asteroids[asteroid]);
    }

    planeEnergy();

    energy.update(); //update the position of the energy
    stage.update(); //update/refresh state
    stats.end();
}




/*function blueButtonClickEvent(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
}
*/

//distance utillity function 
function distance(p1: createjs.Point, p2: createjs.Point): number {

    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}


//check distance between plane and energy
function planeEnergy() {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    p1.x = plane.x;
    p1.y = plane.y;

    p2.x = energy.x;
    p2.y = energy.y;

    if (distance(p1, p2) < ((plane.height * 0.5) + (energy.height * 0.5))){
        createjs.Sound.play("energyS");
    }
    
}

function planeAsteroid(asteroid: objects.Asteroid) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    p1.x = plane.x;
    p1.y = plane.y;

    p2.x = asteroid.x;
    p2.y = asteroid.y;

    if (distance(p1, p2) < ((plane.height * 0.5) + (asteroid.height * 0.3))) {
        console.log("Colision");
        createjs.Sound.play("explotion");
    }

}

//our main game function
function main() {
    console.log("Game is Running");

    //add background
    space = new objects.Space(assets.getResult("space"));
    stage.addChild(space);

    //add energy objects to stage
    energy = new objects.Energy(assets.getResult("energy"));
    stage.addChild(energy);

    //add plane object to the stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);

    //add asteroid object to the stage
    for (var asteroid = 0; asteroid < 3; asteroid++) {
        asteroids[asteroid] = new objects.Asteroid(assets.getResult("asteroid"));
        stage.addChild(asteroids[asteroid]);
    }


    }

