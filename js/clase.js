const fornmDom = document.getElementById('formulario')
const contenedorDom = document.getElementById('contenedor')
const bodyDom = document.getElementById('principal')

let cuentas = [
    {nombre: 'Mali', paswword: '123', saldo: 200},
    {nombre: 'Gera', paswword: '321', saldo: 290},
    {nombre: 'Maui', paswword: '123', saldo: 67},
    {nombre: 'Miguel', paswword: '123', saldo: 67}    
]
const numeroCuentas = cuentas.length


function login(userDom, passDom){
    let contadorError = 0
    for (let i = 0; i < numeroCuentas; i++){
        if (cuentas[i].nombre == userDom && cuentas[i].paswword == passDom){            
            eliminarElentosHTML()  
            pantallaPrincipal()          
        }
        else {
           contadorError = contadorError + 1
        }
    }
    if (contadorError == numeroCuentas) {
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

function eliminarElentosHTML() {
    let formDom = contenedorDom.querySelector('#formulario') 
    contenedorDom.removeChild(formDom)
    
}

function pantallaPrincipal() {
    document.getElementById('logo').style.marginBottom = '20px'
    document.getElementById('logo').style.marginTop = '0px'    
    document.getElementById('contenedor').classList.remove('contenedor')
    document.getElementById('contenedor').classList.add('contenedor-2')

    const botonConsulta = document.createElement('button')
    const botonRetiro = document.createElement('button')
    const botonDeposito = document.createElement('button')
    const botonSalir = document.createElement('button')
    
    botonConsulta.innerText = 'Consulta de Saldo'
    botonRetiro.innerText = 'Retiro de efectivo'
    botonDeposito.innerText = 'Deposito'
    botonSalir.innerText = 'Salir'

    document.getElementById('contenedor').appendChild(botonConsulta)
    document.getElementById('contenedor').appendChild(botonRetiro) 
    document.getElementById('contenedor').appendChild(botonDeposito)       
    document.getElementById('contenedor').appendChild(botonSalir)    

    botonConsulta.classList.add('boton_consulta')
    botonRetiro.classList.add('boton_consulta')  
    botonDeposito.classList.add('boton_consulta')  
    botonSalir.classList.add('boton_consulta')

    botonConsulta.setAttribute('id','btn_consulta')
    botonRetiro.setAttribute('id','btn_retiro')  
    botonDeposito.setAttribute('id','btn_deposito')  
    botonSalir.setAttribute('id','btn_salir') 

    const contenedorDom = document.getElementById("contenedor")
    console.log(contenedorDom)
}

