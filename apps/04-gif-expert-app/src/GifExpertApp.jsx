import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Michael Jordan', 'Curry']);

    const onAddCategory = (value) => {
        setCategories([value, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Gifs */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            {/* Item */}
            {/* EndGifs */}
        </>
    )
}
