let parrafoTotal = document.querySelector('#pTotal')

function addSticker() {
    const stickerOne = Number(document.querySelector('#sticker1').value)
    const stickerTwo = Number(document.querySelector('#sticker2').value)
    const stickerTree = Number(document.querySelector('#sticker3').value)
    const total = stickerOne+stickerTwo+stickerTree
    if(total <= 10 && total > 0){
        parrafoTotal.innerHTML = `Llevas <strong>${total}</strong> stickers` 
    }
    else if(total <= 0){
        parrafoTotal.innerHTML = 'No haz agregado stickers' 
    }
    else if(total > 10){
        parrafoTotal.innerHTML = 'Llevas demasiados stickers' 
    }
}
