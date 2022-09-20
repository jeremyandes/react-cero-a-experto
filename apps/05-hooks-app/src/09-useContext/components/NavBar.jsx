import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    const activeClass = (isActive) => isActive && 'active';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to='/about' className={({ isActive }) => `nav-link ${activeClass(isActive)}`}>
                            About
                        </NavLink>
                        <NavLink to='/login' className={({ isActive }) => `nav-link ${activeClass(isActive)}`}>
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
