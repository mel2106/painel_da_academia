// DADOS GLOBAIS (Array de dados)

const Dados = [
    { nome: "Adalberto", idade: "25", prontuario: "1029384", cpf: "12345678901", email: "adalberto.silva@gmail.com", anosAcademia: 2 },
    { nome: "Bernadete", idade: "42", prontuario: "2048593", cpf: "98765432109", email: "berna.lima82@yahoo.com", anosAcademia: 6 },
    { nome: "Cleber", idade: "19", prontuario: "3058471", cpf: "45612378902", email: "cleber.dev@hotmail.com", anosAcademia: 5 },
    { nome: "Debora", idade: "31", prontuario: "4019283", cpf: "78912345603", email: "debora.mendonca@outlook.com", anosAcademia: 8 },
    { nome: "Ezequiel", idade: "55", prontuario: "5029384", cpf: "32165498704", email: "ezequiel_senior@gmail.com", anosAcademia: 7 },
    { nome: "Flavia", idade: "28", prontuario: "6039485", cpf: "65498732105", email: "flavia.costa@empresa.com", anosAcademia: 3 },
    { nome: "Geraldo", idade: "60", prontuario: "7049596", cpf: "14725836906", email: "geraldo.pacheco@bol.com.br", anosAcademia: 10 },
    { nome: "Heloisa", idade: "22", prontuario: "8059607", cpf: "25836914707", email: "heloisa.art@gmail.com", anosAcademia: 4 },
    { nome: "Igor", idade: "36", prontuario: "9069718", cpf: "36914725808", email: "igor.cardoso@outlook.com", anosAcademia: 2 },
    { nome: "Janaína", idade: "47", prontuario: "1122334", cpf: "74185296309", email: "janaina.med@gmail.com", anosAcademia: 1 },
    { nome: "Kleber", idade: "33", prontuario: "2233445", cpf: "85296374110", email: "kleber_silva@yahoo.com", anosAcademia: 9 },
    { nome: "Larissa", idade: "24", prontuario: "3344556", cpf: "96374185211", email: "larissa.santos@gmail.com", anosAcademia: 5 },
    { nome: "Marcos", idade: "51", prontuario: "4455667", cpf: "15975348612", email: "marcos.souza@uol.com.br", anosAcademia: 12 },
    { nome: "Nair", idade: "68", prontuario: "5566778", cpf: "75315984613", email: "nair.oliveira@gmail.com", anosAcademia: 6 },
    { nome: "Otavio", idade: "29", prontuario: "6677889", cpf: "35795148614", email: "otavio.augusto@hotmail.com", anosAcademia: 2 },
    { nome: "Patricia", idade: "38", prontuario: "7788990", cpf: "95135748615", email: "patricia.lima@gmail.com", anosAcademia: 3 },
    { nome: "Quintino", idade: "45", prontuario: "8899001", cpf: "12378945616", email: "quintino.neto@terra.com.br", anosAcademia: 8 },
    { nome: "Renata", idade: "27", prontuario: "9900112", cpf: "78912365417", email: "renata.design@gmail.com", anosAcademia: 4 },
    { nome: "Samuel", idade: "21", prontuario: "1011121", cpf: "45678912318", email: "samuel.tech@outlook.com", anosAcademia: 1 },
    { nome: "Tatiane", idade: "34", prontuario: "2122232", cpf: "32198765419", email: "tatiane.rocha@gmail.com", anosAcademia: 7 },
    { nome: "Ubiratan", idade: "59", prontuario: "3233343", cpf: "65432198720", email: "ubiratan.adm@yahoo.com", anosAcademia: 15 },
    { nome: "Vanessa", idade: "26", prontuario: "4344454", cpf: "14736925821", email: "vanessa.mendes@gmail.com", anosAcademia: 4 },
    { nome: "Wagner", idade: "40", prontuario: "5455565", cpf: "25814736922", email: "wagner.melo@bol.com.br", anosAcademia: 6 },
    { nome: "Ximena", idade: "32", prontuario: "6566676", cpf: "36925814723", email: "ximena.flores@gmail.com", anosAcademia: 2 },
    { nome: "Yuri", idade: "23", prontuario: "7677787", cpf: "74196385224", email: "yuri.galkin@outlook.com", anosAcademia: 5 },
    { nome: "Zuleica", idade: "49", prontuario: "8788898", cpf: "85274196325", email: "zuleica.pires@gmail.com", anosAcademia: 8 },
    { nome: "Alice", idade: "18", prontuario: "9899909", cpf: "96385274126", email: "alice.estudante@gmail.com", anosAcademia: 1 },
    { nome: "Bruno", idade: "37", prontuario: "1231234", cpf: "15948675327", email: "bruno.cardoso@yahoo.com", anosAcademia: 10 },
    { nome: "Carla", idade: "30", prontuario: "2342345", cpf: "75384615928", email: "carla.freitas@gmail.com", anosAcademia: 3 },
    { nome: "Daniel", idade: "44", prontuario: "3453456", cpf: "35748695129", email: "daniel.ribeiro@outlook.com", anosAcademia: 7 },
    { nome: "Elaine", idade: "39", prontuario: "4564567", cpf: "95148635730", email: "elaine.almeida@gmail.com", anosAcademia: 6 },
    { nome: "Fabio", idade: "48", prontuario: "5675678", cpf: "12345678931", email: "fabio.trabalho@uol.com.br", anosAcademia: 9 },
    { nome: "Gisela", idade: "26", prontuario: "6786789", cpf: "98765432132", email: "gisela.martins@gmail.com", anosAcademia: 4 },
    { nome: "Heitor", idade: "35", prontuario: "7897890", cpf: "45612378933", email: "heitor.campos@hotmail.com", anosAcademia: 2 },
    { nome: "Isabela", idade: "20", prontuario: "8908901", cpf: "78912345634", email: "isabela.psi@gmail.com", anosAcademia: 1 },
    { nome: "Joao", idade: "53", prontuario: "9019012", cpf: "32165498735", email: "joao.batista@yahoo.com", anosAcademia: 11 },
    { nome: "Karina", idade: "29", prontuario: "1112223", cpf: "65498732136", email: "karina.pires@gmail.com", anosAcademia: 5 },
    { nome: "Lucas", idade: "22", prontuario: "2223334", cpf: "14725836937", email: "lucas.gamer@outlook.com", anosAcademia: 3 },
    { nome: "Mariana", idade: "41", prontuario: "3334445", cpf: "25836914738", email: "mariana.nutri@gmail.com", anosAcademia: 6 },
    { nome: "Nicolas", idade: "25", prontuario: "4445556", cpf: "36914725839", email: "nicolas.ferreira@gmail.com", anosAcademia: 4 }
];


