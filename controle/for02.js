const notas = [10, 4.5, 7.5, 9.5]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Santos',
    idade: 24,
    peso: 65
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}