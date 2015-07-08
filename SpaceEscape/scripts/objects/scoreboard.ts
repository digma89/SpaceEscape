module objects {
    export class ScoreBord {
        //public properties 
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        //Contrsuctor***************************  
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
        }
        //update the score bord
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
}