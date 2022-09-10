const grids = [];
let rows = [];
let bord = document.querySelector(".bord");
const button = document.querySelector('button')
let dim = 1000;
let nGrids = 16; 
createBord(nGrids);
button.addEventListener('click', () => {
    nGrids = prompt("Please enter size of grids?");
    while (nGrids>100){
        nGrids=prompt("above Max try again.")}
        createBord(nGrids)}
    )
function createBord(nGrids){
    rows.forEach((row) => Array.from(row.childNodes).forEach(cell => cell.remove()))
    let dimDiv = dim / nGrids + "px";
    for (let i=0; i<nGrids; i++){
        rows[i] = document.createElement('div');
        rows[i].style.display = "flex";
        rows[i].style.flexShrink = 0;
        rows[i].style.flexGrow = 0;
        bord.appendChild(rows[i])
        for(let j=0; j<nGrids; j++){
            grids[j] = document.createElement('div');
            grids[j].style.width = dimDiv;
            grids[j].style.height = dimDiv;
            grids[j].style.flexShrink = 0;
            grids[j].style.flexGrow = 0;
            grids[j].classList.add("grid")
            rows[i].appendChild(grids[j])
            }
        }

    rows.forEach((row) => Array.from(row.childNodes).forEach(cell => cell.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover')
    })))
}


