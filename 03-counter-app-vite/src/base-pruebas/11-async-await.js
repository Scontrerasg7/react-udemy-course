
export const getImagen = async() => {
    try {
        const apiKey = 'fYsLxZMCHiNHvfMRqb5hGHj2COiY8TSG';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // El código espera a que se ejecute esta linea anterior de código antes de continuar
        const {data} = await resp.json();

        const {url} = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img) 
        
        return url;

    } catch (error) {
        // Manejo del error
        console.error(error)
    }

}
getImagen();