import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // const increment = () => setCounter(counter + 1);

    const increment = useCallback(
        (value) => {
            console.log('setCounter anterior', counter);
            setCounter((actualValue) => actualValue + value);
        },
        [],
    )

    return (
        <div className="container">
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}