// ⁡⁢⁣⁡⁢⁣⁣Изменение статуса при помощи функции, которая возвращает саму себя⁡
{
	const createModule = (initial) => {
		let state = initial;
		return {
			update: (fn) => {
				state = fn(state);
			},
			get: () => state,
		};
	};
	const m = createModule(0);
	m.update((x) => x + 1);
	m.update((x) => x * 2);
	console.log(m.get());
}
// ⁡⁢⁣⁣Функция для проверки объектов массивов, строк булеан и т.д.⁡
{
	function getType(value) {
		return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
	}
}
// ⁡⁢⁣⁣Кастомная функция изменения и чтение статуса(useState)⁡
{
	function myState(initialValue) {
		// 🔍 Вспомогательная функция для точного определения типа
		function getType(value) {
			return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
		}
		// 📦 Приватное хранилище состояния
		let state = initialValue;
		// 📥 Геттер: возвращает текущее значение
		const get = () => state;
		// 📤 Сеттер: принимает функцию-апдейтер ИЛИ прямое значение
		const set = (updater) => {
			if (typeof updater === "function") {
				state = updater(state);
			} else {
				state = updater;
			}
			return state; // для цепочек или отладки
		};
		// ℹ️ Метод для получения типа текущего состояния
		const getTypeOf = () => getType(state);
		// 🔁 Сброс к начальному значению (опционально)
		const reset = () => {
			state = initialValue;
			return state;
		};
		return [get, set, getTypeOf, reset];
	}
	// Использование
	const [arrGet, arrSet] = myState([]);
	arrSet((arr) => [...arr, "apple"]);
	arrSet((arr) => [...arr, "banana"]);
	console.log(arrGet());

	const [obGet, obSet] = myState({ id: 1, name: "Andr" });
	obSet((obj) => ({ ...obj, age: 46 }));
	obSet({ ...obGet(), lastName: "Rybov" });
	console.log(obGet().age); // 46
	console.log(obGet);

	const [boGet, boSet] = myState(true);
	boSet(false);
	console.log(boGet());
}
// ⁡⁢⁣⁡⁢⁣⁣Кастомная функция изменения и чтение объекта⁡
{
	const createCache = () => {
		const cache = {};
		return {
			get: (key) => cache[key],
			setA: (key, val) => (cache[key] = val),
			setB: (fn, key) => {
				// Передаём в функцию текущий кэш и ключ
				const result = fn(cache, key);
				// Если функция вернула значение, записываем его по ключу
				if (result !== undefined) {
					cache[key] = result;
				}
				return cache;
			},
		};
	};
	const c = createCache();
	c.setA("a", 1);
	// const { setB } = createCache()
	// Используем setB: функция принимает кэш и ключ, возвращает значение для записи
	c.setB((data, k) => {
		// Здесь можно выполнять любую логику
		//   return data["a"] + 10; // например, берём значение "a" и прибавляем 10
		return 10; // например, берём значение "a" и прибавляем 10
	}, "b");
	c.setB((data, k) => {
		// Здесь можно выполнять любую логику
		return 2; // например, берём значение "a" и прибавляем 10
	}, "c");
	// Использование
	console.log(c.get("a"));
	console.log(c.get("b"));
	console.log(c.get("c"));
}