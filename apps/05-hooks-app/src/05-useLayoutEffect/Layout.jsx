import { useCounter, useFetch } from "../hooks"
import { Quote, LoadingQuote } from "../03-examples";

export const Layout = () => {
    const baseUrl = 'https://www.breakingbadapi.com/api';

    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`${baseUrl}/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    return (
        <div className="container">
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button className="btn btn-outline-dark" disabled={isLoading} onClick={() => increment()}>
                Next quote
            </button>
        </div>
    )
}
