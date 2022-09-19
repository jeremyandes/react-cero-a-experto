import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length === 0) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="description" value={description} onChange={onInputChange} placeholder="Qué hay que hacer?" className="form-control" />
                <button className="btn btn-dark mx-0 mt-3" type="submit">Agregar</button>
            </form>
        </>
    )
}