
// Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

// Синтаксис создания Promise:

var promise = new Promise(function (resolve, reject) {
    // ⁡⁣⁣⁢Эта функция будет вызвана автоматически⁡
    // ⁡⁣⁣⁢В ней можно делать любые асинхронные операции,⁡
    // ⁡⁣⁣⁢А когда они завершатся — нужно вызвать одно из:⁡
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
});
var p2 = new Promise(function (resolve, reject) {
    resolve(1);
});
// Соединение
// Так как метод then возвращает промис (Promise), вы можете объединить несколько вызовов then в цепочку. Значения возвращаемые из колбэков onFulfilled или onRejected будут автоматически обёрнуты в промис.
var p2 = new Promise(function (resolve, reject) {
    resolve(1);
});

p2.then(function (value) {
    console.log(value); // 1
    return value + 1;
}).then(function (value) {
    console.log(value); // 2
});

p2.then(function (value) {
    console.log(value); // 1
});