import motivation from './motivation.js'

let api_key = ''; //Your_api_key

let chngbtn = document.querySelector('#chngtheme');
let main = document.querySelector('main');
let allElem = document.querySelectorAll('.elem');
let afelem = document.querySelectorAll('.full-elem');
let backbtn = document.querySelectorAll('.back');
let motive = document.querySelector('#motive');
let wcity = document.querySelector('#city');
let temp = document.querySelector('#temp');

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

//clock
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);

updateClock();

//motivation quotes
function getLine(){
    let ran = Math.floor(Math.random()*motivation.length);
    motive.textContent = motivation[ran];
}

setInterval(getLine, 5000);

//weather update
async function weatherUpdate(city){
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    let data = await raw.json();

    wcity.textContent = data.name || 'Delhi';
    temp.textContent = `${data.main.temp}°C`;
} 

weatherUpdate('Delhi')

//Todo Work

let form = document.querySelector('.addTask form');
let taskInput = document.querySelector('.addTask form input');
let detailsInput = document.querySelector('.addTask form textarea');
let showTitle = document.querySelector('.showTitle');
let showDetails = document.querySelector('.showDetails');

form.addEventListener('submit', function(e){
    e.preventDefault();
    showTitle.innerHTML = taskInput.value;
    showDetails.innerHTML = detailsInput.value;
})