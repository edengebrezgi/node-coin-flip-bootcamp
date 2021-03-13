let h = 0
let t = 0

const headCount = document.querySelector('#headCount')
const tailCount = document.querySelector('#tailCount')
const result = document.querySelector('#result')
const button = document.querySelector('button')

button.addEventListener('click', flip)

function flip(){
    let coin = Math.floor(Math.random() * 2+1)
    if(coin === 1){
        h = h+1
        headCount.innerText= h
        result.innerText=('HEADS')
    }
    else {
        t = t+1
        tailCount.innerText= t
        result.innerText=('TAILS')
    }
}