// const button = {
//     mostrarLetras: document.querySelector(".mostrarLetras"),
//     letras: document.querySelectorAll(".letras")
// }
const notas = document.querySelectorAll(".key");

/*
button.mostrarLetras.addEventListener("click", () => {
    for (i = 0; i < button.letras.length; i++) {
        button.letras[i].setAttribute("style", "opacity: 1; color: #3700ff")
    }

    button.mostrarLetras.innerText = "TIRAR LETRAS"

    // if (button.mostrarLetras.innerText === "TIRAR LETRAS") {
    //     for (i = 0; i < button.letras.length; i++) {
    //         button.letras[i].setAttribute("style", "opacity: 0;")
    //     }
    //     button.mostrarLetras.innerText = "MOSTRAR LETRAS"
    // }

})
*/

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
references:
https://codepen.io/Eliteware/pen/wDHIC
https://codepen.io/gabrielcarol/pen/rGeEbY
*/


