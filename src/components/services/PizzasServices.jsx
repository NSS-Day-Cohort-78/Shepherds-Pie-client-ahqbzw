export const addPizzaToOrder = data => {
    fetch(`http://localhost:8088/pizzas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const getPizzas = () => {
    return fetch(`http://localhost:8088/pizzas`).then(res => res.json())
}

export const getPizzasByOrder = id => {
    return fetch(
        `http://localhost:8088/pizzas?_expand=sauce&_expand=cheese&_expand=size&orderId=${id}`
    ).then(res => res.json())
}
