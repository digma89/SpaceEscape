module objects {
    //asteroid class *******************************
    export class Asteroid extends createjs.Bitmap {
        //Public properties **************************
        width: number;
        height: number;
        dx: number = 5;
        dy: number;
        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = Math.floor((Math.random() * 480));
            this.x = 640


        }
        //private method
        private checkBounds(): void {
            //check if asteroid has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }

        }

        private reset(): void {
            this.y = Math.floor((Math.random() * 480) + this.height); //start asteroid at random location
            this.x = 2000; //start asteroid off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
        //    this.dy = Math.floor(Math.random() * 4) - 2;
        }


        //public methods************************************
        public update(): void {
            this.x -= this.dx; //moves the asteroids accross the stage
           // this.y += this.dx; // moves the asteroids horizontal 
           // this.checkBounds();
        }
    }
} 