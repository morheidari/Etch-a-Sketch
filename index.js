const grids = [];
let rows = [];
let bord = document.querySelector(".bord");
let dim = 1000;
let dimDiv = dim / 16 + "px";
for (let i=0; i<16; i++){
    rows[i] = document.createElement('div');
    rows[i].style.display = "flex";
    rows[i].style.flexShrink = 0;
    rows[i].style.flexGrow = 0;
    bord.appendChild(rows[i])
    for(let j=0; j<16; j++){
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
    e.target.classList.toggle('hover')
})))




