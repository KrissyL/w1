const assertEqual = require('../index').assertEqual;
const findKey = require('../index').findKey;

const someObj = {
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
};

assertEqual(findKey(someObj, x => x.stars === 2), "noma");