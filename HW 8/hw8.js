// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User (1, 'Leonardo', 'DiCaprio', 'titanic@gmail.com', +380991111111)
let user2 = new User (2, 'Will ', 'Smith', 'maninblack@gmail.com', +380992222222)
let user3 = new User (3, 'Johnny', 'Depp', 'jackssarrow@gmail.com', +380993333333)
let user4 = new User (4, 'Brad', 'Pitt', 'mrsmith@gmail.com', +380994444444)
let user5 = new User (5, 'Angelina', 'Jolie', 'maleficent@gmail.com', +380995555555)
let user6 = new User (6, 'John', 'Travolta', 'killbill@gmail.com', +380996666666)
let user7 = new User (7, 'Arnold', 'Schwarzenegger', 'terminator@gmail.com', +380997777777)
let user8 = new User (8, 'Sylvester', 'Stallone', 'rocky@gmail.com', +38099888888)
let user9 = new User (9, 'Kate', 'Winslet', 'rosa@gmail.com', +380999999999)
let user10 = new User (10, 'Keanu', 'Reeves', 'matrix@gmail.com', +380990000000)

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [];

userArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)

console.log(userArray);

console.log('-----------------------------------------------------------');
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArray.filter(value => value.id % 2 === 0))

console.log('-----------------------------------------------------------');
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUserArray = userArray.sort((user1, user2) => {
    return user1.id - user2.id;
});

console.log(sortUserArray);

console.log('-----------------------------------------------------------');
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client (1, 'Leonardo', 'DiCaprio', 'titanic@gmail.com', +380991111111, ['headphones'])
let client2 = new Client (2, 'Will ', 'Smith', 'maninblack@gmail.com', +380992222222, ['camera', 'tripod', 'backpack', 'cookware', 'watch'])
let client3 = new Client (3, 'Johnny', 'Depp', 'jackssarrow@gmail.com', +380993333333, ['sleeve', 'keyboard', 'stand'])
let client4 = new Client (4, 'Brad', 'Pitt', 'mrsmith@gmail.com', +380994444444, ['headphones', 'mug'])
let client5 = new Client (5, 'Angelina', 'Jolie', 'maleficent@gmail.com', +380995555555, ['backpack', 'boots', 'stove', 'mug', 'bands', 'tie'])
let client6 = new Client (6, 'John', 'Travolta', 'killbill@gmail.com', +380996666666, ['bands', 'mat', 'bottle', 'tripod'])
let client7 = new Client (7, 'Arnold', 'Schwarzenegger', 'terminator@gmail.com', +380997777777, ['wallet'])
let client8 = new Client (8, 'Sylvester', 'Stallone', 'rocky@gmail.com', +38099888888, ['knives', 'cookware', 'apron', 'watch'])
let client9 = new Client (9, 'Kate', 'Winslet', 'rosa@gmail.com', +380999999999, ['tablet', 'monitor', 'software'])
let client10 = new Client (10, 'Keanu', 'Reeves', 'matrix@gmail.com', +380990000000, ['headphones', 'doorbell', 'speaker', 'tablet', 'monitor', 'software'])

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [];

clientArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
console.log(clientArray);

console.log('-----------------------------------------------------------');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClientArray = clientArray.sort((user1, user2) => {

    return user1.order.length - user2.order.length;
});

console.log(sortClientArray);

