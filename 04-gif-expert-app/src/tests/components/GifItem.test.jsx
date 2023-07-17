import { GifItem } from "../../components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Acciones';
    const url = 'https://datosgov.com.co';
    
    test('should hacer match con el snapshot', () => { 
        
        const {container} = render( <GifItem title={title} url={ url } /> );
        expect( container ).toMatchSnapshot();

    })

    test('should mostrar imagen con URL y ALT indicado', () => { 
        
        render( <GifItem title={title} url={url} /> );

        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url+'/');
        // expect( screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url + '/' ); //dunno pq me pone un / de más
        expect( alt ).toBe( title );

    });

    test('should mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();

     })
 })