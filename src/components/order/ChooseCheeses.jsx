import React, { useEffect } from "react"
import { getCheeses } from "../services/CheesesServices" 

export const ChooseCheeses = ({ cheeses, setCheeses, pizza, setPizza }) => {
  useEffect(() => {
    getCheeses().then(setCheeses)
  }, [setCheeses])

  const handleChange = (e) => {
    const cheeseId = parseInt(e.target.value)
    setPizza({
      ...pizza,
      cheeseId: cheeseId
    })
  }

  return (
    <fieldset>
      <label htmlFor="cheeses">Cheese</label>
      <select
        name="cheeses"
        id="cheeses"
        value={pizza.cheeseId}
        onChange={handleChange}
      >
        <option value="0">Choose Cheese</option>
        {cheeses.map(c => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </fieldset>
  )
}

