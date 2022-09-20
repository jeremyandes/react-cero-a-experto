import { useContext } from "react"
import { UserContext } from "../context/user/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h5>LoginPage</h5>
            <hr />

            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button className="btn btn-outline-dark"
                onClick={() => setUser({ id: 123, name: 'Jeremy', email: 'jeremy@andes.com' })}>
                Set user
            </button>
        </>
    )
}