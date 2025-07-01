/*
////////////////////////////////////////////////////////////////
  _      ______ _____                     ____  _    _ _____ 
 | |    |  ____|_   _|   /\         /\   / __ \| |  | |_   _|
 | |    | |__    | |    /  \       /  \ | |  | | |  | | | |  
 | |    |  __|   | |   / /\ \     / /\ \| |  | | |  | | | |  
 | |____| |____ _| |_ / ____ \   / ____ \ |__| | |__| |_| |_ 
 |______|______|_____/_/    \_\ /_/    \_\___\_\\____/|_____|
                                                             
 ////////////////////////////////////////////////////////////////

INSTRUÇÕES PARA AS ATIVIDADES

Ao pedir números vindo de um prompt, utilize Number() antes, e insira o prompt dentro dos parênteses. Por Exemplo:

exemplo = Number(prompt("Digite um número como exemplo:"))

Rode um código por vez. Quando testar e estiver tudo certo,
comente o código igual essas questões, utilizando /* e */




/*
1. Classificação Etária
Contexto: Um cartógrafo precisa classificar uma pessoa por faixa etária.

Instrução: Solicite ao usuário a idade e informe a faixa etária correspondente.

Saídas Possíveis:
  "Você é uma criança."
  "Você é um adolescente."
  "Você é um adulto."
  "Você é um idoso."

EXIBA NO CONSOLE COM console.log
*/
console.log("\n Exercício 1 \n")

let idade = Number (prompt("digite sua idade"))
if(idade<=12){
  alert("você é uma criança")
}

else if(idade<17 && idade>12){
  alert ("você é um adolescente")
}

else if(idade<59 && idade>18){
  alert("você é um adulto")
}

else {
  alert("você é um idoso")
}

/*
2. Cálculo de Média
Contexto: Um usuário precisa calcular a média de três notas.

Instrução: Solicite ao usuário três notas e calcule a média.

EXIBA NO CONSOLE COM console.log

*/
console.log("\n Exercício 2 \n")
let media 

let nota1= Number(prompt("digite sua nota1: "))
let nota2= Number(prompt("digite sua nota 2: "))
let nota3= Number(prompt("digite sua nota3: "))
alert("sua media é: "+ ((nota1+nota2+nota3)/3))





/*
3. Soma de Números
Contexto: Um enigma requer a soma de uma sequência de números.

Instrução: Solicite ao usuário um número `n` e calcule a soma de todos os números de 1 até `n`.

EXIBA NO CONSOLE COM console.log

*/
console.log("\n Exercício 3 \n")

let enigma= Number(prompt("digite sua sequencia"))
let soma = 0
for(let num = 1; num<= enigma; num++){
  soma = soma + num
}
  alert(" a soma da sua sequencia é igual a " + (soma) )




/*
4. Tabuada
Contexto: Um usuário precisa calcular a tabuada de um número.

Instrução: Solicite ao usuário um número e exiba a tabuada desse número de 1 até ele mesmo.

Exemplo: Se o número que o usuário informou foi 5:

EXIBA ASSIM NO CONSOLE COM console.log

Tabuada de 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25

*/

console.log("\n Exercício 4 \n")

let numero = Number(prompt("digite sua multiplicação"))
for(let contador=1; contador<= numero; contador++) {
}
alert("o valor da sua multiplicação é "+ (contador*numero))




