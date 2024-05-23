function saveData(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) 
            success("success data was saved");
        else
            failure("failure data was not saved");
    })
}
let request = saveData("Midas")
request.then((res) => {
    console.log("Promise was resolved", res)
    return saveData("hello world")
})
.then((res) => {
    console.log("Promise2 was resolved", res)
}).catch((err) => {
    console.error("Promise was rejected", err)

})