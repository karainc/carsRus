import { getOrders, getPaint, getInterior, getTech, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
const paint = getPaint()
const foundPaint = paint.find(paint => {
        return (paint.id === order.paintId)
    }
    ) 
  

const interior = getInterior()
const foundInterior = interior.find(interior=> {
        return interior.id === order.interiorId
    }
    )

    const tech = getTech()
    const foundTech = tech.find(tech => {
            return tech.id === order.techId
        }
        )
        const wheels = getWheels()
        const foundWheels = wheels.find(wheel => {
                return wheel.id === order.wheelsId
            }
            )
        const totalCost = foundPaint.price + foundInterior.price + foundTech.price + foundWheels.price
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return `<li>
            Order #${order.id} totalled ${costString}
        </li>`

    }

export const Order = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

