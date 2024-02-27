function Loop() {
    var listaNumeros = ""
    for (let i = 0; i <= 10; i++) {
        listaNumeros += i
        if (i < 10) {
            listaNumeros += " - "
        }
    }
    console.log(listaNumeros)
}

Loop()