function operacoes(n1,n2) {
    return console.log(`
    Resultado da soma: ${n1 + n2}
    Resultdo da subtração: ${n1 - n2}
    Resultado da multiplicação: ${n1 * n2}
    Resultado da divisão: ${(n1 / n2).toFixed(2)}
    `)
}

operacoes(5,3)