import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    console.log(inputRef);

    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <div className="container">
            <h1>Focus Sreen</h1>
            <hr />

            <input ref={inputRef} type="text" placeholder="Ingrese su nombre" className="form-control" />

            <button className="btn btn-outline-dark mt-3 mx-0" onClick={() => onClick()}>
                Set focus
            </button>
        </div>
    )
}