function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            return velocidadeAtual += delta
        } else {
            return velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

let uno = new Carro
//uno.acelerar()
console.log(uno.acelerar())
console.log(uno.acelerar())
//console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
//console.log(ferrari.getVelocidadeAtual())
