import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useEffect } from "react";

// const initialState = [
//     {
//         id: 1,
//         description: 'Comprender el useReducer',
//         done: false,
//         timestamp: new Date().getTime(),
//     },
//     {
//         id: 2,
//         description: 'Comprender React',
//         done: false,
//         timestamp: new Date().getTime(),
//     },
// ];


const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
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

    return (
        <div className="container">
            <h1>TodoApp | <small className="mx-4">pendientes: {todos.length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </div>
    )
}