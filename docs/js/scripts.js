const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const rootStyles = document.documentElement.style;
const arrowLeft = document.getElementById('arrow-left-slider')
const arrowRight = document.getElementById('arrow-right-slider')
const slider = document.getElementById('slider')
const menuItem = document.getElementById('menu-item')

const allSliderContent = Array.from(document.querySelectorAll('.slider__content'))

let counter = 0;
let translate = 0;

const moveSlide = () =>{
    rootStyles.setProperty('--slider-translate', 100 * translate * -1 + '%')
}

const nextSlide = () => {
    
    if (counter >= allSliderContent.length -1) {
        counter = 0;
        translate=0
    }
    else{
        counter = counter + 1;
        translate = translate + 1
    }

    moveSlide()
}

const prevSlide = () => {
    if (counter <= 0){
        counter = allSliderContent.length -1
        translate = allSliderContent.length -1
    }
    else{
        counter = counter - 1;
        translate = translate -1;
    }

    moveSlide()
}

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', prevSlide)

const allMenuItems = document.querySelectorAll('.menu__item')

menuIcon.addEventListener('click' , () => {
    rootStyles.setProperty('--transition-duration',1 + 's')
    menu.classList.toggle('menu--show')
    allMenuItems.forEach(menuItem=>{
        menuItem.classList.toggle('menu__item--show')
    })
    

});

window.addEventListener('resize' ,() => {
    rootStyles.setProperty('--transition-duration',0)
})


