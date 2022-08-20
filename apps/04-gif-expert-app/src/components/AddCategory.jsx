import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onFormSubmit = (event) => {
        console.log('onFormSubmit: ', inputValue);
        event.preventDefault();
        if (inputValue.trim().length > 1) {
            onNewCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <form aria-label="form" onSubmit={onFormSubmit}>
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
