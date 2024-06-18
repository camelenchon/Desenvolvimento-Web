function imprimirNome(pessoa){

    console.log(pessoa.nome)
}

var pessoa = {
    nome: 'Fulano'
}

imprimirNome(pessoa)



// --------


 let nome = 'Fulano'  //global - esta dentro do escopo GLOBAL
 let  cpf = '12345665879'
 console.log(cpf)

 
if (nome == 'Fulano'){
   let sobrenome = 'Teste' // local - esta dentro do VAR
 console.log(sobrenome) 
}
for (let index = 0; index < 1; index++) {
    let nome2 = 'dolinho';
}
console.log(nome2)

