
var lojaDeBrinquedos = [
    {
        nome: "Bola",
        descricao: "Bolas de diversas cores",
        imagem: "https://via.placeholder.com/150",
        valor: 10

    },
    {
        nome: "Bonecas",
        descricao: "Boneca da Xuxa, da Eliana, Barbie, Susi..",
        imagem: "https://via.placeholder.com/150",
        valor: 50

    },
    {
        nome: "Carrinho",
        descricao: "Diversos carrinhos",
        imagem: "https://via.placeholder.com/150",
        valor: 20

    },
    {
        nome: "Dinossauro",
        descricao: "Kit com os dinossauros mais legais",
        imagem: "https://via.placeholder.com/150",
        valor: 40

    },
    {
        nome: "Massinha",
        descricao: "Kit com diversas massinhas pra voce se divertir",
        imagem: "https://via.placeholder.com/150",
        valor: 15

    }

]

var conteudoPrincipal = document.getElementById('conteudo-principal')


for (var produto of lojaDeBrinquedos) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p2')
    precoProduto.textContent = `R$ ${produto.valor}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)



    conteudoPrincipal.appendChild(conteudoProduto)


}
