const middle = function(array) {
  let arrResult = [];
  const halfArray = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      arrResult.push(array[halfArray - 1]);
      arrResult.push(array[halfArray]);
    } else {
      arrResult.push(array[Math.floor(halfArray)]);
    }
  }
  return arrResult;
};

module.exports = middle;