var managers;
(function (managers) {
    var Assets = (function () {
        //Constructor*************************
        function Assets() {
            this.preload();
        }
        Assets.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.on("complete", init, this);
            this.loader.loadManifest([
                { id: "space", src: "assets/images/background.jpg" },
                { id: "plane", src: "assets/images/plane.png" },
                { id: "energy", src: "assets/images/energy.png" },
                { id: "asteroid", src: "assets/images/asteroid1.png" },
                { id: "energyS", src: "assets/sounds/energySound.wav" },
                { id: "explotion", src: "assets/sounds/explotion.wav" },
            ]);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map