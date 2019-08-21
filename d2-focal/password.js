const getLetters = function() {
  return process.argv[2];
};

const obfuscate = function(letters) {
  let password = "";
  for (let i = 0; i < letters.length; i++) {
    let replaceLetter = letters.charAt(i);
    if (replaceLetter === "a") {
      replaceLetter = "4";
    } else if (replaceLetter === "e") {
      replaceLetter = "3";
    } else if (replaceLetter === "o") {
      replaceLetter = "0";
    } else if (replaceLetter === "l") {
      replaceLetter = "1";
    }
    password += replaceLetter;
  }
  return password;
};
console.log(obfuscate(getLetters()));