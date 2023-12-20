// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
let strNum = (text) => text.length
console.log(strNum(str1))
console.log(strNum(str2))
console.log(strNum(str3))

console.log('-----------------------------------------------------')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strUp = (text) => text.toUpperCase()
console.log(strUp(str1))
console.log(strUp(str2))
console.log(strUp(str3))

console.log('-----------------------------------------------------')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strLow = (text) => text.toLowerCase()
console.log(strLow(strUp(str1)))
console.log(strLow(strUp(str2)))
console.log(strLow(strUp(str3)))

console.log('-----------------------------------------------------')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   '
console.log(dirtyStr.trim())

console.log('-----------------------------------------------------')
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '))

console.log('-----------------------------------------------------')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr.map((numbers) => numbers.toString()))

console.log('-----------------------------------------------------')
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort = (a, b) => {
            return a - b;
        };
    } else if (direction === 'descending') {
        nums.sort = (a, b) => {
            return b - a;
        };
    }
    return nums;
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

console.log('-----------------------------------------------------')
// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
}))

console.log('-----------------------------------------------------')
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(a => a.monthDuration > 5))

console.log('-----------------------------------------------------')
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
}))

console.log('-----------------------------------------------------')
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let values = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];
let suits = ['Черва', 'Бубна', 'Хреста', 'Піка'];

let deckOfCards = [];

for (const suit of suits) {
    for (const value of values) {
        deckOfCards.push({value, suit});
    }
}
console.log(deckOfCards);

console.log('-----------------------------------------------------')
// - знайти піковий туз

let myCard = deckOfCards.find(card => card.suit === 'Піка' && card.value === 'Туз')
console.log(myCard)

console.log('-----------------------------------------------------')
// - всі шістки

let all_6 = deckOfCards.filter(card => card.value === '6')
console.log(all_6)

console.log('-----------------------------------------------------')
// - всі червоні карти

let allRedCards = deckOfCards.filter(card => card.suit === 'Черва' || card.suit === 'Бубна')
console.log(allRedCards)

console.log('-----------------------------------------------------')
// - всі буби

let allBubnaCards = deckOfCards.filter(card => card.suit === 'Бубна')
console.log(allBubnaCards)

console.log('-----------------------------------------------------')
// - всі трефи від 9 та більше

let allHrestaCards = deckOfCards.filter(card => card.suit === 'Хреста' && card.value !== '6' && card.value !== '7' && card.value !== '8')
console.log(allHrestaCards)

console.log('-----------------------------------------------------')
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
let cardSuit = ['spade', 'diamond','heart', 'clubs']
let cardValue = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker']
let cardColors = ['red', 'black']

let desk = [];

for (const suit of cardSuit) {
    for (const value of cardValue) {
            desk.push({value, suit});

    }
}

let cardArray = desk.map(arr =>{
if (arr.suit === 'diamond' || arr.suit === 'heart') {
    return {value: arr.value, suit:arr.suit, color: 'red'};
}else {
    return {value: arr.value, suit:arr.suit, color: 'black'};
}
})
console.log(cardArray)

console.log('-----------------------------------------------------')
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let suitsReduce = cardArray.reduce((accumulator, card) => {
    if (card.suit === 'spade') {
        accumulator[0].push(card);
    } else if (card.suit === 'diamond') {
        accumulator[1].push(card);
    } else if (card.suit === 'heart') {
        accumulator[2].push(card);
    } else if (card.suit === 'club') {
        accumulator[3].push(card);
    }
    return accumulator;
}, [[],[],[],[]]);

console.log(suitsReduce);

console.log('-----------------------------------------------------')
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

let findObjects = coursesArray.filter(value => value.modules.includes('sass'));

console.log(findObjects);

console.log('-----------------------------------------------------')
// --написати пошук всіх об'єктів, в який в modules є docker

let findObjects1 = coursesArray.filter(value => value.modules.includes('docker'));

console.log(findObjects1);