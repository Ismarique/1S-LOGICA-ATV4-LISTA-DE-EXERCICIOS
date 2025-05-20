/* (10 pontos)()
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Ismael Henrique Cardoso dos Santos
E-mail: ismael.h.santos6@aluno.senai.br
*/

const teclado = require(`prompt-sync`)();
let anguloUm : number = parseInt(teclado(`escreva o angulo: `))
let anguloDos : number = parseInt(teclado(`escreva o angulo: `))
let anguloTres : number = parseInt(teclado(`escreva o angulo: `))

let somaAngu : number = (anguloUm+anguloDos+anguloTres)

if(somaAngu == 180){

if(anguloUm == 90 || anguloDos == 90 || anguloTres == 90){

console.log(`é um Triângulo Retângulo`)

}

if(anguloUm > 90 || anguloDos > 90 || anguloTres > 90){

    console.log(`é um Triângulo Obtusângulo`)
    
    }
    
    if(anguloUm < 90 && anguloDos < 90 && anguloTres < 90){

        console.log(`é um Triângulo Acutângulo`)
        
        }
    
}else{
console.log(`isso não é um triangulo`)
}
