const assertEqual = require('../index').assertEqual;
const countLetters = require('../index').countLetters;

const countedLetters = countLetters("Blaster StarfleEt chekov mccoy jabba");
assertEqual(countedLetters["b"], 3);
assertEqual(countedLetters["e"], 4);
assertEqual(countedLetters["l"], 2);