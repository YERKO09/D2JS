let parrafoPass = document.querySelector('#pPass')
let boton = document.querySelector('#btn')

function verify() {
    const n1 = document.querySelector('#select1').value
    const n2 = document.querySelector('#select2').value
    const n3 = document.querySelector('#select3').value
    const pass = n1+n2+n3
    if(pass == "911"){
        parrafoPass.innerHTML = '¡password 1 correcto!' 
    }
    else if(pass == "714"){
        parrafoPass.innerHTML = '¡password 2 correcto!' 
    }
    else if(pass != ("714" || "911")){
        parrafoPass.innerHTML = 'password incorrecto' 
    }
}

boton.addEventListener("click", verify)
