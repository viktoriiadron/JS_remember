//add script to HTML
{/* <script src="./script.js"></script>
    
OR 
    
<script>
   alert(‘Hello World!’);
</script> */}


// data types and variebles

// let - modern way
// var - outdated way
// const - similar to let, but cannot be changed

let num = 67; //number
let firstName = 'victoria'; //string
const manager = true; //boolean
null // for empty
undefined //for undefined
object // for complicaded structures
symbol // for unique identificators
bigint 

console.log(`test ${firstName}`);
console.log(typeof 10); // number 
console.log(typeof 2n); // bigint
console.log(typeof true); // boolean 
console.log(typeof "10"); // string
console.log(typeof undefined); // undefined 
console.log(typeof { value: 10 }); // object
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object! just remember!
console.log(typeof function() {}); // function

//how can we name variables
// NB uppercase/lovercase makes difference
// Apple and apple are different variables

let $ = 'string';
let $wierd_var$ = 'wierd_var';
let _num = 43;

//how we cannot name variables
// let 67num = 67 //start with num
// let let //reserved words
// let const //reserved words
// let my-num = 67 // variables with dash

//elementary functions
alert(firstName);
prompt('enter the number');
confirm("Is your name World?");

//elementary math / operators 
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
console.log(num % 10);
console.log(num ** 10); //exponentiation

// --------numbers--------
let num2 = 43;
console.log(num.toString());
//problem:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(1)); // 0.3

//basic methods
isNaN(value);
isFinite(value) // returns true, if it is simple number, namely not NaN/Infinity/-Infinity;
value.toString(base) // returns string (!) value in system base (1-36);
parseInt(value)// повертає ціле число з рядка, який починається з числа, але може мати і рядкові символи;
parseFloat(value)// повертає числа з плаваючою точкою (дробове), яке починається з числа, але може мати і рядкові символи;

//--------strings-------
// console.log('it is 'fantastic''); // SyntaxError
console.log('it is \'fantastic\''); // it is 'fantastic'
console.log("it is 'fantastic'"); // it is 'fantastic'

//special symbols
//  \n //-Перевод рядка
// \t // - Табуляція
// \r // - Символ возврату каретки
// \’ // - Одинарні лапки
// \” // - Подвійні лапки
// \\ // -зворотній слеш
// \uXXXX // Довільна кодова крапка Uпicode (XXXX- это шітнадцятирічний код крапки)

//concatenation
let name = "Luke";
console.log("I’m your father, " + name + "!"); // I’m your father, Luke!
let name = "Luke";
console.log(`I’m your father, ${name}!`); // I’m your father, Luke!

//basic methods
str.length;
str.toUpperCase();
str.toLowerCase();
str.indexOf(substr, pos) //returns position of the first (default position = 0) or returns -1

//-------boolean-------
console.log(1 == true); // true
console.log(0 == false); // true
console.log("false" == false); // false
console.log(Boolean("false") == false); // true

//---unary operator--
// let num = +true; // 1
// let value = -1;  // -1
// let increment = ++value;
// let decrement = value--;

//--assignment operator--
let a = 10;
let b = a;

a += b //a = a + b
a -= b // a = a - b
a *= b // a = a * b
a /= b // a = a / b

//---comparison operator--
let num = 10;
console.log(num > 6); // true
console.log(num < 9); // false
console.log(num >= 10); // true
console.log(num <= 3); // false
console.log(num == 10); // true
let result = num != 20; 
console.log(result); // true

//NB
// 1. Спочатку порівнюються перші символи рядків.
// 2. Якщо перший символ першого рядка більший (менший), ніж перший символ другий, то перший рядок більший (менший) за другий. Порівняння завершене.
// 3. Якщо перші символи рівні, то так само порівнюються вже другі символи рядків.
// 4. Порівняння триває, поки не закінчиться один з рядків.
// 5. Якщо обидва рядки закінчуються одночасно, то вони рівні. Інакше, більшим вважається довший рядок.
// P.S Маленькі букви більші за заголовні, букви більше цифр.

// false == 0
// true == 1
// undefined == NaN
//console.log("1" > 0); // true
//console.log(true <= 1); // true

// operator OR ||
// console.log(false || true || true);  // true
// let x = 5;
// let y = 10;
// let z = x || y;  
// console.log(z); // 5

// // operator AND &&
// console.log(false && true && true);  // false
// let x = 5;
// let y = 10;
// let z = x && y;  
// console.log(z); // 10

// // operaton NOT !
// console.log(!true); // false
// console.log(!!'summer'); // true
// console.log(false || true && !false); // true, cos && higher than ||, the most valuable is NOT !

// ?? returns first value is it is not null/undefined, otherwise second
