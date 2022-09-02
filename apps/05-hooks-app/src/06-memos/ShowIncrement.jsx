export const ShowIncrement = ({ increment }) => {
    console.log('Me volví a generar :D');

    return (
        <button className="btn btn-outline-primary" onClick={() => {
            increment();
        }}>
            Incrementar
        </button>
    )
}