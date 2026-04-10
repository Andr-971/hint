// ⁡⁢⁣⁡⁢⁣⁣Изменение статуса при помощи функции, которая возвращает саму себя⁡
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