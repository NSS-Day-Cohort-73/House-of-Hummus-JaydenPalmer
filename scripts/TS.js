const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}

export const setDishChoice = (choice) => {
    transientState.entreeId = choice
    console.log(transientState)
}

export const setVeggieChoice = (choice) => {
    transientState.vegetableId = choice
    console.log(transientState)
}

export const setSideChoice = (choice) => {
    transientState.sideId = choice
    console.log(transientState)
}




export const placePurchaseInPerm = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)

    const customEvent = new CustomEvent('newPurchaseMade')
    document.dispatchEvent(customEvent)
}