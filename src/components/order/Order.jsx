import React, { useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"
import { ServerDropdown } from "./ServerDropdown"
import { ChooseToppings } from "./ChooseToppings"

import { DeliveryButton } from "./OrderTypeButton"

export const Order = () => {
    const [orderType, setOrderType] = useState("")
    const [sizes, setSizes] = useState([])
    const [sauces, setSauces] = useState([])
    const [toppings, setToppings] = useState([])
    const [employees, setEmployees] = useState([])

    return (
        <form>
            <h1>What kind of pizza would you like?</h1>
            <ChooseSizes sizes={sizes} setSizes={setSizes} />
            <ChooseSauces sauces={sauces} setSauces={setSauces} />
            <ChooseToppings toppings={toppings} setToppings={setToppings} />
            <ServerDropdown employees={employees} setEmployees={setEmployees} />
            <DeliveryButton orderType={orderType} setOrderType={setOrderType} />
        </form>
    )
}
