function rotateText() {
    const rotatorCases = document.querySelectorAll('.rotator__case');
    const activeIndex = Array.from(rotatorCases).findIndex((element) => element.classList.contains('rotator__case_active'));
    const currentActive = rotatorCases[activeIndex];
    const nextActive = rotatorCases[(activeIndex + 1) % rotatorCases.length];

    currentActive.classList.remove('rotator__case_active');
    nextActive.classList.add('rotator__case_active');
}

function startRotation() {
    setInterval(rotateText, 1000);
}

startRotation();
