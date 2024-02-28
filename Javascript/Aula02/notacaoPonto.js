// Notação Ponto
let cliente = {}

cliente.nome = "Joao"
cliente.email = "joao@gmail.com"
// console.log(cliente)

let aluno = {
    nome: 'maria',
    email: 'maria@facens.br',
    endereco: {
        rua: 'rua das flores',
        bairro: 'vila teste',
        numero: 1
    },
    notas : [10, 8, 6.2]
}

console.log(aluno.nome, aluno.notas)
console.log(aluno.endereco.bairro)
console.log(aluno.notas[0])