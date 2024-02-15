export const orderList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()



    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div>
            <div>Order #${order.id} cost $${orderPrice}</div>

            </div>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}