export function getSaludo(nombre) {
    return 'Hola ' + nombre + '!!!';
}

const nombre='Sebas'
console.log(`Este es un texto: ${getSaludo(nombre)}`)