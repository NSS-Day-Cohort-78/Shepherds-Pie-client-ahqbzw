import React, { useEffect } from "react"
import { getToppings } from "../services/ToppingsServices"

export const ChooseToppings = ({ toppings, setToppings }) => {
  useEffect(() => {
    getToppings().then(setToppings)
  }, [])

  return (
    <fieldset>
      <legend>Choose Toppings</legend>
      {toppings.map(t => (
        <div key={t.id}>
          <input type="checkbox" id={`topping-${t.id}`} value={t.id} />
          <label htmlFor={`topping-${t.id}`}>{t.name}</label>
        </div>
      ))}
    </fieldset>
  )
}
