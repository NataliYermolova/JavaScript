// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b) => a * b;

let result = square(10,20);
console.log(result);

console.log('-------------------------------------------------------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let square1 = (r) => r * r * 3.14

let result1 = square1(17);
console.log(result1);

console.log('-------------------------------------------------------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let square2 = (r, h) => (3.14 + 3.14) * r * h + (3.14 + 3.14) * r * r;

let result2 = square2(17, 5);
console.log(result2);

console.log('-------------------------------------------------------');

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayUsers = (ArrUsers) => {
    for (const user of users) {
        console.log(user);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
arrayUsers(users);

console.log('-------------------------------------------------------');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => text;

p = paragraph('Natali Natali Natali');
console.log(p);

console.log('-------------------------------------------------------');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul = (text) => {
    document.write('<ul>')
    document.write(
        `<li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>`)
    document.write('</ul>')
}

ul('Natali')

document.write('--------------------------------------------');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul1 = (text, li) => {
    document.write('<ul>')
    for (let i = 1; i <= li; i++) {
        document.write(
            `<li>${text}</li>`)
    }
    document.write('</ul>')
}

ul1('Natali', 18);

document.write('--------------------------------------------');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let list = (Elements) => {
    document.write('<ol>')
    for (const arrayElement of array) {
        document.write(
            `<li>${arrayElement}</li>`)
    }
    document.write('</ol>')
}

let array = [1,2,3, 'text', 'TEXT', true];
list(array);

document.write('--------------------------------------------');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let doc = (array) => {
    for (const arrElement of arr) {
        document.write(`
    <div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>
    `)
    }
}

let arr = [
    {id: 123, name: 'Olya', age: 45},
    {id: 456, name: 'Masha', age: 24},
    {id: 789, name: 'Alex', age: 18},
    {id: 963, name: 'Max', age: 36}
]

doc(arr);

// - створити функцію яка повертає найменьше число з масиву

let minNum = (array) => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    } return min;
}

let numbers = [124, 38, 68, 25, 13, 7, 150, 12, 3, 54];
res = minNum(numbers);
console.log(res);

console.log('-------------------------------------------------------');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArrayElements = (arr) => {
    let sum = 0;
    for (const number of numbers) {   // Взяла масив numbers з попереднього завдання
        sum = sum + number;

    }
    return sum;
}

sumArr = sumArrayElements(numbers)
console.log(sumArr)

console.log('-------------------------------------------------------');

// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let index;
    if (index1 >=0 && index1 <= numbers.length && index2 >=0 && index2 <= numbers.length) {
        index = numbers[index1];
        numbers[index1] = numbers[index2];
        numbers[index2] = index;
    }
    return arr;

}
let res1 = swap(numbers, 0, 1)
console.log(res1);

console.log('-------------------------------------------------------');


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let res;
    for (const cV of currencyValues) {
        if (exchangeCurrency === cV.currency) {
            res = sumUAH / cV.value;
        }
    }
    return res;
}

let res_1 = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(res_1);