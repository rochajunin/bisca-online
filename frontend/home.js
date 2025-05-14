let usuarios = ["hugostoso", "zedamanga", "laulau"]

let list = document.querySelector('#user-list')
// console.log(list);

userlist()

function userlist() {
    list.innerText = ""
    let num = 1
    usuarios.forEach((usuario) => {
        // console.log(usuario);
        list.innerHTML += `<p class="usuario">${num} | ${usuario}</p>`
        num = num + 1
    })
}

function gerarcodigo() {
    let codigo = ''
    for (let i = 0; i < 6; i++) {
        codigo += Math.floor(Math.random() * 10);
    }
    console.log(codigo);
    document.querySelector('#code-game').innerText = codigo
}


function username() {
    let nome = document.querySelector('#user-input').value
    // alert(nome);
    gerarcodigo()
    document.querySelector('#personal-username').innerText = nome
    usuarios.push(nome)
    userlist()

    document.querySelector('#user-input').value = ''
}