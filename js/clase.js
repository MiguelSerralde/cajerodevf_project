const formDom = document.getElementById('formulario')
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

formDom.addEventListener('submit', (evento)=> {
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
    document.getElementById('logo').classList.remove('logo')
    document.getElementById('logo').classList.add('logo-menu')    
    document.getElementById('contenedor').classList.remove('contenedor')
    document.getElementById('contenedor').classList.add('contenedor-menu')
        
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
    botonSalir.setAttribute('type','submit') 

    const btnSalirDom = document.getElementById("btn_salir")  
    btnSalirDom.addEventListener('click', (evento)=> {            
        salirMenuPrincipal()
    })  
    
    const btn_RetiroDom = document.getElementById("btn_retiro")
    btn_RetiroDom.addEventListener('click', (evento)=> {
        reritoPantalla()
    })

    const btn_ConsultaDom = document.getElementById("btn_consulta")
    btn_ConsultaDom.addEventListener('click', (evnto)=> {
        consultaPantalla()
    })

    const btn_DepositoDom = document.getElementById("btn_deposito")
    btn_DepositoDom.addEventListener('click', (evento)=> {
        depositoPantalla()
    })
}

function salirMenuPrincipal(){    
    removeElementsMenu()

    document.getElementById('contenedor').classList.remove('contenedor-menu')
    document.getElementById('contenedor').classList.add('contenedor')
    document.getElementById('logo').classList.remove('logo-menu')
    document.getElementById('logo').classList.add('logo') 

    document.getElementById('contenedor').appendChild(formDom)     
    document.getElementById('user').value=''
    document.getElementById('password').value=''
}

function removeElementsMenu(){
    const contenedorMenuPrincipalDom = document.getElementById('contenedor')
    const btnRetiroRemove = document.getElementById('btn_retiro')
    const btnConsultaRemove = document.getElementById('btn_consulta')
    const btnDepositoRemove = document.getElementById('btn_deposito')
    const btnSalirRemove = document.getElementById('btn_salir')

    contenedorMenuPrincipalDom.removeChild(btnSalirRemove)
    contenedorMenuPrincipalDom.removeChild(btnRetiroRemove)
    contenedorMenuPrincipalDom.removeChild(btnConsultaRemove)
    contenedorMenuPrincipalDom.removeChild(btnDepositoRemove)
}

function reritoPantalla(){
    removeElementsMenu()
}

function consultaPantalla(){
    removeElementsMenu()
}

function depositoPantalla(){
    removeElementsMenu()
}