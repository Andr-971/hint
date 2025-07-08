
// ⁡⁣⁣⁢Superagent — это легковесная и удобная JavaScript-библиотека для выполнения HTTP-запросов. Она работает как в браузере, так и в Node.js, предоставляя простой и цепной (chaining) API для работы с RESTful API, загрузки файлов и обработки ответов.⁡
// 🔹 ⁡⁢⁣⁣ОСНОВНЫЕ ВОЗМОЖНОСТИ⁡
{
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Простой и понятный API (цепочки методов, как в jQuery)⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Поддержка Promise и async/await⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Автоматический парсинг JSON⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Загрузка файлов (мультипарт-формы)⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Поддержка плагинов и расширений⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Кросс-браузерная совместимость⁡
	// ⁡⁢⁢⁢✔⁡ ⁡⁣⁣⁢Легковесность (~6 КБ в минифицированном виде)⁡
}
// 🔹 ⁡⁢⁣⁣УСТАНОВКА⁡
{
	// ⁡⁣⁣⁢- В браузере (через CDN)⁡
	<script src="https://cdn.jsdelivr.net/npm/superagent"></script>;
    // ⁡⁣⁣⁢- В Node.js (через npm)⁡
    // npm install superagent
    // # или
    // yarn add superagent
}
// 🔹 ⁡⁢⁣⁣БАЗОВОЕ ИСПОЛЬЗОВАНИЕ⁡
{
    // ⁡⁣⁢⁢1. GET-запрос⁡
    {
        const superagent = require("superagent");
        // Простой GET-запрос
        superagent
            .get("https://api.example.com/users")
            .then((response) => {
                console.log(response.body); // Автоматически парсит JSON
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
        // С параметрами
        superagent
            .get("https://api.example.com/users")
            .query({ page: 2, limit: 10 }) // ?page=2&limit=10
            .then((response) => console.log(response.body));
    }
    // ⁡⁣⁢⁢2. POST-запрос (отправка JSON)⁡
    {
        superagent
            .post("https://api.example.com/users")
            .send({ name: "John", age: 30 }) // Автоматически сериализует в JSON
            .then((response) => console.log(response.body));
    }
    // ⁡⁣⁢⁢3. PUT и DELETE-запросы⁡
    {
		// PUT (обновление)
		superagent
			.put("https://api.example.com/users/1")
			.send({ name: "Updated Name" })
			.then((response) => console.log("Updated:", response.body));
		// DELETE (удаление)
		superagent
			.delete("https://api.example.com/users/1")
			.then(() => console.log("User deleted"));
	}
}
// 🔹 ⁡⁢⁣⁣ПРОДВИНУТЫЕ ВОЗМОЖНОСТИ⁡
{
	// ⁡⁣⁢⁢1. Заголовки (Headers)⁡
	{
		superagent
			.get("https://api.example.com/private")
			.set("Authorization", "Bearer token123") // Установка заголовка
			.then((response) => console.log(response.body));
	}
	// ⁡⁣⁢⁢2. Обработка ошибок⁡
	{
		// ⁡⁣⁣Superagent автоматически определяет HTTP-ошибки (4xx, 5xx)
		superagent
			.get("https://api.example.com/not-found")
			.then((response) => console.log(response))
			.catch((error) => {
				if (error.response) {
					console.error("HTTP Error:", error.status, error.message);
				} else {
					console.error("Network Error:", error);
				}
			});
	}

	// ⁡⁣⁢⁢3. Загрузка файлов (мультипарт-форма)⁡
	{
		superagent
			.post("https://api.example.com/upload")
			.attach("file", "path/to/file.jpg") // Загрузка файла
			.field("name", "File Name") // Текстовые поля
			.then((response) => console.log("File uploaded:", response.body));
	}
	// ⁡⁣⁢⁢4. Timeout и Retry⁡
	{
		superagent
			.get("https://api.example.com/slow-api")
			.timeout({ response: 5000 }) // Таймаут 5 секунд
			.retry(3) // Повторить 3 раза при ошибке
			.then((response) => console.log(response.body));
	}
    // ⁡⁣⁢⁢5. Использование с async/await⁡
    {
        async function fetchData() {
			try {
				const response = await superagent.get("https://api.example.com/data");
				console.log(response.body);
			} catch (error) {
				console.error("Error:", error);
			}
		}
		fetchData();
    }
}
// 🔹 ⁡⁢⁣⁣ПРИНЦИПЫ РАБОТЫ⁡
{
	// ⁡⁣⁢⁢1. Цепочка методов (Chaining API)⁡
	{
		// ⁡⁣⁣⁢- Superagent использует Fluent Interface, позволяя строить запросы в виде цепочки методов.⁡
		superagent.get(url).query(params).set(headers).then(callback);
	}
	// ⁡⁣⁢⁢2. Автоматический парсинг ответа⁡
	{
		// ⁡⁣⁣⁢- Если сервер возвращает Content-Type: application/json, Superagent автоматически парсит ответ в объект (response.body).⁡
		// ⁡⁣⁣⁢- Для других форматов (текст, бинарные данные) можно использовать response.text или response.body.⁡
	}
    // ⁡⁣⁢⁢3. Адаптация под среду выполнения⁡
    {
		// ⁡⁣⁣⁢- В браузере Superagent использует XMLHttpRequest.⁡
		// ⁡⁣⁣⁢- В Node.js — встроенный модуль http/https.⁡
    }
    // ⁡⁣⁢⁢4. Поддержка плагинов⁡
    {
        // ⁡⁣⁣⁢- Можно расширять функционал с помощью плагинов⁡
        const superagent = require("superagent");
		const prefix = require("superagent-prefix")("/api");
		superagent
			.get("/users")
			.use(prefix) // Добавляет /api перед URL
			.then((response) => console.log(response.body));
	}
}
// 🔹 ⁡⁢⁣⁣СРАВНЕНИЕ С ДРУГИМИ HTTP-БИБЛИОТЕКАМИ⁡
{
    // ⁡⁣⁣⁢БИБЛИОТЕКА	    РАЗМЕР	        API	АВТОПАРСИНГ JSON	    ПОДДЕРЖКА NODE.JS	    ПРОДВИНУТЫЕ ФИЧИ⁡
    // ⁡⁢⁢⁢Superagent	    ~6 КБ	        Цепочка	✅	                ✅	                Загрузка файлов, плагины⁡
    // ⁡⁢⁢⁢Axios	        ~13 КБ	        Promise-based	✅	        ✅	                Перехватчики, отмена запросов⁡
    // ⁡⁢⁢⁢Fetch API	Встроен	Promise-based	❌ (нужен .json())	    ✅ (с Node 18+)	    Базовый функционал⁡
}
// 🔹 ⁡⁢⁣⁣КОГДА ИСПОЛЬЗОВАТЬ SUPERAGENT?⁡
{
	// ✅ ⁡⁣⁣⁢Нужен легковесный HTTP-клиент (меньше зависимостей, чем Axios)⁡
	// ✅ ⁡⁣⁣⁢Проекты с цепочками методов (chaining-style API)⁡
	// ✅ ⁡⁣⁣⁢Загрузка файлов и работа с формами⁡
	// ✅ ⁡⁣⁣⁢Простота и минимальная конфигурация⁡
}
// 🔹 ⁡⁢⁣⁣ПРИМЕР В REACT⁡
{
    // import React, { useState, useEffect } from "react";
	// import superagent from "superagent";

	function UserList() {
		const [users, setUsers] = useState([]);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			superagent
				.get("https://api.example.com/users")
				.then((response) => setUsers(response.body))
				.catch((error) => console.error(error))
				.finally(() => setLoading(false));
		}, []);
		if (loading) return <div>Loading...</div>;
		return (
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		);
	}
}
// 🔹 ⁡⁢⁣⁣ВЫВОД⁡
{
	// ⁡⁣⁣⁢Superagent — отличный выбор для простых и быстрых HTTP-запросов. Он удобен, легковесен и работает везде. Если нужны более сложные функции (кеширование, перехватчики), лучше выбрать Axios. Для современных браузерных проектов можно использовать Fetch API, но Superagent дает более удобный синтаксис.⁡ 🚀
}