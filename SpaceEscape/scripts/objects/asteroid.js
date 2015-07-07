var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //asteroid class *******************************
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        //Constructor**************************
        function Asteroid(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = Math.floor((Math.random() * 480));
            this.x = 640;
        }
        //private method
        Asteroid.prototype.checkBounds = function () {
            //check if asteroid has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        Asteroid.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 480) + this.height); //start asteroid at random location
            this.x = 2000; //start asteroid off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            //    this.dy = Math.floor(Math.random() * 4) - 2;
        };
        //public methods************************************
        Asteroid.prototype.update = function () {
            this.x -= this.dx; //moves the asteroids accross the stage
            // this.y += this.dx; // moves the asteroids horizontal 
            // this.checkBounds();
        };
        return Asteroid;
    })(createjs.Bitmap);
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map