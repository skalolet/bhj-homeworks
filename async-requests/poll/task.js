document.addEventListener("DOMContentLoaded", () => {
    const pollTitleElement = document.getElementById("poll__title");
    const pollAnswersElement = document.getElementById("poll__answers");

    function showThankYouMessage() {
        alert("Спасибо, ваш голос засчитан!");
    }

    function loadRandomPoll() {
        fetch("https://students.netoservices.ru/nestjs-backend/poll")
            .then((response) => response.json())
            .then((data) => {
                pollTitleElement.textContent = data.data.title;

                pollAnswersElement.innerHTML = "";

                for (const answer of data.data.answers) {
                    const answerButton = document.createElement("button");
                    answerButton.classList.add("poll__answer");
                    answerButton.textContent = answer;
                    answerButton.addEventListener("click", () => {
                        showThankYouMessage();
                    });
                    pollAnswersElement.appendChild(answerButton);
                }
            })
            .catch((error) => {
                console.error("Error loading poll:", error);
            });
    }

    loadRandomPoll();
});
