import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <Link className='me-3' to="/login">Login</Link>
            <Link className='me-3' to="/">Home</Link>
            <Link className='me-3' to="/about">About</Link>
        </>
    )
}
