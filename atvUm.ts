/* (5 pontos)()
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI
é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize
a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:Ismael Henrique Cardoso dos Santos 
*/
const teclado = require(`prompt-sync`)();
let Pi : number = 3.14159
let raio : number = parseInt(teclado (`escreva o valor do raio:`))
let altura : number = parseInt(teclado (`escreva o valor da altura:`))
let volume : number = Pi*raio*raio*altura;
console.log (`o volume do cilindro é ${volume}`);