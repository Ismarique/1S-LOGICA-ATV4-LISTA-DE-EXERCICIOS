/* (10 pontos)()
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o
número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é
${variavel}`, se ser iguais uma frase: ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let n1 : number = parseInt(teclado(`digite um numero: `));
let n2 : number = parseInt(teclado(`digite outro numero: `));
let maior : number = 0
let menor : number = 0
let iguais : boolean = false

if (n1>n2){
 maior = n1
 menor = n2
}

if (n2>n1){
maior = n2
menor = n1
}

if (n1==n2){
iguais = true
}
        
if (iguais == true){
    console.log (`os numero ${n1} e ${n2} são iguais`)

}

if (iguais == false){
    console.log (`o numero ${maior} é maior que o numero ${menor}`)

}
    