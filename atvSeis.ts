/* (15 pontos)()
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é
a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a
seguinte tabela:
A - nota=&gt;8,5 nota=&lt;10
B - nota=&gt;7 nota&lt;8,5
C - nota=&gt;5 nota&lt;7
D - nota=&gt;3 nota&lt;5
E - nota&gt;3
Nome Aluno:Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let n1 : number = parseInt(teclado(`escreva a nota do aluno: `)) 
let n2 : number = parseInt(teclado(`escreva a nota do aluno: `)) 
let media : number = (n1+n2)/2

if (media < 3){

console.log (`nota E`)

}

if (media >= 3 && media < 5 ){

    console.log (`nota D`)
    
    }

    if (media >= 5 && media < 7 ){

        console.log (`nota C`)
        
        }

        if (media >=7  && media < 8.5 ){

            console.log (`nota B`)
            
            }

            if (media >=8.5  && media <= 10 ){

                console.log (`nota A`)
                
                }