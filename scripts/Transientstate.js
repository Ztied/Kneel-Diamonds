const transientState = {
    metalId: "",
    sizeId: 0,
    styleId: ""
}

export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
}

export const jewelrySelected = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}