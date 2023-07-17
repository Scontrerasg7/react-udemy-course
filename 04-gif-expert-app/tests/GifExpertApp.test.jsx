import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('pruebas en el componente <GifExpertApp/>', () => { 
    
    test('should dibujar todas las categorías', () => { 
        render( <GifExpertApp/> );
        screen.debug()

    });

    // test('should first', () => { 
        

    // });

    // test('should first', () => { 
        

    // });

});