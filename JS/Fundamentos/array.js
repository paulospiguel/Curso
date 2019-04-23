const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Chamando um valor de arrey não existente


valores[4] = 10 //atribuindo valor a um novo item do array
console.log(valores)

console.log(valores.length) //Contando quantidade de itens do array

valores.push({id: 3}, false, null, 'teste') //Adicionando elemento a um array 
console.log(valores)

console.log(valores.pop()) //remover o ultimo valor de um array
delete valores[0] //Delete um item do array por indece
console.log(valores)

console.log(typeof valores) //Array em JS é um Objeto