// ⁡⁢⁣⁣ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:⁡ 
// import DateTime from "./dataTimeLib";
// const now = new Date();
// console.log(DT.format(now, 'dd.MM.yyyy HH:mm'));
// console.log(DT.formatru(now, 'дд.M.гггг Д чч:мм:сс:мс'));
// console.log(DT.addDays(now, 5));
// console.log(DT.isToday(now));
// console.log(DT.diffInDays(new Date('2023-01-10'), new Date('2023-01-01')));
const DT = {
	/** * Форматирование даты *
	 * @param {Date} date - Объект Date *
	 * @param {string} format - Строка формата (yyyy-MM-dd HH:mm:ss) *
	 * @returns {string} Отформатированная дата */

	dataFormat: function (date, format = "yyyy-MM-dd") {
		const pad = (num) => num.toString().padStart(2, "0");
		return format
			.replace(/yyyy/g, date.getFullYear())
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
	dataFormatru(date, format = "дд М гггг") {
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
	settingTime(date, ar = [0,0,0,0]) {
		const result = new Date(date);
		result.setHours(ar[0], ar[1], ar[2], ar[3]);
		return result;
	},

	/** * Добавление дней к дате *
	 * @param {Date} date - Исходная дата *
	 * @param {number} days - Количество дней для добавления *
	 * @returns {Date} Новая дата */

	addDays: function (date, days) {
		const result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	},

	/** * Разница между двумя датами в днях *
	 * @param {Date} date1 - Первая дата *
	 * @param {Date} date2 - Вторая дата *
	 * @returns {number} Разница в днях */

	diffInDays: function (date1, date2) {
		const diff = date1.getTime() - date2.getTime();
		return Math.floor(diff / (1000 * 60 * 60 * 24));
	},

	/** * Проверка является ли дата сегодняшним днем *
	 * @param {Date} date - Дата для проверки *
	 * @returns {boolean} */

	isToday: function (date) {
		const today = new Date();
		return (
			date.getDate() === today.getDate() &&
			date.getMonth() === today.getMonth() &&
			date.getFullYear() === today.getFullYear()
		);
	},

	/** * Получение начала дня (00:00:00) *
	 * @param {Date} date - Исходная дата *
	 * @returns {Date} Дата с обнуленным временем */

	startOfDay: function (date) {
		const result = new Date(date);
		result.setHours(0, 0, 0, 0);
		return result;
	},

	/** * Получение конца дня (23:59:59) *
	 * @param {Date} date - Исходная дата *
	 * @returns {Date} Дата с установленным временем на конец дня */

	endOfDay: function (date) {
		const result = new Date(date);
		result.setHours(23, 59, 59, 999);
		return result;
	},

	/** * Парсинг строки в дату (простой вариант) *
	 * @param {string} dateStr - Строка с датой (yyyy-MM-dd) *
	 * @returns {Date} Объект Date */

	parse: function (dateStr) {
		const parts = dateStr.split("-");
		return new Date(parts[0], parts[1] - 1, parts[2]);
	},
};
export default DT;
