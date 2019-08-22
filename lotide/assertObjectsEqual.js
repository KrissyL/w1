const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const prop in obj1) {
      if (obj1[prop] === obj2[prop]) {
        return true;
      } else {
        return false;
      }
    }
  }
};
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✔️ Assertion Passed: ${inspect(obj1)} & ${inspect(obj2)} are equal!`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(obj1)} & ${inspect(obj2)} are not equal!`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba, true); //true
assertObjectsEqual(abc, cd, false); //false
assertObjectsEqual(dc, cd2, false); //false