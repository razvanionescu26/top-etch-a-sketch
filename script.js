function createGrid() {
    
    function changeGridColor(event) {
        const target = event.target;
        target.style.backgroundColor = "black";
    }

    const gridSection = document.querySelector("#etch-a-sketch");

    for (let boxCount = 0; boxCount < 256; ++boxCount) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.toggle("box");
        squareDiv.addEventListener("mouseover", changeGridColor);
        gridSection.appendChild(squareDiv);
    }
}

createGrid();