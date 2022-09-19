export const TodoItem = ({ item }) => {
    return (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5>Item {item.id}</h5>
            <span>{item.description}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}