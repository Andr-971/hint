
// ⁡⁣⁣⁢ПОЛНАЯ ШПАРГАЛКА ПО РАБОТЕ С ДАТАМИ В 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁⁡
// 🔳 ⁡⁢⁣⁣СОЗДАНИЕ ДАТЫ⁡
{
	new Date(); // Текущая дата/время
	new Date(2025, 5, 24); // 24 июня 2025 (месяцы: 0-11)
	new Date(2025, 5, 24, 12, 30, 15); // 24 июня 2025, 12:30:15
	new Date("2025-06-24T12:30:15Z"); // ISO строка (UTC)
	new Date(1687611015000); // Unix timestamp (мс) Sat Jun 24 2023 17:50:15 GMT+0500 (Екатеринбург, стандартное время)
}
// 🔳 ⁡⁢⁣⁣ПОЛУЧЕНИЕ КОМПОНЕНТОВ ДАТЫ⁡
{
	const date = new Date();
	// ⁡⁣⁢⁢Локальные значения (для часового пояса системы)⁡
	date.getFullYear(); // 2025 (год)
	date.getMonth(); // 5 (июнь, 0-11)
	date.getDate(); // 24 (день месяца)
	date.getHours(); // 12 (часы)
	date.getMinutes(); // 30 (минуты)
	date.getSeconds(); // 15 (секунды)
	date.getMilliseconds(); // 0
	date.getDay(); // 2 (вторник, 0=ВС)
	// ⁡⁣⁢⁢UTC-эквиваленты⁡
	date.getUTCFullYear();
	date.getUTCHours(); // и т.д.
}
// 🔳 ⁡⁢⁣⁡⁢⁣⁣УСТАНОВКА КОМПОНЕНТОВ (Даты и времени)⁡
{
	date.setFullYear(2026); // 2026 (год)
	date.setMonth(6); // июль (0-11)
	date.setDate(25); // 25 (число)
	date.setHours(14); // 14 (часы)
	date.setMinutes(45); // 45 (минуты)
	// Аналогично: setSeconds(), setMilliseconds()
	// UTC-версии
	date.setUTCFullYear(2026); // и т.д.
	date.setUTCHours(-5, 0, 0, 0); // 00.00.00 Установка времени, Часовой пояс Екатиринбург
}
// 🔳 ⁡⁢⁣⁣ФОРМАТИРОВАНИЕ⁡
{
	// 🔹 ⁡⁣⁢⁢Стандартное:⁡
	{
		const date = new Date();
		date.toString(); // "Tue Jun 24 2025 12:30:15 GMT+0300"
		date.toDateString(); // "Tue Jun 24 2025"
		date.toTimeString(); // "12:30:15 GMT+0300"
		date.toLocaleString(); // "24.06.2025, 12:30:15" (зависит от локали)
		date.toISOString(); // Преобразует объект Date в строку в формате ISO 8601. 2023-03-23T10:15:15.000Z по Гринвичу
	}
	// 🔹 ⁡⁣⁢⁢Кастомное:⁡
	{
		const date = new Date();
		const pad = (num) => num.toString().padStart(2, "0");
		`${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
		// "24.06.2025"
		date.getHours(); // Текущий час
		date.getMinutes(); // Текущая минута
		date.getSeconds(); // Текущая секунда
		date.getMilliseconds(); // Текущая милисекунда
		deys[date.getDay()]; // Текущий день недели цифра 0 - Воскресенье
		date.getDate(); // Текущее число
		months[date.getMonth()]; // Текщий месяц цифра 0 - январь
		date.getFullYear(); // Текущий год
		months = [
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
		];
		deys = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	}
	// 🔹 ⁡⁣⁢⁢Установка времени к началу дня у даты ISO формат⁡
	{
		let date = new Date("Sun Jun 22 2025 18:41:21 GMT+0500 (Екатеринбург, стандартное время)");
		date.setUTCHours(-5, 0, 0, 0);
		console.log(date); // Sun Jun 22 2025 00:00:00 GMT+0500 (Екатеринбург, стандартное время)
	}
}
// 🔳 ⁡⁢⁣⁣ПАРСИНГ ДАТ⁡
{
	Date.parse("2025-06-24T12:30:15Z"); // Unix timestamp (мс) 1750768215000
	// Возвращает NaN при ошибке
}
// 🔳 ⁡⁢⁣⁡⁢⁣⁣UNIX TIMESTAMP()⁡
{
	const date = new Date();
	const timestamp = Date.now(); // Текущий timestamp (мс) 1750765571101
	date.getTime(); // Timestamp конкретной даты 1750765441876
	date.valueOf(); // Аналогично getTime() 1750765511512
}
// 🔳 ⁡⁢⁣⁣СРАВНЕНИЕ ДАТ⁡
{
	const date1 = new Date(2025, 5, 24);
	const date2 = new Date(2025, 5, 25);
	// Сравнение через timestamp
	date1.getTime() === date2.getTime(); // false
	date1 < date2; // true
}
// 🔳 ⁡⁢⁣⁣АРИФМЕТИКА ДАТ⁡
{
	// 🔹 ⁡⁣⁢⁢Изменение даты:⁡
	{
		// Добавить 5 дней
		date.setDate(date.getDate() + 5);
		// Вычесть 2 месяца
		date.setMonth(date.getMonth() - 2);
	}
	// 🔹 ⁡⁣⁢⁢Разница между датами:⁡
	{
		// const date1 = new Date(2025, 5, 24);
		// const date2 = new Date(2025, 5, 25);
		const diffMs = date2 - date1; // Разница в миллисекундах
		const diffDays = diffMs / (1000 * 60 * 60 * 24); // Дни
	}
} 
// 🔳 ⁡⁢⁣⁣ЧАСОВЫЕ ПОЯСА⁡
{
	// Локальное время → UTC
	date.toISOString(); // "2025-06-24T09:30:15.000Z" (UTC)
	// UTC → Локальное (парсинг)
	new Date("2025-06-24T12:30:15+03:00"); // С указанием смещения
	// Текущий сдвиг (в минутах)
	date.getTimezoneOffset(); // -180 (UTC+3), -300 (UTC+5)
	date.getTimezoneOffset() / -60; // 3 (UTC+3), 5 (UTC+5)
}
// 🔳 ⁡⁢⁣⁣БИБЛИОТЕКИ (кратко)⁡
{
	// 🔹 ⁡⁣⁢⁢Moment.js (устаревший): moment().format("DD.MM.YYYY");⁡
	// 🔹 ⁡⁣⁢⁢Luxon: DateTime.now().toFormat("dd.MM.yyyy");⁡
	// 🔹 ⁡⁣⁢⁢date-fns (модульный): format(new Date(), "dd.MM.yyyy");⁡
}
// 🔳 ⁡⁢⁣⁣ВАЖНЫЕ НЮАНСЫ⁡
{
	// Корректный ISO формат
	new Date("2025-06-24T12:30:15+03:00");
	// Рискованно (зависит от браузера)
	new Date("June 24, 2025");
}