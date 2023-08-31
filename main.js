const notas = document.querySelectorAll(".key");

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
};

function tocarNotas(event) {
    let pegandoNota = getKeyCode(event)
    // console.log(getKeyCode(event))

    let Tecla = document.querySelector(`.key[data-key="${pegandoNota}"]`)
    console.log(Tecla)

    if (!Tecla) {
        return;
    }

    addPlayingTeclas(Tecla)
    tocarSons(pegandoNota)
};

function addPlayingTeclas(Tecla) {
    Tecla.classList.add("playing")
    setTimeout(() => Tecla.classList.remove("playing"), 500)
};
function tocarSons(pegandoNota) {
    let audios = document.querySelector(`audio[data-key="${pegandoNota}"]`)
    audios.currentTime = 0;
    audios.play()
}
function letsGetStarted() {
    window.addEventListener('keydown', tocarNotas)

};

window.addEventListener("load", letsGetStarted)



/*
referencias:
https://codepen.io/Eliteware/pen/wDHIC
https://codepen.io/gabrielcarol/pen/rGeEbY
*/


