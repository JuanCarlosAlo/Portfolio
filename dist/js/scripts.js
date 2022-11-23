const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const rootStyles= document.documentElement.style;
const menuItem = document.getElementById('menu-item')

menuIcon.addEventListener('click' , () => {
    rootStyles.setProperty('--transition-duration',1 + 's')
    menu.classList.toggle('menu--show')
    menuItem.classList.toggle('menu__item--show')

});

window.addEventListener('resize' ,() => {
    rootStyles.setProperty('--transition-duration',0)
})