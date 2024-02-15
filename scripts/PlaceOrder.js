import { jewelrySelected } from "./Transientstate.js";

const handleOrderPlacedClick = (clickEvent) => {
    if(clickEvent.target.name === "placeOrder") {
        jewelrySelected()
    }
}

export const placeOrder = () => {

    document.addEventListener("click", handleOrderPlacedClick)

    return "<div><button name='placeOrder'>Create Custom Order</button></div>"
}