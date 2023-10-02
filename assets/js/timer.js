import state from "./focusTime/state.js";
import { stop } from "./controls.js";
import { kitchenTime } from "./souds.js";

export const $minutes = document.querySelector('.timer__minutes');
export const $seconds = document.querySelector('.timer__seconds');

export function updateTime(minutes, seconds){
    let minute = minutes ?? state.minutes;
    let second = seconds ?? state.seconds;

    $minutes.textContent = String(minute).padStart(2, '0');
    $seconds.textContent = String(second).padStart(2, '0');
}

export function countDown(){
    clearTimeout(state.idCountDown);

    if(!state.isRunning){
        return
    }

    let minute = Number($minutes.textContent);
    let seconds = Number($seconds.textContent);
    
    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minute--;
    }

    if(minute < 0) {
        stop();
        kitchenTime.play();
        return
    }

    updateTime(minute, seconds);

    state.idCountDown = setTimeout(() => countDown(), 1000);
}

$minutes.addEventListener('focus', () => {
    $minutes.textContent = "";
})

$seconds.addEventListener('focus', () => {
    $seconds.textContent = ""
})

$minutes.addEventListener('blur', (event) => {
    let time = event.target.textContent;
    time = time > 60 ? 60 : time;
    state.minutes = time;
    $minutes.setAttribute('contenteditable', false)
    updateTime();
})

$seconds.addEventListener('blur', (event) => {
    let time = event.target.textContent;
    time = time > 60 ? 60 : time;
    state.seconds = time;
    $seconds.setAttribute('contenteditable', false); 
    updateTime();
})

$minutes.onkeypress = (event) =>  /\d/.test(event.key);