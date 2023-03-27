/*validate*/
function getInCorrect(msg) {
    return msg
}

function getIsEmpty(value, name) {
    return value === "" ? getInCorrect(name + " can not blank") : ""
}

function getNumber(value, name) {
    return value == Number(value) ? "" : getInCorrect(name + " has to number")
}

function getNumberInteger(value, name) {
    return Number.isInteger(+value) ? "" : getInCorrect(name + " has to number integer")
}

function getBigger(value, name, bigger) {
    return +value >= bigger ? "" : getInCorrect(name + " has to bigger than " + bigger)
}

function getLower(value, name, lower) {
    return +value <= lower ? "" : getInCorrect(name + " has to lower than " + lower)
}

function getMultiNumber(value, name) {
    let valueAo = getIsEmpty(value, name)
    return valueAo == "" ? getNumber(value, name) : valueAo
}

function getMultiNumberBigger(value, name, bigger) {
    let valueAo = getMultiNumber(value, name)
    return valueAo == "" ? getBigger(value, name, bigger) : valueAo
}

function getMultiNumberBiggerLower(value, name, bigger, lower) {
    let valueAo = getMultiNumberBigger(value, name, bigger)
    return valueAo == "" ? getLower(value, name, lower) : valueAo
}

function getMultiNumberInteger(value, name) {
    let valueAo = getMultiNumber(value, name)
    return valueAo == "" ? getNumberInteger(value, name) : valueAo
}

function getMultiNumberIntegerBigger(value, name, bigger) {
    let valueAo = getMultiNumberInteger(value, name)
    return valueAo == "" ? getBigger(value, name, bigger) : valueAo
}

function getMultiNumberIntegerBiggerLower(value, name, bigger, lower) {
    let valueAo = getMultiNumberIntegerBigger(value, name, bigger)
    return valueAo == "" ? getLower(value, name, lower) : valueAo
}

function getMinLength(value, name, min) {
    return value.length >= min ? "" : getInCorrect(name + " has to input bigger " + min + " characters")
}

function getMaxLength(value, name, max) {
    return value.length <= max ? "" : getInCorrect(name + " has to input lower " + max + " characters")
}

function getMultiMinLength(value, name, min) {
    let valueAo = getIsEmpty(value, name)
    return valueAo == "" ? getMinLength(value, name, min) : valueAo
}

function getMultiMinMaxLength(value, name, min, max) {
    let valueAo = getMultiMinLength(value, name, min)
    return valueAo == "" ? getMaxLength(value, name, max) : valueAo
}


