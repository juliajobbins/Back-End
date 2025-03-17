let pizzas = ["Pizza de Frango com Catupiry", "Pizza de Mussarela", "Pizza de Calabresa", "Pizza Marguerita", "Pizza Portuguesa", "Pizza Quatro Queijos", "Pizza Napolitana"]
let valores = [32, 29, 40, 45, 38, 48, 31]
contador = 0;

while(contador < pizzas.length){
    let c2 = contador + 1
    console.log(c2 + " - " + pizzas[contador] + " R$ " + valores[contador])
    contador = contador + 1;
}
