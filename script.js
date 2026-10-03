function main() {
    lista();
}

function lista() {
    const Dados = [
        { nome: "Adalberto", idade: "25", prontuario: "1029384", cpf: "12345678901", email: "adalberto.silva@gmail.com" },
        { nome: "Bernadete", idade: "42", prontuario: "2048593", cpf: "98765432109", email: "berna.lima82@yahoo.com" },
        { nome: "Cleber", idade: "19", prontuario: "3058471", cpf: "45612378902", email: "cleber.dev@hotmail.com" },
        { nome: "Debora", idade: "31", prontuario: "4019283", cpf: "78912345603", email: "debora.mendonca@outlook.com" },
        { nome: "Ezequiel", idade: "55", prontuario: "5029384", cpf: "32165498704", email: "ezequiel_senior@gmail.com" },
        { nome: "Flavia", idade: "28", prontuario: "6039485", cpf: "65498732105", email: "flavia.costa@empresa.com" },
        { nome: "Geraldo", idade: "60", prontuario: "7049596", cpf: "14725836906", email: "geraldo.pacheco@bol.com.br" },
        { nome: "Heloisa", idade: "22", prontuario: "8059607", cpf: "25836914707", email: "heloisa.art@gmail.com" },
        { nome: "Igor", idade: "36", prontuario: "9069718", cpf: "36914725808", email: "igor.cardoso@outlook.com" },
        { nome: "Janaína", idade: "47", prontuario: "1122334", cpf: "74185296309", email: "janaina.med@gmail.com" },
        { nome: "Kleber", idade: "33", prontuario: "2233445", cpf: "85296374110", email: "kleber_silva@yahoo.com" },
        { nome: "Larissa", idade: "24", prontuario: "3344556", cpf: "96374185211", email: "larissa.santos@gmail.com" },
        { nome: "Marcos", idade: "51", prontuario: "4455667", cpf: "15975348612", email: "marcos.souza@uol.com.br" },
        { nome: "Nair", idade: "68", prontuario: "5566778", cpf: "75315984613", email: "nair.oliveira@gmail.com" },
        { nome: "Otavio", idade: "29", prontuario: "6677889", cpf: "35795148614", email: "otavio.augusto@hotmail.com" },
        { nome: "Patricia", idade: "38", prontuario: "7788990", cpf: "95135748615", email: "patricia.lima@gmail.com" },
        { nome: "Quintino", idade: "45", prontuario: "8899001", cpf: "12378945616", email: "quintino.neto@terra.com.br" },
        { nome: "Renata", idade: "27", prontuario: "9900112", cpf: "78912365417", email: "renata.design@gmail.com" },
        { nome: "Samuel", idade: "21", prontuario: "1011121", cpf: "45678912318", email: "samuel.tech@outlook.com" },
        { nome: "Tatiane", idade: "34", prontuario: "2122232", cpf: "32198765419", email: "tatiane.rocha@gmail.com" },
        { nome: "Ubiratan", idade: "59", prontuario: "3233343", cpf: "65432198720", email: "ubiratan.adm@yahoo.com" },
        { nome: "Vanessa", idade: "26", prontuario: "4344454", cpf: "14736925821", email: "vanessa.mendes@gmail.com" },
        { nome: "Wagner", idade: "40", prontuario: "5455565", cpf: "25814736922", email: "wagner.melo@bol.com.br" },
        { nome: "Ximena", idade: "32", prontuario: "6566676", cpf: "36925814723", email: "ximena.flores@gmail.com" },
        { nome: "Yuri", idade: "23", prontuario: "7677787", cpf: "74196385224", email: "yuri.galkin@outlook.com" },
        { nome: "Zuleica", idade: "49", prontuario: "8788898", cpf: "85274196325", email: "zuleica.pires@gmail.com" },
        { nome: "Alice", idade: "18", prontuario: "9899909", cpf: "96385274126", email: "alice.estudante@gmail.com" },
        { nome: "Bruno", idade: "37", prontuario: "1231234", cpf: "15948675327", email: "bruno.cardoso@yahoo.com" },
        { nome: "Carla", idade: "30", prontuario: "2342345", cpf: "75384615928", email: "carla.freitas@gmail.com" },
        { nome: "Daniel", idade: "44", prontuario: "3453456", cpf: "35748695129", email: "daniel.ribeiro@outlook.com" },
        { nome: "Elaine", idade: "39", prontuario: "4564567", cpf: "95148635730", email: "elaine.almeida@gmail.com" },
        { nome: "Fabio", idade: "48", prontuario: "5675678", cpf: "12345678931", email: "fabio.trabalho@uol.com.br" },
        { nome: "Gisela", idade: "26", prontuario: "6786789", cpf: "98765432132", email: "gisela.martins@gmail.com" },
        { nome: "Heitor", idade: "35", prontuario: "7897890", cpf: "45612378933", email: "heitor.campos@hotmail.com" },
        { nome: "Isabela", idade: "20", prontuario: "8908901", cpf: "78912345634", email: "isabela.psi@gmail.com" },
        { nome: "Joao", idade: "53", prontuario: "9019012", cpf: "32165498735", email: "joao.batista@yahoo.com" },
        { nome: "Karina", idade: "29", prontuario: "1112223", cpf: "65498732136", email: "karina.pires@gmail.com" },
        { nome: "Lucas", idade: "22", prontuario: "2223334", cpf: "14725836937", email: "lucas.gamer@outlook.com" },
        { nome: "Mariana", idade: "41", prontuario: "3334445", cpf: "25836914738", email: "mariana.nutri@gmail.com" },
        { nome: "Nicolas", idade: "25", prontuario: "4445556", cpf: "36914725839", email: "nicolas.ferreira@gmail.com" }
    ];

   const matrizAlunos = [];

    for (let i = 0; i < Dados.length; i++) {
        const aluno = Dados[i];

        const linha = [
            aluno.nome,
            aluno.idade,
            aluno.prontuario,
            aluno.cpf,
            aluno.email
        ];

        matrizAlunos[i] = linha;
    }

    console.log(matrizAlunos);
    return matrizAlunos;
}
