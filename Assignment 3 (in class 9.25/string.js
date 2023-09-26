function findStringIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1; 
  }

  const myArray = ["Jeff", "Mark", "Lando", "Ethan"];
  const searchString = "Mark";
  const index = findStringIndex(myArray, searchString);
  
  if (index !== -1) {
    console.log(`The index of '${searchString}' is ${index}`);
  } else {
    console.log("-1");
  }