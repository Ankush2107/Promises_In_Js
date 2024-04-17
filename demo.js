// let x = 10
// let y = 20

// setTimeout(() => {
//     y = 100
// }, 2000)

// console.log(x + y);


// Now using promises to do this task
let x = 10
let y = 20

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
    }, 2000)
})

.then((data) => {
    let b = data

    console.log(x + b)
})