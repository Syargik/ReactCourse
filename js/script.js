new ChiefSlider('.slider', {
loop: true
});

let burger = document.querySelector(`.header__burger`);
let menu = document.querySelector(`.header__menu`);

document.addEventListener('DOMContentLoaded', function(){
    burger.addEventListener(`click`, function(){
        burger.classList.toggle(`active`);
        menu.classList.toggle(`active`);
    });
});