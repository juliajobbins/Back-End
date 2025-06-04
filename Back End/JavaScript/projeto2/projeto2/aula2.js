const listaNumeros = [20, 50, 100, 10, 30];
const listaStrings = ["abaCaXi", "uva", "laranja", "banana"];
console.log(listaNumeros);
console.log(listaStrings);

// Ordenando uma lista

const frutasOrdenadas = listaStrings.sort();
console.log(frutasOrdenadas);

const numOrdenado = listaNumeros.sort((a, b) => {
    if(a < b) {
        return - 1;
    }
    if (a > b) {
        return 1;
    }
    return 0
});
console.log(numOrdenado);