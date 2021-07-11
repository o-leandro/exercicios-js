//pessoa -> 123 -> {...}
const pessoa = { nome: 'Leandrp' }
pessoa.nome = 'Santos'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Costa' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Ana' })
pessoaConstante.nome = 'Fernanda'
console.log(pessoaConstante)