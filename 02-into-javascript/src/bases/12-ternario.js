const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo'
// }

// Esto lo podemos reducir en un operador ternario
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// Y si no queremos ejecutar el código si no se cumple la condición?
const mensaje = activo && 'Activo';

console.log(mensaje)

//  Es como una forma de hacer un if en una línea