import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
           setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    
    html += '<select id="wheels">'
    html += '<option value="0">Choose Custom Wheel Option</option>'

    for (const singleWheel of wheels) {
        html += `<option name="wheels" value="${singleWheel.id}">${singleWheel.style}</option>`
    }

    html += "</select>"
    return html

}
