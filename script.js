let chngbtn = document.querySelector('#chngtheme');
let main = document.querySelector('main');
let allElem = document.querySelectorAll('.elem');
let afelem = document.querySelectorAll('.full-elem');

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


allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
        console.log(afelem[elem.id]);
        afelem[elem.id].style.display = 'block';
    })
})