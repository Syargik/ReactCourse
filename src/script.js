new ChiefSlider('.slider', {
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector(`.header__burger`);
    let menu = document.querySelector(`.header__menu`);
    burger.addEventListener(`click`, function () {
        burger.classList.toggle(`active`);
        menu.classList.toggle(`active`);
    });
});