//problem 1------------------------------

function calculateMoney (ticketSale){
	if (ticketSale < 0 || typeof ticketSale !== 'number'){
		return 'Invalid Number';
	}
	// let remainingAmount = (ticketSale * 120) - (500 + (8 * 50));

	return (ticketSale * 120) - (500 + (8 * 50));
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney('string'));

//problem 2------------------------------------

function checkName (name){
	if (typeof name !==  'string'){
		return  'invalid';
	}
	// let lastLetter = name[name.length -1];
	// console.log(lastLetter);
	let lastLetter = name.slice (-1). toLowerCase();
	let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
	// let result = false;

	// for (let char of checkArray){
	// 	// console.log(char);
	// 	if (char === lastLetter){
	// 		result = true;
	// 	}
	// }
	let result = checkArray.includes(lastLetter);

	return result ? 'Good Name' : 'Bad Name';
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));

//or ------------------------------------

function checkName (name){
	if (typeof name !==  'string'){
		return  'invalid';
	}

	let lastLetter = name.slice (-1). toLowerCase();
	let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
	let result = checkArray.includes(lastLetter);

	return result ? 'Good Name' : 'Bad Name';
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));