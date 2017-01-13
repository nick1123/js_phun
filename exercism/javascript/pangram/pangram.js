var Pangram = function(sentence) {
	this.sentence = sentence;
};

function sanitize(sentence) {
    return sentence
        .toLowerCase()
        .replace(/[^a-z]/g, '')
};

function countOfUniqueLetters(sentence) {
	letters = {};
	for(letter of sentence.split('')) {
		letters[letter] = true
	}

	return Object.keys(letters).length;
};

Pangram.prototype.isPangram = function() {
	return countOfUniqueLetters(sanitize(this.sentence)) == 26
};

module.exports = Pangram;
