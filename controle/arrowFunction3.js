let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisThisArrow = param => console.log(this === param)
comparaComThisThisArrow(global)
comparaComThisThisArrow(module.exports)

comparaComThisThisArrow = comparaComThisThisArrow.bind(obj)
comparaComThisThisArrow(obj)
comparaComThisThisArrow(module.exports)