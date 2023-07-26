function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function revealElementsOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealElementsOnScroll);

revealElementsOnScroll();
