const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const prop in object1) {
      if (object1[prop] === object2[prop]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = eqObjects;