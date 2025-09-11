import React from "react"

export const DeliveryButton = ({ orderType, setOrderType }) => {
    return (
        <fieldset className="OrderTypeButton">
            <legend>How would you like to receive your order? </legend>
            <input
                type="radio"
                id="delivery"
                name="orderType"
                value={true}
                onChange={event => setOrderType(event.target.value)}
            />
            <label htmlFor="delivery">Delivery</label>

            <input
                type="radio"
                id="carryout"
                name="orderType"
                value={false}
                onChange={event => setOrderType(event.target.value)}
            />
            <label htmlFor="carryout">Carry Out</label>
        </fieldset>
    )
}
