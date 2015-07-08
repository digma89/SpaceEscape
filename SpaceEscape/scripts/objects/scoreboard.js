var objects;
(function (objects) {
    var ScoreBord = (function () {
        //Contrsuctor***************************  
        function ScoreBord() {
            //public properties 
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
        }
        //update the score bord
        ScoreBord.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBord;
    })();
    objects.ScoreBord = ScoreBord;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map