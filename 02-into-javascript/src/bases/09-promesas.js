import { getHeroById, owners } from "./bases/08-import-export";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//             const heroe = getHeroById(2);
//             resolve(heroe);
//             // reject('No se pudo encontrar heroe');
//         },
//         2000
//     );
// });

// // El resolve va enlazado al then de la promesa
// promesa.then((heroe) => {
//     console.log('heroe: ', heroe)
// }).catch(err => console.warn(err))

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
                const heroe = getHeroById(id);
                if (heroe) {
                    resolve(heroe);
                }else{
                    reject('No se pudo encontrar heroe');
                }
            },
            2000
        );
    });
}

getHeroByIdAsync(7)
    .then(console.log)
    .catch(console.warn)