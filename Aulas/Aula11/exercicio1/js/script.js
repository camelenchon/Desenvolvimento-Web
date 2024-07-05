let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let botao = document.getElementById('btn-calcular')



console.log(inputValorBruto)
console.log(inputValorLiquido)
console.log(botao)
let taxa = 200
botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    inputValorLiquido.value = valorBruto - taxa
})