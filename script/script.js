const buttonToTop = document.getElementById('top-icon');
const buttonMenuOpen = document.getElementById('open');
const buttonMenuClose = document.getElementById('close');
const docElement = document.documentElement;

buttonToTop.addEventListener('click', function(){
    docElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function openMenu(){
    let menu = document.querySelector('.menu-mobile-content')
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    let header = document.getElementById('header')
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        main.classList.add('hidden')
        footer.classList.add('hidden')
        header.classList.add('hidden')
    }else{
        return
    }
}

function closeMenu(){
    let menu = document.querySelector('.menu-mobile-content')
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    let header = document.getElementById('header')
    menu.classList.add('hidden');
    main.classList.remove('hidden')
    footer.classList.remove('hidden')
    header.classList.remove('hidden')
}


buttonMenuOpen.addEventListener('click', openMenu);
buttonMenuClose.addEventListener('click', closeMenu);