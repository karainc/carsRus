import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
           setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interior = () => {

        let html = "<h2>Interior</h2>"
    
        html += '<select id="interior">'
        html += '<option value="0">Choose an Interior Trim</option>'
    
        for (const interior of interiors) {
            html += `<option name="interior" value="${interior.id}">${interior.type}</option>`
        }
    
        html += "</select>"
        return html
        
    }
