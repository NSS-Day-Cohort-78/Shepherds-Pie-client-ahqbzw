import { Link } from "react-router-dom"

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/orders">Orders</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</nav>
	)
}