// LISTA

// Função criada por declaração e SEM retorno
function main() {
    lista(); 
}

// Função criada por declaração e COM retorno
function lista() {
    console.log("====== LISTA DE CLIENTES DA ACADEMIA ======\n");
    
    // MATRIZ REGULAR
    const matrizAlunos = []; 

    for (let i = 0; i < Dados.length; i++) {
        const aluno = Dados[i];

        const linha = [
            aluno.nome,         // coluna 0
            aluno.idade,        // coluna 1
            aluno.prontuario,   // coluna 2
            aluno.cpf,          // coluna 3
            aluno.email,        // coluna 4
            aluno.anosAcademia  // coluna 5
        ];

        matrizAlunos[i] = linha;
        console.log(`Nome: ${linha[0]} | Idade: ${linha[1]} | CPF: ${linha[3]}`);
    }

    return matrizAlunos; // COM RETORNO
}

main(); 


// Frequência semanal

console.log("\n====== FREQUÊNCIA SEMANAL ======");

// MATRIZ IRREGULAR

const clientesPorDia = [
    ["Adalberto", "Cleber", "Ezequiel", "Flavia", "Geraldo"],         // Segunda-feira (5 clientes)
    ["Bernadete", "Cleber", "Heloisa"],                               // Terça-feira (3 clientes)
    ["Adalberto", "Cleber", "Ezequiel", "Igor", "Janaína", "Kleber"], // Quarta-feira (6 clientes)
    ["Bernadete", "Cleber", "Larissa", "Marcos"],                     // Quinta-feira (4 clientes)
    ["Adalberto", "Cleber"],                                          // Sexta-feira (2 clientes)
    ["Debora", "Ezequiel", "Nair"],                                   // Sábado (3 clientes)
    ["Ezequiel"]                                                      // Domingo (1 cliente)
];

const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

for(let i = 0; i < clientesPorDia.length; i++) {
    // length para saber quantos clientes foram
    console.log(`${diasDaSemana[i]}: ${clientesPorDia[i].length} clientes foram treinar.`);
}


// MENSALIDADES

console.log("\n====== MENSALIDADES ======");
const mensalidade = 200;

// Função para calcular o valor com desconto
const calcularMensalidade = (mensalidade, desconto) => {
    return mensalidade - (mensalidade * (desconto / 100));
};

// FILTER E ARROW FUNCTION COM RETORNO IMPLÍCITO (Filtra clientes com 5+ anos)
const clientesComDesconto = Dados.filter(cliente => cliente.anosAcademia >= 5);

// map (Gera novo array aplicando o desconto de 30%)
const mensalidadeComDesconto = clientesComDesconto.map(cliente => {
    return {
        nome: cliente.nome, 
        anos_frequencia: cliente.anosAcademia,
        valor_mensalidade: calcularMensalidade(mensalidade, 30)
    };
});

console.log(`Mensalidade normal: R$ ${mensalidade.toFixed(2)}`);
console.log(`Clientes contemplados com o desconto de 30% (5 anos ou mais): ${clientesComDesconto.length}\n`);

