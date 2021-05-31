// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Leandro',
    idade: 24,
    peso: 60,
    endereco: {
        logradouro: 'Rua Nova',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)