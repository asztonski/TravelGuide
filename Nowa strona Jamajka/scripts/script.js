const menuButtonClick = () => {
    if (!menuButton.classList.contains("active")) {
        menuButton.classList.add("active")
    } else menuButton.classList.remove("active");
}

const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', menuButtonClick);