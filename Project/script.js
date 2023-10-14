let TestText = 'My dog ate my homework!';
alert(TestText);

// Изменение значений переменных

TestText = 'Hello, World!';
TestText = 99;
TestText = 4 * 10;
TestText = true;
TestText = undefined;
alert(TestText);

// Ключевое слово const

const siteURL = 'https://www.google.com';
alert(siteURL);
siteURL = 'https://www.ya.ru';

// Объявление переменных с различными типами данных

const name = 'Alex'; // string
const age = 26; // number
const googol = 100000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000; // bigint
const isCold = false; // boolean
const city = undefined; // undefined
const person = { name: 'Alex', age: undefined }; // object
const country = null; // null
const symbol = Symbol('id'); // symbol

// Преобразование типов данных. Преобразование в число

const currentYear = '2023';
console.log(typeof currentYear); // string
const numberCurrentYear = Number(currentYear); // number
console.log(typeof numberCurrentYear);

//слово "volts" игнорируется, 16 преобразуется по основанию 10
const number1 = parseInt('16 volts', 10);
console.log(number1); // 16
// преобразуется шестнадцатеричное За; результат 58
const number2 = parseInt('3a', 16);
console.log(number2); // 58
// слово "kрh" игнорируется, parseFloat всегда подразумевает основание 10
const number3 = parseFloat('15.5 kph');
console.log(number3); //15.5

const previousYear = 2022;
console.log(typeof previousYear); // number
const stringPreviousYear = previousYear.toString();
console.log(typeof stringPreviousYear); // string

const nextYear = 2023;
console.log(typeof nextYear); // number
const stringNextYear = String(nextYear);
console.log(typeof stringNextYear); // string

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('Привет!')); // true
console.log(Boolean('')); // false