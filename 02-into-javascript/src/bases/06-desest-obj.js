// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// Extraigo un valor del objeto y le asigno el nombre de variable
// después del :
// const {nombre:nombre2} = persona; 
// console.log(nombre2);
const {nombre, edad, clave} = persona
console.log(nombre);
console.log(edad);
console.log(clave);

console.log('--------------------------')
// Puedo desestructurar directamente desde el llamado de una 
// función, incluso asignaratributos que el objeto no tiene
const retornaPersona = ({nombre, edad, rango = 'Capitán'}) => {
    console.log(nombre, edad, rango);
}
retornaPersona(persona);

console.log('--------------------------')
// Puedo desestructurar directamente desde el llamado de una 
// función, incluso asignaratributos que el objeto no tiene
const retornaPersona2 = ({clave, nombre, edad, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.1232,
            lng:-12.1232,
        }
    };
}
const avenger = retornaPersona2( persona );
console.log(avenger)

console.log('-------TAREA-------')
const {nombreClave, anios} = avenger
console.log(nombreClave, anios)

// Esto se puede pero no es tan comun
// const {latlng:{lat,lng}} = avenger
// console.log(lat, lng)
const {latlng} = avenger;
const {lat, lng} = latlng;
console.log(lat, lng)




