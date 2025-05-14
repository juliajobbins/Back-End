/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica

let nome = "Julia Fernanda Jobbins";
let numero = 15;
console.log("O nome é: " + nome + "\nO número na chamada é: " + numero);
// 2) Criação de uma lista

let jogos = ["Roblox", "GTA V", "Minecraft"];

// 3) Utilização de um laço while

console.log("----- Jogos favoritos da Julia -----")
let indice = 0;
while(indice < jogos.length){
    console.log("Jogo " + (indice + 1)+ ": " + jogos[indice]);
    indice++;
}


// 4) Criação de um objeto

let animefav = {
    nomepessoa: nome,
    nomeanime: "Attack on Titan",
    anolancamento: 2013,
    notaIMDB: 9.1
}
console.log("Nome da pessoa: " + animefav.nomepessoa);
console.log("Anime: " + animefav.nomeanime);
console.log("Ano de lançamento: " + animefav.anolancamento);
console.log("Nota no IMDB: " + animefav.notaIMDB);
// 5) Utilização de if-else

if(animefav.notaIMDB <= 4.0){
    console.log("O anime possui uma nota considerada baixa.")
}else if(animefav.notaIMDB >= 4.1 && animefav.notaIMDB <= 7.0){
    console.log("O anime possui uma nota considerada razoável")
}else if(animefav.notaIMDB > 7.0){
    console.log("O anime é muito bom!")
}

// 6) Criação de uma função que analisa os dados da previsão do tempo
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
            console.log(dia.dia + ": levar guarda-chuva");
        } else {
            console.log(dia.dia +": tempo agradável");
        }
    })
}

verificaChuva(previsaoTempo);
