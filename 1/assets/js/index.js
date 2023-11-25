const imagen = document.querySelector('img')
let bordeActivo = false;

function bordeImg() {

    if (bordeActivo == false) {
        imagen.style.border = "solid #5CFF45 5px"
        imagen.style.transition = ".5s ease"
        bordeActivo = true
    }
    else {
        imagen.style.border = "solid #0C6200 0px"
        bordeActivo = false
    }
}

