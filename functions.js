const menu = document.querySelector("#menu-div");
const blackout = document.querySelector('#blackout');
const navWrapper = document.querySelector('#nav-wrapper');
const cartDiv = document.querySelector('#cart');
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

cart = document.querySelector("#cart-button");
cart.addEventListener('click', () =>{
    cartDiv.classList.toggle('displayNone');
});