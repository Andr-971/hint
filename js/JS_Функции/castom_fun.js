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
