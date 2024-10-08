import { Entrees } from "./Entrees.js"
import { purchaseButton } from "./PurchaseButton.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const sidesHTML = await Sides()
    const entreesHTML = await Entrees()
    const vegetablesHTML = await Veggies()
    const purchaseButtonHTML = await purchaseButton()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="options">
            ${entreesHTML}
            </section>
            <section class="options">
            ${sidesHTML}
            </section>
            <section class="options">
            ${vegetablesHTML}
            </section>
        </article>

        <article>
            ${purchaseButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
