import React, { useEffect } from "react"
import { getToppings } from "../services/ToppingsServices"

export const ChooseToppings = ({ toppings, setToppings }) => {
  useEffect(() => {
    getToppings().then(setToppings)
  }, [])

  return (
    <fieldset>
      <label htmlFor="toppings">Toppings</label>
      <select name="toppings" id="toppings">
        <option value="0">Choose Topping</option>
        {toppings.map(t => {
          return (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          )
        })}
      </select>
    </fieldset>
  )
}
