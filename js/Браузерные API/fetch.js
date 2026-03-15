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
	 * ⁡⁣⁣⁢Универсальная функция для API запросов⁡
	 * @param {string} url - Адрес запроса
	 * @param {string} method - Метод (GET, POST, PUT, DELETE)
	 * @param {object} data - Данные для отправки (для POST/PUT)
	 * @param {object} headers - Дополнительные заголовки
	 */
	async function apiRequest(url, method = "GET", data = null, headers = {}) {
		const startTime = performance.now();
		const callerInfo = getCallerInfo();
		const config = {
			method: method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
		};
		if (data && method !== "GET") {
			config.body = JSON.stringify(data);
		}
		console.log(`📡 [API] ${method} ${url}`);
		console.log(`📍 Вызов из: ${callerInfo.file}:${callerInfo.line}`);

		try {
			const response = await fetch(url, config);
			const duration = (performance.now() - startTime).toFixed(2);
			console.log(`⏱ Время ответа: ${duration}ms`);
			console.log(`📊 Статус: ${response.status} ${response.statusText}`);
			if (!response.ok) {
				let errorMessage = "";
				let ErrorClass = APIError;

				// Расшифровка статусов
				switch (response.status) {
					case 400:
						errorMessage = "❌ Неверный запрос (Bad Request)";
						break;
					case 401:
						errorMessage = "🔒 Неавторизован (Unauthorized)";
						ErrorClass = UnauthorizedError;
						break;
					case 403:
						errorMessage = "🚫 Доступ запрещён (Forbidden)";
						ErrorClass = ForbiddenError;
						break;
					case 404:
						errorMessage = "📄 Страница не найдена (Not Found)";
						ErrorClass = NotFoundError;
						break;
					case 409:
						errorMessage = "⚠️ Конфликт (Conflict)";
						break;
					case 422:
						errorMessage = "📋 Ошибка валидации (Unprocessable Entity)";
						break;
					case 429:
						errorMessage = "🕐 Слишком много запросов (Too Many Requests)";
						break;
					case 500:
						errorMessage = "💥 Внутренняя ошибка сервера (Internal Server Error)";
						ErrorClass = ServerError;
						break;
					case 502:
						errorMessage = "🔄 Ошибка шлюза (Bad Gateway)";
						ErrorClass = ServerError;
						break;
					case 503:
						errorMessage = "⏸ Сервер недоступен (Service Unavailable)";
						ErrorClass = ServerError;
						break;
					default:
						errorMessage = `⚠️ HTTP ошибка ${response.status}`;
				}
				// Попытка получить детальное сообщение от сервера
				let serverMessage = "";
				try {
					const errorData = await response.json();
					serverMessage =
						errorData.message || errorData.error || JSON.stringify(errorData);
				} catch {
					serverMessage = await response.text().slice(0, 200);
				}
				const fullMessage = `${errorMessage}${serverMessage ? `: ${serverMessage}` : ""}`;
				const error = new ErrorClass(
					fullMessage,
					response.status,
					response.statusText,
					url,
					method,
				);
				// Логируем детали ошибки
				console.error("❗ Ошибка API:", {
					message: fullMessage,
					status: response.status,
					url: url,
					method: method,
					caller: callerInfo,
					timestamp: error.timestamp,
					serverResponse: serverMessage || "Нет данных",
				});
				throw error;
			}
			// Обработка тела ответа
			const text = await response.text();
			const result = text ? JSON.parse(text) : null;
			console.log(`✅ Успешно: ${method} ${url}`);
			return result;
		} catch (error) {
			const duration = (performance.now() - startTime).toFixed(2);
			// Сетевая ошибка
			if (error.name === "TypeError" && error.message.includes("fetch")) {
				const networkError = new NetworkError(
					"🌐 Ошибка сети. Проверьте подключение к интернету.",
					url,
					method,
				);
				console.error("❗ Сетевая ошибка:", {
					message: networkError.message,
					url: url,
					method: method,
					caller: callerInfo,
					timestamp: networkError.timestamp,
				});
				throw networkError;
			}
			// Ошибка таймаута
			if (error.name === "AbortError") {
				console.warn("⏳ Запрос отменён:", { url, method, caller: callerInfo });
				throw error;
			}
			// Ошибка парсинга JSON
			if (error instanceof SyntaxError) {
				console.error("❗ Ошибка парсинга JSON:", {
					message: "Неверный формат ответа от сервера",
					url: url,
					caller: callerInfo,
				});
				throw new Error(`Ошибка парсинга JSON: ${error.message}`);
			}
			// Перепроксируем остальные APIError
			if (error instanceof APIError) {
				throw error;
			}
			// Неизвестная ошибка
			console.error("❗ Неизвестная ошибка:", {
				message: error.message,
				stack: error.stack,
				url: url,
				method: method,
				caller: callerInfo,
				duration: `${duration}ms`,
			});
			throw error;
		}
	}
	// ⁡⁣⁣⁢----- Базовый класс для API ошибок -----⁡
	class APIError extends Error {
		constructor(message, status, statusText, url, method) {
			super(message);
			this.name = "APIError";
			this.status = status;
			this.statusText = statusText;
			this.url = url;
			this.method = method;
			this.timestamp = new Date().toISOString();

			// Получаем информацию о стеке (файл и строка)
			if (Error.captureStackTrace) {
				Error.captureStackTrace(this, APIError);
			}
		}

		// Метод для получения информации о месте ошибки
		getErrorLocation() {
			const stack = this.stack;
			if (!stack) return "Недоступно";

			// Извлекаем первую строку стека после имени ошибки
			const stackLine = stack.split("\n")[1];
			const match = stackLine.match(/at\s+(.+)\s+\((.+):(\d+):(\d+)\)/);

			if (match) {
				return {
					function: match[1],
					file: match[2],
					line: match[3],
					column: match[4],
				};
			}
			return { raw: stackLine };
		}
	}
	// ⁡⁣⁣⁢----- Специфичные классы ошибок для разных статусов -----⁡
	class NotFoundError extends APIError {
		constructor(...args) {
			super(...args);
			this.name = "NotFoundError";
		}
	}
	class UnauthorizedError extends APIError {
		constructor(...args) {
			super(...args);
			this.name = "UnauthorizedError";
		}
	}
	class ForbiddenError extends APIError {
		constructor(...args) {
			super(...args);
			this.name = "ForbiddenError";
		}
	}
	class ServerError extends APIError {
		constructor(...args) {
			super(...args);
			this.name = "ServerError";
		}
	}
	class NetworkError extends Error {
		constructor(message, url, method) {
			super(message);
			this.name = "NetworkError";
			this.url = url;
			this.method = method;
			this.timestamp = new Date().toISOString();

			if (Error.captureStackTrace) {
				Error.captureStackTrace(this, NetworkError);
			}
		}
	}
	// ⁡⁣⁣⁢----- Функция для получения информации о месте вызова -----⁡
	function getCallerInfo() {
		const stack = new Error().stack;
		if (!stack) return { file: "unknown", line: "unknown" };

		// Третья строка стека — место вызова apiRequest
		const lines = stack.split("\n");
		const callerLine = lines[3]; // [0] - Error, [1] - getCallerInfo, [2] - apiRequest, [3] - вызывающая функция

		const match = callerLine.match(/at\s+(.+)\s+\((.+):(\d+):(\d+)\)/);

		if (match) {
			return {
				function: match[1],
				file: match[2].replace(window.location.origin, ""), // Убираем домен для читаемости
				line: match[3],
				column: match[4],
			};
		}

		return { file: "unknown", line: "unknown", raw: callerLine };
	}
	// --- Пример использования ---
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
	// ⁡⁣⁣⁢---- Функция вызова ----⁡
	async function testAPI() {
		try {
			// Успешный запрос
			const posts = await apiRequest("https://jsonplaceholder.typicode.com/posts");
			console.log("✅ Посты получены:", posts.length);

			// 404 ошибка
			await apiRequest("https://jsonplaceholder.typicode.com/posts/999999");
		} catch (error) {
			console.error("Обработка в вызывающем коде:", {
				name: error.name,
				message: error.message,
				status: error.status,
				location: error.getErrorLocation?.(),
			});
			// Пример обработки по типу ошибки
			if (error instanceof NotFoundError) {
				alert("⚠️ Ресурс не найден");
			} else if (error instanceof UnauthorizedError) {
				alert("⚠️ Требуется авторизация");
				// window.location.href = '/login';
			} else if (error instanceof NetworkError) {
				alert("🌐 Проверьте подключение к интернету");
			}
		}
	}
	testAPI();
	// ⁡⁣⁣⁢----- Вывод в консоль (пример) -----⁡
	`📡 [API] GET https://jsonplaceholder.typicode.com/posts/999999
        📍 Вызов из: /app.js:125
        ⏱ Время ответа: 245.32ms
        📊 Статус: 404 Not Found
        ❗ Ошибка API: {
        message: "📄 Страница не найдена (Not Found)",
        status: 404,
        url: "https://jsonplaceholder.typicode.com/posts/999999",
        method: "GET",
        caller: { function: "testAPI", file: "/app.js", line: "125", column: "10" },
        timestamp: "2024-01-15T10:30:45.123Z",
        serverResponse: "{}"`;
	// ⁡⁣⁣⁢----- Повторные попытки при ошибке -----⁡
	async function apiRequestWithRetry(url, method = "GET", data = null, maxRetries = 3) {
		for (let i = 0; i < maxRetries; i++) {
			try {
				return await apiRequest(url, method, data);
			} catch (error) {
				if (i === maxRetries - 1) throw error;
				if (error.status >= 500) {
					console.warn(`🔄 Попытка ${i + 1} не удалась, повтор...`);
					await new Promise((res) => setTimeout(res, 1000 * (i + 1)));
				} else {
					throw error;
				}
			}
		}
	}
    // ⁡⁣⁣⁢----- Логирование в файл (для продакшена) -----⁡
    async function logErrorToFile(error, context = {}) {
		const logEntry = {
			timestamp: new Date().toISOString(),
			error: {
				name: error.name,
				message: error.message,
				stack: error.stack,
				status: error.status,
			},
			context: {
				url: error.url,
				method: error.method,
				caller: error.getErrorLocation?.(),
				...context,
			},
		};

		await fetch("/api/logs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(logEntry),
		});
	}
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