const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(5)
imprimirNota(2)
imprimirNota(11)