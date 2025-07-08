
//! ⁡⁢⁣⁢РЕАЛИЗАЦИЯ РАЗНЫХ ЗАДАЧ⁡
// ⁡⁣⁡⁣⁣⁡⁢⁣⁣ОБЪЕКТЫ И МАССИВЫ⁡
{
	// ⁡⁣⁣⁢Присвоение ключам объекты⁡
	{
		const a = { a: "a" };
		const b = { b: "b" };
		const c = {};
		c[a] = a; // ключом становится строка "[object Object]"
		c[b] = b; // тот же ключ "[object Object]", перезаписывает предыдущее значение на b
		// ⁡⁢⁢⁢Почему так происходит?⁡
		// ⁡⁢⁢⁢1. Ключи объекта в JavaScript всегда приводятся к строкам. Когда вы пытаетесь использовать объект (a или b) как ключ, JavaScript вызывает его метод toString(), который возвращает строку "[object Object]".⁡
		// ⁡⁢⁢⁢2. Поскольку оба ключа приводятся к одной и той же строке, они конфликтуют, и последнее присвоение перезаписывает предыдущее.⁡
		// ⁡⁢⁢⁢3. Значение в объекте c перезаписывается⁡
        // ⁡⁣⁣⁡⁢⁢⁢-- Сначала c[a] = a записывает a по ключу "[object Object]"⁡
        // ⁡⁣⁣⁡⁢⁢⁢-- Затем c[b] = b перезаписывает это значение на b.⁡
		// ⁡⁣⁣⁡⁢⁢⁢4. Что выводит console.log⁡
		// ⁡⁢⁢⁢-- c[a] → это c["[object Object]"] → { b: "b" }⁡
		// ⁡⁣⁣⁡⁢⁢⁢- c[a].a → { b: "b" }.a → undefined (свойства a нет)⁡
		// ⁡⁢⁢⁢-- c[b] → это тоже c["[object Object]"] → { b: "b" }⁡
		// ⁡⁢⁢⁢- c[b].b → { b: "b" }.b → "b"⁡
		console.log(c[a].a, c[b].b); // undefined "b"
	}
	// ⁡⁣⁣⁢Функция глубокого клонирования⁡
	{
		/**
		 * Глубокое клонирование объекта/массива/значения
		 * @param {*} source - объект, массив или значение для клонирования
		 * @returns {*} глубокую копию исходных данных
		 */
		// Рекурсивное клонирование (средняя производительность)
		function deepClone(source) {
			// 1. Обработка примитивов и специальных значений
			if (source === null || typeof source !== "object") {
				return source; // Возвращаем примитивы (number, string, boolean, null, undefined, symbol) и функции как есть
			}
			// 2. Обработка Date
			if (source instanceof Date) {
				return new Date(source.getTime()); // Создаем новый объект Date с тем же временем
			}
			// 3. Обработка Array
			if (Array.isArray(source)) {
				const clone = [];
				for (const item of source) {
					clone.push(deepClone(item)); // Рекурсивно клонируем каждый элемент массива
				}
				return clone;
			}
			// 4. Обработка Set
			if (source instanceof Set) {
				const clone = new Set();
				source.forEach((value) => {
					clone.add(deepClone(value)); // Рекурсивно клонируем значения Set
				});
				return clone;
			}
			// 5. Обработка Map
			if (source instanceof Map) {
				const clone = new Map();
				source.forEach((value, key) => {
					clone.set(deepClone(key), deepClone(value)); // Рекурсивно клонируем ключи и значения Map
				});
				return clone;
			}
			// 6. Обработка обычного объекта (включая классы)
			if (source instanceof Object) {
				const clone = Object.create(Object.getPrototypeOf(source)); // Сохраняем прототип
				// Копируем все свойства, включая символы
				const allProperties = [
					...Object.getOwnPropertyNames(source),
					...Object.getOwnPropertySymbols(source),
				];
				for (const key of allProperties) {
					// Дескриптор содержит информацию о свойстве (value, get/set, enumerable и т.д.)
					const descriptor = Object.getOwnPropertyDescriptor(source, key);

					if (descriptor.value) {
						descriptor.value = deepClone(descriptor.value); // Рекурсивное клонирование значения
					}

					Object.defineProperty(clone, key, descriptor); // Копируем свойство с дескриптором
				}

				return clone;
			}
			// 7. Для неподдерживаемых типов (например, WeakMap, WeakSet) возвращаем оригинал
			return source;
		}
		// Реализация глубокого клонирования с использованием стека
		/**
		 * Глубокое клонирование через итеративный подход (стек)
		 * Обрабатывает объекты, массивы, Set, Map, Date
		 * Исключает циклические ссылки через WeakMap
		 * @param {*} source - исходный объект
		 * @returns {*} глубокая копия
		 */
		function deepCloneStack(source) {
			// Хранилище для клонов (для обработки циклических ссылок)
			const clones = new WeakMap();
			// Стек для итеративной обработки: [оригинал, клон, родитель, ключ]
			const stack = [];
			// Базовый клон (для начального объекта)
			let rootClone;
			// Обработка примитивов и специальных объектов
			if (source === null || typeof source !== "object") {
				return source;
			}
			// Создаем начальный клон в зависимости от типа
			if (source instanceof Date) {
				return new Date(source);
			}
			if (source instanceof Set) {
				rootClone = new Set();
			} else if (source instanceof Map) {
				rootClone = new Map();
			} else if (Array.isArray(source)) {
				rootClone = [];
			} else {
				rootClone = Object.create(Object.getPrototypeOf(source));
			}
			// Добавляем в стек для обработки дочерних элементов
			stack.push([source, rootClone]);
			clones.set(source, rootClone);
			// Обработка элементов стека
			while (stack.length > 0) {
				const [original, clone] = stack.pop();
				// Обработка Set
				if (original instanceof Set) {
					original.forEach((value) => {
						const valueClone = clones.get(value) || getBaseClone(value);
						if (valueClone !== value) {
							stack.push([value, valueClone]);
							clones.set(value, valueClone);
						}
						clone.add(valueClone);
					});
					continue;
				}
				// Обработка Map
				if (original instanceof Map) {
					original.forEach((value, key) => {
						const keyClone = clones.get(key) || getBaseClone(key);
						const valueClone = clones.get(value) || getBaseClone(value);
						if (keyClone !== key) {
							stack.push([key, keyClone]);
							clones.set(key, keyClone);
						}
						if (valueClone !== value) {
							stack.push([value, valueClone]);
							clones.set(value, valueClone);
						}
						clone.set(keyClone, valueClone);
					});
					continue;
				}
				// Обработка объектов и массивов
				const keys = [
					...Object.getOwnPropertyNames(original),
					...Object.getOwnPropertySymbols(original),
				];
				for (const key of keys) {
					const descriptor = Object.getOwnPropertyDescriptor(original, key);
					let value = original[key];
					// Клонирование значения
					let valueClone;
					if (clones.has(value)) {
						valueClone = clones.get(value);
					} else {
						valueClone = getBaseClone(value);
						if (valueClone !== value) {
							stack.push([value, valueClone]);
							clones.set(value, valueClone);
						}
					}
					// Копирование свойства с дескриптором
					const newDescriptor = { ...descriptor };
					if ("value" in newDescriptor) {
						newDescriptor.value = valueClone;
					}
					Object.defineProperty(clone, key, newDescriptor);
				}
			}
			return rootClone;
		}
		// Вспомогательная функция для базового клонирования
		function getBaseClone(value) {
			if (value === null || typeof value !== "object") {
				return value;
			}
			if (value instanceof Date) {
				return new Date(value);
			}
			if (value instanceof Set) {
				return new Set();
			}
			if (value instanceof Map) {
				return new Map();
			}
			if (Array.isArray(value)) {
				return [];
			}
			return Object.create(Object.getPrototypeOf(value));
		}
	}
}
// ⁡⁢⁣⁣ОСОБЕННОСТИ ИНТЕРПРЕТАТОРА⁡
{
	function first() {
		return {
			name: "Имя",
		};
	}
	function second() {
		return; // 👈 Здесь интерпретатор поставит точку с запятой
		{
			name: "Имя";
		}
	}
	// console.log(first()); // {name: 'Имя'}
	// console.log(second()); // undefined
}
// ⁡⁢⁣⁣ОБЛАСТИ ВИДИМОСТИ⁡
{
	var a = 5;
	var writea = function () {
		console.log(a); // 👈 Не находится ни в одной области видимости
		var a = 10;
	};
	// writea() // undefined ни чего не возвращает
	// Видит интерпретатор
	var a = 5; // Глобальная переменная
	var writea = function () {
		// Все объявления var "поднимаются" в начало функции
		var a; // Объявление поднято, но значение пока undefined
		var b; // Объявление поднято, но значение пока undefined

		b = a; // Здесь `a` ещё undefined (локальная переменная)
		console.log(b); // Выведет undefined
		a = 10; // Теперь локальная `a` = 10 (но это уже после console.log)
	};
}
// ⁡⁢⁣⁣THIS КОНТЕКСТ⁡
{
	// ⁡⁣⁣⁡⁣⁣⁡⁣⁣⁢Работа с контекстом this функция⁡
	{
		function foo() {
			const x = 10;
			return {
				x: 20,
				bar() {
					console.log(this.x); // 20 Cсылается на объект, который вызвал метод bar
				},
				baz: () => {
					console.log(this.x); // Ссылается на глобальный объект или родительский контекст (в данном случае, это foo) значит undefined
				},
			};
		}
		const obj1 = foo();
		obj1.bar(); // ! 20 Cсылается на объект, который вызвал метод bar
		obj1.baz(); // ! undefined Ссылаться не на что значит undefined
		const obj2 = foo.call({ x: 30 }); // Новый объект для this
		let y = obj2.bar;
		let x = obj2.baz;
		y(); // ! undefined Потерян объект для ссылки через переменную y
		x(); // ! 30 Новый объект для ссылки
		obj2.bar(); // ! 20  Ссылается на объект, который вызвал метод bar
		obj2.baz(); // ! 30 Ссылается на новый объект
    }
    // ⁡⁣⁣⁢Работа с контекстом this функциональный компонент⁡
    {
        function Cat() {
            this.name = "Кот";
            this.getNameArrow = () => {
                console.log(this.name);
            }
            this.getName = function() {
                console.log(this.name);
            }
        }
        const cat = new Cat();
        cat.getNameArrow(); // ! Кот из замыкания(нашёл this в момент создания функции выше)
        cat.getName(); // ! Кот взял this из объекта cat
        const { getNameArrow, getName } = cat; // ! деструктуризация объекта cat потеря методами контекст
        getName(); // ! пустая строка (вызов функции без объекта cat)
        getNameArrow(); // ! Кот (вызов функции с объектом cat, так как стрелочная функция не теряет контекст)
    }
}
// ⁡⁢⁣⁣ЦИКЛЫ, map()⁡
{
	// ⁡⁣⁣⁢Собственная реализация map(простое)_⁡
	{
		function myMap(array, callback) {
			const result = [];
			for (let i = 0; i < array.length; i++) {
				result.push(callback(array[i], i, array));
			}
			return result;
		}
		// Пример использования
		const numbers = [1, 2, 3];
		const squared = myMap(numbers, (num) => num * num);
		console.log(squared); // [1, 4, 9]
	}
	// ⁡⁣⁣⁢Реализация map() как метода прототипа Array⁡
	{
		Array.prototype.myMap = function (callback) {
			const result = [];
			for (let i = 0; i < this.length; i++) {
				result.push(callback(this[i], i, this));
			}
			return result;
		};

		// Пример использования
		const words = ["hello", "world"];
		const lengths = words.myMap((word) => word.length);
		console.log(lengths); // [5, 5]
	}
	//	⁡⁣⁡⁣⁣⁡⁣⁣⁢Улучшенная реализация map() с проверками⁡
	{
		function myMap(array, callback, thisArg) {
			// Проверка, что array является итерируемым объектом
			if (array == null) {
				throw new TypeError("Array is null or undefined");
			}

			// Проверка, что callback является функцией
			if (typeof callback !== "function") {
				throw new TypeError(callback + " is not a function");
			}

			const result = [];
			let i = 0;
			const len = array.length;

			// Обработка this контекста
			const boundCallback = thisArg ? callback.bind(thisArg) : callback;

			while (i < len) {
				if (i in array) {
					result[i] = boundCallback(array[i], i, array);
				}
				i++;
			}
			return result;
		}

		// Пример использования с контекстом
		const obj = {
			multiplier: 2,
			calculate: function (num) {
				return num * this.multiplier;
			},
		};

		const nums = [1, 2, 3];
		const result = myMap(nums, obj.calculate, obj);
		console.log(result); // [2, 4, 6]
	}
	// ⁡⁣⁣⁢Цикл с setTimeout⁡
	{
		// Переменная i, объявленная через var, имеет функциональную область видимости (не блочную). Это значит, что все итерации цикла ссылаются на одну и ту же переменную i. К моменту выполнения колбэка setTimeout цикл уже завершится, и i будет равна 6 (условие i <= 5 станет ложным).
		// Использовать let вместо var. let создает новую переменную i для каждой итерации (блочная область видимости). Каждый setTimeout захватывает свою локальную i.
		// Замыкание (IIFE)
		// for (var i = 0; i <= 5; i++) {
		// (function (currentI) {
		// 	setTimeout(function () {
		// 	console.log(currentI); // 0, 1, 2, 3, 4, 5
		// 	}, currentI * 600);
		// })(i);
		// }
		// Переменная currentI сохраняет значение i для каждой итерации внутри замыкания.
		for (var i = 0; i <= 5; i++) {
			setTimeout(function () {
				console.log(i);
			}, i * 600);
		}
		// 6 * 6
		// 0 1 2 3 4 5
	}
}
// ⁡⁢⁣⁣КЛАССЫ⁡
{
	//* Реализовать stack, у которого все функции работают за константное время
    //* O(1)
    {
		class MinStack {
			constructor() {
				this.stack = []; // Основной стек для хранения элементов
				this.minStack = []; // Стек для хранения текущих минимумов
			}
			push(value) {
				this.stack.push(value);

				// Если minStack пуст или новый элемент меньше текущего минимума
				if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
					this.minStack.push(value);
				} else {
					// Повторяем текущий минимум
					this.minStack.push(this.minStack[this.minStack.length - 1]);
				}
			}
			pop() {
				if (this.stack.length === 0) return undefined;
				this.minStack.pop();
				return this.stack.pop();
			}
			getMin() {
				if (this.minStack.length === 0) return undefined;
				return this.minStack[this.minStack.length - 1];
			}
		}

		const ms = new MinStack();

		// case 1
		ms.push(1);
		ms.push(0);
		ms.push(3);
		ms.pop(); // 1
		ms.getMin(); // 0
		ms.pop(); // 0
		ms.getMin(); // 1

		// case 2
		ms.push(-1);
		ms.push(-2);
		ms.push(0);

		// case 3
		ms.push(1);
		ms.push(0);
		ms.push(0);
		ms.push(0);
		ms.push(3);
		ms.pop(); // 3

		console.log(ms.getMin()); // 0
	}
}
// ⁡⁣⁡⁣⁣⁡⁢⁣⁣РЕАЛИЗАЦИЯ СВОЕЙ JQUERY БИБЛИОТЕКИ⁡
{
    function SimpleJQ(selector) {
		// Находим элементы DOM
		const elements = document.querySelectorAll(selector);

		// Возвращаем объект с методами для работы с элементами
		return {
			// Метод для работы с CSS стилями
			css: function (property, value) {
				// Если передали объект свойств
				if (typeof property === "object") {
					Object.entries(property).forEach(([key, val]) => {
						elements.forEach((el) => (el.style[key] = val));
					});
					return this;
				}

				// Если получаем значение
				if (value === undefined) {
					return elements[0] ? elements[0].style[property] : null;
				}

				// Если устанавливаем значение
				elements.forEach((el) => (el.style[property] = value));
				return this;
			},

			// Метод для работы с HTML содержимым
			html: function (content) {
				if (content === undefined) {
					return elements[0] ? elements[0].innerHTML : null;
				}
				elements.forEach((el) => (el.innerHTML = content));
				return this;
			},

			// Метод для добавления обработчиков событий
			on: function (event, callback) {
				elements.forEach((el) => el.addEventListener(event, callback));
				return this;
			},

			// Метод для добавления классов
			addClass: function (className) {
				elements.forEach((el) => el.classList.add(className));
				return this;
			},

			// Метод для добавления/удаления классов
			toggle: function (className) {
				elements.forEach((el) => el.classList.toggle(className));
				return this;
			},

			// Метод для удаления классов
			removeClass: function (className) {
				elements.forEach((el) => el.classList.remove(className));
				return this;
			},
		};
	}

	// Создаем глобальную переменную $
	window.$ = function (selector) {
		return new SimpleJQ(selector);
	};

	// Добавляем метод для обработки готовности документа
	$.ready = function (callback) {
		if (document.readyState !== "loading") {
			callback();
		} else {
			document.addEventListener("DOMContentLoaded", callback);
		}
	};
	// Использование jQuery-подобной библиотеки
	$.ready(() => {
		// $(".my-element")
		// 	.css("color", "blue")
		// 	.addClass("active")
		// 	.on("mouseover", () => console.log("Hovered!"))
		// 	.html("New content");
		let text = "Добавил див с спаном внутри него";
		let content = `
			<div class="block">
				<span class="span">${text}</span>
			</div>`;
		$(".my-elem")
			.html(content)
			.css("cursor", "pointer")
			.on("click", () => {
				$(".my-elem").toggle("active");
			});
	});
}
// ⁡⁢⁣⁣EVENT LOOP⁡
{
	// ⁡⁣⁢⁢ПОРЯДОК ВЫПОЛНЕНИЯ⁡
	{
		var a = 5; // a = 5 -- Инициализация переменной
		// 👇 Функция внутри setTimeout помещается в очередь макрозадач (task queue) и будет выполнена после завершения всего синхронного кода и микрозадач (например, промисов).
		setTimeout(function () {
			console.log(a); // "Четвёртый вывод" a = 15 → **15**
			a = 10; // a = 10 (но это значение уже не выводится).
		}, 0);
		// 👇 Создание промиса
		var p = new Promise(function (resolve, reject) {
			console.log(a); //"Первый вывод" Синхронный код! Выводит текущее значение a = 5 → **5**
			a = 25; // a = 25 -- присвоение переменной 25
			resolve();
		});
		// 👇 Коллбэк в .then() попадает в очередь микрозадач (microtask queue) и выполнится сразу после завершения синхронного кода, но до выполнения макрозадач (включая setTimeout).
		p.then(function () {
			a = 15; // a = 15 -- присвоение переменной 15
			console.log(a); // "Третий вывод" → **15**
		});
		console.log(a); //"Второй вывод" Синхронный код! a уже равно 25 → **25**
	}
	{
		console.log(1); // это синхронный вызов, должен вывестись первым.
		setTimeout(() => console.log(2)); // таймер с нулевой задержкой. Добавит колбэк в очередь макрозадач.
		Promise.resolve().then(() => console.log(3)); // промис сразу резолвится, его then попадает в очередь микрозадач.
		Promise.resolve().then(() => setTimeout(() => console.log(4))); // аналогично, then выполнится, и внутри него вызов setTimeout, который добавит колбэк console.log(4) в макрозадачи, но позже.
		Promise.resolve()
			.then(() => console.log(5))
			.then(() => console.log(6)); // С начала 5 потом 6 Каждый then добавляется в микрозадачи.
		setTimeout(() => console.log(7)); // 7 еще один таймер, колбэк в макрозадачи.
		console.log(8); // это синхронный вызов, должен вывестись вторым.

		// ⁡⁣⁣⁢1. Синхронные вызовы:⁡
		// ⁡⁣⁢⁡⁣⁢⁢-- console.log(1) → 1.⁡
		// ⁡⁣⁢⁢-- console.log(8) → 2.⁡
		// ⁡⁣⁣⁢2. Микрозадачи (Promise.then):⁡
		// ⁡⁣⁢⁢-- Первый then: console.log(3) → 3.⁡
		// ⁡⁣⁢⁢-- Второй then: setTimeout(4) (добавляет 4 в макрозадачи).⁡
		// ⁡⁣⁢⁢-- Третий then: console.log(5) → 5 → после этого создается новый then с console.log(6)⁡
		// ⁡⁣⁢⁢-- Четвертый then: console.log(6) → 6.⁡
		// ⁡⁣⁣⁢3. Макрозадачи (setTimeout):⁡
		// ⁡⁣⁢⁢-- Очередь: 2 → 7 → 4(добавлен во время обработки микрозадач).⁡
		// ⁡⁣⁢⁢-- Выполняются по порядку: 2 → 7 → 4.⁡

		//! Output: 1, 8, 3, 5, 6, 2, 7, 4
	}
	{
		console.log("1"); // 1 синхронный код
		Promise.resolve()
			.then(() => console.log("2")) // 3 промис в стеке
			.then(() => console.log("3")) // 5 промис в стеке
			.then(() => console.log("13")) // 7 промис в стеке
			.finally(() => console.log("4")) // 9 промис в стеке
			.then(() => console.log("14")); // 11 промис в стеке

		queueMicrotask(() => console.log("5")); // 4 микротаска

		Promise.reject()
			.then(() => console.log("8")) // Не выполнится, так как выполнится catch
			.catch(() => console.log("9")) // 6 промис в стеке
			.then(() => console.log("10")) // 8 промис в стеке
			.finally(() => console.log("11")); // 10 промис в стеке

		console.log("12"); // 2 синхронный код
		//! Output: 1 12 2 5 3 9 13 10 4 11 14
	}
	// ⁡⁣⁢⁢ВЛИЯНИЕ НА EVENT LOOP⁡
	{
		// 👇 Браузер не зависнет, но интерфейс может стать неотзывчивым.
		// 👇 Между вызовами есть задержка (минимум 4 мс в браузерах, даже если указан 0), так как setTimeout имеет минимальный таймер.
		// 👇 CPU-нагрузка низкая, так как между вызовами Event Loop успевает обрабатывать другие задачи (например, клики, анимации).
		function inf() {
			return setTimeout(inf, 0);
		}
		// 👇 Браузер зависнет (или вкладка станет неотзывчивой), так как микрозадачи выполняются в бесконечном цикле без пауз.
		// 👇 CPU-нагрузка максимальная, так как нет задержек между вызовами.
		// 👇 Никакие другие задачи (рендеринг, сетевые запросы) не выполнятся, потому что Event Loop постоянно занят микрозадачами.
		function inf1() {
			return Promise.resolve().then(inf);
		}
	}
}
// ⁡⁢⁣⁣КОЛБЕКИ(CALLBACK)⁡
{
	// Первый колбек
	function getFechUser(callback) {
		setTimeout(() => {
			const user = {
				name: "Иван",
				age: 25,
				city: "Москва",
			};
			callback(user);
		}, 2000);
	}
	// Второй колбек
	function getJobUser(user, callback) {
		setTimeout(() => {
			const job = {
				name: "Иван",
				job: "Программист",
				salary: 1000,
			};
			callback(job);
		}, 2000);
	}
	// Функция обёртка для колбеков
	function run() {
		getFechUser((userInfo) => {
			console.log(userInfo);
			getJobUser(userInfo, (job) => {
				console.log(job);
				console.log(
					`Пользователь ${userInfo.name} из ${userInfo.city} работает ${job.job} и получает ${job.salary}`,
				);
			});
		});
	}
	run()
}
// ⁡⁢⁣⁣ПРОМИСЫ⁡
{
    // ⁡⁣⁣⁢Простые промисы c иммитацией запроса через setTimeout⁡
    {
        function fetchUserData() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					const user = {
						name: "Иван",
						age: 25,
						city: "Москва",
					};
					if (user instanceof Object) {
						resolve(user);
					} else {
						reject("Ошибка: пользователь не найден");
					}
				}, 1000);
			});
		}
		function fetchJob(user) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					const job = {
						job: "Программист",
						salary: 1000,
					};
					if (job instanceof Object) {
						resolve([user, job]);
					} else {
						reject("Ошибка: работа не найдена");
					}
				}, 1000);
			});
		}
		fetchUserData()
			.then((userData) => {
				// console.log(userData); // {name: 'Иван', age: 25, city: 'Москва'}
				return fetchJob(userData);
			})
			.then((job) => {
				console.log(job);
				[
					// 0: {name: 'Иван', age: 25, city: 'Москва'}
					// 1: { job: 'Программист', salary: 1000 }
				];
			});
    }
	// ⁡⁣⁣⁡⁣⁣⁢Работа с промисами⁡
	{
		function sleep(ms) {
			return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
		}
		let a = sleep(2000);
		console.log(a); // Promise { <pending> } Ожидание выполнения
		a.then(() => console.log("2 секунды спустя"));
		sleep(1000)
			.then((res) => console.log(res))
			.then((res) => {
				console.log(res);
				return sleep(500);
			})
			.then((res) => console.log(res));
		// В данном случае:
		// Первый .then выводит 1000 (значение из sleep(1000)).
		// Второй .then получает undefined (потому что console.log ничего не возвращает).
		// Третий .then получает 500 (потому что перед ним был return sleep(500)).
		1000;
		undefined;
		500;
	}
	// ⁡⁣⁣⁢Написание функции, возвращающая асинхронную функцию⁡
	{
		/*
		 * Необходимо написать функцию, которая принимает два аргумента - асинхронную
		 * функцию и временной лимит в миллисекундах. Функция должна возвращать новую
		 * версию ассинхронной функции, выполнение которой ограничено временным лимитом.
		 * Должны выполняться следующие условия:
		 * - Если время выполнения исходной функции меньше временного лимита, то новая
		 * функция должна вернуть результат выполнения асинхронной функции.
		 * - Если время выполнения исходной функции больше временного лимита, то новая
		 * функция вернуть сообщение "Превышен лимит времени исполнения"
		 */
		const fu = async (n) => {
			await new Promise((res) => setTimeout(res, 100));
			return n * n;
		};
		asyncClient(fu, 50)(5); // rejectted: Превышен лимит времени исполнения
		asyncClient(fu, 150)(5); // resolved: 25
		asyncClient(fu, 150)(5).then((res) => console.log(res));

		const fu2 = async (a, b) => {
			await new Promise((res) => setTimeout(res, 120));
			return a + b;
		};

		asyncClient(fu2, 100)(1, 2); // rejectted: Превышен лимит времени исполнения
		asyncClient(fu2, 150)(1, 2); // resolved: 3
		asyncClient(fu2, 150)(1, 2).then((res) => console.log(res));

		// 👇 Реализация функции
		function asyncClient(fu, timeLimit) {
			return async (...args) => {
				return Promise.race([
					fu(...args),
					new Promise((_, reject) =>
						setTimeout(() => reject("Превышен лимит времени исполнения"), timeLimit),
					),
				]);
			};
		}
	}
	// ⁡⁣⁣⁢Своя функция Promise.all⁡
	{
		function promiseAll(promises) {
			return new Promise((resolve, reject) => {
				const results = [];
				let completedCount = 0;
				// Если массив пуст, сразу резолвимся
				if (promises.length === 0) {
					resolve(results);
					return;
				}
				promises.forEach((promise, index) => {
					// Оборачиваем в Promise.resolve(), чтобы работать с не-промисами
					Promise.resolve(promise)
						.then((result) => {
							results[index] = result; // Сохраняем результат в правильной позиции
							completedCount++;
							// Если все промисы выполнены, резолвимся
							if (completedCount === promises.length) {
								resolve(results);
							}
						})
						.catch(reject); // Если любой промис упал, реджектим весь результат
				});
			});
		}
	}
}
// ⁡⁢⁣⁣ЗАДАЧИ НА АЛГОРИТМЫ⁡
{
	// ⁡⁣⁣⁡⁣⁣⁢Проверка парности разных скобок алгоритмом стека⁡
	{
		function checkedBrackets(str) {
			// Создаем стек для хранения открывающих скобок
			const stack = [];
			// Создаем объект для соответствия открывающих и закрывающих скобок
			const bracketsMap = {
				"(": ")",
				"[": "]",
				"{": "}",
			};
			// Создаем набор закрывающих скобок для быстрой проверки
			const closingBrackets = new Set(Object.values(bracketsMap));
			// Проходим по каждому символу в строке
			for (const cur of str) {
				// Если символ - открывающая скобка, добавляем ее в стек
				if (bracketsMap[cur]) {
					stack.push(cur);
				}
				// Если символ - закрывающая скобка
				else if (closingBrackets.has(cur)) {
					// Извлекаем последнюю открывающую скобку из стека
					const lastOpenBracket = stack.pop();

					// Проверяем, соответствует ли закрывающая скобка последней открывающей
					if (bracketsMap[lastOpenBracket] !== cur) {
						return false; // Если не соответствует, скобки несбалансированы
					}
				}
			}
			// Если стек пуст, все скобки сбалансированы
			return stack.length === 0;
		}
		checkedBrackets("()");
	}
}