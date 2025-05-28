let counter = document.getElementById("counter");
let reset = document.getElementById("reset");
let count = 0;

function functionIncrease() {
    count ++;
    counter.innerHTML = count+"";
    color();
}

function functionReset() {
    count = 0;
    counter.innerHTML = count+"";
    color();
}