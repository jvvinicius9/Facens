function inverter(frase) {

    var separar = frase.split("")
    var invertida = separar.reverse()
    var fraseNova = invertida.join("")

    console.log(fraseNova)

}

inverter("aditrevni esarf");;