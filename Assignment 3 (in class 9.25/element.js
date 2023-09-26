function removeInstancesFromArray(arr, value) {
    const newArray = arr.filter((element) => element !== value);
    return newArray;
  }
  const originalArray = [3, 8, 12, 15, 16, 8, 19, 8];
  const valueToRemove = 8;
  const filteredArray = removeInstancesFromArray(originalArray, valueToRemove);
  console.log(filteredArray);