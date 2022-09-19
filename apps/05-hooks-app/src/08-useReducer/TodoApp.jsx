import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <div className="container">
            <h1>TodoApp | <small className="mx-4">pendientes: {todos.length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
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