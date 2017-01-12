var Words = function() {};

function split(words) {
    return words
        .trim()
        .replace(/\!|\&|@|\$|%|:|\^|\.|\¡|¿|\?/g, '')
        .toLowerCase()
        .split(/\s+|,/);
}

Words.prototype.count = function(words) {
    const wordsMap = {}

    for(word of split(words)) {
        // Remove first/last quote from word
        wordModified = word.replace(/^'|'$/g, '')

        // console.log(word_modified)
        if (!wordsMap.hasOwnProperty(wordModified)) {
            wordsMap[wordModified] = 0;
        }

        wordsMap[wordModified]++;
    }

    return wordsMap;
};

module.exports = Words;
