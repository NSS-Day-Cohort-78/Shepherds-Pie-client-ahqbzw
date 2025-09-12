import React, { useEffect } from "react"
import { getEmployees } from "../services/EmployeesServices"

export const ServerDropdown = ({ employees, setEmployees, setCurrentServer }) => {
    useEffect(() => {
        getEmployees().then(setEmployees)
    }, [])
    return (
        <fieldset>
            <label htmlFor="server">Server</label>
            <select
                onChange={e => setCurrentServer(parseInt(e.target.value)) }
                name="server"
                id="server"
            >
                <option value="0">Who took the order?</option>
                {employees.map(e => {
                    return (
                        <option key={e.id} value={e.id}>
                            {e.fullName}
                        </option>
                    )
                })}
            </select>
        </fieldset>
    )
}
