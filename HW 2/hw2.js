// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10, 4, 20, true, true, 'Natali', 'Yermolova', 105, false, 'lesson2']
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

console.log('--------------------------------');

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1 = {
    title: 'Book1',
    pageCount: 642,
    genre: 'horror'
}

let obj2 = {
    title: 'Book2',
    pageCount: 125,
    genre: 'comedy'
}

let obj3 = {
    title: 'Book3',
    pageCount: 379,
    genre: 'fantasy'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let obj1_1 = {
    title: 'Book1',
    pageCount: 642,
    genre: 'horror',
    authors : [{name: 'Author1', age: 45}]
}

let obj2_1 = {
    title: 'Book2',
    pageCount: 125,
    genre: 'comedy',
    authors : [{name: 'Author2', age: 24}]
}

let obj3_1 = {
    title: 'Book3',
    pageCount: 379,
    genre: 'fantasy',
    authors : [{name: 'Author3', age: 63}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Natali', username: 'nata_123', password: 'natanata123'},
    {name: 'Oleg', username: 'oleg_123', password: 'olegoleg123'},
    {name: 'Katya', username: 'kate_123', password: 'katekate123'},
    {name: 'Denys', username: 'den_123', password: 'denden123'},
    {name: 'Bogdan', username: 'bodya_123', password: 'bodyabodya123'},
    {name: 'Alisa', username: 'alisa_123', password: 'alisaalisa123'},
    {name: 'Maria', username: 'mary_123', password: 'marymary123'},
    {name: 'Kristina', username: 'kris_123', password: 'kriskris123'},
    {name: 'Sasha', username: 'alex_123', password: 'alexalex123'},
    {name: 'Maksym', username: 'max_123', password: 'maxmax123'}
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


console.log('--------------------------------');

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.


let x = 13;

if (x !== 0) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

console.log('--------------------------------');
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;

if (a !== 0) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
//-------------------------------
let a1 = 0;

if (a1 !== 0) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
//-------------------------------
let a2 = -3;

if (a2 !== 0) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

console.log('--------------------------------');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 24;

if (time <= 15){
    console.log('Перша четверть')
}

else if (time >=16 && time <= 30){
    console.log('Друга четверть')
}

else if (time >=31 && time <= 45){
    console.log('Третя четверть')
}

else if (time >=46 && time <= 59){
    console.log('Четверта четверть')
}

else  {
    console.log('Введіть число від 0 до 59')
}

console.log('--------------------------------');

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 14;

if (day <= 10){
    console.log('Перша декада')
}

else if (day >=11 && day <= 20){
    console.log('Друга декада')
}

else if (day >=21 && day <= 31){
    console.log('Третя декада')
}

else  {
    console.log('Введіть число від 1 до 31')
}

console.log('--------------------------------');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

let week = prompt('Введіть порядковий номер дня тижня');

switch (week){
    case '1':
        console.log('Monday')
        break;

        case '2':
        console.log('Tuesday')
        break;

        case '3':
        console.log('Wednesday')
        break;

        case '4':
        console.log('Thursday')
        break;

        case '5':
        console.log('Friday')
        break;

        case '6':
        console.log('Saturday')
        break;

        case '7':
        console.log('Sunday')
        break;

    default:
        console.log('Введіть число від 1 до 7');

}
console.log('--------------------------------');

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let n1 = 30;
let n2 = 60;

if (n1 > n2){
    console.log('Максимальне число:', n1)
}

else if(n2 > n1){
    console.log('Максимальне число:', n2)
}
else{
    console.log('Ці числа рівні')
}
console.log('--------------------------------');

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

 let x1 = false;

 if (x1 === false || x1 === undefined || x1 === null || x1===0 || x1===''){
     x1 = 'default'
     console.log(x1)
 }
 else {
     x1 = true
     console.log('x1 = ', x1)
 }
console.log('--------------------------------');

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}