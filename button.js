const button = {
    mostrarLetras: document.querySelector(".mostrarLetras"),
    letras: document.querySelectorAll(".letras")
}

button.mostrarLetras.addEventListener("click", () => {
    if (button.letras[0].getAttribute("style") == "opacity: 1; color: #3700ff") {
        button.mostrarLetras.innerText = "Mostrar Letras"
        for (i = 0; i < button.letras.length; i++) {
            button.letras[i].setAttribute("style", "opacity: 0; color: #3700ff")
        }
    }
    else {
        button.mostrarLetras.innerText = "Tirar Letras"
        for (i = 0; i < button.letras.length; i++) {
            button.letras[i].setAttribute("style", "opacity: 1; color: #3700ff")
        }

    }
})

