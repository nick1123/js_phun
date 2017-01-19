var BeerSong = function() {};

function verse(bottles) {
    if (bottles == 0) {
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }

    if (bottles == 1) {
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    }
    if (bottles == 2) {
        return `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;
    }

    return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\nTake one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`;

}

BeerSong.prototype.verse = function(bottles) {
    return verse(bottles);
};

BeerSong.prototype.sing = function(max, min=0) {
    song = [];
    for (i = max; i >= min; i--) {
        song.push(verse(i));
    }

    return song.join("\n")
};

module.exports = BeerSong;
