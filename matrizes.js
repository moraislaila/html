let estoque = [
            ["televisão", 100, 1250, "eletrodomesticos"] 
            ["mouse", 50, 30, "perifericos"]
            ["teclado", 20, 50, "perifericos"]
]

console.log( estoque [2][0]) // primeiro linha depois coluna

// trocando os valores
estoque[2][2] = 70
console.log(estoque)

// analisando a linha da televisão
console.log("produto: ", estoque[0])

console.log("numero de linhas matrizes", estoque.length)
console.log("numero de colunas da matriz:", estoque[0].length)


//percorrendo uma matriz
for (let i = 0; i < estoque.length; i++){
    for(let j = 0; j < estoque [0].length; j++){
        console.log(`elemento na posição [${i}][${j}]`)
    }
}