
let Pn = ""

function Enter() {
    console.log("\n"+"\n")
}

const site = function() {
  Enter()
  console.log("Console: ")
};

const usuario = function() {
  Enter()
  console.log("Usuário: ")
};

const treino = []


site()
console.log("Digite seu nome completo: "+"\n") // receber o nome do cliente para registro do treino

usuario()
console.log("\n"+"Lucas Esteves Duarte") // "Lucas Esteves Duarte" = nome recebido pelo usuario

const listaN = [
    "Lucas Esteves Duarte",
    "Elisa Moreira Assunção",
    "Kaique Simões Pacheco",
    "Bernardo Paiva Pereira",
    "Ivone Queiroz Pinto",
    "Yuri Rangel Tavares",
    "Pablo Leite Ramos",
    "Viviane Cardoso Silva",
    "Hugo Cabral Cabral",
    "Hortência Cabral Simões",
    "Heloísa Correia Rocha",
    "Vera Yokoyama Machado",
    "Débora Guimarães Cardoso",
    "Rita Maia Vieira",
    "Alice Rangel Luiz",
    "Ivone Lima Arruda"
]
// Lista Ficticia (Pode ser mudada pela lista da parte 1 do trabalho)

const NomeExigido = Pn = listaN.filter(nome => nome == "Lucas Esteves Duarte") // Procurar o nome dentro da lista de clientes 

if (NomeExigido == "Lucas Esteves Duarte" /* nome */) // Verificação
{
    site()
    console.log("\n"+"Cliente encontrado"+"\n")
    console.log("\n"+"Registre seu treino:"+"\n") // Registro
    console.log("\n"+"Primeiro exércicio"+"\n") // receber o treino
    Enter()

    usuario()
    // Treino digitado pelo usuário
    treino[0] = console.log("Maquina Articulada Puxador | 4 séries: 1 aquecimento (12 repetições, peso leve), 1 preparatório (8 repetições, peso médio), 2 válidas (8-10 repetições, peso maximo atual")
    Enter()

    site()
    console.log("\n"+"Segundo exércicio"+"\n")

    usuario()
    treino[1] = console.log("Maquina Articulada Remada Neutra | 4 séries: 1 aquecimento (12 repetições, peso leve), 1 preparatório (8 repetições, peso médio), 2 válidas (8-10 repetições, peso maximo atual")
    Enter()

    site()
    console.log("\n"+"Terceiro exércicio"+"\n")

    usuario()
    treino[2] = console.log("Articulada Remada Supinada | 4 séries: 1 aquecimento (12 repetições, peso leve), 1 preparatório (8 repetições, peso médio), 2 válidas (8-10 repetições, peso maximo atual")
    Enter()

    site()
    console.log("\n"+"Quarto exércicio"+"\n")

    usuario()
    treino[3] = console.log("Maquina Scott | 4 séries: 1 aquecimento (12 repetições, peso leve), 1 preparatório (8 repetições, peso médio), 2 válidas (8-10 repetições, peso maximo atual")
    Enter()

    site()
    console.log("\n"+"Quinto exércicio"+"\n")

    usuario()
    treino[4] = console.log("Martelo Corda | 4 séries: 1 aquecimento (12 repetições, peso leve), 1 preparatório (8 repetições, peso médio), 2 válidas (8-10 repetições, peso maximo atual")
    // Receber tudo e guarda a informação
    Enter()

    site()
    console.log("Treino Registrado")

}
else if (NomeExigido == 0)
{
    Enter()
    site()
    console.log("Cliente não encontrado")
}


