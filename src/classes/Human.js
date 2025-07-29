import { Lifeform } from "./Lifeform.js";

export class Human extends Lifeform {
    /*
    static permet de déclarer la constante au niveau de la classe et donc de
    ne définir la valeur qu'une seule fois pour toutes les instances
    
    Si on ne mettait pas static, la valeur bien que constante serait définie
    à chaque fois dans chaque nouvelle instance de la classe, ce qui est redondant
    */
    
    // static INITIAL_HP = 150;
    #bank_account;  // Attribut privé
    
    constructor(){
        super();
        this.hp = this.constructor.INITIAL_HP;
        this.type = 'Human';
        this.#bank_account = 0;
    }
}
