import React, { useEffect } from "react"
import { getCheeses } from "../services/CheesesServices" 

export const ChooseCheeses = ({ cheeses, setCheeses }) => {
  useEffect(() => {
    getCheeses().then(setCheeses)
  }, [])

  return (
    <fieldset>
      <label htmlFor="cheeses">Cheese</label>
      <select name="cheeses" id="cheeses">
        <option value="0">Choose Cheese</option>
        {cheeses.map(c => {
          return (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          )
        })}
      </select>
    </fieldset>
  )
}
