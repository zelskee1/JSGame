import { Lifeform } from "./Lifeform.js";

export class Zombie extends Lifeform {
    
    static INITIAL_HP = 50;
    
    constructor(){
        super();
        this.type='Zombie';
        this.hp = this.constructor.INITIAL_HP;
    }
}