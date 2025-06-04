const carros = ["Uno", "Fusca", "Civic", "Onix", "Mobi"]
console.log(carros)

carros.push("Kwid")

// Funções Callback de listas

// forEach -> percorre cada elemento da lista

carros.forEach((carro) => console.log(carro))

// map -> altera todos os elementos da lista

const carrosAlterado = carros.map((carro) => carro.toUpperCase())
console.log(carrosAlterado)