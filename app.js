let container = document.querySelector('.container')
let resetButton = document.querySelector('.reset-button')
let gridAmount = prompt('How many squares would you like your grid? (Max 100)')

if(gridAmount > 100){
    location.reload()
}


function makeGrid(){

    let width = 960/gridAmount
    for(h=0; h<gridAmount ; h++){
    for(i=0 ; i < gridAmount; i++){
        let gridRows = document.createElement('div')
        gridRows.style.cssText = `border: 1px solid black; width: ${width}px ; height: ${width}px`
        container.appendChild(gridRows)
        gridRows.addEventListener('mouseover', changeColor);
        }
    }

    
        function changeColor(){
        this.classList.add('hovered')
        }

}

const reload = ()=>{
    location.reload()
}

resetButton.addEventListener('click', reload)

makeGrid()