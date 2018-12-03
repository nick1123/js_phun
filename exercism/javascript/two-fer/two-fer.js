function twoFer(name) {
  if(name.length == 0) {
    return 'One for you, one for me.';
  } else {
    return `One for ${name}, one for me.` 
  }
}

module.exports = { twoFer };
