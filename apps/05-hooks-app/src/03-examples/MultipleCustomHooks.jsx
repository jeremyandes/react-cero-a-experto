import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const baseUrl = 'https://www.breakingbadapi.com/api';

    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`${baseUrl}/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    return (
        <div className="container">
            <h1>Breaking Bad</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <div className="alert alert-info text-center w-100 mx-auto">
                            <h5>Cargando...</h5>
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-outline-dark" disabled={isLoading} onClick={() => increment()}>
                Next quote
            </button>
        </div>
    )
}
