import {getPaint, setPaint } from "./database.js"

const paints = getPaint()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
           setPaint(parseInt(changeEvent.target.value))
        }
    }
)
export const Paint = () => {
    let html = "<h2>Paint</h2>"
    
    html += '<select id="paint">'
    html += '<option value="0">Choose a Paint Color</option>'

    for (const paint of paints) {
        html += `<option name="paint" value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html

   
}
