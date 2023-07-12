const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let counter = 0;

cookie.addEventListener("click", function() {
    counter++;
    clickerCounter.textContent = counter;
});
