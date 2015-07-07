var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //energy class *******************************
    var Energy = (function (_super) {
        __extends(Energy, _super);
        //Constructor**************************
        function Energy(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = Math.floor((Math.random() * 380) + this.height);
            this.x = 640;
        }
        //private method
        Energy.prototype.checkBounds = function () {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        Energy.prototype.reset = function () {
            this.y = Math.floor((Math.random() * 380) + this.height); //start island at random location
            this.x = 2000; //start enegy off stage
        };
        //public methods************************************
        Energy.prototype.update = function () {
            console.log(this.x);
            console.log(this.y);
            this.x -= this.dx; //moves the energy
            this.checkBounds();
        };
        return Energy;
    })(createjs.Bitmap);
    objects.Energy = Energy;
})(objects || (objects = {}));
//# sourceMappingURL=energy.js.map