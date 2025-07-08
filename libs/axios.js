
// ⁡⁣⁣⁢AXIOS — это популярная JavaScript-библиотека для выполнения HTTP-запросов, работающая как в браузере, так и в Node.js. Она предоставляет простой API для работы с XMLHttpRequest (в браузере) и http-модулем (в Node.js).⁡
// ⁡⁢⁣⁣ОСНОВНЫЕ ВОЗМОЖНОСТИ AXIOS⁡
{
	// ⁡⁣⁣⁢- Поддержка всех HTTP-методов: GET, POST, PUT, DELETE и др.⁡
	// ⁡⁣⁣⁢- Автоматическая трансформация данных: JSON в объекты и обратно⁡
	// ⁡⁣⁣⁢- Перехватчики запросов и ответов (interceptors)⁡
	// ⁡⁣⁣⁢- Отмена запросов⁡
	// ⁡⁣⁣⁢- Защита от XSRF (Cross-Site Request Forgery)⁡
	// ⁡⁣⁣⁢- Поддержка Promise API⁡
	// ⁡⁣⁣⁢- Поддержка async/await⁡
	// ⁡⁣⁣⁢- Прогресс загрузки (для загрузки файлов)⁡
}
// ⁡⁢⁣⁣УСТАНОВКА⁡
{
    // npm install axios
    // # или
    // yarn add axios
}
// ⁡⁢⁣⁣БАЗОВОЕ ИСПОЛЬЗОВАНИЕ⁡
{
	// ⁡⁣⁣⁢GET-запрос⁡
	{
		// import axios from "axios";
		// Простой GET-запрос
		axios
			.get("https://api.example.com/users")
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error("Ошибка:", error);
			});
		// С параметрами
		axios.get("https://api.example.com/users", {
			params: {
				page: 2,
				limit: 10,
			},
		});
	}
    // ⁡⁣⁣⁢POST-запрос⁡
    {
        axios
			.post("https://api.example.com/users", {
				name: "John Doe",
				email: "john@example.com",
			})
			.then((response) => {
				console.log(response.data);
			});
    }
}
// ⁡⁢⁣⁣ПРОДВИНУТЫЕ ВОЗМОЖНОСТИ⁡
{
	// ⁡⁣⁣⁢Конфигурация экземпляра Axios⁡
	{
		const api = axios.create({
			baseURL: "https://api.example.com",
			timeout: 1000,
			headers: { "X-Custom-Header": "foobar" },
		});
		// Использование
		api.get("/users");
	}
	// ⁡⁣⁣⁢Перехватчики (Interceptors)⁡
	{
		// Добавление токена авторизации к каждому запросу
		api.interceptors.request.use(
			(config) => {
				const token = localStorage.getItem("token");
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			},
		);
		// Обработка ошибок
		api.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				if (error.response.status === 401) {
					// Перенаправление на страницу входа
				}
				return Promise.reject(error);
			},
		);
	}
	// ⁡⁣⁣⁢Отмена запросов⁡
	{
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		axios
			.get("/users", {
				cancelToken: source.token,
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) {
					console.log("Запрос отменен", thrown.message);
				} else {
					// Обработка ошибки
				}
			});
		// Отмена запроса
		source.cancel("Операция отменена пользователем");
	}
    // ⁡⁣⁣⁢Загрузка файлов с прогрессом⁡
    {
        const formData = new FormData();
		formData.append("file", fileInput.files[0]);
		axios.post("/upload", formData, {
			onUploadProgress: (progressEvent) => {
				const percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total,
				);
				console.log(percentCompleted);
			},
		});
    }
}
// ⁡⁢⁣⁣ПРИНЦИПЫ РАБОТЫ AXIOS⁡
{
	// ⁡⁣⁣⁢- ⁡⁣⁢⁢Адаптивный подход⁡: ⁡⁣⁣⁢Axios автоматически определяет среду выполнения (браузер или Node.js) и использует соответствующий механизм для HTTP-запросов.⁡
	// ⁡⁣⁣⁢- ⁡⁣⁢⁢Трансформация данных⁡: ⁡⁣⁣⁢Axios автоматически преобразует данные запроса и ответа⁡
	// ⁡⁢⁢⁢-- Преобразует объекты JavaScript в JSON при отправке⁡
	// ⁡⁢⁢⁢-- Парсит JSON-ответы в объекты JavaScript⁡
	// ⁡⁢⁢⁢-- Поддерживает другие форматы (FormData, ArrayBuffer и т.д.)⁡
	// ⁡⁣⁣⁢- ⁡⁣⁢⁢Механизм перехватчиков⁡: ⁡⁣⁣⁢Позволяет модифицировать запросы и ответы на глобальном уровне.⁡
	// - ⁡⁣⁢⁢Отмена запросов⁡ ⁡⁣⁣⁢Реализована через CancelToken, что позволяет прерывать запросы при необходимости.⁡
	// - ⁡⁣⁢⁢Защита от XSRF⁡ ⁡⁣⁣⁢Axios может автоматически включать токены XSRF в запросы.⁡
}
// ⁡⁢⁣⁣ПРИМЕР ИСПОЛЬЗОВАНИЯ В REACT-ПРИЛОЖЕНИИ⁡
{
    // import React, { useState, useEffect } from "react";
	// import axios from "axios";

	const UserList = () => {
		const [users, setUsers] = useState([]);
		const [loading, setLoading] = useState(false);
		const [error, setError] = useState(null);
		useEffect(() => {
			const source = axios.CancelToken.source();
			const fetchUsers = async () => {
				try {
					setLoading(true);
					const response = await axios.get("https://api.example.com/users", {
						cancelToken: source.token,
					});
					setUsers(response.data);
				} catch (err) {
					if (!axios.isCancel(err)) {
						setError(err.message);
					}
				} finally {
					setLoading(false);
				}
			};
			fetchUsers();
			return () => {
				source.cancel("Компонент размонтирован");
			};
		}, []);
		if (loading) return <div>Загрузка...</div>;
		if (error) return <div>Ошибка: {error}</div>;
		return (
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		);
	};
}
// ⁡⁢⁣⁣ПРЕИМУЩЕСТВА AXIOS⁡
{
	// ⁡⁣⁢⁢Удобный API⁡ ⁡⁣⁣⁢Проще в использовании, чем нативный Fetch API⁡
	// ⁡⁣⁢⁢Кросс-браузерность⁡ ⁡⁣⁣⁢Работает во всех современных браузерах⁡
	// ⁡⁣⁢⁢Поддержка Node.js⁡ ⁡⁣⁣⁢Можно использовать для серверных запросов⁡
	// ⁡⁣⁢⁢Расширяемость⁡ ⁡⁣⁣⁢Перехватчики, кастомизация и т.д⁡
	// ⁡⁣⁢⁢Поддержка TypeScript⁡ ⁡⁣⁣⁢Имеет встроенные типы для TypeScript⁡
}