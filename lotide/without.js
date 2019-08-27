const without = function(source, remItems) {
  for (const items of remItems) {
    for (const [index, rem] of source.entries()) {
      if (items === rem) {
        source.splice(index, 1);
      }
    }
  }
  return source;
};

module.exports = without;