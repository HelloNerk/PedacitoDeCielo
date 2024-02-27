const menu = document.querySelector('.nav__menu');
const menulist = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', () => {
    menulist.classList.toggle('nav__list--show')
});

links.forEach(function(link){
    link.addEventListener('click', function(){
        menulist.classList.remove('nav__list--show');
    });
});