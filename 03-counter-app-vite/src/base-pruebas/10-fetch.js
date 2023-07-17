const apiKey = 'ZqvJTcxnFx9kZjXi18N9mOtQH5I7S0MW';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
})
.catch(console.warn)