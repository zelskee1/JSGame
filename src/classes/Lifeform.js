export class Lifeform {
    
    static id = 0;
    static INITIAL_HP=100;

    hp;             // Attribut public
    type;

    constructor(){
        this.id = Lifeform.id++;
        this.hp = Lifeform.INITIAL_HP;
        /*
            Puisqu'on souhaite que les identifiants des instances de Lifeform s'enchainent
            PEU IMPORTE LE TYPE, on ne peut pas utiliser this.constructor.id puisque lorsqu'on appelle
            super() dans la sous-classe, cela effectue le traitement du constructeur de la superclasse
            MAIS DANS LE CONTEXTE DE LA SOUS-CLASSE (donc this référence la sous-classe et non la superclasse).

            Cela a pour effet d'initialiser un identifiant propre à la sous-classe.
        */
    }

    setHp(newHp){
        if(newHp < 0 || newHp > 999) throw new Error('HP must be between 0 and 999');
        this.hp = newHp;
    }
    
    /**
     * Give string formatted lifeform data
     * @returns a string
     */
    toString(){
        
        return (
            `[Lifeform n°${this.id}]\n`+ 
            `Type:${this.type}\n`+`HP:${this.hp}\n`
        );
    }    
}