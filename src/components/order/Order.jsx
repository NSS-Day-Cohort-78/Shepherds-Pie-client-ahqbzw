import React, { useEffect, useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"
import { ServerDropdown } from "./ServerDropdown"
import { DriverDropdown } from "./DriverDropdown"
import { ChooseToppings } from "./ChooseToppings"
import { DeliveryButton } from "./OrderTypeButton"
import { ChooseCheeses } from "./ChooseCheeses"
import { AddToOrderButton } from "./AddToOrderButton"

export const Order = () => {
    const [orderType, setOrderType] = useState(false)
    const [sizes, setSizes] = useState([])
    const [sauces, setSauces] = useState([])
    const [cheeses, setCheeses] = useState([])
    const [toppings, setToppings] = useState([])
    const [employees, setEmployees] = useState([])
    const [drivers, setDrivers] = useState([])
    const [isChecked, setIsChecked] = useState([])

    const [allPizzas, setAllPizzas] = useState([])
    const [allOrders, setAllOrders] = useState([])
    const [currentServer, setCurrentServer] = useState(0)

    const [pizza, setPizza] = useState({
        // refactor, store size cheese sauce in here instead
        orderId: 0,
        sizeId: 0,
        cheeseId: 0,
        sauceId: 0
    })

    // array of all toppings we choose
    const [pizzaToppings, setPizzaToppings] = useState([])

    useEffect(() => {
        const checkedArray = toppings.map(topping => {
            return {
                id: topping.id,
                checked: false
            }
        })

        setIsChecked(checkedArray)
    }, [toppings])

    return (
        <form>
            <h1>What kind of pizza would you like?</h1>
            <ChooseSizes
                pizza={pizza}
                setPizza={setPizza}
                sizes={sizes}
                setSizes={setSizes}
            />
            <ChooseSauces
                pizza={pizza}
                setPizza={setPizza}
                sauces={sauces}
                setSauces={setSauces}
            />
            <ChooseCheeses
                cheeses={cheeses}
                setCheeses={setCheeses}
                pizza={pizza}
                setPizza={setPizza}
            />
            <ChooseToppings
                toppings={toppings}
                setToppings={setToppings}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <ServerDropdown
                setCurrentServer={setCurrentServer}
                employees={employees}
                setEmployees={setEmployees}
            />
            <DeliveryButton orderType={orderType} setOrderType={setOrderType} />
            <DriverDropdown
                drivers={drivers}
                setDrivers={setDrivers}
                orderType={orderType}
            />
            <AddToOrderButton
                setPizzaToppings={setPizzaToppings}
                pizzaToppings={pizzaToppings}
                isChecked={isChecked}
                setAllPizzas={setAllPizzas}
                allPizzas={allPizzas}
                pizza={pizza}
                allOrders={allOrders}
                setAllOrders={setAllOrders}
                setPizza={setPizza}
                setToppings={setToppings}
            />
        </form>
    )
}
