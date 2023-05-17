// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://holamundo.com')
//     })

//     return promesa
// }

// Esto se puede escribir en una sola línea con los trucos que hemos aprendido:
// const getImagenPromesa = () =>  new Promise(resolve => resolve('https://holamundo.com'));
// getImagenPromesa().then(console.log)
// Pero digamos que no es tan fácil de leer, ahí es donde entra en juego el async
// const getImage = async() => {
//     return 'https://holamundo.com';
// }
// getImage().then(console.log)

// Ahora, apliquemos el async y el await para recrear el cósigo de la clase pasada
const getImagen = async() => {
    try {
        const apiKey = 'ZqvJTcxnFx9kZjXi18N9mOtQH5I7S0MW';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // El código espera a que se ejecute esta linea anterior de código antes de continuar
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)         
    } catch (error) {
        // Manejo del error
        console.error(error)
    }

}
getImagen();