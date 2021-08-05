// Your code here

function mapToNegativize(source) {
    let ar = []
    for (let i = 0; i < source.length; i++) {
        ar.push(-1 * source[i])
    }
    return ar
}

function mapToNoChange(source) {
    let ar = []
    for (let i = 0; i < source.length; i++) {
        ar.push(source[i])
    }
    return ar
}

function mapToDouble(source) {
    let ar = []
    for (let i = 0; i < source.length; i++) {
        ar.push(2 * source[i])
    }
    return ar
}

function mapToSquare(source) {
    let ar = []
    for (let i = 0; i < source.length; i++) {
        ar.push(source[i] * source[i])
    }
  return ar
}

function reduceToTotal(source, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < source.length; i++) {
        total = total + source[i]
    }
    return total
}

function reduceToAllTrue(source) {
    for (let i = 0; i < source.length; i++) {
        if (!source[i]) return false
    }
    return true
}

function reduceToAnyTrue(source) {
    for (let i = 0; i < source.length; i ++) {
        if (source[i]) return true
    }
    return false
}