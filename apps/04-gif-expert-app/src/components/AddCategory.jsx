import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('Jamal Murray');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 1) {
            onNewCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
