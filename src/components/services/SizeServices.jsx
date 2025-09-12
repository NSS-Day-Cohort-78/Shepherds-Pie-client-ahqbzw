import React from "react"

export const getSizes = () => {
    return fetch(`http://localhost:8088/sizes`).then(res => res.json())
}
