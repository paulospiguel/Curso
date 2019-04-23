let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //O uso de !!(não não) representa a conversão de expressão para verdadeiro ou falso

//Situação que são verdadeiro e falso 
console.log('os verdadeiros....')
console.log(!!3) //Todo número inteiro é considerado true, exceto o 0
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar....')
console.log(!!('' || null || 0 || ' '))

console.log('Exemplos...')
let nome = 'Roberto'
console.log(nome || 'descolhecido') //Expressao simples de valor padrao de uma variável

