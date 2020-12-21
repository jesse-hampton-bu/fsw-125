// sum = (a, b) => a + b
// diff = (a, b) => a - b
// aggr = (a, b) => a * b
// split = (a, b) => a / b


// module.exports = {sum, diff, aggr, split}

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

module.exports = { add, sub, mult, div}