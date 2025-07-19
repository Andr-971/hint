// Строгая типизация параметров и возвращаемого значения
const result = ((prefix) => {
    return prefix + Math.random().toString(36).substring(2);
})("id_");
(async () => {
    const data = await fetch("http://localhost:3002/rooms").then((res) => res.json());
})();
const getFromCache = () => {
    return 5;
};
// Дженерик в IIFE
const results = (function (arg) {
    return arg;
})(42);
console.log(results); // 42
// Альтернативный вариант с явным вызовом
const value = (function (arg) {
    return arg;
})("Hello, TypeScript!");
console.log(value); // "Hello, TypeScript!"
export {};
//# sourceMappingURL=test_ts.js.map