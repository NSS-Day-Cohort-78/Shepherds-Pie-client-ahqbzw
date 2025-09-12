import React, { useEffect, useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"
import { ServerDropdown } from "./ServerDropdown"
import { DriverDropdown } from "./DriverDropdown"
import { ChooseToppings } from "./ChooseToppings"
import { DeliveryButton } from "./OrderTypeButton"
import { ChooseCheeses } from "./ChooseCheeses"

export const Order = () => {
    const [orderType, setOrderType] = useState(false)
    const [sizes, setSizes] = useState([])
    const [sauces, setSauces] = useState([])
    const [cheeses, setCheeses] = useState([])
    const [toppings, setToppings] = useState([])
    const [employees, setEmployees] = useState([])
    const [drivers, setDrivers] = useState([])
    const [isChecked, setIsChecked] = useState([])
    const [currentSize, setCurrentSize] = useState(0)

    const [pizza, setPizza] = useState({
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
                setCurrentSize={setCurrentSize}
                sizes={sizes}
                setSizes={setSizes}
            />
            <ChooseSauces sauces={sauces} setSauces={setSauces} />
            <ChooseCheeses cheeses={cheeses} setCheeses={setCheeses} />
            <ChooseToppings
                toppings={toppings}
                setToppings={setToppings}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
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
