import { Human } from './classes/Human.js';
import { Cat } from './classes/Cat.js';
import { Zombie } from './classes/Zombie.js';


const beings = [
new Human(),
new Human(),
new Human(),
new Cat(),
new Cat(),
new Zombie(),
new Zombie()
];

beings[beings.length-1].setHp(23);
beings[3].setHp(44);

for(let i = 0; i < beings.length; i++){
    console.log(beings[i].toString());
}

