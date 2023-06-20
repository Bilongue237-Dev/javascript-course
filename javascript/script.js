function cart2() {
    let yup = event.key
    if (yup === 'Enter') {
        cart()
    }
}

function cart() {
    const inputElement = document.querySelector('.chiffre')
    let total = inputElement.value
    let tout = Number(total)

    if (tout < 40) {
        tout = tout + 10
    }
    document.querySelector(".affichage")
        .innerHTML = `$${tout}`
}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button')

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('aftereffect');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('aftereffect')
    }
}