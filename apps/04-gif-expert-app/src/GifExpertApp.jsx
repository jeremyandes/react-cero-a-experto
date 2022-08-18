import { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Michael Jordan', 'Curry']);

    console.log(categories);

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

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
