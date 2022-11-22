const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')


menuIcon.addEventListener('click' , () => {
    if(menu.classList.contains('menu--show')){

        menu.classList.remove('menu--show')
        menu.classList.add('menu')
        header.classList.remove('header--menu')
        header.classList.add('header')
    }
    else{
        menu.classList.add('menu--show')
        menu.classList.remove('menu')
        header.classList.add('header--menu')
        header.classList.remove('header')
    }
});