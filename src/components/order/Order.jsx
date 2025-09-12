import React, { useEffect, useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"
import { ServerDropdown } from "./ServerDropdown"
import { DriverDropdown } from "./DriverDropdown"
import { ChooseToppings } from "./ChooseToppings"
import { DeliveryButton } from "./OrderTypeButton"

export const Order = () => {
    const [orderType, setOrderType] = useState(false)
    const [sizes, setSizes] = useState([])
    const [sauces, setSauces] = useState([])
    const [toppings, setToppings] = useState([])
    const [employees, setEmployees] = useState([])
    const [drivers, setDrivers] = useState([])

    const [pizza, setPizza] = useState({
        sizeId: 0,
        cheeseId: 0,
        sauceId: 0
    })

    // single pizza topping state

    // array of all toppings we choose
    const [pizzaToppings, setPizzaToppings] = useState([])

    // add single pizza topping to array of all toppings

    return (
        <form>
            <h1>What kind of pizza would you like?</h1>
            <ChooseSizes sizes={sizes} setSizes={setSizes} />
            <ChooseSauces sauces={sauces} setSauces={setSauces} />
            <ChooseToppings
                pizzaToppings={pizzaToppings}
                setPizzaToppings={setPizzaToppings}
                toppings={toppings}
                setToppings={setToppings}
            />
            <ServerDropdown employees={employees} setEmployees={setEmployees} />
            <DeliveryButton orderType={orderType} setOrderType={setOrderType} />
            <DriverDropdown
                drivers={drivers}
                setDrivers={setDrivers}
                orderType={orderType}
            />
        </form>
    )
}
