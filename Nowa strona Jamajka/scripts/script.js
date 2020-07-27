const menuButton = document.querySelectorAll('.menuButton');
const header = document.querySelectorAll("header");
const mainContent = document.querySelector('.main');
const SLUContent = document.querySelector('.StLucia');
const JAMContent = document.querySelector('.Jamaica');
const Flag = document.querySelectorAll('.loadingFlag img');

menuButton.forEach(item => {
    const page = document.querySelector('html');
    item.addEventListener('click', function() {
        for (let i = 0; i < menuButton.length; i++) {
            if (!menuButton[i].classList.contains("active")) {
                menuButton[i].classList.add("active")
                page.classList.add("menu")
            } else { 
                menuButton[i].classList.remove("active");
                page.classList.remove("menu");
            }
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

const BtnStLucia = document.querySelectorAll(".BtnSLU");
BtnStLucia.forEach(item => {
item.addEventListener('click', function() {
    if (!mainContent.classList.contains("disactive")) {
        mainContent.classList.add("disactive");
        SLUContent.classList.add("active");
        Flag[0].classList.add("active");
        Flag[0].classList.remove("default");
        setTimeout(function () {
            mainContent.classList.add('none');
            SLUContent.classList.add('block');
          }, 1000);
    }
    for (let i = 0; i < header.length; i++) {
        menuButton[i].classList.remove('black');
    }
})
});


const BtnJamaica = document.querySelectorAll(".BtnJAM");
BtnJamaica.forEach(item => {
item.addEventListener('click', function() {
    if (!mainContent.classList.contains("disactive")) {
        mainContent.classList.add("disactive");
        JAMContent.classList.add("active");
        Flag[1].classList.add("active");
        Flag[1].classList.remove("default");
        setTimeout(function () {
            mainContent.classList.add('none');
            JAMContent.classList.add('block');
          }, 1000);
    }
    for (let i = 0; i < header.length; i++) {
        menuButton[i].classList.remove('black');
    }
})
});

const BtnMain = document.querySelectorAll('.BtnMain');
BtnMain.forEach(item => {
    item.addEventListener('click', function() {
    if (SLUContent.classList.contains("active")) {
        SLUContent.classList.remove("active");
        mainContent.classList.remove("disactive");
        Flag[0].classList.remove("active");
        Flag[0].classList.add("default");
        setTimeout(function () {
            mainContent.classList.remove('none');
            SLUContent.classList.remove('block');
          }, 1000);
    }
    if (JAMContent.classList.contains("active")) {
        JAMContent.classList.remove("active");
        mainContent.classList.remove("disactive");
        Flag[1].classList.remove("active");
        Flag[1].classList.add("default");
        setTimeout(function () {
            mainContent.classList.remove('none');
            JAMContent.classList.remove('block');
          }, 1000);
    }
    for (let i = 0; i < header.length; i++) {
        menuButton[i].classList.remove('black');
    }
})
});

