function validarEmail(email) {
    let indexArroba = email.indexOf("@");
    
    if (indexArroba === -1) {
        return false
    }

    let indexPonto = email.indexOf('.', indexArroba)

    if (indexPonto === -1) {
        return false
    }

    return true
}

console.log(validarEmail("joao@gmail.com"))
console.log(validarEmail("joao@g"))
console.log(validarEmail("joao.com"))
