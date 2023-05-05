import {heroes} from '../data/heroes';

//  Find
export const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id===id);
}
// console.log(getHeroById(2));

// Filter
export const getHeroByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner===owner);
}
// console.log(getHeroByOwner('Marvel'));

// console.log(owners)