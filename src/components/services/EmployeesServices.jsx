export const getEmployees = () => {
    return fetch(`http://localhost:8088/employees`).then(res => res.json())
}

export const getDrivers = () => {
    return fetch(`http://localhost:8088/employees?role=driver`).then(res =>
        res.json()
    )
}
