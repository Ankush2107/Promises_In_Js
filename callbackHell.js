function saveData(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) success();
  else failure();
}

saveData(
  "Midas",
  () => {
    console.log("Success: Your data was saved");
    saveData(
      "Mist",
      () => {
        console.log("Success2: Your data2 was saved");
        saveData("Tatyapara", () => {
            console.log("Success3: Your data3 was saved");
        }, () => {
            console.log("Failure3: Weak connection, data3 not saved");
        })
      },
      () => {
        console.log("Failure2: Weak connection, data2 not saved");
      }
    );
  },
  () => {
    console.log("Failure: Weak connection, data not saved");
  }
);
