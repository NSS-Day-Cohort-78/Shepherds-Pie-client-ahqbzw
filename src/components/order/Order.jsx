import React, { useState } from "react"
import "./order.css"
import { ChooseSizes } from "./ChooseSizes"

export const Order = () => {
    const [sizes, setSizes] = useState([])

    return (
        <form>
            <h1>What kind of pizza would you like?</h1>
            <ChooseSizes sizes={sizes} setSizes={setSizes} />
        </form>
    )
}
