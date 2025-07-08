// 🔳 ⁡⁢⁣⁣ТИПИЗАЦИЯ C СУЖАЕМ ТИП
{
    // 🔹 ⁡⁣⁢⁡⁣⁢⁢Применение литерального типа и применение in⁡
    {
		// Определяем интерфейс для пользователя с ролью администратора
		interface Admin {
			name: string;
			age: number;
			role: "admin"; // строка "admin" как литеральный тип
		}
		// Определяем интерфейс для обычного пользователя
		interface User {
			name: string;
			age: number;
			occupation: string; // род занятий (любая строка)
		}
		// Создаем тип Person, который может быть либо Admin, либо User
		type Person = Admin | User;
		// Массив persons, содержащий объекты, соответствующие типу Person
		const persons: Person[] = [
			{
				name: "Иван",
				age: 8,
				role: "admin", // соответствует интерфейсу Admin
			},
			{
				name: "Александр",
				age: 16,
				occupation: "user", // соответствует интерфейсу User
			},
			{
				name: "Максим",
				age: 19,
				occupation: "user", // соответствует интерфейсу User
			},
			{
				name: "Андрей",
				age: 55,
				role: "admin", // соответствует интерфейсу Admin
			},
		];
		// Функция для логирования информации о человеке
		function logPerson(person: Person) {
			let additionalInformation: string;
			// Проверяем, есть ли свойство role (сужаем тип до Admin)
			if ("role" in person) {
				additionalInformation = person.role;
			}
			// Иначе предполагаем, что это User
			else {
				additionalInformation = person.occupation;
			}
			console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
		}
	}
}
// 🔳 ⁡⁢⁣⁣ПРОЛУЧЕНИЕ ДВУХ ТИПОВ ДАННЫХ ИX ОБЪЕДИНЕНИЕ И СОЗДАНИЕ КЛЮЧА В ВИДЕ ДАТЫ⁡
{
    // 🔹 ⁡⁣⁢⁢Задача 1⁡
    {
		interface DateTimeInterface {
			settingTime(date: Date, format?: number[]): Date;
		}
		const DateTime: DateTimeInterface = {
			settingTime(date, ar = [0, 0, 0, 0]) {
				const result = new Date(date);
				result.setHours(ar[0], ar[1], ar[2], ar[3]);
				return result;
			},
		};
		// Эндпоинд GET "/rooms" возвращает IRoom[]
		// Эндпоинд GET "/messages" возвращает IMessage[]
		// Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням
		// Интерфейс описывает структуру объекта "Комната"
		interface IRoom {
			id: number; // Уникальный числовой идентификатор комнаты
			name: string; // Название комнаты
			type: string; // Тип комнаты (например, "private", "public")
		}
		// Интерфейс описывает структуру объекта "Сообщение"
		interface IMessage {
			roomId: IRoom["id"]; // Ссылка на ID комнаты (тип number)
			id: number; // Уникальный идентификатор сообщения
			text: string; // Текст сообщения
			ts: Date; // Временная метка сообщения
		}
		// Новый тип для обработанного сообщения
		type ProcessedMessage = Omit<IMessage, "roomId"> & {
			// Omit Удаляет поле roomId из IMessage
			roomName: IRoom["name"]; // Добавляем новое поле с названием комнаты (тип string)
		};
		// Тип для структуры данных обработанных сообщений: Record
		type ProcessData = Record<string, ProcessedMessage[]>;
		// Record - ⁢Создаёт тип с ключами string и значениями ProcessedMessage[]
		// При этом строковый ключ - ISO представление даты начала для ("2022-06-23T00:00:00")
		// Пример результата:
		const exp = {
			"2022-03-23T00:00:00": [
				{
					roomName: "room name", // Название комнаты из rooms
					id: 1,
					text: "Солнце или выполнение поездок на основе слепого приветственного варианта, чтобы найти ошибку",
					ts: "thu Mar 23 2023 12:15:15 GMT+0200 (Восточная европа стандартное время)",
				},
			],
		};
		async function processMessages() {
			// 1. Получаем данные с сервера
			const rooms: IRoom[] = await fetch("http://localhost:3002/rooms").then((res) =>
				res.json(),
			);
			const messages: IMessage[] = await fetch("http://localhost:3002/messages").then((res) =>
				res.json(),
			);
			// 2. Создаем карту(Объект) комнат для быстрого доступа по ID
			const roomMap = new Map<IRoom["id"], IRoom["name"]>();
			let key = [];
			rooms.forEach((room) => {
				roomMap.set(room.id, room.name);
				key.push(room.id); // Ключи для доступа к комнатам
			});
			const processingMessages = []; // Мутируемый объект в результат
			const dataKey = [];
			messages.forEach((item, i) => {
				dataKey.push(item.ts);
				processingMessages.push({
					roomName: roomMap.get(key[i]),
					id: item.id,
					text: item.text,
					ts: item.ts,
				});
			});
			// Функция перевода даты в ISO и начало суток с обрезанием часового пояса
			const nowData = (key: string[]): string[] => {
				return key.map((el) =>
					DateTime.settingTime(new Date(el), [-5, 0, 0, 0]).toISOString().slice(0, -5),
				);
			};
			// 3. Обрабатываем сообщения и группируем по дням
			let result: ProcessData = {}; // Итоговый объект
			processingMessages.forEach((msg, i) => {
				result[nowData(dataKey)[i]] = msg; // Новый мутированный ключ с новым мутированным объектом
			});
			return result;
		}
		const res = await processMessages();
		console.log(res);
	}
}
// 🔳 ⁡⁢⁣⁣ТИПИЗАЦИЯ ФУНКЦИИ ПРИ ПОМОЩИ ДЖЕНЕРИКОВ⁡
{
    // 🔹 ⁡⁣⁢⁢Функция аргументы объект, ключ, вернуть ключ, объект⁡
    {
		interface User {
			name: string;
			age?: number;
		}

		function getObjectProperty<T extends object, K extends keyof T>(target: T, key: K) {
			// Проверяем наличие свойства в объекте (включая цепочку прототипов)
			if (!(key in target)) {
				// Генерируем понятную ошибку с именем свойства
				throw new Error(`Property "${String(key)}" не существует в целевом объекте`);
			}

			// Возвращаем значение свойства
			return target[key];
		}

		const user = {
			name: "test",
			age: 10,
		};

		getObjectProperty(user, "age");
		// getObjectProperty(user, "wrond"); // здесь должна быть ошибка
	}
}
// 🔳 
// 🔳 
export {};    
