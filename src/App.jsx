import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { Nav } from "./components/nav/Nav"
import { Order } from "./components/order/Order"
import { ShoppingCart } from "./components/shopping-cart/ShoppingCart"
import { useState } from "react"
function App() {
    const [currentServer, setCurrentServer] = useState(0)
    const [currentDriver, setCurrentDriver] = useState(0)
    const [allOrders, setAllOrders] = useState([])
    const [employees, setEmployees] = useState([])
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
                <Route
                    index
                    element={
                        <Order
                            employees={employees}
                            setEmployees={setEmployees}
                            allOrders={allOrders}
                            setAllOrders={setAllOrders}
                            setCurrentDriver={setCurrentDriver}
                            setCurrentServer={setCurrentServer}
                        />
                    }
                />

                <Route
                    path="cart"
                    element={
                        <ShoppingCart
                            employees={employees}
                            setEmployees={setEmployees}
                            allOrders={allOrders}
                            setAllOrders={setAllOrders}
                            currentDriver={currentDriver}
                            currentServer={currentServer}
                        />
                    }
                />
            </Route>
        </Routes>
    )
}

export default App
