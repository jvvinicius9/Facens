const nome = "João Vinicius Siqueira"

function criarEmail() {
    const nomeMinusculo = nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); 
    const partesNome = nomeMinusculo.split(" ")
    
    console.log(`${partesNome[0]}.${partesNome[partesNome.length-1]}@facens.br`)
}

criarEmail()

// código roubado da net (para tirar os acentos) -> normalize('NFD').replace(/[\u0300-\u036f]/g, "");