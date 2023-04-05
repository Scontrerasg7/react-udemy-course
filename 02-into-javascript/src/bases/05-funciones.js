// Funciones en JS
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};

// Arroy functions
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};
const saludar3 = (nombre) => `Hola, ${nombre}`; //Func en una sola linea

console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Yamcha'));


// Como escribir un return implicito
const getUser = () => ({
        uuid: 'ABC123',
        username: 'Gohan248'
    });
const user = getUser();
console.log(user);


//  TAREA:
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uuid: 'ABC123',
//         username: nombre
//     };
// };
// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo)

const getUsuarioActivo = (nombre) => (
    {
        uuid: 'ABC123',
        username: nombre
    }
);
const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo)