import { getHeroById, owners } from "./bases/08-import-export";

const promesa = new Promise( (resolve, reject) => {
    setTimeout(
        () => {
            const heroe = getHeroById(2);
            console.log(heroe)
        },
        2000
    );
});

// El resolve va enlazado al then de la promesa
promesa.then(() => {
    console.log('Then de la promesa')
})