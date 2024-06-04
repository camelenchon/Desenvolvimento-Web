// Arrays/Lista/Vetores
// Arrays se assemelham com banco de dados
//Um array deve ser capaz de: adicionar, remover, busca/listar atualizar

var nome = 'Fulano' //variavel simples
var nomes = ['Miguel', 'Mateus', 'Monica'] // variavel composta(array)
//var idades = new Array()

console.log(nomes)
console.log(nomes[0]) // acessa a posicao 0 dos nomes - Miguel
console.log(nomes[1]) //  acessa a posicao 1 dos nomes - Mateus
console.log(nomes[2]) //  acessa a posicao 2 dos nomes - Monica

nomes.push('Davi', 'Fulano') //Adiciona elemento no array
console.log(nomes)

console.log(nomes.lenght) //tamanho do Array

nomes.pop() // por padrao remove o ultimo elemento do array

nomes.reverse() // inverte o array
console.log(nomes)

nomes.shift() // por padrao remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o array
console.log(nomes)

nomes.push('Mariazinha')
console.log(nomes)

nomes.reverse()
var posicaoMariazinha = nomes.indexOf('Mariazinha') // Busca por indice o elemento do parametros
console.log(posicaoMariazinha)
nomes.splice(nomes[2], 1) // primeiro paramento é a posicao do item a ser removido, o segundo parametro eh a quantidade de itens/elementos a ser excluido
console.log(nomes)

