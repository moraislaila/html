
let pessoas = []
let num = Number(prompt("quantas alturas voce vai cadastrar?"))

let soma = 0
for( let i = 0; i< num; i++){
    let altura = Number(prompt(`qual a ${i+1} sua altura`))
    soma = soma + altura
    pessoas[i] = altura
}
let media = soma / num

alert(`sua media é igual a ${media}`)
