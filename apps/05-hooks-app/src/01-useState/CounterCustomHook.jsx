import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {
    const { counter } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className="btn btn-dark">+1</button>
            <button className="btn btn-dark">Reset</button>
            <button className="btn btn-dark">-1</button>
        </>
    )
}