const fornmDom = document.getElementById('formulario')
const userbd = 'Miguel'
const passbd = '123'

function login(userDom, passDom){
    if (userbd === userDom && passbd === passDom){
        alert('Acceso Correcto')
    }
    else {
        mostrarError()
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

