
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