function createGrid() {
    const gridSection = document.querySelector("#etch-a-sketch");
    
    for (let boxCount = 0; boxCount < 256; ++boxCount) {
        gridSection.appendChild(createGridBox());
    }

    function createGridBox() {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("box");
        squareDiv.addEventListener("mouseover", changeGridColor);
        return squareDiv;
    }

    function changeGridColor(event) {
        const target = event.target;
        target.style.backgroundColor = "black";
    }
}

function makeResetButton() {
    const resetButton = document.querySelector("#reset-button");
    resetButton.addEventListener("click", resetGrid);

    function resetGrid() {
        const gridSection = document.querySelector("#etch-a-sketch");
        const gridBoxes = gridSection.querySelectorAll(".box");
        gridBoxes.forEach((box) => {box.style.backgroundColor = "white"});
    }
}

makeResetButton();
createGrid();