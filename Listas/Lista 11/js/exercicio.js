let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let inputValorIr = document.getElementById('valor-ir')
let botao = document.getElementById('btn-calcular')
let taxa = 15

console.log(inputValorBruto)
console.log(inputValorIr)
console.log(botao)


botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    let valorIr = Number(valorBruto * taxa / 100)
    inputValorLiquido.value = valorBruto - valorIr
    inputValorIr.value = valorIr
})

botao.addEventListener('click', () =>{
    botao.classList.add('animacao-botao')
})