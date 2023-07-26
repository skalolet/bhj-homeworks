const handleDropdown = (event) => {
    const dropdown = event.currentTarget.closest(".dropdown");
    const dropdownList = dropdown.querySelector(".dropdown__list");

    if (event.target.matches(".dropdown__value")) {
        dropdownList.classList.toggle("dropdown__list_active");
    }

    if (event.target.matches(".dropdown__link")) {
        event.preventDefault();
        const newValue = event.target.textContent;
        dropdown.querySelector(".dropdown__value").textContent = newValue;
        dropdownList.classList.remove("dropdown__list_active");
    }
};

document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", handleDropdown);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown__list").forEach((dropdownList) => {
            dropdownList.classList.remove("dropdown__list_active");
        });
    }
});
