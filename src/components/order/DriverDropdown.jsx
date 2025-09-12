import React, { useEffect } from "react"
import { getDrivers } from "../services/EmployeesServices"

export const DriverDropdown = ({
    setCurrentDriver,
    drivers,
    setDrivers,
    orderType
}) => {
    useEffect(() => {
        getDrivers().then(setDrivers)
    }, [])

    return (
        <fieldset>
            <label htmlFor="driver">Delivery Driver</label>
            <select
                onChange={e => setCurrentDriver(parseInt(e.target.value))}
                disabled={!JSON.parse(orderType)}
                name="driver"
                id="driver"
            >
                <option value="0">Pick a driver</option>
                {drivers.map(d => {
                    return (
                        <option key={d.id} value={d.id}>
                            {d.fullName}
                        </option>
                    )
                })}
            </select>
        </fieldset>
    )
}
