import { placePurchaseInPerm } from "./TS.js"



export const purchaseButton = () => {

    document.addEventListener("click", handlePurchaseClick)

    return `<button id="purchase">Purchase Combo</button>`
}

const handlePurchaseClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        placePurchaseInPerm()
    }
}