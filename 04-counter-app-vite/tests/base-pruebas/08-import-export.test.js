import { getHeroById, getHeroByOwner } from "../../src/base-pruebas/08-import-export";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-import-export', () => { 
    
    test('getHeroById devuelve el valor de Heroe por ID', () => { 
        const id = 2;
        
        expect( getHeroById(id)).toEqual(
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            }
        )
    })

    test('getHeroById devuelve undefined si no existe', () => { 
      const id = 100;
      expect(getHeroById(id)).toBeFalsy(); // Null, undefined o false
    })

    test('Debe retornar un arreglo con los héroes de DC, length == 3', () => { 
        const owner = 'DC';
        expect(getHeroByOwner(owner)).toEqual(
            heroes.filter( (heroe) => heroe.owner === owner)
        );
    })

    test('Debe retornar un arreglo con los héroes de Marvel, length == 2', () => { 
        const owner = 'Marvel';
        expect(getHeroByOwner(owner)).toEqual(
            heroes.filter( (heroe) => heroe.owner === owner)
        );
    })
 })