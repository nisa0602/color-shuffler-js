// Butuh wadah untuk array yang sdh dishuffle

const button = document.querySelector('button');
let colors = ['#800080', '#008000', '#808080', '#FFFFFF'];

let color = document.querySelector('.color');
let bg = document.querySelector('.container');

const mainFunc = (arr)=>{
    let shuffledArr = []
    
    for(let i=0; i<arr.length; i++){
        let randomIndex = Math.floor(Math.random() * arr.length)
        shuffledArr.push(arr[randomIndex])
    }
    let style = bg.style.backgroundColor = shuffledArr[0];
    let print = color.innerHTML = shuffledArr[0];
    return [style, print] //return more than 1 variables at the same time
}