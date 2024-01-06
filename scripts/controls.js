import * as el from './elements.js'

function createElement(x){
    const imgs = {
        rock: './img/rock.png',
        paper: './img/paper.png',
        scissors: './img/scissors.png'
    }

    const divElement = document.createElement('div')
    divElement.classList.add('img-modal')
    const imgElement = document.createElement('img')

    imgElement.src = imgs[x]
    divElement.appendChild(imgElement)

    return divElement
}

export function textToImg(x){
    return el.modal.appendChild(createElement(x))
}