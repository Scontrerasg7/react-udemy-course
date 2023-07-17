// Este componente no debe testear el customHook que utiliza, este se debió 
// haber testeado en su archivo original (pruebas unitarias)

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs") // Hacer un mock de mis librerías (custom hook en este caso)

describe('Pruebas en <GidGrid/>', () => { 
    
    const category = 'One Punch';

    test('should mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );


    });

    test('should mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }

        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

})