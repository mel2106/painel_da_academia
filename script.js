
// Determinando a mensalidade

const mensalidade = 200;
const anosAcademia = [2, 6, 5, 8, 7, 3, 10, 4];

const calcularMensalidade = (mensalidade, desconto) => {
    
    const valorDesconto = mensalidade * (desconto / 100);
    const valorFinal = mensalidade - valorDesconto;

    return valorFinal;

};

//Filtrando para os clientes que estao na academia a mais de 5 anos

const clientesComDesconto = anosAcademia.filter(ano => ano> 5);

// Mensalidade com 30% de desconto para cada cliente 

const mensalidadeComDesconto = clientesComDesconto.map(ano => {
    return calcularMensalidade(mensalidade, 30);
});

//Mostra os resultados no console
console.log("Mensalidade normal: R$ " + mensalidade);
console.log("Clientes com mais de 5 anos:", clientesComDesconto);
console.log("Mensalidades com Desconto:", mensalidadeComDesconto);
