const fornmDom = document.getElementById('formulario')
const userbd = 'Miguel'
const passbd = '123'

var cuentas = [
    {nombre: 'Mali', paswword: '123', saldo: 200},
    {nombre: 'Gera', paswword: '123', saldo: 290},
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

    // if (userbd === userDom && passbd === passDom){
    //     alert('Acceso Correcto')
    // }
    // else {
    //     mostrarError()
    // }
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

