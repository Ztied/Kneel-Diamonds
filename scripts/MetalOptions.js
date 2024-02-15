import { setMetalId } from "./Transientstate.js"

const handleMetalChoice = (changeEvent) => {
    if(changeEvent.target.name === "metal") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setMetalId(convertedToInteger)
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalOpts = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let metalHTML = ""
    const divStringArray = metalOpts.map(
     (metal) => {
        return `<div>
        <input type='radio' name='metal' value='${metal.id}'/>${metal.metal}
        </div>`
         }
    ) 
    metalHTML += divStringArray.join("")
    return metalHTML
}
