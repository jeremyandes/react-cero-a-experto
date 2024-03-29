import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                !isLoading
                    ? (<article className="card-grid">
                        {
                            images.map((image) => (
                                // <li key={id}>{title}</li>
                                <GifItem
                                    key={image.id}
                                    {...image}
                                />
                            ))
                        }
                    </article>)
                    : (<h2>Cargando...</h2>)
            }
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
