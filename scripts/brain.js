import { Paint } from "./Paint.js"
import { Interior } from "./Interior.js"
import { Tech } from "./Tech.js"
import { Wheels } from "./Wheels.js"
import { Order } from "./Orders.js"
import { addCustomOrders } from "./database.js"



export const Brain = () => {
    return `
  
    <article class="details">
    <h2>Customize your new vehicle</h2>
    
    <section class="detail--column list details_Paint">
    <h2>Select Your Paint Color</h2>
    ${Paint()}
    </section>
    <div>
    
    <section class="detail--column list details_Interior">
    <h2>Select Your Interior Trim</h2>
    ${Interior()}
    </section>
    </div>
    <section class="detail--column list details__Tech">
    <h2>Discover Our Technology Packages</h2>
    ${Tech()}
    </section>
    
    <section class="detail--column list details__Wheels">
    <h2>Custom Wheels Options</h2>
    ${Wheels()}
    </section>
    
    </article>
    <article>  
   <div> <button id="orderButton">Confirm Customization</button>
    </article>
    </div>
    <article class="customOrders">
    <h2>Customized Car's Order</h2>
    ${Order()}
    </article>
    `
}
document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {

               addCustomOrders() }
            }



)
