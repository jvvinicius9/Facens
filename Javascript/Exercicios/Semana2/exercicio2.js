// function formatReal(valor) {
//     valor = valor.toFixed(2).replace('.', ',')
//     return console.log(`R$${valor}`)
// }
// formatReal(0.3000000004)

let formatReal = (valor) => console.log(`R$${valor.toFixed(2).replace('.', ',')}`)

formatReal(0.3)