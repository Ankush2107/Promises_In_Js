function first(b) {
    const a = 10
    return a + b + 10
}

function second(x) {
    const y = 3;
    return first(x * y)
}

const third = second(8)
console.log(third);