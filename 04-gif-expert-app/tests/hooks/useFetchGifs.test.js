import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => { 
    
    test('should regresar el estado inical del hook', () => { 
        
        const { result } = renderHook( () => useFetchGifs('OnePunch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should retornar un arreglo de imagenes y el isloading en false', async() => { 
      
        const { result } = renderHook( () => useFetchGifs('OnePunch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


    });

});