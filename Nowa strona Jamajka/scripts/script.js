const menuButton = document.querySelector('.menuButton');
const header = document.querySelectorAll("header");
const mainContent = document.querySelector('.main');
const SLUContent = document.querySelector('.StLucia');
const JAMContent = document.querySelector('.Jamaica');
const Flag = document.querySelectorAll('.loadingFlag img');
const upButton = document.querySelectorAll('.UpButton');
const page = document.querySelector('html');
const body = document.querySelector("body");
const downArrow = document.querySelector('.main .downArrow');


menuButton.addEventListener('click', function() {
            if (!menuButton.classList.contains("active")) {
                menuButton.classList.add("active")
                page.classList.add("menu");
            } else { 
                menuButton.classList.remove("active");
                page.classList.remove("menu");
            }
    });



    // menuButton.addEventListener('scroll', function() {
    //         const scrollPosition = window.scrollY;
    //         for (let i = 0; i < header.length ;i++) {
    //         if (scrollPosition > header[i].clientHeight - 20 ) {
    //             menuButton.classList.add("black")
    //         } else menuButton.classList.remove("black");
    //         if (scrollPosition <= header[i].clientHeight) {
    //             upButton[i].classList.add("hidden")
    //             } else (upButton[i].classList.remove("hidden"));
    //     }
    // });

const headerHeight = header[2].clientHeight;

window.addEventListener('scroll',function () {
    const scrollPosition = window.scrollY;
        if (scrollPosition > headerHeight) {
            menuButton.classList.add('black');
        } else menuButton.classList.remove('black');
})

const BtnStLucia = document.querySelector(".BtnSLU");
BtnStLucia.addEventListener('click', function() {
    if (!mainContent.classList.contains("disactive")) {
        BtnStLucia.classList.add("focus");
        BtnJamaica.classList.add('hidden');
        downArrow.classList.add('hidden');
        setTimeout(function() {
            BtnStLucia.classList.add('transition')
            body.classList.add('transition')
        }, 800)
        setTimeout(function() {
        mainContent.classList.add("disactive");
        SLUContent.classList.add("active");
        Flag[0].classList.add("active");
        Flag[0].classList.remove("default");
        }, 1200);
        setTimeout(function () {
            mainContent.classList.add('none');
            SLUContent.classList.add('block');
            body.classList.remove("transition");
            BtnStLucia.classList.remove("focus");
            downArrow.classList.remove("hidden");
          }, 2000);   
    }
});

const BtnJamaica = document.querySelector(".BtnJAM")
BtnJamaica.addEventListener('click', function() {
    if (!mainContent.classList.contains("disactive")) {
        BtnJamaica.classList.add("focus");
        BtnStLucia.classList.add('hidden');
        downArrow.classList.add('hidden');
        setTimeout(function() {
            BtnJamaica.classList.add('transition')
            body.classList.add('transition')
        }, 800)
        setTimeout(function() {
        mainContent.classList.add("disactive");
        JAMContent.classList.add("active");
        Flag[1].classList.add("active");
        Flag[1].classList.remove("default");
        }, 1200);
        setTimeout(function () {
            mainContent.classList.add('none');
            JAMContent.classList.add('block');
            body.classList.remove("transition");
            BtnStLucia.classList.remove("transition");
            BtnStLucia.classList.remove("hidden");
            BtnJamaica.classList.remove("transition");
            BtnJamaica.classList.remove("focus");
            downArrow.classList.remove("hidden");
          }, 2000);   
    }
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
            body.classList.remove('transition');
            downArrow.classList.add("hidden");
          }, 800);
        setTimeout(function () {
            mainContent.classList.remove('none');
            SLUContent.classList.remove('block');
          }, 1000);
        setTimeout(function () {
            BtnJamaica.classList.remove("transition");
            BtnJamaica.classList.remove("hidden");
            BtnStLucia.classList.remove("transition");
            BtnStLucia.classList.remove("hidden");
            downArrow.classList.remove("hidden");
        }, 1200)  
    }
    if (JAMContent.classList.contains("active")) {
        JAMContent.classList.remove("active");
        mainContent.classList.remove("disactive");
        Flag[1].classList.remove("active");
        Flag[1].classList.add("default");
        menuButton.classList.add("hidden");
        body.classList.add("transition");
        downArrow.classList.add("hidden");
        setTimeout(function () {
            body.classList.remove('transition');
          }, 800);
        setTimeout(function () {
            mainContent.classList.remove('none');
            JAMContent.classList.remove('block');
            BtnJamaica.classList.remove("transition");
            BtnJamaica.classList.remove("hidden");
            BtnStLucia.classList.remove("transition");
            BtnStLucia.classList.remove("hidden");
          }, 1000);
          setTimeout(function () {
            BtnJamaica.classList.remove("transition");
            BtnJamaica.classList.remove("hidden");
            BtnStLucia.classList.remove("transition");
            BtnStLucia.classList.remove("hidden");
            downArrow.classList.remove("hidden");
        }, 1200)  
    }
})
});

upButton.forEach(item => {
    document.addEventListener('scroll', function() {
        item.classList.add("scroll");
        setTimeout(function() {
            item.classList.remove("scroll");
        }, 1000);
    })
})

const content = document.querySelectorAll("#content");
content.forEach(item => {
    item.style.transformOrigin = "100% 0%";
})

const defaultContentHeight = content.forEach (item => {
    console.log(item.clientHeight);
});

window.addEventListener('scroll',function() {
    content.forEach(item => {
        if (scrollY > 0) {
        item.style.transformOrigin = `100% ${scrollY/item.clientHeight * 100}%`;
        } else item.style.transformOrigin = "100% 0%"
    })

})
