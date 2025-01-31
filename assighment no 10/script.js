function findLength() {
	let str = document.getElementById("str").value;
	let length = str.length;
	document.getElementById("result").innerHTML = "Length of the string: " + length;
}




function copyString() {
	let str = document.getElementById("str").value;
	let copiedStr = str;
	document.getElementById("result").innerHTML = "Copied string: " + copiedStr;
}





function concatStrings() {
	let str1 = document.getElementById("str1").value;
	let str2 = document.getElementById("str2").value;
	let concatenatedStr = str1 + " " + str2;
	document.getElementById("result").innerHTML = "Concatenated string: " + concatenatedStr;
}

function compareStrings() {
	let str1 = document.getElementById("str1").value;
	let str2 = document.getElementById("str2").value;
	if (str1 === str2) {
		document.getElementById("result").innerHTML = "Strings are equal";
	} else {
		document.getElementById("result").innerHTML = "Strings are not equal";
	}
}

function toLowercase() {
	let str = document.getElementById("str").value;
	let lowercaseStr = str.toLowerCase();
	document.getElementById("result").innerHTML = "Lowercase string: " + lowercaseStr;
}

function toggleCase() {
	let str = document.getElementById("str").value;
	let toggledStr = str.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
	document.getElementById("result").innerHTML = "Toggled case string: " + toggledStr;
}


function countChars() {
	let str = document.getElementById("str").value;
	let alphabets = 0;
	let digits = 0;
	let specialChars = 0;

	for (let char of str) {
		if (char.match(/[a-zA-Z]/)) {
			alphabets++;
		} else if (char.match(/[0-9]/)) {
			digits++;
		} else {
			specialChars++;
		}
	}

	document.getElementById("result").innerHTML = "Alphabets: " + alphabets + ", Digits: " + digits + ", Special Characters: " + specialChars;
}



function countVowelsConsonants() {
	let str = document.getElementById("str").value;
	let vowels = 0;
	let consonants = 0;

	for (let char of str) {
		if (char.match(/[aeiouAEIOU]/)) {
			vowels++;
		} else if (char.match(/[a-zA-Z]/)) {
			consonants++;
		}
	}

	document.getElementById("result").innerHTML = "Vowels: " + vowels + ", Consonants: " + consonants;
}
function countWords() {
	let str = document.getElementById("str").value;
	let words = str.split(" ").length;
	document.getElementById("result").innerHTML = "Number of words: " + words;
}

function countChars() {
	let str = document.getElementById("str").value;
	let alphabets = 0;
	let digits = 0;
	let specialChars = 0;

	for (let char of str) {
		if (char.match(/[a-zA-Z]/)) {
			alphabets++;
		} else if (char.match(/[0-9]/)) {
			digits++;
		} else {
			specialChars++;
		}
	}

	document.getElementById("result").innerHTML = "Alphabets: " + alphabets + ", Digits: " + digits + ", Special Characters: " + specialChars;
}
function replaceCharacter() {
	let str = document.getElementById("str").value;
	let char1 = document.getElementById("char1").value;
	let char2 = document.getElementById("char2").value;
	let replacedStr = str.replace(new RegExp(char1, "g"), char2);
	document.getElementById("result").innerHTML = "Replaced string: " + replacedStr;
}



