import { getHeroById } from "./08-import-export";

export const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
                const heroe = getHeroById(id);
                if (heroe) {
                    resolve(heroe);
                }else{
                    reject('No se pudo encontrar heroe ' + id );
                }
            },
            1000
        );
    });
}