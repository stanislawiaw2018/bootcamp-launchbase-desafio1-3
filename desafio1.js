// usuarios -> VARIAVEL GLOBAL
const usuarios = [
    {
        nome: "Antonio",
        tecnologias: [
            "HTML",
            "CSS",
            "JS",
            "PHP",
            "JAVA",
            "PYTHON",
            "node.js"
        ]
    },
    {
        nome: "Vitória",
        tecnologias: [
            "MySQL",
            "PHP",
            "HTML",
            "CSS",
            "JS"
        ]

    },
    {
        nome: "Carlos",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    }

]

//DECLARAÇÃO DA FUNÇÃO/MÉTODO
function exibirInfomacoes(){
    // i -> Variavel local
    for (let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com as seguintes tecnologias: ${usuarios[i].tecnologias}`)
    }
}

//CHAMANDO A FUNÇÃO/MÉTODO
exibirInfomacoes()