import state from "./focusTime/state.js";
import * as timer from "./timer.js"
import * as souds from "./souds.js"

const controls = {
    controls: document.querySelector('.buttons'),
    btnPlay: document.querySelector('.button__play'),
    btnPause: document.querySelector('.button__pause'),
    btnSet: document.querySelector('.button__stopwatch'),
    btnStop: document.querySelector('.button__stop'),
    btnMusicOff: document.querySelector('.button_speakerOff'),
    btnMusicOn: document.querySelector('.button__speakerOn'),
    action: '',
    observeClick() {
        this.controls.addEventListener('click', (event) => {
            
            this.action = event.target.dataset.action;
            

            switch(this.action) {
                case 'toggleRunning':
                    toggleRunning();
                    break
                case 'stop':
                    stop();
                    break
                case 'toggleMusic':
                    toggleMusic();
                    break;
                case 'set':
                    set();
                    break
                default:
                    console.log('Não há ação');
            }
        })
    }
}

function toggleRunning() {
    state.isRunning = !state.isRunning;

    controls.btnPlay.classList.toggle('button-disable');
    controls.btnPause.classList.toggle('button-disable');
    controls.btnSet.classList.toggle('button-disable');
    controls.btnStop.classList.toggle('button-disable');

    timer.countDown();
    souds.buttonPressAudio.play();
}

function stop() {
    state.isRunning = false;

    controls.btnPause.classList.add('button-disable');
    controls.btnPlay.classList.remove('button-disable');
    controls.btnStop.classList.add('button-disable');
    controls.btnSet.classList.remove('button-disable');

    souds.buttonPressAudio.play();
}

function toggleMusic() {
    state.isMute = !state.isMute;
    
    controls.btnMusicOff.classList.toggle('button-disable');
    controls.btnMusicOn.classList.toggle('button-disable');

    if(state.isMute) {
       souds.bgAudio.pause();
       return 
    }

    souds.bgAudio.play();
}

function set() {
    timer.$minutes.setAttribute('contenteditable', true);
    timer.$seconds.setAttribute('contenteditable', true);

    timer.$minutes.focus();
    souds.buttonPressAudio.play();
}

export {controls, stop}