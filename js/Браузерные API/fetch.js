//! FETCH() API
// 🔳 ⁡⁢⁣⁣БАЗОВЫЙ GET-ЗАПРОС (Получение данных)⁡
{
	// ⭐ ⁡⁣⁣⁢Самый простой способ получить данные с сервера.⁡
	// URL, к которому мы обращаемся
	const url = "https://jsonplaceholder.typicode.com/posts/1";

	// fetch возвращает Промис, который разрешается в объект Response
	fetch(url)
		.then((response) => {
			// ВАЖНО: fetch не выбрасывает ошибку при 404 или 500.
			// Он выбрасывает ошибку только при разрыве сети.
			// Поэтому нужно вручную проверить статус ответа.
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response;
		})
		.then((response) => {
			// response.json() тоже возвращает Промис, так как чтение тела потока асинхронно
			return response.json(); // Парсим из json объекта в js объекты
		})
		.then((data) => {
			// Здесь у нас уже готовые JavaScript-объекты
			console.log("Полученные данные:", data);
		})
		.catch((error) => {
			// Ловим ошибки сети или ошибки, выброшенные вручную выше
			console.error("Ошибка запроса:", error);
		});
}
// 🔳 ⁡⁢⁣⁣СОВРЕМЕННЫЙ СИНТАКСИС (Async/Await)⁡
{
    // ⭐ ⁡⁣⁣⁢Сейчас это предпочтительный способ написания кода. Он выглядит более линейным и понятным.⁡
    async function getData() {
		try {
			const url = "https://jsonplaceholder.typicode.com/posts/1";
			// Ждем завершения запроса
			const response = await fetch(url);
			// Проверка статуса HTTP (200-299 — успех)
			if (!response.ok) {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
			// Ждем парсинга JSON
			const data = await response.json();
			console.log("Данные:", data);
		} catch (error) {
			// Обрабатываем любые ошибки (сеть или логические)
			console.error("Произошла ошибка:", error);
		}
	}
	getData();
}
// 🔳 ⁡⁢⁣⁣POST-запрос (Отправка данных)⁡
{
    // ⭐ ⁡⁣⁣⁢Чтобы отправить данные на сервер (например, форму или JSON), нужно настроить параметры запроса.⁡
    async function sendData() {
		const url = "https://jsonplaceholder.typicode.com/posts";
		// Данные, которые мы хотим отправить
		const newData = {
			title: "Заголовок",
			body: "Статья",
			userId: 1,
		};
		try {
			const response = await fetch(url, {
				method: "POST", // Метод запроса
				headers: {
					// Указываем, что отправляем JSON
					"Content-Type": "application/json",
					// Здесь можно добавить токены авторизации, например:
					// 'Authorization': 'Bearer my-token'
				},
				// Тело запроса. Объект нужно превратить в строку
				body: JSON.stringify(newData),
			});
			if (!response.ok) {
				throw new Error(`Ошибка при отправке: ${response.status}`);
			}
			const result = await response.json();
			console.log("Сервер ответил:", result);
		} catch (error) {
			console.error("Ошибка:", error);
		}
	}
	sendData();
} 
// 🔳 ⁡⁢⁣⁣РАБОТА С ЗАГОЛОВКАМИ (Headers)⁡
{
    // ⭐ ⁡⁣⁣⁢Часто нужно передать заголовки для авторизации или указания формата.⁡
    const token = "my-secret-token-123";
	fetch("https://api.example.com/protected-data", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`, // Стандартный формат токена
			"X-Custom-Header": "MyValue", // Кастомный заголовок
		},
	})
		.then((res) => res.json())
		.then(console.log);
}
// 🔳 ⁡⁢⁣⁣ОТМЕНА ЗАПРОСА (AbortController)⁡
{
	// ⭐ ⁡⁣⁣⁢Иногда нужно отменить запрос (например, пользователь ушел со страницы до того, как данные загрузились). fetch поддерживает это через AbortController.⁡
	// Создаем контроллер
	const controller = new AbortController();
	const signal = controller.signal;
	// Передаем signal в fetch
	fetch("https://jsonplaceholder.typicode.com/posts", { signal })
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => {
			// Проверяем, была ли ошибка вызвана отменой
			if (error.name === "AbortError") {
				console.log("Запрос был отменен");
			} else {
				console.error("Другая ошибка:", error);
			}
		});
	// Отменяем запрос через 1 секунду (для примера)
	setTimeout(() => {
		controller.abort();
	}, 1000);
}
// 🔳 ⁡⁢⁣⁣ПОЛНЫЙ ПРИМЕР: УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ЗАПРОСА⁡
{
	// ⭐ ⁡⁣⁣⁢В реальных проектах удобно создать обертку над fetch, чтобы не повторять код проверки ошибок и заголовков.⁡
	/**
	 * Универсальная функция для API запросов
	 * @param {string} url - Адрес запроса
	 * @param {string} method - Метод (GET, POST, PUT, DELETE)
	 * @param {object} data - Данные для отправки (для POST/PUT)
	 * @param {object} headers - Дополнительные заголовки
	 */
	async function apiRequest(url, method = "GET", data = null, headers = {}) {
		// Базовые настройки
		const config = {
			method: method,
			headers: {
				"Content-Type": "application/json",
				...headers, // Добавляем пользовательские заголовки поверх базовых
			},
		};
		// Если есть данные и метод не GET, добавляем тело
		if (data && method !== "GET") {
			config.body = JSON.stringify(data);
		}
		try {
			const response = await fetch(url, config);
			// Глобальная проверка на успех HTTP
			if (!response.ok) {
				// Пытаемся получить текст ошибки от сервера, если есть
				const errorText = await response.text().catch(() => "Неизвестная ошибка");
				throw new Error(`Ошибка ${response.status}: ${errorText}`);
			}
			// Пытаемся распарсить JSON. Если ответ пустой (например, 204 No Content), вернем null
			const text = await response.text();
			return text ? JSON.parse(text) : null;
		} catch (error) {
			// Логирование или перенаправление ошибки выше
			console.error("API Request failed:", error);
			throw error; // Пробрасываем ошибку дальше, чтобы обработать в UI
		}
	}
	// --- Использование функции ---
	async function main() {
		try {
			// 1. Получить список постов
			const posts = await apiRequest("https://jsonplaceholder.typicode.com/posts");
			console.log("Посты:", posts);
			// 2. Создать новый пост
			const newPost = await apiRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
				title: "Новый заголовок",
				body: "Текст поста",
				userId: 1,
			});
			console.log("Созданный пост:", newPost);
		} catch (err) {
			alert("Произошла ошибка при работе с данными");
		}
	}
	main();
}
// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ ОТЛИЧИЯ И НЮАНСЫ fetch()⁡
{
	// ☑️ ⁡⁣⁢⁢Ошибки HTTP: fetch не считает ошибкой статусы 404 или 500. Промис выполнится успешно (then), но в response.ok будет false. Проверять статус нужно вручную.⁡
	// ☑️ ⁡⁣⁢⁢Куки (Cookies): По умолчанию fetch не отправляет куки на другие домены. Чтобы отправить куки, нужно добавить опцию:⁡
	{
		fetch(url, { credentials: "include" });
		// ✅ omit (по умолчанию): не отправлять куки.
		// ✅ same-origin: отправлять куки только для своего домена.
		// ✅ include: всегда отправлять куки (нужно для CORS с авторизацией).
	}
	// ☑️ ⁡⁣⁢⁢CORS: Если вы делаете запрос с localhost:3000 на api.server.com, браузер заблокирует запрос, если сервер не разрешит это через заголовки CORS. Это настройка сервера, а не fetch.⁡
	// ☑️ ⁡⁣⁢⁢Таймаут: У fetch нет встроенной настройки таймаута. Для этого нужно комбинировать fetch с AbortController и setTimeout (как в примере №5).⁡
}
// 🔳 ⁡⁢⁣⁣КРАТКАЯ ШПАРГАЛКА ПО ОБЪЕКТУ Response⁡
{
	// ⭐ ⁡⁣⁣⁢После выполнения await fetch() вы получаете объект response. Самые полезные свойства:⁡
	// ☑️ response.ok ⁡⁣⁣⁢— true, если статус в диапазоне 200-299.⁡
	// ☑️ response.status ⁡⁣⁣⁢— код статуса (200, 404, 500...).⁡
	// ☑️ response.headers ⁡⁣⁣⁢— объект заголовков ответа.⁡
	// ☑️ response.json() ⁡⁣⁣⁢— парсит тело как JSON (возвращает Промис).⁡
	// ☑️ response.text() ⁡⁣⁣⁢— получает тело как строку (возвращает Промис).⁡
	// ☑️ response.blob() ⁡⁣⁣⁢— для получения файлов/картинок.⁡
}