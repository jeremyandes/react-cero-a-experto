import { useContext } from "react"
import { UserContext } from "../context/user/UserContext";

export const HomePage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h5>HomePage <small>| {user?.name}</small></h5>
            <hr />

            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button className="btn btn-outline-dark"
                onClick={() => setUser({ id: 456, name: 'Jeremyyyyy', email: 'jeremyyyy@andessss.com' })}>
                Set user
            </button>
        </>
    )
}