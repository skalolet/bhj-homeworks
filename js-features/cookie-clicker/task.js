const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = () => {
    let clicks = ++clickerCounter.textContent;
    cookie.width = clicks % 2 === 0 ? 200 : 300;
};
