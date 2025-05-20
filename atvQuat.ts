/* (5 pontos)()
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();
let n1 : number = parseInt(teclado(`euscreva um numero: `))
let n2 : number = parseInt(teclado(`euscreva um numero: `))
let n3 : number = parseInt(teclado(`euscreva um numero: `))
let nMaior : number = 0
let nMeio : number =  0
let nMenor : number = 0


if (n1>n2 && n1>n3){
nMaior =+ n1;
}
if (n2>n1 && n2>n3){
nMaior =+ n2;
}
if (n3>n2 && n3>n2){
nMaior =+ n3;
}


if (n1<n2 && n1<n3){
    nMenor =+ n1;
    }
    if (n2<n1 && n2<n3){
    nMenor =+ n2;
    }
    if (n3<n2 && n3<n2){
    nMenor =+ n3;
    }
    

    if (n1<n2 && n1>n3){
        nMeio =+ n1;
        }
        if (n2<n1 && n2>n3){
        nMeio =+ n2;
        }
        if (n3<n2 && n3>n2){
        nMeio =+ n3;
        }


        if (n1>n2 && n1<n3){
            nMeio =+ n1;
            }
            if (n2>n1 && n2<n3){
            nMeio =+ n2;
            }
            if (n3>n2 && n3<n2){
            nMeio =+ n3;
            }


console.log (`a oreden é ${nMenor},${nMeio},${nMaior}`);