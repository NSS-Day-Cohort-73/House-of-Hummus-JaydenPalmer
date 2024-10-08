export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesDivs = sales.map(
        (item) => {

            let purchasePrice = item.entree.price + item.side.price + item.vegetable.price
            purchasePrice = purchasePrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `<div class="customOrders" >Receipt #${item.id} = ${purchasePrice}</div>`
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

