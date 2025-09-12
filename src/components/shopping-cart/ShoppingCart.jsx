import React, { useEffect, useState } from "react"
import { PurchaseButton } from "./PurchaseButton"
import { ShowPizzasForOrder } from "./ShowPizzasForOrder"
import { getEmployees } from "../services/EmployeesServices"

export const ShoppingCart = ({
    allOrders,
    setAllOrders,
    currentServer,
    currentDriver,
    employees,
    setEmployees
}) => {
    const [employee, setEmployee] = useState({})
    const [driver, setDriver] = useState({})

    useEffect(() => {
        const found = employees.find(e => e.id === currentServer)
        setEmployee(found)
        const foundDriver = employees.find(e => e.id === currentDriver)
        setDriver(foundDriver)
    }, [employees])

    useEffect(() => {
        getEmployees().then(setEmployees)
    }, [])
    return (
        <div>
            <h1> Your pizza order </h1>
            <ShowPizzasForOrder
                allOrders={allOrders}
                setAllOrders={setAllOrders}
            />
            <section>
                <p>Server</p>
                <p>{employee.fullName}</p>
                <p>Driver</p>
                <p>{driver.fullName}</p>
            </section>
            <PurchaseButton />
        </div>
    )
}