mensalidadeComDesconto.forEach(cliente => {
    console.log(`- ${cliente.nome} | Tempo: ${cliente.anos_frequencia} anos | Nova Mensalidade: R$ ${cliente.valor_mensalidade.toFixed(2)}`);
});


// REGISTRO DE TREINO

// FUNÇÃO CRIADA POR EXPRESSÃO
const site = function(msg) {
  console.log(`\n[Console]: ${msg}`);
};
// idem
const usuario = function(msg) {
  console.log(`[Usuário]: ${msg}`);
};

const opcoesDeTreino = [
    "Maquina Articulada Remada Neutra | 4 séries: 1 aquecimento, 1 prep., 2 válidas",
    "Leg Press 45º | 4 séries: 1 aquecimento, 3 válidas",
    "Supino Reto com Halteres | 4 séries: 1 aquecimento, 3 válidas",
    "Cadeira Extensora | 4 séries válidas até a falha",
    "Agachamento Livre | 5 séries: 2 aquecimento, 3 válidas",
    "Desenvolvimento Máquina | 4 séries: 1 aquecimento, 3 válidas",
    "Rosca Direta com Barra | 3 séries: 1 preparatória, 2 válidas",
    "Tríceps Corda na Polia | 4 séries válidas"
];

console.log("\n====== REGISTRO DE TREINO DE TODOS OS CLIENTES ======");

const bancoDeTreinos = [];

// Treino para cada cliente
Dados.forEach((cliente) => {
    site("Digite seu nome completo:");
    usuario(cliente.nome);
    site(`Cliente ${cliente.nome} encontrado!`);
    
    // Sorteia um exercício aleatório da lista de opções
    const indiceSorteado = Math.floor(Math.random() * opcoesDeTreino.length);
    const exercicioDigitado = opcoesDeTreino[indiceSorteado];
    
    usuario(exercicioDigitado);

    bancoDeTreinos.push({
        cliente: cliente.nome,
        treino: exercicioDigitado
    });

    site("Treino Registrado com Sucesso!");
    console.log("--------------------------------------------------");
});


// EQUIPE, CHECAGENS E RELATÓRIOS

function exibirFunc(lista){ 
    console.log("\n====== LISTA DE FUNCIONARIOS ======");
    for(let i=0; i < lista.length; i++) {
        console.log(`Nome: ${lista[i].nome} | Cargo: ${lista[i].cargo} | Salário Base: R$ ${lista[i].salario.toFixed(2)}`);
    }
}

const funcionarios = [ 
    {nome: "Gerson", salario: 10000, cargo: "gerente / personal", especialidade: "gestão / cardio"},
    {nome: "Christopher", salario: 6000, cargo: "personal", especialidade: "cross"},
    {nome: "Susana", salario: 7000, cargo: "personal", especialidade: "musculação"},
    {nome: "Rafael", salario: 6000, cargo: "nutricionista / personal", especialidade: "nutrição / reabilitação"},
    {nome: "Natalia", salario: 3000, cargo: "personal", especialidade: "pilates"},
    {nome: "Jonanthan", salario: 2000, cargo: "recepcionista", especialidade: "atendimento"},
];

const novosContratados = [
    {nome: "Priscila", salario: 3500, cargo: "salteadora", especialidade: "supervisão de salão"},
    {nome: "Bernardo", salario: 2500, cargo: "serviços gerais", especialidade: "manutenção"}
];

// concat (Unindo as equipes)
const todosFuncionarios = funcionarios.concat(novosContratados);

exibirFunc(todosFuncionarios);

console.log("\n====== CHECAGENS ======");

// includes (inclui cargos que contêm a string "personal")
const apenasPersonais = todosFuncionarios.filter(f => f.cargo.includes("personal"));
console.log(`Temos ${apenasPersonais.length} personais na equipe.`);

// some (Verifica a existencia de algum especialista em nutrição)
let verifNutri = todosFuncionarios.some(f => f.especialidade.includes("nutrição")); 
console.log(`Temos algum especialista em nutrição? ${verifNutri ? "Sim." : "Não."}`);

// every (Verifica se todos ganham acima do teto mínimo)
const acima2mil = todosFuncionarios.every(f => f.salario >= 2000); // verifica se TODOS recebem no minimo 2 mil reais
console.log(`Todos recebem o teto minimo (R$2000)? ${acima2mil ? "Todos recebem teto mínimo." : "ALERTA: existe alguém que recebe abaixo do teto minimo!"}`);

console.log("\n====== RELATÓRIO DE REAJUSTE (15%) ======");

// map para gerar reajuste salarial
const funcionariosReajustados = todosFuncionarios.map(func => {
    return {
        nome: func.nome,
        cargo: func.cargo,
        salarioAntigo: func.salario,
        salarioNovo: func.salario + (func.salario * 0.15) // 15% de aumento
    };
});

funcionariosReajustados.forEach(f => {
    console.log(`- ${f.nome} (${f.cargo}) | De: R$ ${f.salarioAntigo.toFixed(2)} -> Para: R$ ${f.salarioNovo.toFixed(2)}`);
});