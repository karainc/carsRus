import { getTech, setTech } from "./database.js"

const techs = getTech()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
           setTech(parseInt(changeEvent.target.value))
        }
    }
)

export const Tech = () => {
        let html = "<h2>Technologies</h2>"
    
        html += '<select id="tech">'
        html += '<option value="0">Select a technology package</option>'
    
        for (const tech of techs) {
            html += `<option name="tech" value="${tech.id}">${tech.pkg}</option>`
        }
    
        html += "</select>"
        return html
    }
        
