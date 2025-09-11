import React, { useState } from "react"

export const DeliveryButton = () => {
    const [orderType, setOrderType] = useState('')
    
    
    return (
        <div> 
            <h3>How would you like to receive your order? </h3>
            <input
                type="radio"
                id="delivery"
                name="orderType"
                value="delivery"
                checked={orderType === 'delivery'}
                onChange={(event) => setOrderType(event.target.value)}
            />
            <label htmlFor="delivery">Delivery</label>

            <input
                type="radio"
                id="carryout"
                name="orderType"
                value="carryout"
                checked={orderType === 'carryout'}
                onChange={(event) => setOrderType(event.target.value)}
            />
            <label htmlFor="carryout">Carry Out</label>
            
            <p>Selected: {orderType} </p>
        </div>


    )
}