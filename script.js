const gridSection = document.querySelector("#etch-a-sketch");

const GRID_SECTION_SIZE = gridSection.clientWidth;

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
    };

    function changeGridColor(event) {
        const target = event.target;
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    };
}

function makeResetButton() {
    const resetButton = document.querySelector("#reset-button");
    resetButton.addEventListener("click", resetGrid);

    function resetGrid() {
        const gridBoxes = gridSection.querySelectorAll(".box");
        gridBoxes.forEach((box) => {
            box.style.backgroundColor = "white"
        });
    };
}

function makeResizeButton() {
    const resizeButton = document.querySelector("#resize-button");
    resizeButton.addEventListener("click", resizeGrid);

    function clearGrid() {
        while (gridSection.firstElementChild) {
            gridSection.removeChild(gridSection.lastElementChild);
        }
    };

    function resizeGrid() {
        clearGrid();
        let size = +prompt("Enter a size for the new grid. Must be between 2 and 100");
        while (isNaN(size) || size < 2 || size > 100) {
            size = +prompt(`Invalid size ${size}. Enter a valid value.`);
        }
        createGrid(size);
    };
}

makeResetButton();
makeResizeButton();
createGrid(16);