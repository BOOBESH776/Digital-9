var data = document.getElementById("RawData");
var rec = document.getElementById("Recommendation");

let count = 0;

let upto = 0;
let counts = setInterval(updated, 1);
function updated() {
    let count = document.getElementById("ClientsServed");
    count.innerHTML = ++upto;
    if (upto === 499) {
        clearInterval(counts);
    }
}
