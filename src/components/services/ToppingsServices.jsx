export const getToppings = () => {
    return fetch("http://localhost:8088/toppings").then(res => res.json())
}

export const addPizzaToppingsToOrder = data => {
    return fetch(`http://localhost:8088/pizzaToppings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
