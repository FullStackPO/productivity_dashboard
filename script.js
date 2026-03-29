let chngbtn = document.querySelector('#chngtheme');
let main = document.querySelector('main');
let allElem = document.querySelectorAll('.elem');
let afelem = document.querySelectorAll('.full-elem');
let backbtn = document.querySelectorAll('.back');

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