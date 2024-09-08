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

//problem 3--------------------------
function deleteInvalids (array) {
	if (!Array.isArray(array)){
		return 'Invalid Array';
	}
	let numberArray = [];
	for (let element of array) {
		if (typeof element === 'number' && isNaN(element) === false){
			// console.log(element);
			numberArray.push(element);
		}
	}
	return numberArray;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12',  [1, 2], { ob: 'lala'}]));
console.log(deleteInvalids(['1', {num: 2}, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({num: [1, 2, -3]}));

// console.log(typeof NaN);
// console.log(isNaN(45));

//problem -4--------------------------------------

function password (obj) {
	if ( 
		obj.name === undefined || 
		obj.birthYear === undefined ||
		obj.siteName === undefined || 
		obj.birthYear.toString().length !== 4) {
		return 'Invalid';
	}
	let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
	let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
	return passwordString;
}

console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google'}));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook'}));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook'}));
console.log(password({ name: 'maisha', birthYear: 2002}));

// let birthYear = 1995;
// console.log('hello'.length);
// console.log(birthYear.toString().length === 4);


//problem 5--------------------------------

function monthlySavings (arr, livingCost) {
	if (!Array.isArray(arr) || typeof livingCost !== 'number') {
		return 'invalid input';
	}
	//calculate total income
	let totalIncome = 0;
	for (let payment of arr) {
		
		if (payment >= 3000){
		//deduct tax amount
		let tax = payment * 0.2;
		totalIncome += payment - tax;
		}else{
			totalIncome += payment;
		}

	}
	let savings = totalIncome - livingCost;
	// if (savings >= 0) {
	// 	return savings;
	// }else{
	// 	return 'earn more';
	// }

	return savings >= 0 ? savings : 'earn more'
}

console.log(monthlySavings([1000, 2000, 3000], 5000));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));