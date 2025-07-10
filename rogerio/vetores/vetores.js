let numeros = []

let nomes = ["ana", "bruno", "carlos", "leandro", "maria"]

console.log(nomes[1])

//trocando carlos por zeca
nomes[2]= "zeca"
console.log(nomes)

for(let i=0; i < nomes.length ; i++){
    if(nomes[i]=== "leandro"){
        console.log(`leandro foi encontrado no indice ${i}`)
    }
}
// função
function encontrar(nomes, lista) {
    for(let i=0; i < lista.length ; i++){
        if(lista[i]=== nomes){
           returni;
        }
    }
    return-1

}
const indice = encontrar("bruna", nomes)

if (indice === -1){
    console.log("usuario não existe na base de dados")
}


else {
    console.log(`${nomes[indice]} encontrado na posição ${indice}`)
}


/*
encontrar("maria", nomes)
encontrar("carlos", nomes)
encontrar("ana", nomes)
*/

