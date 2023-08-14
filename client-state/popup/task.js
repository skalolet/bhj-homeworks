document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');

    const isModalClosed = document.cookie.includes('modalClosed=true');

    if (!isModalClosed) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');

        document.cookie = 'modalClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    });
});
