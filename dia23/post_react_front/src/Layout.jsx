import { Outlet, NavLink } from "react-router-dom";
import "./css/Posts.css"
const Layout = () => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/posts" className="nav-link">Posts</NavLink>
                </nav>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
