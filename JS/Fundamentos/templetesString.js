/**
 * TEMPLETE É UTILIZADO PARA PASSAR VALOR DENTRO DE UMA STRING ATRAVES DE VARIAVEIS POR: ${variavel}.
 */


let nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const templete = `
        Olá 
            ${nome}!` //Utilização de templetes

console.log(concatenacao, templete)

//expressões
console.log(`1 + 1 =  ${1 + 1}`)

//Uso simples da função Erol
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
