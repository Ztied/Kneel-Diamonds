import { setStyleId } from "./Transientstate.js"

const handleStyleChoice = (changeEvent) => {
    if(changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleId(convertedToInteger)
    }
}


export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOpts = await response.json()

    document.addEventListener("change", handleStyleChoice)

    let styleHTML = ""
    const divStringArray = styleOpts.map( 
        (style) => {
         return `<div>
         <input type='radio' name='style' value='${style.id}'/>${style.style}
         </div>`
        }
    )
        styleHTML += divStringArray.join("")
    return styleHTML
}
