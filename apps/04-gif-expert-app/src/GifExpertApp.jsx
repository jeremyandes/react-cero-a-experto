import { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Michael Jordan', 'Curry']);

    const onAddCategory = () => {
        setCategories([...categories, 'Facu Campazzo']);
        // setCategories(cats => [ ...cats, 'Facu Campazzo' ]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Gifs */}
            <button type='button' onClick={onAddCategory}>Agregar</button>
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
