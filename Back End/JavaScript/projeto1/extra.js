// 1)
console.log("")

let numero = 5;
console.log("----- Tabuada do " + numero + ": -----");
for (let num = 1; num <= 10; num++){
    console.log(numero + " X " + num + " = " + numero * num)
}

console.log("")
// 2)
let idades = [10, 35, 15, 20, 27, 17, 18, 54, 65, 12]
let total = idades.length;
let maioresde18 = 0;

for (let i = 0; i < total; i++){
    if(idades[i] >= 18){
        maioresde18++
    }
}

let porcentagem = (maioresde18 / total) * 100;
console.log("Porcentagem de pessoas maiores que 18: " + porcentagem.toFixed(2) + "%")

console.log("")
// 3)

let tamanho_quadrado = 5;
console.log("Quadrado de tamanho " + tamanho_quadrado + "X" + tamanho_quadrado + ":\n")
for (let i = 0; i < tamanho_quadrado; i++){
    let linha = " ";
    for(let aa = 0; aa < tamanho_quadrado; aa++){
        linha += "* "
    }
    console.log(linha)
}

console.log("")

// 4)
let tamanho_triangulo = 5;
console.log("Triângulo de altura " + tamanho_triangulo + "X" + tamanho_triangulo + ":\n")
for (let i = 1; i <= tamanho_triangulo; i++){
    let linha = "";
    for(let aa = 0; aa < i; aa++){
        linha += "* "
    }
    console.log(linha)
}

console.log("")
