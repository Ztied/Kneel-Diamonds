import { setSizeId } from "./Transientstate.js"

const handleSizeChoice = (changeEvent) => {
    if(changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeId(convertedToInteger)
    }
}


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeOpts = await response.json()

    document.addEventListener ("change", handleSizeChoice)

    let sizeHTML = "" 
    const divStringArray = sizeOpts.map(
    (size) => {
        return `<div>
        <input type='radio' name='size' value='${size.id}'/>${size.carets}
        </div>`
        }
    )
    sizeHTML += divStringArray.join("")
    return sizeHTML
    
}