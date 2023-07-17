import { screen, render, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Tests en el componente <AddCategory/>', () => { 
    
    test('should cambiar el valor en al caja del texto', () => { 
        
        render( <AddCategory onNewCategory={ () => {} }/> );

        const text_box = screen.getByRole('textbox');        
        fireEvent.input( text_box, { target: {value:'Saitama'}} );

        expect( text_box.value ).toBe('Saitama');

    })

    test('should llamar onSubmit si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const text_box = screen.getByRole('textbox');        
        const form = screen.getByRole('form');  
        
        fireEvent.input( text_box, { target: {value:inputValue}} );
        fireEvent.submit( form );
        
        expect( text_box.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue.trim());

    });

    test('should not llamar onNewCategory si el input está vacío', () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const text_box = screen.getByRole('textbox');        
        const form = screen.getByRole('form');          
        fireEvent.submit( form );
        
        expect( text_box.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    })
})