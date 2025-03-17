let pizzas = ["Pizza de Frango com Catupiry", "Pizza de Mussarela", "Pizza de Calabresa", "Pizza Marguerita", "Pizza Portuguesa", "Pizza Quatro Queijos", "Pizza Napolitana"]
let valores = [32, 29, 40, 45, 38, 48, 31]
contador = 0;

console.log("--- Cardápio ---");
function mostrarCardapio() {
    while(contador < pizzas.length){
        let c2 = contador + 1
        console.log(c2 + " - " + pizzas[contador] + " R$ " + valores[contador])
        contador = contador + 1;
    }
}

function adicionarPizza(nome, valor) {
    pizzas.push(nome);
    valores.push(valor);
    console.log(`Pizza "${nome}" adicionada com sucesso!`);
}

function removerPizza(indice) {
    if (indice >= 0 && indice < pizzas.length) {
        console.log(`Pizza "${pizzas[indice]}" removida!`);
        pizzas.splice(indice, 1);
        valores.splice(indice, 1);
    } else {
        console.log("Índice inválido!");
    }
}

function mostrarCardapioPromocional() {
    console.log("--- Cardápio Promocional (10% de desconto) ---");
    for (let i = 0; i < pizzas.length; i++) {
        let valorComDesconto = valores[i] - (valores[i] * 0.10);
        console.log(`${pizzas[i]}: R$ ${valorComDesconto.toFixed(2)}`);
    }
}

mostrarCardapio();
adicionarPizza("Pepperoni", 32);
mostrarCardapio();
removerPizza(1);
mostrarCardapio();
mostrarCardapioPromocional();
