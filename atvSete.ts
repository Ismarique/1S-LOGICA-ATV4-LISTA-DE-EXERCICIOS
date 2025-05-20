/* (10 pontos)()
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno: Ismael Henrique Cardoso dos Santos
E-mail: ismael.h.santos6@aluno.senai.br
*/
const teclado = require(`prompt-sync`)();

let quantMaca : number = parseInt(teclado(`digite a quantidade de maça: `))
let presso : number = 0.30

if (quantMaca>=12){
presso = 0.25
}

let pressoT : number = (quantMaca * presso)

console.log(`o preço das maças é ${pressoT}`)