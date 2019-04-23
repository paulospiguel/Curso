let valor = a => 2 * a + a

//console.log(valor(10))

//AROW FUNCTION
function Pessoas() {
    this.num = 0

    setInterval(function () {
        this.num++
        console.log(this.num)
    }.bind(this), 1000)
}

//new Pessoas

//arrow 2 nao varia
function Pessoa2() {
    this.num = 0
    setInterval(() =>{
        this.num++
        console.log(this.num)
    } , 1000)
}

//new Pessoa2

//FUNÇÃO ARROW 3
let comparafuncao = function(param){
    console.log(this === param)
}




