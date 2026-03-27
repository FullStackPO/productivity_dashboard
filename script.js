let chngbtn = document.querySelector('#chngtheme');
let main = document.querySelector('main');


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