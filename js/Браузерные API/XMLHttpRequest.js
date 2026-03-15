//! XMLHttpRequest: ДОКУМЕНТАЦИЯ-ШПАРГАЛКА
// ⁡⁣⁣⁢XMLHttpRequest — встроенный в браузер объект, позволяющий выполнять HTTP-запросы из JavaScript без перезагрузки страницы (AJAX). Несмотря на появление fetch, XHR остаётся актуальным благодаря удобному отслеживанию прогресса отправки и получения данных.⁡
// 🔳 ⁡⁢⁣⁣СОЗДАНИЕ ЭКЗЕМПЛЯРА⁡
{
    const xhr = new XMLHttpRequest();
}
// 🔳 ⁡⁢⁣⁣НАСТРОЙКА ЗАПРОСА – OPEN()⁡
{
	xhr.open(method, url[(_, (async = true[(_, (user = null[(_, (password = null))]))]))]);
	// ☑️ ⁡⁣⁢⁢method – HTTP-метод ('GET', 'POST', 'PUT', 'DELETE' и т.д.)⁡
	// ☑️ ⁡⁣⁢⁢url – строка с адресом запроса⁡
	// ☑️ ⁡⁣⁢⁢async – если false, запрос выполняется синхронно (блокирует интерфейс, использовать крайне редко)⁡
	// ☑️ ⁡⁣⁢⁢user, password – для авторизации (basic auth)⁡
}
// 🔳 ⁡⁢⁣⁣УСТАНОВКА ЗАГОЛОВКОВ – setRequestHeader()⁡
{
	xhr.setRequestHeader(header, value);
	// ⁡⁣⁣⁢Вызывается после open() и до send().⁡
}
// 🔳 ⁡⁢⁣⁣ОТПРАВКА ЗАПРОСА – send()⁡
{
	xhr.send([body]);
	// ☑️ ⁡⁣⁢⁢body – данные, отправляемые на сервер (необязательно). Может быть:⁡
	{
		// ✅ ⁡⁢⁢⁢null (по умолчанию)⁡
		// ✅ ⁡⁢⁢⁢строкой (например, JSON)⁡
		// ✅ ⁡⁢⁢⁢FormData (для отправки форм, включая файлы)⁡
		// ✅ ⁡⁢⁢⁢Blob / ArrayBuffer⁡
		// ✅ ⁡⁢⁢⁢Document (XML)⁡
	}
    // ☑️ ⁡⁣⁢⁢Примеры:⁡
    {
		// GET-запрос
		xhr.open("GET", "/api/users");
		xhr.send();

		// POST с JSON
		xhr.open("POST", "/api/users");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ name: "John" }));

		// Отправка формы (включая файлы)
		const formData = new FormData();
		formData.append("file", fileInput.files[0]);
		xhr.send(formData); // Content-Type установится автоматически
	}
}
// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ СВОЙСТВА⁡
{
	// ⁡⁢⁣⁣СВОЙСТВО	                                    ОПИСАНИЕ⁡
	// ⁡⁣⁣⁢readyState	                                Текущее состояние запроса (0–4)⁡
	// ⁡⁣⁣⁢status	                                    HTTP-код ответа (200, 404, 500 и т.д.)⁡
	// ⁡⁣⁣⁢statusText	                                Текст статуса ('OK', 'Not Found')⁡
	// ⁡⁣⁣⁢responseText	                                Ответ в виде строки (если responseType – '' или 'text')⁡
	// ⁡⁣⁣⁢responseXML	                                Ответ в виде XML-документа (если responseType = 'document')⁡
	// ⁡⁣⁣⁢response	                                    Ответ в формате, заданном responseType⁡
	// ⁡⁣⁣⁢responseType                                 Тип ожидаемого ответа: '' (строка), 'text', 'json', 'document',⁡
	//                                              ⁡⁣⁣⁢'arraybuffer', 'blob'⁡
	// ⁡⁣⁣⁢timeout	                                    Максимальное время ожидания ответа (мс)⁡
	// ⁡⁣⁣⁢withCredentials	                            Флаг – отправлять куки и авторизацию для кросс-доменных запросов⁡
}	
// 🔳 ⁡⁢⁣⁡⁢⁣⁣СОСТОЯНИЯ readyState⁡
{
	// ⁡⁢⁣⁣ЗНАЧЕНИЕ	        СОСТОЯНИЕ	                    ОПИСАНИЕ⁡
	// ⁡⁣⁣⁢0	            UNSENT	                        Создан, open() ещё не вызывался⁡
	// ⁡⁣⁣⁢1	            OPENED	                        Вызван open()⁡
	// ⁡⁣⁣⁢2	            HEADERS_RECEIVED	            Получены заголовки ответа⁡
	// ⁡⁣⁣⁢3	            LOADING	                        Загружается тело ответа⁡
	// ⁡⁣⁣⁢4	            DONE	                        Операция полностью завершена⁡
}
// 🔳 ⁡⁢⁣⁣СОБЫТИЯ⁡
{
	// ☑️ ⁡⁣⁢⁡⁣⁢⁢ОСНОВНЫЕ СОБЫТИЯ ЗАПРОСА⁡
	{
		// ⁡⁢⁣⁣СОБЫТИЕ	                        ОПИСАНИЕ⁡
		// ⁡⁣⁣⁢onreadystatechange	            Срабатывает при каждом изменении readyState⁡
		// ⁡⁣⁣⁢onload	                        Запрос успешно завершён (готов код ответа)⁡
		// ⁡⁣⁣⁢onerror	                        Ошибка сети (не связана с HTTP-кодом)⁡
		// ⁡⁣⁣⁢onprogress	                    Периодически во время получения ответа⁡
		// ⁡⁣⁣⁢ontimeout	                    Истекло время ожидания (заданное в timeout)⁡
		// ⁡⁣⁣⁢onabort	                        Вызван abort()⁡
	}
    // ☑️ ⁡⁣⁢⁢СОБЫТИЯ ЗАГРУЗКИ (ОТПРАВКИ ДАННЫХ)⁡
    {
		// ✅ ⁡⁢⁢⁢Доступны через xhr.upload:⁡
		{
			xhr.upload.onprogress = (e) => {
				/* e.loaded, e.total */
			};
			xhr.upload.onload = () => {}; // отправка завершена
			xhr.upload.onerror = () => {}; // ошибка при отправке
			xhr.upload.onabort = () => {};
		}
        // ✅ ⁡⁢⁢⁢Все обработчики прогресса получают объект события с полями:⁡
        {
			// ⭐ ⁡⁣⁣⁢loaded – количество переданных/полученных байт⁡
			// ⭐ ⁡⁣⁣⁢total – общий размер (если известен)⁡
			// ⭐ ⁡⁣⁣⁢lengthComputable – известен ли общий размер⁡
		}
	}
}
// 🔳 ⁡⁢⁣⁣УПРАВЛЕНИЕ ЗАПРОСОМ⁡
{
	// ☑️ ⁡⁣⁢⁢xhr.abort() – отмена запроса. Вызывает событие onabort.⁡
	// ☑️ ⁡⁣⁢⁢xhr.overrideMimeType(mime) – принудительно задаёт MIME-тип ответа (до send()).⁡
}
// 🔳 ⁡⁢⁣⁣ТАЙМАУТ⁡
{
    xhr.timeout = 5000; // 5 секунд
	xhr.ontimeout = () => console.log("Запрос превысил время ожидания");
}
// 🔳 ⁡⁢⁣⁣ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ⁡
{
	// ☑️ ⁡⁣⁢⁢Простой GET-запрос с обработкой ответа JSON⁡
	{
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.example.com/users");
		xhr.responseType = "json"; // ответ автоматически разбирается как JSON

		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log("Пользователи:", xhr.response);
			} else {
				console.error("Ошибка:", xhr.status);
			}
		};

		xhr.onerror = () => console.error("Сетевая ошибка");
		xhr.send();
	}
	// ☑️ ⁡⁣⁢⁢POST с JSON и проверкой состояния⁡
	{
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "/api/users");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.responseType = "json";

		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				console.log("Создан пользователь:", xhr.response);
			} else {
				console.log("Сервер вернул ошибку:", xhr.status);
			}
		};

		xhr.send(JSON.stringify({ name: "Anna", age: 25 }));
	}
	// ☑️ ⁡⁣⁢⁢Загрузка файла с индикацией прогресса отправки и получения ответа⁡
	{
		`<input type="file" id="fileInput">
        <button id="upload">Загрузить</button>
        <progress id="uploadProgress" value="0" max="100"></progress>
        <progress id="downloadProgress" value="0" max="100"></progress>`;
		document.getElementById("upload").onclick = () => {
			const file = document.getElementById("fileInput").files[0];
			if (!file) return;

			const xhr = new XMLHttpRequest();
			const formData = new FormData();
			formData.append("file", file);
			// Прогресс отправки
			xhr.upload.onprogress = (e) => {
				if (e.lengthComputable) {
					const percent = (e.loaded / e.total) * 100;
					document.getElementById("uploadProgress").value = percent;
				}
			};
			// Прогресс получения ответа
			xhr.onprogress = (e) => {
				if (e.lengthComputable) {
					const percent = (e.loaded / e.total) * 100;
					document.getElementById("downloadProgress").value = percent;
				}
			};
			xhr.onload = () => {
				if (xhr.status === 200) {
					alert("Файл загружен");
				} else {
					alert("Ошибка сервера");
				}
			};
			xhr.onerror = () => alert("Сетевая ошибка");
			xhr.open("POST", "/upload", true);
			xhr.send(formData);
		};
	}
    // ☑️ ⁡⁣⁢⁢Обработка всех событий и отмена запроса⁡
    {
        const xhr = new XMLHttpRequest();
		xhr.open("GET", "/large-data");

		xhr.onload = () => console.log("Готово");
		xhr.onerror = () => console.log("Ошибка");
		xhr.onabort = () => console.log("Отменено");
		xhr.ontimeout = () => console.log("Таймаут");
		xhr.onprogress = (e) => console.log(`Получено ${e.loaded} из ${e.total}`);

		xhr.timeout = 10000;
		xhr.send();

		// Через 2 секунды отменить запрос
		setTimeout(() => xhr.abort(), 2000);
    }
}
// 🔳 ⁡⁢⁣⁣ОСОБЕННОСТИ И ПОЛЕЗНЫЕ ЗАМЕЧАНИЯ⁡
{
	// ☑️ ⁡⁣⁢⁢Кросс-доменные запросы (CORS): работают, если сервер поддерживает CORS. Для отправки кук установите xhr.withCredentials = true.⁡
	// ☑️ ⁡⁣⁢⁢Синхронные запросы: async = false – устарело, блокирует интерфейс, не рекомендуется.⁡
	// ☑️ ⁡⁣⁢⁢Прогресс отправки доступен только для методов, отправляющих тело (POST, PUT и т.п.).⁡
	// ☑️ ⁡⁣⁢⁢responseType нужно устанавливать до вызова send(). Для 'json' если ответ невалидный, xhr.response будет null.⁡
	// ☑️ ⁡⁣⁢⁢Старые браузеры могут не поддерживать onprogress и responseType.⁡
}
// 🔳 ⁡⁢⁣⁡⁢⁣⁣СРАВНЕНИЕ С fetch()⁡
{
	// ⁡⁢⁣⁣ВОЗМОЖНОСТЬ	                    XMLHTTPREQUEST	            FETCH API⁡
	// ⁡⁣⁣⁢Прогресс отправки/получения	    ✅ (upload.onprogress)	    ❌ (только через ReadableStream, сложно)⁡
	// ⁡⁣⁣⁢Отмена запроса	                ✅ abort()	                ✅ AbortController⁡
	// ⁡⁣⁣⁢Встроенная поддержка таймаутов	✅ timeout	                ❌ (реализуется через AbortController)⁡
	// ⁡⁣⁣⁢Поддержка старых браузеров	    ✅ (везде)	                ❌ (полифилл)⁡
}
