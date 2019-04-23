console.log(Math.ceil(6.1))
//acesso ou cria membros em uma função ou objeto.

const obj1 = {}
obj1.nome = "Paulo Spiguel"

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome

    this.exec = function(){
        console.log("Executando...")
    }

}

const Obj2 = new Obj("Livia Spiguel")
const Obj3 = new Obj('mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)

Obj3.exec()


