// tipos de funcao
// funcao nomeada
function divisao(num1, num2) {
    if (num2 == 0) {
        return 'Impossível dividir por zero'
    } else {
        return num1 / num2
    }
}
console.log(divisao(5, 2))

// funçao anonima
let multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(3, 5))

// arrow function
let subtracao = (num1, num2) => {
    return num1 - num2
}

console.log(subtracao(10, 7))

let soma = (num1, num2) => num1 + num2
console.log(soma(3, 10))

// brincadeira lkkkkkkkkkkkk
let calcular = (num1, num2, operacao) => operacao(num1, num2)

console.log(calcular(10, 5, subtracao))

// funcao construtora
function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function () {
        if(velocidadeAtual < velocidadeMaxima) {
            velocidadeAtual += delta
        }
    }
    this.getVelocidade = function (){
        return velocidadeAtual
    }
}

// instanciando carros
marea = new Carro(120, 1)
marea.acelerar()
marea.acelerar()
marea.acelerar()
console.log('Velocidade da Marea: '+marea.getVelocidade())

uno = new Carro(300, 15)
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log('Velocidade do Uninho: '+uno.getVelocidade())