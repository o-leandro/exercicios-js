// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Notebook'
produto['marca do notebook'] = 'Generica'
produto.preco = 3000

console.log(produto)
delete produto.preco
delete produto['marca do notebook']
console.log(produto)

const carro = {
    nome: 'Virtus',
    preco: 85000,
    proprietario: {
        nome: 'Leandro',
        idade: 24,
            endereco: {
                rua: 'Nova',
                numero: 850
            }
    },
    condutores: [{
        nome: 'Dilma',
        idade: 46
    }, {
        nome: 'Jane',
        idade: 45
    }],
    calcularSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['rua'] = 'Av. São Sebastião'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)