var RnaTranscription = function() {};
var codeMap = new Map([['C', 'G'], ['G', 'C'], ['A', 'U'], ['T', 'A']]);

RnaTranscription.prototype.toRna = function(strand) {
    return strand.split('').map(function(char) {
        return codeMap.get(char);
    }).join('');
};

module.exports = RnaTranscription;
