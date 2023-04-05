const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad: 'New York',
        zip: '055420',
        lat: 14.32541,
        lng: 34.923332,
    }
};

// console.table(persona);
console.log(persona);

// const persona2 = persona; // Esta asignación no se debe hacer porque estamos cambiando el original
// persona2.nombre = 'Peter';
// console.log(persona2);
// console.log(persona);

// Se soluciona con el  operador spread
const persona2 = {...persona}
persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);