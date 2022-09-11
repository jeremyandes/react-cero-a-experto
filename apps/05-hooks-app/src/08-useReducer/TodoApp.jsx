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

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="container">
            <h1>TodoApp: 10 <small className="mx-4">pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>Item 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input type="text" placeholder="Qué hay que hacer?" className="form-control" />
                    </form>
                    <button className="btn btn-dark mx-0 mt-3" type="submit">Agregar</button>
                </div>
            </div>

        </div>
    )
}