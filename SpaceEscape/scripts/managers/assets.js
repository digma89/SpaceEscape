var managers;
(function (managers) {
    var Assets = (function () {
        //Constructor*************************
        function Assets() {
            this.preload();
        }
        //all the objects that are load at the beginig of the game (Manifest)
        Assets.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.on("complete", init, this);
            this.loader.loadManifest([
                { id: "space", src: "assets/images/background.jpg" },
                { id: "plane", src: "assets/images/plane.png" },
                { id: "energy", src: "assets/images/energy.png" },
                { id: "play", src: "assets/images/play.png" },
                { id: "playAgain", src: "assets/images/playAgain.png" },
                { id: "asteroid", src: "assets/images/asteroid1.png" },
                { id: "energyS", src: "assets/sounds/energySound.wav" },
                { id: "explotion", src: "assets/sounds/explotion.wav" },
                { id: "planeS", src: "assets/sounds/plane.wav" },
                { id: "gameOverS", src: "assets/sounds/gameOver.wav" },
                { id: "music", src: "assets/sounds/music.mp3" },
            ]);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map