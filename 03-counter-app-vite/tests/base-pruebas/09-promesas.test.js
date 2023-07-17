import { getHeroByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    
    test('getHeroByIdAsync debe retornar un héroe', (done) => { 
        
        const id = 1;
        getHeroByIdAsync(id).then(
            hero => {
                expect(hero).toEqual( 
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );
                done();
            }
        );
     })
    
     
    test('getHeroByIdAsync debe retornar error si heroe no existe', (done) => { 
    
        const id = 100;
        getHeroByIdAsync(id).catch(
            error => {
                expect(error).toBe('No se pudo encontrar heroe ' + id)
                done();
            }
        );
        })

    }
)