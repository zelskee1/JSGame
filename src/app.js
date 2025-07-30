import { Human } from './classes/Human.js';
import { Cat } from './classes/Cat.js';
import { Zombie } from './classes/Zombie.js';

/**
 * Shows all the beings in an array in a pretty format
 * @param {*} beings An array containing all the beings
 */
function showBeings(beings){
    for(let i = 0; i < beings.length; i++){
    console.log(beings[i].toString());
    }
}

const beings = [
new Human(),
new Human(),
new Human(),
new Cat(),
new Cat(),
new Zombie(),
new Zombie()
];


console.log('attack n1');

beings[0].attack(beings[beings.length-1], 49);
beings[beings.length-1].attack(beings[0], 100);

showBeings(beings);

console.log('attack n2');
beings[1].attack(beings[beings.length-1], 34);

showBeings(beings);

console.log('attack n3');
beings[1].attack(beings[beings.length-2], 49);

showBeings(beings);