import { Brain } from "./brain.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Brain()

}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})