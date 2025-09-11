import React, { useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"
import { ServerDropdown } from "./ServerDropdown"
import { ChooseToppings } from "./ChooseToppings"


export const Order = () => {
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
        </form>
    )
}
