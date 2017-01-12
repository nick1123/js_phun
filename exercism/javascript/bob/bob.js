var Bob = function() {};

Bob.prototype.hey = function(message) {
    if (message.trim().length == 0) {
        return 'Fine. Be that way!'
    }

    if (message == message.toUpperCase() && /[a-z]/i.test(message)) {
        return 'Whoa, chill out!';
    }
    
    if (message.slice(-1) == '?') {
        return 'Sure.';
    }

    return 'Whatever.';
};

module.exports = Bob;
