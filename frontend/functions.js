function findImage(code) {
    const text = `https://deckofcardsapi.com/static/img/${code}.png`
    return text
}

function username() {
    let nome = document.querySelector('user-input').textContent

    console.log(nome);
}
