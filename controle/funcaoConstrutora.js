function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let VelocidadeAtual = 0

    // metódo público
    this.acelerar = function () {
        if (VelocidadeAtual + delta <= velocidadeMaxima) {
            VelocidadeAtual += delta
        } else {
            VelocidadeAtual = VelocidadeAtual
        }
    }

    // metódo público
    this.getVelocidadeAtual = function () {
        return VelocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
