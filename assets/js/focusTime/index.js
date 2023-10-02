import { controls } from '../controls.js';
import { updateTime } from '../timer.js';
import states from './state.js'

export function start(minutes, seconds) {
    states.minutes = minutes;
    states.seconds = seconds;

    updateTime();

    controls.observeClick();
}