function reverseString(string) {
  let newString = '';
  for(var i=string.length - 1; i>=0; i--) {
    newString += string.charAt(i);
  }

  return newString;
}

module.exports = { reverseString };