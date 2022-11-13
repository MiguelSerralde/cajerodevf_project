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
            const eleimentoID = i
            eliminarElentosHTML()  
            pantallaPrincipal(i)          
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

function pantallaPrincipal(i) {
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

    const btnSalirDom = document.getElementById("btn_salir")  
    btnSalirDom.addEventListener('click', (evento)=> {            
        salirMenuPrincipal()
    })  
    
    const btn_RetiroDom = document.getElementById("btn_retiro")
    btn_RetiroDom.addEventListener('click', (evento)=> {
        reritoPantalla(i)
    })

    const btn_ConsultaDom = document.getElementById("btn_consulta")
    btn_ConsultaDom.addEventListener('click', (evnto)=> {
        consultaPantalla(i)
    })

    const btn_DepositoDom = document.getElementById("btn_deposito")
    btn_DepositoDom.addEventListener('click', (evento)=> {
        depositoPantalla(i)
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

function reritoPantalla(i){
    removeElementsMenu()
    const labelIndicaciones = document.createElement('label')
    const botonAceptar = document.createElement('button')
    const botonRegresar = document.createElement('button')
    const formBtn = document.createElement('form')
    const inputRetiro = document.createElement('input')
    const errorRetiro = document.createElement('span')

    document.getElementById('contenedor').appendChild(labelIndicaciones)
    document.getElementById('contenedor').appendChild(inputRetiro)
    document.getElementById('contenedor').appendChild(formBtn)
    formBtn.setAttribute('id', 'botones')
    errorRetiro.setAttribute('id', 'errorRetiro')
    
    document.getElementById('botones').appendChild(botonAceptar)
    document.getElementById('botones').appendChild(botonRegresar)
    
    inputRetiro.classList.add('text_monto')
    formBtn.classList.add('botones_menu')
    botonAceptar.classList.add('boton_consulta')
    botonRegresar.classList.add('boton_consulta')
    labelIndicaciones.classList.add('label_consulta')
    errorRetiro.classList.add('hide')
       
    inputRetiro.setAttribute('id','montoRetiro')
    inputRetiro.setAttribute('type', 'number')
    botonRegresar.setAttribute('id','btnC_Regresar')
    botonAceptar.setAttribute('type', 'submit')

    labelIndicaciones.innerText =  'Teclee Monto a Retirar' 
    inputRetiro.value = 0  
    botonRegresar.innerText = 'Regresar'
    botonAceptar.innerText = 'Aceptar'   
   
    let btnAceptarDom = document.getElementById('montoRetiro')        
    document.getElementById('contenedor').addEventListener('submit', (evento)=> {
        evento.preventDefault()        
        let montoRetiroValor = inputRetiro.value        
        if ((cuentas[i].saldo - montoRetiroValor) < 10) {            
            inputRetiro.value = 0     
            errorRetiro.classList.remove('hide')     
            errorRetiro.classList.add('error')
            console.log(errorRetiro)            
        }    
        else{
            cuentas[i].saldo = cuentas[i].saldo - montoRetiroValor
            console.log( cuentas[i].saldo )
            inputRetiro.value = 0
        }
    })

    const btn_regresarDom = document.getElementById("btnC_Regresar")
    btn_regresarDom.addEventListener('click', (evento)=> {        
        document.getElementById('contenedor').removeChild(inputRetiro)
        document.getElementById('contenedor').removeChild(formBtn)
        document.getElementById('contenedor').removeChild(labelIndicaciones)        
        pantallaPrincipal(i)
     })
}

function consultaPantalla(i){
    removeElementsMenu()
    const labelConsultaSaldo = document.createElement('label')
    const botonRegresar = document.createElement('button')
    const saldo = document.createElement('span')

    document.getElementById('contenedor').appendChild(labelConsultaSaldo)
    document.getElementById('contenedor').appendChild(saldo)
    document.getElementById('contenedor').appendChild(botonRegresar)

    botonRegresar.classList.add('boton_consulta')
    labelConsultaSaldo.classList.add('label_consulta')
    saldo.classList.add('saldo')

    labelConsultaSaldo.innerText = 'Tu Saldo: '
    saldo.innerText ='$' + cuentas[i].saldo

    botonRegresar.setAttribute('id','btnC_Regresar')
    botonRegresar.innerText = 'Regresar'

    const btn_regresarDom = document.getElementById("btnC_Regresar")
    btn_regresarDom.addEventListener('click', (evento)=> {
        document.getElementById('contenedor').removeChild(botonRegresar)
        document.getElementById('contenedor').removeChild(labelConsultaSaldo)
        document.getElementById('contenedor').removeChild(saldo)
        pantallaPrincipal(i)
     })
}

function depositoPantalla(i){
    removeElementsMenu()
    const labelIndicaciones = document.createElement('label')
    const botonAceptar = document.createElement('button')
    const botonRegresar = document.createElement('button')
    const formBtn = document.createElement('form')
    const inputDeposito = document.createElement('input')

    document.getElementById('contenedor').appendChild(labelIndicaciones)
    document.getElementById('contenedor').appendChild(inputDeposito)
    document.getElementById('contenedor').appendChild(formBtn)
    formBtn.setAttribute('id', 'botones')
    
    document.getElementById('botones').appendChild(botonAceptar)
    document.getElementById('botones').appendChild(botonRegresar)
    
    inputDeposito.classList.add('text_monto')
    formBtn.classList.add('botones_menu')
    botonAceptar.classList.add('boton_consulta')
    botonRegresar.classList.add('boton_consulta')
    labelIndicaciones.classList.add('label_consulta')
       
    inputDeposito.setAttribute('id','montoDeposito')
    inputDeposito.setAttribute('type', 'number')
    botonRegresar.setAttribute('id','btnC_Regresar')
    botonAceptar.setAttribute('type', 'submit')

    labelIndicaciones.innerText =  'Teclee Monto a Retirar' 
    inputDeposito.value = 0  
    botonRegresar.innerText = 'Regresar'
    botonAceptar.innerText = 'Aceptar'   
   
    let btnAceptarDom = document.getElementById('montoDeposito')    
    console.log(btnAceptarDom)
    document.getElementById('contenedor').addEventListener('submit', (evento)=> {
        evento.preventDefault()
        let montoDepositoValor = inputDeposito.value        
        console.log(cuentas[i].saldo + parseInt(montoDepositoValor), parseInt(montoDepositoValor))
        if ((cuentas[i].saldo + parseInt(montoDepositoValor,8)) > 990) {
            alert("Monto no permitido")    
            inputDeposito.value = 0        
        }    
        else{
            cuentas[i].saldo = cuentas[i].saldo + parseInt(montoDepositoValor)
            inputDeposito.value = 0
        }
    })

    const btn_regresarDom = document.getElementById("btnC_Regresar")
    btn_regresarDom.addEventListener('click', (evento)=> {        
        document.getElementById('contenedor').removeChild(inputDeposito)
        document.getElementById('contenedor').removeChild(formBtn)
        document.getElementById('contenedor').removeChild(labelIndicaciones)        
        pantallaPrincipal(i)
     })
}