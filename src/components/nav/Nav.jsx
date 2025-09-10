import { Link } from "react-router-dom"
import "./Nav.css"

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Orders</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}
