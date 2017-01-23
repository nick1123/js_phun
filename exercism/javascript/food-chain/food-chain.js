var FoodChain = function() {};

FoodChain.prototype.verse = function(n) {
    if (n == 8) {
        return 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n';
    }

    const openingLines = [
        'I know an old lady who swallowed a fly.\n',
        'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n',
        'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n',
        'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n',
        'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n',
        'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n',
        'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\n'
    ];

    const song = [
        'She swallowed the cow to catch the goat.\n',
        'She swallowed the goat to catch the dog.\n',
        'She swallowed the dog to catch the cat.\n',
        'She swallowed the cat to catch the bird.\n',
        'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
        'She swallowed the spider to catch the fly.\n',
        'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    ];

    return openingLines[n - 1] + song.reverse().slice(0, n).reverse().join('');
};

FoodChain.prototype.verses = function(first, last) {
    let arr = [];
    for(i = first; i <= last; i++) {
        arr.push(FoodChain.prototype.verse(i));
    }

    return arr.join('\n') + '\n';
};

module.exports = FoodChain;
