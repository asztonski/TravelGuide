const menuButton = document.querySelectorAll('.menuButton');
const header = document.querySelectorAll("header");

menuButton.forEach(item => {
    item.addEventListener('click', function() {
        for (let i = 0; i < menuButton.length; i++) {
            if (!menuButton[i].classList.contains("active")) {
                menuButton[i].classList.add("active")
            } else menuButton[i].classList.remove("active");
        };
    })
});



 menuButton.forEach(item => {
    window.addEventListener('scroll', function(item) {
            const scrollPosition = window.scrollY;
            for (let i = 0; i < header.length && menuButton.length; i++) {
            if (scrollPosition > header[i].clientHeight - 20 ) {
                menuButton[i].classList.add("black")
            } else menuButton[i].classList.remove("black");
        }
    })
});

const mainContent = document.querySelector('.main');
const SLUContent = document.querySelector('.StLucia');
const Flag = document.querySelectorAll('.loadingFlag img');
// const FlagBox = document.querySelector('loadingFlag');
const BtnStLucia = document.querySelector('.SLU').addEventListener('click', function() {
    if (!mainContent.classList.contains("disactive")) {
        mainContent.classList.add("disactive");
        SLUContent.classList.add("active");
        Flag[0].classList.add("active");
        // FlagBox.classList.add("active");
    }
})

