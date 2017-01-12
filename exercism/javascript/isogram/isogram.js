var Isogram = function(word) {
	this.word = word;
};

function split(word) {
    return word
        .toLowerCase()
        .replace(/\-|\s+/g, '')
        .split('')
}

Isogram.prototype.isIsogram = function() {
    const lettersMap = {}

    for(letter of split(this.word)) {
        if (lettersMap.hasOwnProperty(letter)) {
            return false;
        }

        lettersMap[letter] = true;
	}

    return true;
};

module.exports = Isogram;
