import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'Gohan248'
        };
        const user = getUser();
        console.log(user);

        expect(testUser).toStrictEqual( user );
     });

    test('getUsuarioActivo debe retorna un objeto', () => { 
        const nombre = 'Cbass1234'
        const testUser = {
            uid: 'ABC123',
            username: nombre
        }
        
        expect( getUsuarioActivo(nombre)).toStrictEqual(testUser)
    })
 });