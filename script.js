function createGrid() {
    const gridSection = document.querySelector("#etch-a-sketch");

    for (let boxCount = 0; boxCount < 256; ++boxCount) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("box");
        gridSection.appendChild(squareDiv);
    }
}

createGrid();