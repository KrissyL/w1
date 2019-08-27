const assertEqual = require('../index').assertEqual;

const eqObjects = require('../index').eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, dc), false);
assertEqual(eqObjects(cd, ba), false);