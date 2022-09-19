import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

const initialState = [
    {
        id: 1,
        description: 'Comprender el useReducer',
        done: false,
        timestamp: new Date().getTime(),
    },
    {
        id: 2,
        description: 'Comprender React',
        done: false,
        timestamp: new Date().getTime(),
    },
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log(todo);
    }

    return (
        <div className="container">
            <h1>TodoApp: 10 <small className="mx-4">pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
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