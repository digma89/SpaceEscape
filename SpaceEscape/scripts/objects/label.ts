﻿module objects {
    export class Label extends createjs.Text {
        
         //Contrsuctor***************************  
        constructor(text: string, size: string) {
            super(text, size + " Consolas", "#28E90F");            
        }
    }
} 