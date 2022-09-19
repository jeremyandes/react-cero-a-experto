export const TodoItem = ({ item }) => {
    return (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5>{item.description}</h5>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}