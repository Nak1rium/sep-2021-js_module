// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(userID, userName, userSurname, userEmail, userPhone) {

    this.id = userID;
    this.name = userName;
    this.surname = userSurname;
    this.email = userEmail;
    this.phone = userPhone;

}

let arr = [

    new User(1, 'Artur', 'Sas', 'yrs@gmail.com', 38032913211),
    new User(2, 'Kolya', 'Bekas', 'bek@gmail.com', 38093232423),
    new User(3, 'Ivan', 'Butan', 'but@gmail.com', 38000213321),
    new User(4, 'Asta', 'Chel', 'chel@gmail.com', 38039201909),
    new User(5, 'Ostap', 'Serna', 'sern@gmail.com', 32913093203),
    new User(6, 'Maks', 'Makak', 'mak@gmail.com', 33920329303),
    new User(7, 'Slavik', 'Pen-Jan', 'penjan@gmail.com', 33420229353),
    new User(8, 'Evgen', 'Hilson', 'hil@gmail.com', 33920219504),
    new User(9, 'Alik', 'Mastler', 'alik@gmail.com', 321313321321),
    new User(10, 'Jek', 'Samurai', 'jek@gmail.com', 3232132144214)

];

console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

const idFilter = (arr) => {
    let a = [];
    a.push(arr.filter(x => x.id % 2 === 0))
    return a;
}

console.log(idFilter(arr));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const idSort = (arr) => {
    let b = [];
    b.push(arr.sort((a, b) => b.id - a.id));
    return b;
}

console.log(idSort(arr));

// - створити класс для об'єктів Client з
// полями id, name, surname , email, phone, order  (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let clients = [
    new Client(1, 'Artur', 'Sas', 'yrs@gmail.com', 38032913211, ['phone']),
    new Client(2, 'Kolya', 'Bekas', 'bek@gmail.com', 38093232423, ['book', 'game']),
    new Client(3, 'Ivan', 'Butan', 'but@gmail.com', 38000213321, ['car', 'chips']),
    new Client(4, 'Asta', 'Chel', 'chel@gmail.com', 38039201909, ['pc', 'mouse', 'rabbit']),
    new Client(5, 'Ostap', 'Serna', 'sern@gmail.com', 32913093203, ['sofa']),
    new Client(6, 'Maks', 'Makak', 'mak@gmail.com', 33920329303, ['computer', 'tv', 'phone', 'amk']),
    new Client(7, 'Slavik', 'Pen-Jan', 'penjan@gmail.com', 33420229353, ['espander', 'key']),
    new Client(8, 'Evgen', 'Hilson', 'hil@gmail.com', 33920219504, ['car']),
    new Client(9, 'Alik', 'Mastler', 'alik@gmail.com', 321313321321, ['game', 'ss']),
    new Client(10, 'Jek', 'Samurai', 'jek@gmail.com', 3232132144214, ['film', 'pipo', 'chicho'])
];

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const orderSort = (clients) => {
    return clients.sort((a, b) => a.order.length - b.order.length);
}

console.log(orderSort(clients));