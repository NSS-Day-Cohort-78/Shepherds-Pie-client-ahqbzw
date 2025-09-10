import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"

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
				<Route index element={<div>Order</div>} />
			</Route>
		</Routes>
	)
}

export default App
