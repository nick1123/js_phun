var PhoneNumber = function(phone) {
    this.phone = phone;
};

function sanitize(sentence) {
    return sentence
        .toLowerCase()
        .replace(/[^a-z]/g, '')
};

PhoneNumber.prototype.toString = function() {
    return [
        '(',
        this.phone.substr(0, 3),
        ') ',
        this.phone.substr(3, 3),
        '-',
        this.phone.substr(6, 4)
    ].join('')
};

PhoneNumber.prototype.areaCode = function() {
    return this.phone.substr(0, 3);
};

PhoneNumber.prototype.number = function() {
    let phone = this.phone.replace(/\D+/g, '')

    if (phone.charAt(0) == '1' && phone.length == 11) {
        console.log("first digit is a 1")

        phone = phone.substring(1);
    }

    if (phone.length != 10) {
        phone = '0000000000';
    }

    return phone;
};

module.exports = PhoneNumber;
