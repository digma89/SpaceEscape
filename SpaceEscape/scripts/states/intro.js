/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../game.ts" />
var states;
(function (states) {
    var Intro = (function () {
        //Constructor*******************************
        function Intro() {
            this.main();
        }
        //our main game function
        Intro.prototype.main = function () {
            var instructions = "\n\nMove your space ship up and down \n\nwith the mouse, recover the \n\nbatteries and avoid the asteroids.";
            console.log("Intro");
            start = new createjs.Container();
            //add background
            space = new objects.Space(assets.loader.getResult("space"));
            start.addChild(space);
            labelTitle = new objects.Label("Space Escape", "60px");
            labelTitle.x = 126;
            labelTitle.y = 33;
            start.addChild(labelTitle);
            labelInstru = new objects.Label("Instructions: " + instructions, "30px");
            labelInstru.x = 30;
            labelInstru.y = 134;
            start.addChild(labelInstru);
            btnPlay = new objects.Button(220, 350, assets.loader.getResult("play"));
            start.addChild(btnPlay);
            btnPlay.addEventListener("click", this.StartClicked);
        };
        Intro.prototype.StartClicked = function () {
            stage.removeChild(start);
            start.removeAllChildren();
            start.removeAllEventListeners();
            gameOver = 1;
            main();
        };
        return Intro;
    })();
    states.Intro = Intro;
})(states || (states = {}));
//# sourceMappingURL=intro.js.map