import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const baseUrl = 'https://www.breakingbadapi.com/api';
    const { data, isLoading, hasErrors } = useFetch(`${baseUrl}/quotes/1`);
    console.log({ data, isLoading, hasErrors });

    return (
        <>
            <h1>Breaking Bad</h1>
        </>
    )
}
