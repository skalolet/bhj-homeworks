document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const signinBtn = document.getElementById('signin__btn');
    signinBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const loginInput = signinForm.querySelector('[name="login"]');
        const passwordInput = signinForm.querySelector('[name="password"]');

        const formData = new FormData(signinForm);

        try {
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    localStorage.setItem('userId', responseData.user_id);

                    welcomeBlock.classList.add('welcome_active');
                    userIdSpan.textContent = responseData.user_id;
                } else {
                    alert('Неверный логин/пароль');
                }
            } else {
                alert('Ошибка при авторизации.');
            }
        } catch (error) {
            console.error('Ошибка при авторизации:', error);
            alert('Произошла ошибка при авторизации.');
        }
    });

    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
        userIdSpan.textContent = storedUserId;
        welcomeBlock.classList.add('welcome_active');
    }
});
