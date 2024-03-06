let simples = (capital, taxa, tempo) => capital + (capital * taxa/100 * tempo)
let composto = (capital, taxa, tempo) => capital + (capital * (1 + (taxa/100)) ** tempo)
// let calcularJuros = (capital, taxa, tempo, tipoDeJuros) => tipoDeJuros(capital, taxa, tempo)

let calcularJuros = (capital, taxa, tempo, tipoDeJuros) => `R$${tipoDeJuros(capital, taxa, tempo).toFixed(2).replace('.', ',')}`

console.log(calcularJuros(10000, 5, 60, composto))