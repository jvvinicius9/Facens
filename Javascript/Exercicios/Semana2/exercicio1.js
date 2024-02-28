const triangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado1 === lado3) {
        return console.log("Esse é um triângulo Equilátero")
    } if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return console.log("Esse é um triângulo Isósceles")
    } else {
        return console.log("Esse é um triângulo Escaleno")
    }
}

triangulo(2,2,2)