// Desestructuración
// Asignación Desestructurante
// Arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

//  TAREA:
// Dado el siguiente ejemplo
const functionuseState = ( valor ) => {
    return [ valor, ()=>{console.log('Hola Mundo')}];
}
const arr = functionuseState('Goku')
arr[1]();
//  1. El primer valor del arr se llamara nombre
//  2. El segundo se llamrá setNombre
const function_useState_tarea = ( nombre ) => {
    return [ nombre, ()=>{console.log('Hola Mundo')}];
}
const [nombre, setNombre] = function_useState_tarea('Goku')
console.log(nombre);
setNombre();
