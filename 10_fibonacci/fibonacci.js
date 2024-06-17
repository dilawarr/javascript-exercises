const fibonacci = function (num) {
	num = +num;
	if (num == 1 || num == 2) return 1;
	else if (num < 0) return "OOPS";
	else if (num == 0) return 0;

	let x = 1;
	let y = 1;
	let z = 0;
	let i = 2;
	while (i != num) {
		z = x + y;
		x = y;
		y = z;
		i++;
	}
	return z;
};

// Do not edit below this line
module.exports = fibonacci;
