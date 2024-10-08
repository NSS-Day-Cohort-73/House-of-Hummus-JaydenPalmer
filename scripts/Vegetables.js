import { setVeggieChoice } from "./TS.js"

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVeggieChoice)

    let html = '<h2>Vegetables</h2>'
    const vegetablesStringArray = vegetables.map(
        (item) => {
            return `
            <label class="radios">
            <input type="radio" name="vegetable" value="${item.id}" /> ${item.type}
            </label>
            `
        }
    )

    html += vegetablesStringArray.join("")
    return html
}

const handleVeggieChoice = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setVeggieChoice(convertedToInt)
    }
}
