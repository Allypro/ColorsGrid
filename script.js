

const displayColorsArray = colors => {

    let myColorsArray = colors.map(col => {
        return `<div class="colors" style="background-color: ${col.value}"> ${col.value} </div>`
    }).join('')
    
    // console.log(colors)

    document.body.innerHTML = `<div class="colors-body"> ${myColorsArray} </div>`
}




async function getColorsArray(colorCount) {

    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)

    let data = await response.json()

    let colors = data.colors

    displayColorsArray(colors)

}

let colorCount = 30; 
getColorsArray(colorCount);