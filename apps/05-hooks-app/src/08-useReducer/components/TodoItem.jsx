export const TodoItem = ({ item, onDeleteTodo, onToggleTodo }) => {
    return (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className={item.done ? 'text-decoration-line-through' : ''}
                onClick={() => onToggleTodo(item.id)}>{item.description}</h5>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(item.id)}>Borrar</button>
        </li>
    )
}