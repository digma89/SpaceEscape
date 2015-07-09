/// <reference path="../managers/assets.ts" />

module objects {
    export class Button extends createjs.Bitmap {
        constructor(x: number, y: number, buttonString: string) {
            super(buttonString);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 