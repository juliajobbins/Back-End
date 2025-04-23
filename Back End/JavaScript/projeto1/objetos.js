// Objetos

let lanches = [
    {
        nome: "X-Burguer",
        preco: 50,
        ingredientes: ["Pão", "queijo", "hambúrguer"]
    },
    {
        nome: "X-Salada",
        preco: 64,
        ingredientes: ["Pão", "queijo", "hambúrguer", "salada"]
    },
    {
        nome: "X-Tudo",
        preco: 320,
        ingredientes: ["Pão", "queijo", "hambúrguer", "salada", "tudo"]
    }
]

console.log("Nome: " + lanches[2].nome + " - Preço: R$ " + lanches[2].preco);
console.log("Ingrientes: " + lanches[2].ingredientes)