var states;
(function (states) {
    var Play = (function () {
        //Constructor*******************************
        function Play() {
            this.main();
        }
        //update method
        Play.prototype.update = function () {
            space.update();
            plane.update(); //look for the plane to change position
            energy.update(); //update the position of the energy
            for (var asteroid = 0; asteroid < 3; asteroid++) {
                asteroids[asteroid].update();
                collision.check(asteroids[asteroid]);
            }
            //update the scoreboard
            scoreboard.update();
            //checkCollision(energy);
            collision.check(energy);
        };
        //our main game function
        Play.prototype.main = function () {
            //instantiate new game conatainer
            game = new createjs.Container();
            //add background
            space = new objects.Space(assets.loader.getResult("space"));
            game.addChild(space);
            //add energy objects to stage
            energy = new objects.Energy(assets.loader.getResult("energy"));
            game.addChild(energy);
            //add plane object to the stage
            plane = new objects.Plane(assets.loader.getResult("plane"));
            game.addChild(plane);
            //add asteroid object to the stage
            for (var asteroid = 0; asteroid < 3; asteroid++) {
                asteroids[asteroid] = new objects.Asteroid(assets.loader.getResult("asteroid"));
                game.addChild(asteroids[asteroid]);
            }
            //add scoreboard 
            scoreboard = new objects.ScoreBord();
            //add collision manager
            collision = new managers.Collision();
            //stage.addChild(game);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map