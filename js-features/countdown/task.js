const timerElement = document.getElementById('timer');

function startCountdown() {
    let timerValue = parseInt(timerElement.textContent, 10);

    const countdown = setInterval(() => {
        timerValue--;

        if (timerValue <= 0) {
            clearInterval(countdown);
            alert('Вы победили в конкурсе!');
        }

        timerElement.textContent = timerValue.toString().padStart(2, '0');
    }, 1000);
}

startCountdown();