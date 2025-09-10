import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { Order } from "./components/order/Order"

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						{/* <NavBar /> */}
						<Outlet />
					</>
				}>
				<Route index element={<Order/>} />
			</Route>
		</Routes>
	)
}

export default App
