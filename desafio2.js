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
// console.log(usuarios[0].tecnologias[0])
// console.log(usuarios[0].tecnologias.length)
// console.log(usuarios.length)

//VERIFICA A EXISTÊNCIA DA TECNOLOGIA CSS EM UM DETERMINADO USUÁRIO
function checaSeUsuarioUsaCSS(usuario){
    let cont = 0
    while (cont < usuario.tecnologias.length){
        if (usuario.tecnologias[cont] == "CSS"){
            cont++
            return true
        }else{
            cont++
            
        }
        
    }
    return false
}
//VERIFICA SE O USUÁRIO USA JS
function checaSeusuarioUsaJS(usuario){
    for (let i = 0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == "JS"){
            return true
        }
    }
    return false
}
// console.log(checaSeUsuarioUsaCSS(usuarios[0]))

/* console.log(checaSeUsuarioUsaCSS(usuarios[0].tecnologias))
*/
//PECORRE TODOS OS USUÁRIO DO ARRAY (##> Código Principal <##)
for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i])
    const usuarioTrabalhaComJS = checaSeusuarioUsaJS(usuarios[i])
    if (usuarioTrabalhaComCss){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
    if (usuarioTrabalhaComJS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com JS`)
    }
} 