console.log('-----------------------------------------------------------');
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
function Car (model, manufacturer, year , speedMax, engineV) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speedMax = speedMax;
    this.engineV = engineV;

    // додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function drive(){
        console.log(`їдемо зі швидкістю ${speedMax}км на годину`)
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function info() {
        console.log(`Інформація про автомобіль:
        Назва моделі: ${this.model}
        Виробник: ${this.manufacturer}
        Рік випуску: ${this.year}
        Максимальна швидкість: ${this.speedMax} км/год
        Об'єм двигуна: ${this.engineV} л`);
        //водій
        if (this.driver) {
            console.log(`Інформація про водія:
            Ім'я: ${this.driver.name}
            Досвід: ${this.driver.experience} років`);
        }
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        this.speedMax += newSpeed;
        console.log(`Максимальна швидкість підвищена на ${newSpeed} км/год. Нова швидкість ${this.speedMax} км/год`);
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function changeYear(newValue) {
        this.changeYear = newValue;
        console.log(`Рік випуску змінено на ${this.changeYear}`);
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function addDriver(driver) {
        this.driver = driver;
        console.log('Водій доданий до автомобіля.');
    }
}

let car1 = new Car('Camry', 'Toyota', 2013, 210, 2.5)
let car2 = new Car('Passat ', 'Volkswagen', 2016, 232, 1.8)
let car3 = new Car('Civic ', 'Honda', 2022, 195, 1.6)

console.log(car1)
console.log('-----------------------------------------------------------');

car1.drive();
console.log('-----------------------------------------------------------');

car1.info();
console.log('-----------------------------------------------------------');

car1.increaseMaxSpeed(10)
console.log('-----------------------------------------------------------');

car1.changeYear(2005)
console.log('-----------------------------------------------------------');

car1.addDriver({ name: 'Бред Пітт', age: 30, experience: 5 });
console.log('-----------------------------------------------------------');

car1.info();
console.log('-----------------------------------------------------------');

// - (Те саме, тільки через клас)

class Car1{
    constructor(model, manufacturer, year , speedMax, engineV) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speedMax = speedMax;
        this.engineV = engineV;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.speedMax}км на годину`)
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`Інформація про автомобіль:
        Назва моделі: ${this.model}
        Виробник: ${this.manufacturer}
        Рік випуску: ${this.year}
        Максимальна швидкість: ${this.speedMax} км/год
        Об'єм двигуна: ${this.engineV} л`);
        //водій
        if (this.driver) {
            console.log(`Інформація про водія:
            Ім'я: ${this.driver.name}
            Досвід: ${this.driver.experience} років`);
        }
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.speedMax += newSpeed;
        console.log(`Максимальна швидкість підвищена на ${newSpeed} км/год. Нова швидкість ${this.speedMax} км/год`);
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.changeYear = newValue;
        console.log(`Рік випуску змінено на ${this.changeYear}`);
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
        console.log('Водій доданий до автомобіля.');
    }
}

let car_1 = new Car1('Camry', 'Toyota', 2013, 210, 2.5)
let car_2 = new Car1('Passat ', 'Volkswagen', 2016, 232, 1.8)
let car_3 = new Car1('Civic ', 'Honda', 2022, 195, 1.6)

console.log(car_1)
console.log('-----------------------------------------------------------');

car_1.drive();
console.log('-----------------------------------------------------------');

car_1.info();
console.log('-----------------------------------------------------------');

car_1.increaseMaxSpeed(10)
console.log('-----------------------------------------------------------');

car_1.changeYear(2005)
console.log('-----------------------------------------------------------');

car_1.addDriver({ name: 'Бред Пітт', age: 30, experience: 5 });
console.log('-----------------------------------------------------------');

car_1.info();
console.log('-----------------------------------------------------------');



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age , footSize, prince) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderella1 = new Cinderella ('Katya', 42, 37)
let cinderella2 = new Cinderella ('Masha', 48, 43)
let cinderella3 = new Cinderella ('Alina', 35, 39)
let cinderella4 = new Cinderella ('Natali', 12, 37)
let cinderella5 = new Cinderella ('Olya', 19, 35)
let cinderella6 = new Cinderella ('Dasha', 21, 37)
let cinderella7 = new Cinderella ('Vika', 37, 39)
let cinderella8 = new Cinderella ('Lena', 23, 39)
let cinderella9 = new Cinderella ('Nina', 30, 38)
let cinderella10 = new Cinderella ('Nadia', 26, 36)

let arrayCinderellas = []

arrayCinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)

console.log(arrayCinderellas)

console.log('-----------------------------------------------------------');

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Charles', 29, 37)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of arrayCinderellas) {
    if (cinderella.footSize === prince.shoe && cinderella.age >= 18 && cinderella.age <= prince.age){
        console.log(`Принцу підходить дівчина на ім'я ${cinderella.name}`)
    }
}

console.log('-----------------------------------------------------------');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = arrayCinderellas.find(value => value.footSize === prince.shoe && value.age >= 18 && value.age <= prince.age)
console.log(findCinderella)
