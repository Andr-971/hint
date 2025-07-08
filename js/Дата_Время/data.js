
const currentTime = new Date();
//* 👇  Метод в JavaScript возвращает текущую метку времени в миллисекундах.
Date.now() 
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];
const deys = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];
export const currentHous = currentTime.getHours(); // Текущий час
export const currentMinutes = currentTime.getMinutes(); // Текущая минута
export const currentSeconds = currentTime.getSeconds(); // Текущая секунда
export const currentMilliseconds = currentTime.getMilliseconds(); // Текущая милисекунда
export const currentDay = deys[currentTime.getDay()]; // Текущий день недели цифра 0 - Воскресенье
export const currentData = currentTime.getDate(); // Текущее число
export const currentMonth = months[currentTime.getMonth()]; // Текщий месяц цифра 0 - январь
export const currentYear = currentTime.getFullYear(); // Текущий год

export function futureHours(n) {
    // Какой последующий час
    return currentTime.getHours() + n;
}
export function futureDay(n) {
    // Какой последующий день недели
    return deys[currentTime.getDay() + n];
}
export function futureData(n) {
    // Какой последующий день
    return currentTime.getDate() + n;
}
export function futureMonth(n) {
    // Какой последующий месяц
    return months[currentTime.getMonth() + n];
}
export function futureYear(n) {
    // Какой последующий год
    return currentTime.getFullYear() + n;
}


