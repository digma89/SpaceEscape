var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //plane class *******************************
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //Constructor**************************
        function Plane(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 55;
        }
        //public methods************************************
        Plane.prototype.update = function () {
            this.y = stage.mouseY; //position of the plain over the mouse
        };
        return Plane;
    })(createjs.Bitmap);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map