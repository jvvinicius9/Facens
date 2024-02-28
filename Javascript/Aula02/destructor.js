// Destructor
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

// destructor de objetos
const {nome, email} = aluno
console.log(nome, email)

const {nome: n, email : e} = aluno
console.log(n, e)

//destructor de array
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)