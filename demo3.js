function completeTheTask(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Operation is completed')
        }, 3000)
    })
}

completeTheTask()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err)
    })