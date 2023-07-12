const holes = document.querySelectorAll('.hole');
const [dead, lost] = [document.getElementById('dead'), document.getElementById('lost')];

holes.forEach(hole => {
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            resetGame();
            alert('Вы выиграли');
        } else if (lost.textContent == 5) {
            resetGame();
            alert('Вы проиграли');
        }
    };
});

function resetGame() {
    dead.textContent = 0;
    lost.textContent = 0;
}
