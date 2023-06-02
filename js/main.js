const name = "Oleg";
console.log(name);

const age = 12;
console.log(age);

const isStudent = true;
console.log(isStudent);

const myString = "Початок- є більш ніж половина всього";
console.log(myString)

let myNumber = 1500;
myNumber = 1500 + 10;
console.log(myNumber)

const myNull = null;
console.log(myNull);

const isName = prompt("Будь ласка введіть своє ім'я");
console.log(isName);
alert("Привіт" + " " + isName);
console.log(isName);

const confirning = confirm("Підтвердити дію?");
if (confirning === true) alert("Дякую за підтвердження!");
else alert("Дію відмінено!");
console.log(confirning);

const dangerous = alert("Дія небезпечна")
const assurances = confirm("Підтвердити дію?");
if (assurances === true) alert("Дякую за підтвердження!");
else alert("Дію відмінено!");
console.log(assurances);
console.log(dangerous);