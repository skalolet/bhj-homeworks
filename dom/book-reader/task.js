function changeFontSize(event) {
    event.preventDefault();

    const selectedSize = event.currentTarget.getAttribute('data-size');
    const book = document.getElementById('book');
    const fontSizes = document.querySelectorAll('.font-size');

    fontSizes.forEach((fontSize) => {
        fontSize.classList.remove('font-size_active');
    });
    event.currentTarget.classList.add('font-size_active');

    book.classList.remove('book_fs-big', 'book_fs-small');
    if (selectedSize === 'big') {
        book.classList.add('book_fs-big');
    } else if (selectedSize === 'small') {
        book.classList.add('book_fs-small');
    }
}

const fontSizes = document.querySelectorAll('.font-size');
fontSizes.forEach((fontSize) => {
    fontSize.addEventListener('click', changeFontSize);
});
