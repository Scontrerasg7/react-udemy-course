import heroes from "../data/heroes";

export const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id===id);
}

export const getHeroByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner===owner);
}
