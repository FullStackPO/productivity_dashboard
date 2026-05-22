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

  const time = `Time : ${hours}:${minutes}:${seconds}`;
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

let allTask = JSON.parse(localStorage.getItem('tasks')) || [];

let form = document.querySelector('.addTask form')
let name = document.querySelector('.addTask input')
let detail = document.querySelector('.addTask textarea')
let showTask = document.querySelector('.todocontent .showTask')

form.addEventListener('submit', function(e){
    e.preventDefault();

    let inpval = name.value;
    let txtval = detail.value;

    allTask.push({inpval, txtval});
    localStorage.setItem('tasks', JSON.stringify(allTask));

    renderTask();

    name.value = '';
    detail.value = '';
})

function renderTask(){
    let clutter = '';

    allTask.forEach(function(elem, idx){
        clutter += `
        <div>
        <details>
        <summary class="showTitle">${elem.inpval}</summary>
        <p class="showDetails">${elem.txtval}</p>
        <button class='deleteButton' data-index="${idx}">Task Completed</button>
        </details>
        </div>
        `
    })

    showTask.innerHTML = clutter;
}

showTask.addEventListener('click', function(e){
    if(e.target.classList.contains('deleteButton')){
        let index = e.target.getAttribute('data-index');

        allTask.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(allTask));

        renderTask();
    }
})

renderTask();


//Daily Planner

function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    var hours = Array.from({ length: 20 }, (_, idx) => `${4 + idx}:00 - ${5 + idx}:00`)

    var wholeDaySum = ''

    hours.forEach(function (elem, idx) {

        var savedData = dayPlanData[idx] || ''

        wholeDaySum += `
        <div class="day-planner-time">
            <p>${elem}</p>
            <input id="${idx}" type="text" placeholder="..." value="${savedData}">
        </div>`
    })

    dayPlanner.innerHTML = wholeDaySum

    var dayPlannerInput = document.querySelectorAll('.day-planner input')

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', function () {
            dayPlanData[elem.id] = elem.value

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner()

//pomodoro 

const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

const startBtn = document.querySelector('.pomo-start');
const stopBtn = document.querySelector('.pomo-stop');

let minutes = 25;
let seconds = 0;
let timer = null;

minEl.textContent = String(minutes).padStart(2, '0');
secEl.textContent = String(seconds).padStart(2, '0');

startBtn.addEventListener('click', () => {

    if (timer !== null) return;

    timer = setInterval(() => {

        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                timer = null;
                alert("Take a Break🙋🏻‍♂️");
                return;
            }

            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        minEl.textContent = String(minutes).padStart(2, '0');
        secEl.textContent = String(seconds).padStart(2, '0');

    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

const restartBtn = document.querySelector('.pomo-restart');

restartBtn.addEventListener('click', () => {

    clearInterval(timer);
    timer = null;

    minutes = 25;
    seconds = 0;

    minEl.textContent = String(minutes).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
});