export const switchMode = {
    buttonLiht: document.querySelector('.button__light'),
    buttonDark: document.querySelector('.button__dark'),
    toggleLight() {
        document.querySelector('body').classList.add('light');
    },
    toggleDark() {
        document.querySelector('body').classList.remove('light');
    }
}