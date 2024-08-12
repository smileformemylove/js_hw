'use strict'

// Запит рік народження
const userDate = prompt("Введіть рік народження: ");
let ageMessage = '';
if (userDate === null) {
    ageMessage = 'Шкода, що Ви не захотіли ввести свій рік народження.';
} else if (userDate.trim() === '' || isNaN(+userDate)) {
    ageMessage = 'Помилка. Введіть рік народження цифрами.';
} else {
    const age = 2024 - parseInt(userDate, 10);
    ageMessage = `Тобі ${age} років`;
}

let userCity = prompt("Введіть ваше місто: ").trim();
let cityMessage = '';
function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}
if (userCity === null) {
    cityMessage = 'Шкода, що Ви не захотіли ввести ваше місто.';
} else if (userCity === '') {
    cityMessage = 'Помилка: Введіть назву міста.';
} else if (isOnlyDigits(userCity)) {
    cityMessage = 'Помилка: Назва міста не може містити тільки цифри.';
} else {
    userCity = userCity.toLowerCase();
    switch (userCity) {
        case 'київ':
            cityMessage = 'Ти живеш у столиці України';
            break;
        case 'вашингтон':
            cityMessage = 'Ти живеш у столиці США';
            break;
        case 'лондон':
            cityMessage = 'Ти живеш у столиці Британії';
            break;
        default:
            cityMessage = `Ти живеш у місті ${userCity}`;
            break;
    }
}

let userSport = prompt("Введіть ваш улюблений вид спорту: ");
let sportMessage = '';
if (userSport === null) {
    sportMessage = 'Шкода, що Ви не захотіли ввести ваш улюблений вид спорту.';
} else if (userSport === '') {
    sportMessage = 'Помилка. Введіть ваш улюблений вид спорту';
} else if (isOnlyDigits(userSport)) {
    sportMessage = 'Помилка. Назва спорту не може містити тільки цифри';
} else {
    userSport = userSport.toLowerCase();
    switch (userSport) {
        case 'бокс':
            sportMessage = 'Круто! Хочеш стати Олександром Усиком?';
            break;
        case 'плавання':
            sportMessage = 'Круто! Хочеш стати Майклом Фелпсом?';
            break;
        case 'мотогонки':
            sportMessage = 'Круто! Хочеш стати Джакомо Агостіні?';
            break;
        default:
            sportMessage = `Я так і знав, що ${userSport} твій улюблений вид спорту.`;
            break;
    }
}

let finalMessage = '';
if (ageMessage) finalMessage += `${ageMessage}\n`;
if (cityMessage) finalMessage += `${cityMessage}\n`;
if (sportMessage) finalMessage += `${sportMessage}`;

alert(finalMessage);
