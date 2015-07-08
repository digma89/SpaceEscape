module objects {
    //energy class *******************************
    export class Energy extends objects.GameObject {

        //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.dx = 5;
            this.sound = "energyS";
            this.reset();
            this.name = "energy";
        
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
            this.x = 1800; //start enegy off stage
        }


        //public methods************************************
        public update(): void {
            this.x -= this.dx; //moves the energy
            this.checkBounds();
        }
     }
  }
 