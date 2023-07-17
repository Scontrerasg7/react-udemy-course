import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-templatestring', () => { 
    test('getSaludo debe retornar "Hola Sebastián"', () => { 
        const name = 'Sebastián';
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${name}!!!`)
     })
 })