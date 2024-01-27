


1. 
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Test
let x = 15243;
console.log(reverseNumber(x)); 


2.
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// Test
let string = 'keyincollege';
console.log(alphabeticalOrder(string)); 

3.
function getFileExtension(filename) {
    let parts = filename.split('.');
    return parts.length > 1 ? parts.pop() : '';
}

// Test
let filename = 'example.txt';
console.log(getFileExtension(filename)); 

4.
function getCurrentDate() {
    let currentDate = new Date();
    let dd = String(currentDate.getDate()).padStart(2, '0');
    let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    let yyyy = currentDate.getFullYear();
    return mm + '-' + dd + '-' + yyyy; 
}

// Test
console.log(getCurrentDate()); 

5.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test
console.log(capitalize('hello')); 
6.
function checkPeriod(str) {
    return str.includes('.') ? 'contain period' : 'no period';
}

// Test
console.log(checkPeriod('Hello.world')); 
7.
function putSuffix(num) {
    if (num === undefined) return;
    let suffix = 'th';
    if (num % 10 === 1 && num % 100 !== 11) suffix = 'st';
    else if (num % 10 === 2 && num % 100 !== 12) suffix = 'nd';
    else if (num % 10 === 3 && num % 100 !== 13) suffix = 'rd';
    return num + suffix;
}

// Test
console.log(putSuffix(22)); 
console.log(putSuffix(23)); 
console.log(putSuffix()); 
