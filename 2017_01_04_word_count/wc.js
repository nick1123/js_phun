// Run this with:
// node wc.js quotes.txt
var fileName = process.argv[2];
fs = require('fs')
fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    console.log(lineCount(data) + ' ' + wordCount(data) + ' ' + totalChars(data) + ' ' + fileName);
});

function lineCount(data) {
    return data.trim().split("\n").length - 1;
}

function wordCount(data) {
    return data.trim().split(/\s+/g).length;
}

function totalChars(data) {
    return data.length;
}