const fornmDom = document.getElementById('formulario')

var cuentas = [
    {nombre: 'Mali', paswword: '123', saldo: 200},
    {nombre: 'Gera', paswword: '321', saldo: 290},
    {nombre: 'Maui', paswword: '123', saldo: 67}
]

console.log(cuentas[0].nombre)

function login(userDom, passDom){
    for (i = 0; i <= 2; i++){
        if (cuentas[i].nombre == userDom && cuentas[i].paswword == passDom){
            alert("Login correcto")
        }
        else {
            mostrarError()
        }
    }
}

function mostrarError(){
    let errorLogin = document.getElementById('errorLogin')
    errorLogin.classList.remove("hide")
    errorLogin.classList.add("error")

    setInterval(function errorTime(){
        errorLogin.classList.remove('error')
        errorLogin.classList.add('hide')
    }, 3000);
}

fornmDom.addEventListener('submit', (evento)=> {
    evento.preventDefault()
    let userDom = document.getElementById('user').value
    let passDom = document.getElementById('password').value

    login(userDom, passDom)
})

