const usuarios = [
    {
        nome: "Antonio",
        despesa: [
            100.0,
            370.9,
            350.5,
            280.0
        ],
        receita: [
            450.0,
            650.9,
            150.0,
            190,7
        ]
    },
    {
        nome: "Raquel",
        despesa: [
            200.0,
            300.9,
            150.5,
            120.0
        ],
        receita: [
            200.0,
            550.9,
            50.0,
            19,7
        ]

    },
    {
        nome: "Samuel",
        despesa: [
            640.0,
            178.9,
            50.5,
            20.0
        ],
        receita: [
            200.0,
            350.9,
            509.0,
            198,7
        ]

    }
]

//DECLARANDO AS FUNÇÕES
function calculaReceita(usuario){
    let soma = 0
    for (let i = 0; i < usuario.receita.length; i++){
        soma = soma + usuario.receita[i]
        
    }
    return soma
}

function calculaDespesa(usuario){
    let soma = 0
    let cont = 0
    while (cont < usuario.despesa.length){
        soma = soma + usuario.despesa[cont]
        cont++
    }
    return soma
}


function calculaSaldo(receitas, despesas){
    
}

for (let i = 0 ; i < usuarios.length ; i++){

    let despesas = calculaDespesa(usuarios[i])
    let receitas = calculaReceita(usuarios[i])
    let saldo = calculaSaldo(receitas,despesas)
}