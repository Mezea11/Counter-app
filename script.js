// get element id
// set count to 0
// make a  function (increment) to make count increase in the html when clicked


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEl = document.getElementById("reset-el")

let count = 0;


//FUNCTION THAT INCREMENTS NUMBER
function increment() {
    count += 1;
    countEl.textContent= count;
}

//SAVE BUTTON
function save() {
    let countStr = count + 0;
    saveEl.textContent += countStr + " / ";
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    location.reload();
}
