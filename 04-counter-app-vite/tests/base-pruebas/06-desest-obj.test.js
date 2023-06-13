import { usContext } from "../../src/base-pruebas/06-desest-obj";

describe('Pruebas en 06-desest-objs', () => { 

    test('usContext debe retornar un objeto', () => { 
        const objeto = {
            clave:'SCG',
            nombre:'Sebas',
            edad:25,
        }
        const clave = objeto.clave
        const edad = objeto.edad
        const testUser = usContext(objeto)
        console.log(testUser);

        expect(testUser).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat:14.1232,
                lng:-12.1232,
            }
        });
     });
 });