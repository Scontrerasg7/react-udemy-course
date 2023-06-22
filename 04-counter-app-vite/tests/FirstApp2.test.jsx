import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => { 

    const title = 'Hola, soy SCG';
    const subtitle = 'Soy un Subtitulo'
    
    test('should hacer match con el snapshot', () => { 
        
        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();
    });

    test('should mostrar el mensaje "Hola, Soy SCG"', () => { 

        render( <FirstApp title={title} /> );
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
        
    })

    test('should mostrar el título en un h1', () => { 
        
        render( <FirstApp title={title} /> );
        screen.debug();
        // expect( screen.getByRole('heading', { level:1 }).innerHtml ).toContain( title );

    })

    test('should mostrar el subtitulo enviado por props', () => { 
        
        render( 
            <FirstApp title={title} subtitle={subtitle}/> 
        );
        expect(screen.getAllByText(subtitle).length).toBe(2);
     })


 })