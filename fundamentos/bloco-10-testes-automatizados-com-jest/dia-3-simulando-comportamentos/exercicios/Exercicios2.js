function uppercaseString(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  const splitedString = string.split('');
  return splitedString[0];
}

function concatString(string1, string2) {
  return string1 + string2;
}

module.exports = {
  uppercaseString,
  firstLetter,
  concatString,
}