import { Lifeform } from "./Lifeform.js";

export class Cat extends Lifeform {
    
    static INITIAL_HP = 50;

    constructor(){
        super();
        this.type = 'Cat';
        this.hp = this.constructor.INITIAL_HP;
    }
}