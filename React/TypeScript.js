// /*? Типы данных TS */
// numder  // число
// string // строка
// boolean // буллевое значение
// null // пусто
// undefined // не определено
// odject // объект
// Symbol //
// /* Синтаксис TS */
// boolean type
// let isComplete: boolean;
// number type
// let isComplete: number;
// string type
// let isComplete: number;
// undefined type
// let u: undefined;
// null type
// let n: null;

// Отсутствующие типы
// const greetUser = (): void => {
//     console.log('da');
// }

// Типизированные массивы
// let list: number[] = [1, 2, 3, 4, 5];
// let list: Array<number> = [1, 2, 3, 4, 5]; Generic type

// Массивы с разными типами
// let x: [string, number];
// x = ['hello', 10];

// Массивы с не известными типами
// let x: [string, any];
// x = ['hello', 10];

// Определение своих типов данных
// type Name = string;
// let id: Name = "id";

// Индексы enum
// enum lincks = {
//     youtube = 'https://youtube.com',
//     vk = 'https://vk.com'
// }
// lincks.vk // 'https://vk.com'

// Функции в TS c типом объединения и не обязательным аргументом
// const creatNicName = (name: string, age?: number | string) {
//     return `${name}${age}`;
// }
// Присваивание своего типа объекту c необязательными типами
// type Person = {
//     nameUser: string,
//     age: number,
//     nickName?: string,
//     getPass?: () => string,
// };
// let user: Person = {
//     name: "",
//     age: 12,
//     nickName: ''
// }
// let admin: Person = {
//     nameUser: "",
//     age: 12,
//     getPass(): string {
//         return `${nameUser}${age}`;
//     }
// };
