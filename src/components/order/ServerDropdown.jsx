import React, { useEffect } from "react"
import { getEmployees } from "../services/EmployeesServices"

export const ServerDropdown = ({ employees, setEmployees }) => {
    useEffect(() => {
        getEmployees().then(setEmployees)
    }, [])
    return (
        <fieldset>
            <label htmlFor="server">Server</label>
            <select name="server" id="server">
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
