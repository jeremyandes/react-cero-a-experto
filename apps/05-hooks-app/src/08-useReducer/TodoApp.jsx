import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: crypto.randomUUID(),
        description: 'Comprender el useReducer',
        done: false,
        timestamp: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        description: 'Comprender el useReducer',
        done: false,
        timestamp: new Date().getTime(),
    },
];

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}