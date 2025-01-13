let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let timerDisplay = document.querySelector(".timerDisplay");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId;

function DisplayTime(){
    msec++;
    if(msec == 100)
    {
        msec = 0;
        secs++;
        
    }
    if(secs == 60)
    {
        secs = 0;
        mins++;
    }
    let ms = msec < 10 ? `0${msec}` : msec;
    let sc = secs < 10 ? `0${secs}` : secs;
    let mn = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${mn} : ${sc} : ${ms}`;
}

startBtn.addEventListener("click",()=>{
    
    timerId = setInterval(DisplayTime,10);
    startBtn.disabled = true;
})

stopBtn.addEventListener("click",()=>{
    clearInterval(timerId);
    startBtn.disabled = false;
})

resetBtn.addEventListener("click",()=>{
    timerDisplay.innerHTML = `00 : 00 : 00`;
    clearInterval(timerId);
    startBtn.disabled = false;
    msec = secs = mins = 0;
})