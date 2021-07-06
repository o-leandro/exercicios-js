function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 1499.50))
console.log(criarProduto('Geladeira', 3999,99))