module objects {
    //plane class *******************************
    export class Plane extends createjs.Bitmap {
         //Public properties **************************
        width: number;
        height: number;
         //Constructor**************************
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            
            this.x = 55;
        }

        //public methods************************************
        public update(): void {
            this.y = stage.mouseY;  //position of the plain over the mouse

        }

    }

} 