// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
// }
//
// //
// let array = [];
//
// const user1 = new User(1, 'Ivan', 'Ivanov', 'wewer@dfjdfhr', '123456789');
// const user2 = new User(2, 'Taras', 'Tarasov', 'sdwr@sfsdfr', '987654321');
// const user3 = new User(3, 'Sashko', 'Aleksandrov', '12fgtf@sshf', '56473829');
// const user4 = new User(4, 'Ira', 'Mashkova', 'fwhg@sdsk', '543656389');
// const user5 = new User(5, 'Viktor', 'Mashkov', 'fwhg@serk', '5436523289');
// const user6 = new User(6, 'Nastya', 'Petrova', 'fwhg@sdsk', '543656389');
// const user7 = new User(7, 'Maria', 'Makarova', 'fwhg@sdsk', '543111389');
// const user8 = new User(8, 'Makar', 'Salo', 'fwhg@sdsk', '122356389');
// const user9 = new User(9, 'Ira', 'Mashkova', 'fwhg@sdsk', '543656389');
// const user10 = new User(10, 'Ira', 'Mashkova', 'fwhg@sdsk', '543656389');
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredArray = (arr) => {
//     return arr.filter(item => item.id % 2 === 0);
// }
//
// filteredArray(array);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedIncrease = (arr) => {
//     return arr.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
// }
//
// sortedIncrease(array);
//
// let sortedDecrease = (arr) => {
//     return arr.sort((firstItem, secondItem) => secondItem.id - firstItem.id);
// }
//
// sortedDecrease(array);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
//
// let arr = [];
//
// const client1 = new Client(1, 'Ivan', 'Ivanov', 'wefwtr@rfe', '123456789', ['Phone', 'TV', 'Computer']);
// const client2 = new Client(2, 'Taras', 'Tarasov', '123@aewe', '987654321', ['Book', 'Marker']);
// const client3 = new Client(3, 'Maria', 'Tarasova', 'wetrw@sde5', '56789421', ['Car', 'Bus']);
// const client4 = new Client(4, 'Marta', 'Makarova', 'cefwter@qwq', '9988761234', ['Flowers', 'Pen']);
// const client5 = new Client(5, 'Makar', 'Ignatov', 'darwe@sese', '12784652', ['Book', 'Course']);
// const client6 = new Client(6, 'Marta', 'Mashova', 'cefwter@qwq', '9988761234', ['Flowers', 'Pen']);
// const client7 = new Client(7, 'Nina', 'Makarova', 'dfe3@qwq', '9988761234', ['Flowers', 'Pen']);
// const client8 = new Client(8, 'Kristina', 'Amosova', 'cefwter@qwq', '9988761234', ['Flowers', 'Pen']);
// const client9 = new Client(9, 'Sergyi', 'Lyutov', 'cefwter@qwq', '9988761234', ['Flowers', 'Pen']);
// const client10 = new Client(10, 'Roman', 'Romanov', 'cefwter@qwq', '9988761234', ['Flowers', 'Pen', 'Avocado', 'Creme']);
//
// arr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// function sortedOrder(array) {
//     return array.sort((firstItem, secondItem) => firstItem.order.length - secondItem.order.length)
// }
//
// sortedOrder(arr);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, brand, year, maxSpeed, engine,) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine

    this.drive = function () {
        return `Авто їде зі швидкістю ${this.maxSpeed} на годину`;
    }

    this.info = function () {
        return `${this.brand}`+ '' +  `${this.model}`+ '' + `${this.year}` + '' + `${this.maxSpeed}`+ '' + `${this.engine}`;
    }

    this.driver = function (driver) {
        return driver;
    }

     this.changeYear = function (newValue) {
        return this.year = newValue;
    }

    this.increaseMaxSpeed = function (value) {
        return this.maxSpeed = value;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, brand, year, maxSpeed, engine, driver) {
//         this.model = model
//         this.brand = brand
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engine = engine
//     }
//
//     drive() {
//         return `Їдемо зі швидкістю ${this.maxSpeed} на годину`;
//     }
//
//     info() {
//         return this.model.concat(this.brand, this.year, this.maxSpeed, this.engine);
//     }
//
//     set changeYear(value) {
//         return this.year = value;
//     }
//
//     set increaseMaxSpeed(value) {
//         return this.maxSpeed = value;
//     }
//
//     set addDriver (driver) {
//         return this.driver = driver;
//     }
// }

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}

let array = [];

const cinderella1 = new Cinderella('Valya', '33', '34');
const cinderella2 = new Cinderella('Viktoria', '26', '36');
const cinderella3 = new Cinderella('Olga', '28', '37');
const cinderella4 = new Cinderella('Nadia', '27', '35');
const cinderella5 = new Cinderella('Maria', '25', '38');
const cinderella6 = new Cinderella('Karina', '30', '39');
const cinderella7 = new Cinderella('Anna', '31', '40');
const cinderella8 = new Cinderella('Katarina', '22', '33');
const cinderella9 = new Cinderella('Nastya', '26', '41');
const cinderella10 = new Cinderella('Lyubov', '32', '42');

array.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);

console.log(array);

class Prince {
    constructor(name, age, sizeFound) {
        this.name = name
        this.age = age
        this.sizeFound = sizeFound
    }
}

let prince = new Prince('Prince', 28, '36');

let couple = function (girls, boy) {
    for (const girl of girls) {
        if (boy.sizeFound === girl.size)
            return girl;
    }
}

couple(array, prince);