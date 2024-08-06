'use strict';

//task 1
const name = prompt("Як вас звати?");
const age = prompt("Скільки вам років?");
const likesProgramming = confirm("Вам подобається програмувати?");

//task 2
console.log("Ім'я: " + name);
console.log("Вік: " + age);
console.log("Чи подобається програмувати: " + (likesProgramming ? "Так" : "Ні"));

console.log("name: " + typeof name);
console.log("age: " + typeof age);
console.log("likesProgramming: " + typeof likesProgramming);

//task 3
const greeting = `Привіт, ${name}`
alert(greeting);


//task 4
const numericAge = Number(age);
const nextAge = (numericAge + 1);

console.log(nextAge);

//task 5
const isAdult = numericAge >= 18;

console.log(isAdult);
