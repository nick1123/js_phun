const letters = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
  if(typeof key === "undefined") {
    this.key = randomKey();
  } else {
    this.key = key;
  }

  if(this.key === '' || this.key !== this.key.toLowerCase() || this.key.replace(/[a-z]+/, '').length > 0) {
    throw("Bad key");
  }
};

function randomKey() {
  var key = ''
  for (var i = 0; i < 102; i++) {
    key += randomLetter();
  }

  return key;
}

function randomLetter() {
  return letters.charAt(Math.floor(Math.random() * letters.length))
}

Cipher.prototype.encode = function(message) {
  var new_message = ''
  var length = message.length
  for (var index = 0; index < length; index++) {
    new_message += String.fromCharCode((((message.charCodeAt(index) - 97) + (this.keyCharCodeAt(index) - 97)) % 26) + 97)
  }

  return new_message;
}

Cipher.prototype.decode = function(message) {
  var new_message = ''
  var length = message.length
  for (var index = 0; index < length; index++) {
    new_message += String.fromCharCode((((message.charCodeAt(index) - 97) - (this.keyCharCodeAt(index) - 97) + 26) % 26) + 97)
  }

  return new_message;
}

Cipher.prototype.keyCharCodeAt = function(index) {
  return this.key.charCodeAt(index % this.key.length)
}

module.exports = { Cipher };
