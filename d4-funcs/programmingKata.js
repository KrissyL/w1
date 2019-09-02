const repeatNumbers = function(arr) {
  let result = [];
  for (const array of arr) {
    if (Array.isArray(array)) {
      for (let i = 0; i < array[1]; i++) {
        result.push(array[0]);
      }
    }
  }
  return `${result}`;
};
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));