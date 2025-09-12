import React, { useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"
import { ChooseSauces } from "./ChooseSauces"

export const Order = () => {
    const [sizes, setSizes] = useState([])
    const [sauces, setSauces] = useState([])

    return (
        <form>
            <h1>What kind of pizza would you like?</h1>
            <ChooseSizes sizes={sizes} setSizes={setSizes} />
            <ChooseSauces sauces={sauces} setSauces={setSauces} />
        </form>
    )
}
