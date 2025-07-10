/*
let nome = prompt("digite seu nome")
let senha = Number(prompt("digite sua senha"))

while(senha!="3456" && nome!="nome"){
    alert("sua senha está inválida, digite novamente")

    nome = prompt("digite seu nome")
    senha = Number(prompt("digite sua senha"))
   console.log(senha)
}
alert("bem vindo! " + (nome))
*/

 let contador = 0
while(true){
let login = prompt("digite seu login:")
let senha = prompt("digite sua senha:")

if( login === "admin" && senha === "123456"){
  alert(`bem vindo ${login}`)
  break;
}
  else {
  contador = contador + 1;
   alert("credenciais invalidas, tente novamente")
  }
   if (contador ===3)
   alert("conta bloqueada, entre em contato com o suporte tecnico do senai")
}