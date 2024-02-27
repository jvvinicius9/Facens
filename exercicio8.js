function contarVogais(frase) {

    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === "a" | frase[i] === "e" | frase[i] === "i" | frase[i] === "o" | frase[i] === "u") {
            contador++
        };
    }
    console.log(`O número de vogais nessa frase é ${contador}`)
}

contarVogais("frase de teste")