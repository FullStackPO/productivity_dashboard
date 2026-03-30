import motivation from './motivation.js'

let chngbtn = document.querySelector('#chngtheme');
let main = document.querySelector('main');
let allElem = document.querySelectorAll('.elem');
let afelem = document.querySelectorAll('.full-elem');
let backbtn = document.querySelectorAll('.back');
let motive = document.querySelector('#motive');

//change theme
let btn = true;
chngbtn.addEventListener('click', function(){
    btn = !btn;
    if(btn == false){
        main.style.backgroundColor = 'skyblue';
        chngbtn.innerHTML = "☀️"; 
    }
    else{ 
        main.style.backgroundColor = 'black';
        chngbtn.innerHTML = "🌚";
    }
})

//elements to full screen
allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
        afelem[elem.id].style.display = 'block';
    })
})

//back button
backbtn.forEach(function(elem){
    elem.addEventListener('click', function(){
        afelem[elem.id].style.display = 'none';
    })
})

//motivation quotes
function getLine(){
    let ran = Math.floor(Math.random()*motivation.length);
    motive.textContent = motivation[ran];
}

setInterval(getLine, 5000);