var managers;
(function (managers) {
    var Collision = (function () {
        //Constructor************************************
        function Collision() {
        }
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = plane.x;
            p1.y = plane.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((plane.height * 0.5) + (gameObject.height * 0.3))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "asteroid") {
                        scoreboard.lives--;
                    }
                    if (gameObject.name == "energy") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map