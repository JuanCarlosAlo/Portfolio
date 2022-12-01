const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const rootStyles = document.documentElement.style;
const arrowLeft = document.getElementById('arrow-left-slider')
const arrowRight = document.getElementById('arrow-right-slider')
const slider = document.getElementById('slider')
const menuItem = document.getElementById('menu-item')

const modalCross = document.getElementById('cross-icon')


const allMenuLinks = document.querySelectorAll('.menu__link')
const allMenuItem = document.querySelectorAll('.menu__item')

const designItem = document.getElementById('design')
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')

const designItems = [
    {
        title: 'Publicidad',
        srcDesign: 'assets/images/modal-publicitario2.jpg',
        text: 'Modal diseño publicitario'
    },
    {
        title: 'Proyecto Your Reality',
        srcDesign: 'assets/images/modal-your-reality.jpg',
        text: 'Modal proyecto Your Reality'
    },
    {
        title: 'Proyectos OMD',
        srcDesign: 'assets/images/modal-omd',
        text: 'Modal proyectos OMD'
    },
    {
        title: 'Ilustracion',
        srcDesign: 'assets/images/modal-ilustracion',
        text: 'Modal Ilustracion'
    },
    {
        title: 'Tokyo Stand',
        srcDesign: 'assets/images/modal-tokyo',
        text: 'Modal Tokyo Stand'
    },
    
]


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



menuIcon.addEventListener('click' , () => {
    rootStyles.setProperty('--transition-duration',1 + 's')
    menu.classList.toggle('menu--show')
    allMenuLinks.forEach(menuLink=>{
        menuLink.classList.toggle('menu__link--show')
    })
    allMenuItem.forEach(menuItem=>{
        menuItem.classList.toggle('menu__item--show')
    })
    

});

designItem.addEventListener('click' ,() => {
    modal.classList.add('modal--show')
})

modalCross.addEventListener('click' , () =>{
    modal.classList.toggle('modal--show')
})

window.addEventListener('resize' ,() => {
    rootStyles.setProperty('--transition-duration',0)
})


