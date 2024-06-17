const palindromes = function (str) {
	str = str.toLowerCase();
	let normalizedStr = str
		.split("")
		.filter(
			(elem) => (elem >= "a" && elem <= "z") || (elem >= "0" && elem <= "9")
		)
		.join("");
	let start = 0;
	let end = normalizedStr.length - 1;
	console.log({ normalizedStr });
	while (start < end)
		if (normalizedStr[start] !== normalizedStr[end]) return false;
		else start++, end--;
	return true;
};

// Do not edit below this line
module.exports = palindromes;
