let av1 = 5.0;
let av2 = 6.0;
let rec1 = 7.0;
let rec2 = 3.0;
let nota1;
let nota2;
let total;
let media;

if(rec1 > av1){
    nota1 = rec1;
} else {
    nota1 = av1;
}

if(rec2 > av2){
    nota2 = rec2;
} else {
    nota2 = av2;
}

total = nota1 + nota2
media = total /2

if(media >= 6.0){
    console.log("Aluno aprovado! Sua média é: " + media);
} else {
    console.log("Aluno reprovado! Sua média é: " + media);
}
