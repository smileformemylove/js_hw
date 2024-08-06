'use strict';

//task 1
let name = prompt("Як вас звати?");
let age = prompt("Скільки вам років?");
let likesProgramming = confirm("Вам подобається програмувати?");

//task 2
console.log("Ім'я: " + name);
console.log("Вік: " + age);
console.log("Чи подобається програмувати: " + (likesProgramming ? "Так" : "Ні"));

console.log("name: " + typeof name);
console.log("age: " + typeof age);
console.log("likesProgramming: " + typeof likesProgramming);

//task 3
let greeting = `Привіт, ${name}`
alert(greeting);


//task 4
let numericAge = Number(age);
let nextAge = (numericAge + 1);

console.log(nextAge);

//task 5
let isAdult = numericAge >= 18;

console.log(isAdult);
