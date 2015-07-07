module objects {
    //energy class *******************************
    export class Energy extends createjs.Bitmap {
        //Public properties **************************
        width: number;
        height: number;
        dx: number = 5;
        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = Math.floor((Math.random() * 380) + this.height);
            this.x = 640
            

        }
        //private method
        private checkBounds(): void {
            //check if energy has left the screen then reset
            if (this.x <= 0 - this.width) {
                this.reset();
            }

        }

        private reset(): void {
            this.y = Math.floor((Math.random() * 380)+this.height); //start island at random location
            this.x = 2000; //start enegy off stage
            
        }


        //public methods************************************
        public update(): void {
            console.log(this.x);
            console.log(this.y);
            this.x -= this.dx; //moves the energy
            this.checkBounds();
        }
    }
  }
 