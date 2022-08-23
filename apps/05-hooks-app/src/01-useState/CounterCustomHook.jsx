import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className="btn btn-dark" onClick={() => increment(15)}>+1</button>
            <button className="btn btn-dark" onClick={reset}>Reset</button>
            <button className="btn btn-dark" onClick={() => decrement(15)}>-1</button>
        </>
    )
}