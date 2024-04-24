async function carregandoDados() {
    let url1 = 'https://8c96004d-aa9a-482a-9305-82efdf6db544.mock.pstmn.io/setor'
    let url2 = 'https://8c96004d-aa9a-482a-9305-82efdf6db544.mock.pstmn.io/cargo'
    let url3 = 'https://8c96004d-aa9a-482a-9305-82efdf6db544.mock.pstmn.io/convenio'

    let resposta = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3)
    ])

    let setores = await resposta[0].json()
    let cargos = await resposta[1].json()
    let convenios = await resposta[2].json()
    cargos = [
        {"id" : 1, "nome" : "Analista de Sistemas", "salário" : "8500"},
        {"id" : 2, "nome" : "Assistente Administrativo", "salário" : "2500"},
        {"id" : 3, "nome" : "Secretário", "salário" : "4300"},
        {"id" : 4, "nome" : "Gerente de Vendas", "salário" : "6500"},
        {"id" : 5, "nome" : "Analista de Marketing", "salário" : "4500"}
    ]

    setores = [
        {"id": 1, "nome": "Tecnologia da Informação", "sigla": "TI"},
        {"id": 2, "nome": "Recursos Humanos", "sigla": "RH"},
        {"id": 3, "nome": "Financeiro", "sigla": "FI"},
        {"id": 4, "nome": "Marketing e Vendas", "sigla": "MK"},
        {"id": 5, "nome": "Produção e Operações", "sigla": "PO"}
    ]
    
    convenios =  [
        {"id" : 1, "nome" : "UNIMED", "valor" : {
            "titular" : 1500,
            "dependente" : 750
        }},
        {"id" : 2, "nome" : "Intermédica", "valor" : {
            "titular" : 1400,
            "dependente" : 850
        }}
    ]
    const selectCargo = document.querySelector("#cargo")
    const selectSetor = document.querySelector("#setor")
    const selectConvenio = document.querySelector("#convenio")

    cargos.forEach(cargo => {
        let option = document.createElement("option")
        option.value = cargo.id
        option.textContent = cargo.nome
        selectCargo.appendChild(option)
    });
    setores.forEach(setor => {
        let option = document.createElement("option")
        option.value = setor.id
        option.textContent = setor.nome
        selectSetor.appendChild(option)
    });
    debugger
    convenios.forEach(convenio => {
        let option = document.createElement("option")
        option.value = convenio.id
        option.textContent = convenio.nome
        selectConvenio.appendChild(option)
    });

    selectCargo.addEventListener("change", () => {
        const cargoId = parseInt(selectCargo.value)
        const cargoSelecionado = cargos.find(cargo => cargo.id === cargoId)
        document.getElementById("salario").value = `R$ ${cargoSelecionado.salário}`
    });

    selectConvenio.addEventListener("change", () => {
        const convenioId = parseInt(selectConvenio.value)
        const convenioSelecionado = convenios.find(convenio => convenio.id === convenioId)
        document.getElementById('valorConvenioTitular').value = `R$ ${convenioSelecionado.valor.titular}`
        document.getElementById('valorConvenioDependente').value = `R$ ${convenioSelecionado.valor.dependente}`
    })
    
}
carregandoDados()

function inserirFuncionario(event) {
    event.preventDefault()
    let funcionario = {
        nome : document.querySelector("#nomeCompleto").value,
        telefone : document.querySelector("#telefone").value,
        email : document.querySelector("#email").value,
        cpf : document.querySelector("#cpf").value,
        rg : document.querySelector("#rg").value,
        idCargo : document.querySelector("#cargo").value,
        idSetor : document.querySelector("#setor").value,
        idConvenio : document.querySelector("#convenio").value
}
    const url = 'https://66266bc2052332d55322d1f0.mockapi.io/funcionario'
    fetch(url, {
        method : 'Post',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(funcionario)
    }).then(resposta =>{
        if (resposta.status == 201) {
            window.alert('Salvo com sucesso')
        }
    })
}


// inserirFuncionario(funcionario)