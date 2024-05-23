let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         // if(nextColor) nextColor();
//     }, delay)
// }

// changeColor("red" , 1000, () => {
//     changeColor("yellow", 2000, () => {
//         changeColor("green" , 3000, () => {
//             changeColor("blue" , 4000, () => {
//                 changeColor("orange", 5000, () => {
//                 })
//             })
//         })
//     })
// });

// changeColor("red", 1000)
// changeColor("blue", 2000)
// changeColor("yellow", 3000)
// changeColor("green", 4000)
// changeColor("oranges", 5000)

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay)
    })
}

changeColor("red", 1000)
.then((data) => {
    console.log("color changed in red", data);
    return changeColor("yellow", 2000)
})
.then((data) => {
    console.log("color changed in yellow", data);
    return changeColor("green", 3000)
})
.then((data) => {
    console.log("color changed in green", data);
})
.catch((err) => {
    console.error(err);
})