//your JS code here. If required.
function processData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArray = array.filter(num => num % 2 === 0);
        document.getElementById('output').textContent = JSON.stringify(filteredArray);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedArray = filteredArray.map(num => num * 2);
        document.getElementById('output').textContent = JSON.stringify(multipliedArray);
        resolve(multipliedArray);
      }, 2000);
    });
  });
}

const inputArray = [1, 2, 3, 4];

processData(inputArray)
  .then((finalArray) => {
    console.log('Final Result:', finalArray);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
