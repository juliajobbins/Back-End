/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica

let nome = "Julia Fernanda Jobbins";
let numero = 15;

// 2) Criação de uma lista

let jogos = ["Roblox", "GTA V", "Minecraft"];

// 3) Utilização de um laço while

console.log("##### Exercício 3 #####")
console.log(`----- Jogos favoritos da ${nome} -----`)
let indice = 0;
while(indice < jogos.length){
    console.log(`Jogo ${indice + 1}: ${jogos[indice]}`);
    indice++;
}


// 4) Criação de um objeto

let animefav = {
    nomepessoa: nome,
    nomeanime: "Attack on Titan",
    anolancamento: 2013,
    notaIMDb: 9.1
}

// 5) Utilização de if-else

console.log("##### Exercício 5 #####")
if(animefav.notaIMDb <= 4.0){
    console.log("O anime possui uma nota considerada baixa.")
}else if(animefav.notaIMDb >= 4.1 && animefav.notaIMDb <= 7.0){
    console.log("O anime possui uma nota considerada razoável")
}else if(animefav.notaIMDb > 7.0){
    console.log("O anime é muito bom!")
}

// 6) Criação de uma função que analisa os dados da previsão do tempo

console.log("##### Exercício 6 #####")
const previsaoTempo = [
    {
        dia: "Segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "Terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "Quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "Quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "Sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]
function verificaChuva(previsaoTempo){
    previsaoTempo.forEach(
        function(dia){
        if(dia.chanceDeChuva > 50){
            console.log(`${dia.dia}: levar guarda-chuva`)
        } else {
            console.log(`${dia.dia}: tempo agradável`)
        }
    })
}

verificaChuva(previsaoTempo);
