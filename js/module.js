/*  */
// экспорт массива
export let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
    constructor(name) {
        this.name = name;
    }
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // список экспортируемых переменных
// Импорт *
// Обычно мы располагаем список того, что хотим импортировать, в фигурных скобках import {...}, например вот так:

// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
// Но если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя import * as <obj>. Например:

import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
// Импорт «как»
// Мы также можем использовать as, чтобы импортировать под другими именами.

// Например, для краткости импортируем sayHi в локальную переменную hi, а sayBye импортируем как bye:

import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
// Экспортировать «как»
// Аналогичный синтаксис существует и для export.

// Давайте экспортируем функции, как hi и bye:

export {sayHi as hi, sayBye as bye};
// Теперь hi и bye – официальные имена для внешнего кода, их нужно использовать при импорте:

// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

// Ставим export default перед тем, что нужно экспортировать:

// 📁 user.js
export default class User { // просто добавьте "default"
    constructor(name) {
    this.name = name;
    }
}
// Заметим, в файле может быть не более одного export default.

// …И потом импортируем без фигурных скобок:

import User from './user.js'; // не {User}, просто User

new User('John');
// Импорты без фигурных скобок выглядят красивее. Обычная ошибка начинающих: забывать про фигурные скобки. Запомним: фигурные скобки необходимы в случае именованных экспортов, для export default они не нужны.