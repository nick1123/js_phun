var Gigasecond = function(date) {
    this.birth = date
};

Gigasecond.prototype.date = function() {
    return new Date(
        new Date(this.birth.getTime()).setTime(
            this.birth.getTime() + (Math.pow(10, 9) * 1000)));
};

module.exports = Gigasecond;
