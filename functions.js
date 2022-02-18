const menu = document.querySelector("#menu-div");
const blackout = document.querySelector('#blackout');
const navWrapper = document.querySelector('#nav-wrapper');
menu.addEventListener('click', () => {
    

    if( !blackout.classList.contains('blackout') ){
        
        
        console.log(navWrapper);
        navWrapper.classList.toggle('opened');
    }
    blackout.classList.toggle('blackout');
})

const close = document.querySelector("#close-icon");
close.addEventListener('click', () => {
    navWrapper.classList.toggle('opened');
    blackout.classList.toggle('blackout');
});