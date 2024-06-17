const findTheOldest = function (array) {
	return array.reduce((oldest, person) => {
		const oldestAge =
			"yearOfDeath" in oldest
				? oldest.yearOfDeath - oldest.yearOfBirth
				: new Date().getFullYear() - oldest.yearOfBirth;
		const personAge =
			"yearOfDeath" in person
				? person.yearOfDeath - person.yearOfBirth
				: new Date().getFullYear() - person.yearOfBirth;
		return oldestAge > personAge ? oldest : person;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
