const numDice = function() {
  return process.argv.slice(2);
};

const diceRoll = function(numRolls) {
  let roll = [];
  for (let count = 0; count < numRolls; count++) {
    roll[count] = Math.floor((Math.random() * 6) + 1);
  }
  return roll;
    
};
const numRolls = numDice();
console.log(`Rolled ${numRolls} dice: ${diceRoll(numRolls)}`);