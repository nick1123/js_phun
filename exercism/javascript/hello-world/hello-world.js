var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
	name = "World";
	if (input.length > 0) {
		name = input;
	}

    return `Hello, ${name}!`;
};

module.exports = HelloWorld;
