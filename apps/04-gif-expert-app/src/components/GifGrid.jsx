export const GifGrid = ({ category }) => {
    const gifs = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <h3>{category}</h3>
            {
                gifs.map(gif => (
                    <span key={gif}>{gif}</span>
                ))
            }
        </>
    )
}
