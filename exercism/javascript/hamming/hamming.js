var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
    if (strand1.length != strand2.length) {
        throw Error('DNA strands must be of equal length.');
    }

    var distance = 0;

    for (var index in strand1) {
        if (strand1[index] != strand2[index]) {
            distance++;
        }
    }

    return distance;
};

module.exports = Hamming;