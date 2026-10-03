//FUNÇÕES
function geradorRelatorio (lista) { //essa função serve apenas para produzir um relatorio com a correção dos salários dos personais
    let relatorio = "\n====== RELATÓRIO DE REAJUSTE (15%) ======\n";

    for(let i=0; i <= lista.length -1; i++)
    {
        let f = lista[i]
        relatorio+="Nome: " + f.nome + " | ";
        relatorio+="Salário corrigido: R$" + f.salCorrigido + " | ";
        relatorio+="Cargo: " + f.cargo + " | ";
        relatorio+="Especialidade: " + f.especialidade + "\n";
    }

    return relatorio;
}

function exibirFunc(lista){ //essa aqui exibi os funcionários com seus salários atuais, afinal a correção ainda não ocorreu
    console.log("====== LISTA DE FUNCIONARIOS ======\n");

    for(let i=0; i <= lista.length -1; i++)
    {
        let f = lista[i]
        console.log("Nome: " + f.nome + " | Salário atual: R$" + f.salario + " | Cargo: " + f.cargo + " | Especialidade: " + f.especialidade + "\n");
    }
}

//VETORES
const funcionarios=[ //esse vetor tem todos os funcionários, tendo seus nomes, salários, cargos e especialidades
    {nome: "Gerson", salario: 10000, cargo: "gerente / personal", especialidade: "gestão / cardio"},
    {nome: "Christopher", salario: 6000, cargo: "personal", especialidade: "cross"},
    {nome: "Susana", salario: 7000, cargo: "personal", especialidade: "musculação"},
    {nome: "Rafael", salario: 6000, cargo: "nutricionista / personal", especialidade: "nutrição / reabilitação"},
    {nome: "Natalia", salario: 3000, cargo: "personal", especialidade: "pilates"},
    {nome: "Jonanthan", salario: 2000, cargo: "recepcionista", especialidade: "atendimento"},
    {nome: "Priscila", salario: 3500, cargo: "salteadora", especialidade: "supervisão de salão"},
    {nome: "Bernardo", salario: 2500, cargo: "serviços gerais", especialidade: "manutenção"}
];

const ListaFuncAumento = funcionarios.map(a => ({ //aqui usamos o .map() para reajustar o salario dos funcionários
    nome: a.nome,
    salCorrigido: (a.salario * 1.15).toFixed(2),
    cargo: a.cargo,
    especialidade: a.especialidade
}));

const apenasPersonais = funcionarios.filter(f => f.cargo.includes("personal"));

//EXIBIÇÕES E CHECAGENS


exibirFunc(funcionarios) //lista todos os funcionários
console.log(geradorRelatorio(ListaFuncAumento)); //exibe o relatório com correção de salários

console.log("\n====== CHECAGENS ======\n")

console.log("\nQuem são os personais da academia? ") //verifica os personais usando o includes algumas linhas atrás e deixa visualmente bom de se ler com o for logo a frente
for(let i=0; i <= apenasPersonais.length -1; i++)
    {
        console.log("Nome: " + apenasPersonais[i].nome + " | Especialidade: " + apenasPersonais[i].especialidade + "\n");
    }

console.log("\nTemos algum especialista em nutrição? ");
let verifNutri = funcionarios.some(f => f.especialidade.includes("nutrição")); //verifica a existência de algum especialista em nutrição
if(verifNutri)
{
    console.log("Sim.")
}
else
{
    console.log("Não.")
}

console.log("\nTodos os funcionarios recebem o teto minimo de R$2000.00?")
const acima2mil = funcionarios.every(f => f.salario >= 2000); //verifica se TODOS recebem no minimo 2 mil reais
if (acima2mil === true) 
{
    console.log("Todos recebem o teto minimo.")
}
else    
{
    console.log("ALERTA: existe alguém que recebe abaixo do teto minimo!")
}
