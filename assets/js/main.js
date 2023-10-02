import { switchMode } from "./switchMode.js";
import * as focusTime from "./focusTime/index.js";

switchMode.buttonLiht.addEventListener('click', () => {
    switchMode.toggleLight();
});

switchMode.buttonDark.addEventListener('click', () => {
    switchMode.toggleDark();
})

focusTime.start(0, 6);