import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo,
        });
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }
    const handleToggleTodo = (id) => {
        console.log(id)
        dispatch({
            type: '[TODO] Update Todo',
            payload: id,
        });
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}