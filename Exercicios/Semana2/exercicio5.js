function encontrarMinMax(array) {

    let maior = array[0]
    let menor = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        } if (array[i] < menor) {
            menor = array[i]

        }
    }

    return console.log(`O maior número é ${maior} e o menor é ${menor}`)
}
const numeros = [10,20,1,7]
encontrarMinMax(numeros)