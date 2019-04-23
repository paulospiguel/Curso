const soma = function(x, y){
    return x + y
}

let imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(4, 5)
imprimirResultado(8, 10, function(a, b){
   return (a * b) / b 
})
imprimirResultado(7, 91, (a, b) => (a * b) / Math.PI)

const Pessoa = {
    falar: function() {
      console.log("Opa...") 
    } 
    
}

Pessoa.falar()