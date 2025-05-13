/* (5 pontos)()
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Ismael Henrique Cardoso dos Santos 
*/

const teclado = require(`prompt-sync`)();

let letra : string = (teclado (`escreva uma letra:`));

if (letra == `A`|| `E` || `I` || `O` || `U` ){
    console.log(`a letra é uma vogal`)

}else{
console.log(`a letra é uma consoante`)
}