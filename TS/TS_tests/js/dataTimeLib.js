// ⁡⁢⁣⁣ПРИМЕР ИСПОЛЬЗОВАНИЯ⁡
// import DateTime from "./DateTime";
const DateTime = {
    /**
     * Форматирование даты
     * @param date - Объект Date
     * @param format - Строка формата (по умолчанию 'yyyy-MM-dd')
     * @returns Отформатированная дата
     */
    format(date, format = "yyyy-MM-dd") {
        const pad = (num) => num.toString().padStart(2, "0");
        return format
            .replace(/yyyy/g, date.getFullYear().toString())
            .replace(/MM/g, pad(date.getMonth() + 1))
            .replace(/dd/g, pad(date.getDate()))
            .replace(/HH/g, pad(date.getHours()))
            .replace(/mm/g, pad(date.getMinutes()))
            .replace(/ss/g, pad(date.getSeconds()));
    },
    months: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ],
    deys: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    formatru(date, format = "дд М гггг") {
        const pad = (num) => num.toString().padStart(2, "0");
        return format
            .replace(/гггг/g, date.getFullYear().toString())
            .replace(/гг/g, date.getFullYear().toString().substr(-2))
            .replace(/МЧ/g, pad(date.getMonth() + 1))
            .replace(/М/g, this.months[date.getMonth()])
            .replace(/дд/g, pad(date.getDate()))
            .replace(/Д/g, this.deys[date.getDay()])
            .replace(/чч/g, pad(date.getHours()))
            .replace(/мм/g, pad(date.getMinutes()))
            .replace(/сс/g, pad(date.getSeconds()))
            .replace(/мс/g, pad(date.getMilliseconds()).substr(-2));
    },
    dataNumber(date, format = "дд") {
        const pad = (num) => num.toString().padStart(2, "0");
        return format.replace(/дд/g, pad(date.getDate()));
    },
    dataMonth(date, format = "М") {
        const pad = (num) => num.toString().padStart(2, "0");
        return format
            .replace(/МЧ/g, pad(date.getMonth() + 1))
            .replace(/М/g, this.months[date.getMonth()]);
    },
    dataYear(date, format = "гггг") {
        return format
            .replace(/гггг/g, date.getFullYear().toString())
            .replace(/гг/g, date.getFullYear().toString().substr(-2));
    },
    dataDey(date, format = "Д") {
        return format.replace(/Д/g, this.deys[date.getDay()]);
    },
    dataTime(date, format = "чч:мм:сс") {
        const pad = (num) => num.toString().padStart(2, "0");
        return format
            .replace(/чч/g, pad(date.getHours()))
            .replace(/мм/g, pad(date.getMinutes()))
            .replace(/сс/g, pad(date.getSeconds()))
            .replace(/мс/g, pad(date.getMilliseconds()).substr(-2));
    },
    settingTime(date, ar = [0, 0, 0, 0]) {
        const result = new Date(date);
        result.setHours(ar[0], ar[1], ar[2], ar[3]);
        return result;
    },
    /**
     * Добавление дней к дате
     * @param date - Исходная дата
     * @param days - Количество дней для добавления
     * @returns Новая дата
     */
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },
    /**
     * Разница между двумя датами в днях
     * @param date1 - Первая дата
     * @param date2 - Вторая дата
     * @returns Разница в днях
     */
    diffInDays(date1, date2) {
        const diff = date1.getTime() - date2.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    },
    /**
     * Проверка является ли дата сегодняшним днем
     * @param date - Дата для проверки
     * @returns true/false
     */
    isToday(date) {
        const today = new Date();
        return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear());
    },
    /**
     * Получение начала дня (00:00:00)
     * @param date - Исходная дата
     * @returns Дата с обнуленным временем
     */
    startOfDay(date) {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);
        return result;
    },
    /**
     * Получение конца дня (23:59:59)
     * @param date - Исходная дата
     * @returns Дата с установленным временем на конец дня
     */
    endOfDay(date) {
        const result = new Date(date);
        result.setHours(23, 59, 59, 999);
        return result;
    },
    /**
     * Парсинг строки в дату (простой вариант)
     * @param dateStr - Строка с датой (yyyy-MM-dd)
     * @returns Объект Date
     */
    parse(dateStr) {
        const parts = dateStr.split("-");
        if (parts.length !== 3) {
            throw new Error("Invalid date format. Expected yyyy-MM-dd");
        }
        return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    },
};
export default DateTime;
//# sourceMappingURL=dataTimeLib.js.map