import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { Order } from "./components/order/Order"
import { Nav } from "./components/nav/Nav"
function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Nav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Order />} />
            </Route>
        </Routes>
    )
}

export default App
