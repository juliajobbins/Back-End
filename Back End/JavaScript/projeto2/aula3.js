const celulares = [
    {nome: "Apple iPhone 11", preco: 2500, qualidade: "Vitrine"},
    {nome: "Motorola G53", preco: 1500, qualidade: "Novo"},
    {nome: "Samsung S23", preco: 2000, qualidade: "Bom"},
    {nome: "Apple iPhone 11", preco: 2300, qualidade: "Marcas de Uso"}
]

// encontrar um determinado elemento na lista

const celularEncontrado = celulares.find((celular) => celular.nome == "Apple iPhone 11")
console.log(celularEncontrado)

// encontrar vários elementos em uma lista

const celularFiltrado = celulares.filter((celular) => celular.nome == "Apple iPhone 11")
console.log(celularFiltrado)

// altera todos os elementos
const map = celulares.map((celular) => {
    return {
        ...celular,
        preco: celular.preco * 0.95
    }
})
console.log(map)

celulares.sort((a, b) => a.preco - b.preco)
console.log(celulares)