import { setSideChoice } from "./TS.js"

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChoice)

    let html = '<h2>Sides</h2>'
    const sidesStringArray = sides.map(
        (item) => {
            return `
            <label class="radios">
            <input type="radio" name="side" value="${item.id}" /> ${item.title}
            </label>
            `
        }
    )
    
    html += sidesStringArray.join("")
    return html
}

const handleSideChoice = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSideChoice(convertedToInt)
    }
}

