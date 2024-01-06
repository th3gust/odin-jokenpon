import * as el from './elements.js'
import { textToImg } from './controls.js'


function usersChoice({target}){
    const usersChoice = target.parentNode.id    
    return usersChoice
}

function pcChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const choice = choices[Math.floor(Math.random() * 3)]
    return choice
}

let countUser = 0
let countPc = 0

function counter(c, count){
    c.innerText = count
}

function winner(){
    const user = usersChoice(event)
    
    if (!!user){
        const pc = pcChoice()
        let victory

        if((user == 'rock' && pc == 'scissors') || (user == 'scissors' && pc == 'paper') ||(user == 'paper' && pc == 'rock')){
            victory = 'You Win'
            countUser++
            console.log(countUser)
            counter(el.userCounter, countUser)
        } else if (user == pc){
            victory = "It's a draw"
        } else{
            victory = 'You Lose'
            countPc++
            console.log(countPc)
            counter(el.pcCounter, countPc)
        }
    
        el.modal.showModal()
        return(`${textToImg(user).outerHTML} <p>vs</p> ${textToImg(pc).outerHTML} <p>${victory}!</p>`)
    }

    el.modal.close()
}

function endGame(){
    if (countUser == 5){
        el.modal.innerHTML = `<p>You Win!</p>`
        el.modal.showModal()
        resetGame()
    } else if (countPc == 5){
        el.modal.innerHTML = `<p>You Loose!</p>`
        el.modal.showModal()
        resetGame()
    }
}

function resetGame(){
    countUser = 0;
    countPc = 0;
    el.userCounter.innerText = countUser;
    el.pcCounter.innerText = countPc;
}

export function changeModalText(){
    el.modal.innerHTML = winner()
    endGame()
}
