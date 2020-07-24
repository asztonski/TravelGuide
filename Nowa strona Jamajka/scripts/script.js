const menuButtonClick = () => {
    if (!menuButton.classList.contains("active")) {
        menuButton.classList.add("active")
    } else menuButton.classList.remove("active");
}

const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', menuButtonClick);

// const body = document.querySelector("body").addEventListener('click', function() {
//     if (menuButton.classList.contains("active")) {
//         menuButton.classList.remove("active")
//     };
// })

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");
    if (scrollPosition > header.clientHeight - 20 ) {
        menuButton.classList.add("black")
    } else menuButton.classList.remove("black");
});