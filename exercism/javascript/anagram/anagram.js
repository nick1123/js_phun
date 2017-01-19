var Anagram = function(baseWord) {
    this.baseWord = baseWord.toLowerCase();
    this.baseWordTransformed = transform(baseWord);
};

function transform(word) {
	// alphabetizer e.g. Zip => ipz
	return word.toLowerCase().split("").sort().join('');
}

Anagram.prototype.matches = function(words) {
	const wordsArray = Array.prototype.concat.apply([], arguments);
	const baseWord = this.baseWord;
	const baseWordTransformed = this.baseWordTransformed;
	return wordsArray.filter(function(word) {
    	return transform(word) == baseWordTransformed && word.toLowerCase() != baseWord;
    });
};

module.exports = Anagram;
