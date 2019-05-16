let originalColour = 'black';

let gridSize = 16;
let grid = [];
let gridSection = document.querySelector("#grid");
let brs = document.querySelectorAll("br");

let buttonColours = document.getElementById('colours').querySelectorAll('button');
buttonColours.forEach(function(button){
    button.style.borderColor = button.name;
    button.addEventListener('click', function(){
        originalColour = this.name;
    })
})

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(){
    grid.forEach(function(element){
        element.style.backgroundColor = 'white';
        element.isClicked = false;
    });
    removeGrid();
    gridSize = prompt("Please enter a grid size");
    newRound();
});

function removeGrid(){
    grid.forEach(function(element){
        gridSection.removeChild(element);
    });
    grid = [];
    for(let y=0; y<gridSize; y++){
        gridSection.innerHTML = gridSection.innerHTML.replace('<br>','')
    }
}

function createGrid(gridSize){
    for(let y=0; y<gridSize; y++){
        for(let x=0; x<gridSize; x++){
            let gridSquare = document.createElement("grid-square")
            gridSection.appendChild(gridSquare);
            grid.push(gridSquare);
        }
        let br = document.createElement("br");
        gridSection.appendChild(br);
    }
}

function newRound(){
    createGrid(gridSize);
    
    grid.forEach(function(element){
        element.addEventListener('mouseover', hover);
        //element.addEventListener('click', clicked);
        //element.addEventListener('mouseout', original);
    })


    function hover(){
        if(!this.isClicked){
            this.style.backgroundColor = originalColour;
        }
    }

    function clicked(){
        if(!this.isClicked){
            this.style.backgroundColor = originalColour;
            this.isClicked = true;
        } else {
            this.style.backgroundColor = 'white';
            this.isClicked = false;
        }
        
    }

    function original(){
        if(!this.isClicked){
            this.style.backgroundColor = 'white';
        }
    }

}
newRound();

//for(var x=0; x < 17; x++);