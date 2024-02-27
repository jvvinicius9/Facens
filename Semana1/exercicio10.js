function verificar(frase) {

    const separar = frase.split("")
    const invertida = separar.slice().reverse();

    if (separar.join('') === invertida.join('')) {
        return true
    } else {
        return false
    }

}

console.log(verificar("banana"))