import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasErrors: null,
    })

    const getFetch = async () => {

        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            hasErrors: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors: state.hasErrors,
    };
}