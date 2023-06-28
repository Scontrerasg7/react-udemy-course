import React, { useState } from 'react'

export const AddCategory = (props) => {

    const {onNewCategory} = props;
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        console.log(inputValue);

        // setCategories(categories => [inputValue, ...categories]);

        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        // El comportamiento por defecto de un formulario refresca el navegador
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
