const gridSection = document.querySelector("#etch-a-sketch");

// clientWidth returns size by adding content and padding
const GRID_SECTION_SIZE = gridSection.clientWidth;

console.log(GRID_SECTION_SIZE);

function createGrid(gridSize) {    
    const boxSize = GRID_SECTION_SIZE / gridSize;

    for (let boxCount = 0; boxCount < gridSize ** 2; ++boxCount) {
        gridSection.appendChild(createGridBox(boxSize));
    }

    function createGridBox(boxSize) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = squareDiv.style.height = `${boxSize}px`;
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
        const gridBoxes = gridSection.querySelectorAll(".box");
        gridBoxes.forEach((box) => {box.style.backgroundColor = "white"});
    }
}

makeResetButton();
createGrid(16);