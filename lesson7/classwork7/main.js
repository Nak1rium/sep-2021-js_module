// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car

// function car(model, maker, carYear, maxSpeed, engineCapacity) {
//
//     this.model = model;
//     this.maker = maker;
//     this.carYear = carYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         for (const thisKey in this) {
//             if (typeof this[thisKey] !== 'function') {
//                 console.log(`${thisKey} - ${this[thisKey]}`)
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.carYear = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let Car = new car('BMV', 'Deutschland', 2015, 300, 4.7);
// Car.drive();
// Car.info();
// Car.increaseMaxSpeed(310);
// Car.drive();
// Car.changeYear(2020)
// Car.info();
// Car.addDriver('Artem');
// console.log(Car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car

// class cars {
//
//     constructor(model, maker, carYear, maxSpeed, engineCapacity) {
//
//         this.model = model;
//         this.maker = maker;
//         this.carYear = carYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//         }
//
//         this.info = function () {
//             for (const thisKey in this) {
//                 if (typeof this[thisKey] !== 'function') {
//                     console.log(`${thisKey} - ${this[thisKey]}`)
//                 }
//             }
//         }
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = newSpeed;
//         }
//
//         this.changeYear = function (newValue) {
//             this.carYear = newValue;
//         }
//
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//
//     }
//
// }
//
// let Car = new cars('BMV', 'Deutschland', 2015, 300, 4.7);
// Car.drive();
// Car.info();
// Car.increaseMaxSpeed(310);
// Car.drive();
// Car.changeYear(2020)
// Car.info();
// Car.addDriver('Artem');
// console.log(Car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name,age,footSize) {

        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }

}

 let fakeCinderella = [
     new Cinderella('Inna',23,37),
     new Cinderella('Nina',20,39),
     new Cinderella('Katya',21,40),
     new Cinderella('Lain',18,36),
     new Cinderella('Kiara',34,41),
     new Cinderella('Moona',25,38),
     new Cinderella('Iofi',27,39),
     new Cinderella('Anya',28,35),
     new Cinderella('Calliope',37,41),
     new Cinderella('Matsuri',19,36)
 ];

class prince {

    constructor(name,age,footSize) {

        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }

}

let princ = new prince('Osvald',30,37);

const findFootSize = (fakeCinderella,princ) => {
    for (const fakeCinderellaElement of fakeCinderella) {
        if (fakeCinderellaElement.footSize === princ.footSize) {
            return fakeCinderellaElement;
        }
    }
}

console.log(findFootSize(fakeCinderella,princ));

let FindFakeCinderella = fakeCinderella.find(x => x.footSize === princ.footSize);
console.log(FindFakeCinderella);