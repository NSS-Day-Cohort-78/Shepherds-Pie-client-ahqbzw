import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { Nav } from "./components/nav/Nav"
import { Order } from "./components/order/Order"

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
        {/* Default route: Order page */}
        <Route index element={<Order />} />

        {/* Cart page */}
        <Route path="cart" element={<div>Shopping Cart</div>} />
      </Route>
    </Routes>
  )
}

export default App
