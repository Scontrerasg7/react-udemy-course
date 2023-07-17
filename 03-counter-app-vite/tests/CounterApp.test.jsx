import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Tests en el componente padre <CounterApp/>', () => { 
    const value = 100
    const initialValue = 10
  
    test('should hacer match con el snapshot', () => { 
        const { container } = render(
            <CounterApp value={value}/>
        );  
        expect( container ).toMatchSnapshot();
    })

    test('should mostrar el valor inicial del counter', () => { 

        render(
            <CounterApp value={value}/>
        );  
        // screen.debug()
        // expect(screen.getByText(value)).toBeTruthy();
        expect( screen.getByRole('heading', {level:2}).innerHTML).toContain(value.toString());
      
    })

    test('should incrementar con el botón +1', () => { 
      
        render(
            <CounterApp value={initialValue}/>
        );  
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText( (initialValue+1).toString() )).toBeTruthy();

    })

    test('should decrementar con el botón -1', () => { 
      
        render(
            <CounterApp value={initialValue}/>
        );  
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText( (initialValue-1).toString() )).toBeTruthy();

    })

    test('should funcionar el botón reset', () => { 
        
        render(
            <CounterApp value={initialValue}/>
        );  
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )

        // screen.debug()

        fireEvent.click( screen.getByText('Reset') );
        screen.getByRole('button', {name: 'btn-reset'});

        expect( screen.getByText( initialValue.toString() )).toBeTruthy();


    })

})