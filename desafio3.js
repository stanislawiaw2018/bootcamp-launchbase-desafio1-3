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
            190.7
        ]
    },
    {
        nome: "Raquel",
        despesa: [
            200.0,
            300.9,
            150.5,
            120.0,
            900.9
        ],
        receita: [
            200.0,
            550.9,
            50.0,
            19.7
        ]

    },
    {
        nome: "Samuel",
        despesa: [
            640.0,
            178.9,
            50.5,
            20.0,
            507.9,
            123.6
        ],
        receita: [
            200.0,
            350.9,
            509.0,
            198.7
        ]

    }
]

//DECLARANDO AS FUNÇÕES
function calculaReceita(usuario){
    //VARIAVEIS LOCAL
    let soma = 0
    //ESTRUTURA DE REPETIÇÃO FOR
    for (let i = 0; i < usuario.receita.length; i++){
        soma = soma + usuario.receita[i]
        
    }
    return soma
}

function calculaDespesa(usuario){
    //VARIAVEIS LOCAL
    let soma = 0
    let cont = 0
    //ESTRUTURA DE REPETIÇÃO WHILE
    while (cont < usuario.despesa.length){
        soma = soma + usuario.despesa[cont]
        cont++
    }
    return soma
}


function calculaSaldo(receitas, despesas){
    return (receitas - despesas)
}

//PECORRENDO TODOS OS USUÁRIOS DO ARRAY
for (let i = 0 ; i < usuarios.length ; i++){

    let despesas = calculaDespesa(usuarios[i])
    let receitas = calculaReceita(usuarios[i])
    let saldo = calculaSaldo(receitas,despesas)

    /* console.log(`Despesas do usuário ${i+1}: ${despesas.toFixed(2)}`)
    console.log(`Receitas do usuário ${i+1}: ${receitas.toFixed(2)}`)
    console.log(`Saldo do usuário ${i+1}: ${saldo.toFixed(2)}`) */

    if (saldo < 0){
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }else{
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
        
    }
}