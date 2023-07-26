function switchTab(event) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        if (tab.classList.contains('tab_active')) {
            tab.classList.remove('tab_active');
            tabContents[index].classList.remove('tab__content_active');
        }
    });

    event.currentTarget.classList.add('tab_active');
    const tabContentIndex = Array.from(tabs).indexOf(event.currentTarget);
    tabContents[tabContentIndex].classList.add('tab__content_active');
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
    tab.addEventListener('click', switchTab);
});
