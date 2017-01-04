// node leap.js 1999 2000 2100

function isLeap(year) {
    if (year % 4 != 0) {
        return false;
    }

    if (year % 100 == 0 && year % 400 != 0) {
        return false;
    }

    return true;
}

function leapMessage(year, bool) {
    return `${year} is ${bool ? "" : "Not "}a leap year`;

}

function printConsole(year) {
    console.log(leapMessage(year, isLeap(year)));
}

for (var year of process.argv.slice(2)) {
    printConsole(year);
}