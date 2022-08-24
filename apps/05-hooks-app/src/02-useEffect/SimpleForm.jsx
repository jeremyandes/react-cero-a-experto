import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'jeremyandes',
        email: 'jeremy@andes.com',
    })

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        console.log('useEffect called!');
    })

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@dominio.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}