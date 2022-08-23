import { useState } from "react"

export const useCounter = (initValue = 10) => {
    const [counter, setCounter] = useState(initValue);

    return {
        counter,
    }
}