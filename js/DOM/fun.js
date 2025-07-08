
//! ФУНКЦИЯ ПОИСКА ЭЛЕМЕНТА
function closest(el, cl) {
	var elem = el;

	while (elem.className != cl) {
		if (elem.tagName.toLowerCase() == "html") return false;
		elem = elem.parentNode;
	}
	return elem;
}
//* Аргументы ел - элемент, кл - класс элемента который нужно найти.
//* Если в дом не оказалось эл с таким классом, возвращает false;
//! ФУНКЦИИ ЗАДЕРЖКИ ИНТЕРВАЛА
//* Пример использования setTimeout: вызов функции myFunc один раз по прошествии 3 секунд:
function myFunc() {
	console.log('after 3 seconds');
}
//* вызовем функцию myFunc после 3 секунд
window.setTimeout(myFunc, 3000);
//* Пример использования setInterval: вывод сообщения каждые 2 секунды с интервалом 2000 миллисекунд:
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

