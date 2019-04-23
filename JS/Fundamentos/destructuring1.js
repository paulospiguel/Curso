//Destrututar dados aninhados
//Novo recurso - Extrai o valor de dentro de array ou objeto
//Crinado variáveis com seus identificadores

const pessoa = {
    nome: "Ana Maria",
    idade: 20,
    sexo: "Feminino",
    endereco: {
        logradouro: "Rua Brasil",
        numero: 1021,
        cidade: "Centenario do Sul"
    }

}

const {nome, idade} = pessoa
console.log(nome, idade)

//Extraindo atributo do objeto e criando variáveis nele.
const {nome: n, idade: i} = pessoa
console.log(n, i)

//Extraindo o valor de dentro de um objeto dentro de outro objeto
const {endereco: {logradouro, numero, cidade, cep}} = pessoa
console.log(logradouro, numero, cidade, cep)





