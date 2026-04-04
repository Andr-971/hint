// 📝 ⁡⁢⁣⁢JAVASCRIPT TEST: MIDDLE-SENIOR (130 ВОПРОСОВ)⁡
// ⁡⁣⁣⁢Темы: Объекты и массивы • Работа с сетью • Наследование и замыкания⁡
// Формат: вопрос → варианты → ✅ правильный ответ + комментарий
// ⁡⁢⁣⁣🗂 РАЗДЕЛ 1: ОБЪЕКТЫ И МАССИВЫ (ВОПРОСЫ 1–45)⁡
{
	// ⚠️ ⁡⁣⁣⁢1. Что выведет код?⁡
	{
		const obj = { a: 1 };
		const arr = [obj];
		obj.a = 2;
		console.log(arr[0].a);
        {
            // ✅ 2 (Объекты передаются по ссылке, изменение obj отразится в массиве)
            // 1
            // undefined
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢2. Какой результат у выражения?⁡
	{
		const a = [1, 2, 3];
		const b = [...a];
		console.log(a === b);
        {
            // ✅ false (Spread-оператор создаёт поверхностную копию, ссылки разные)
            // true
            // undefined
            // Ошибка типов
        }
	}
	// ⚠️ ⁡⁣⁣⁢3. Что вернёт метод?⁡
	{
		const obj = { x: 1, y: 2 };
		console.log(Object.keys(obj).length);
        {
            // ✅ 2 (Object.keys возвращает массив собственных перечисляемых ключей)
            // 1
            // 0
            // undefined
        }
	}
	// ⚠️ ⁡⁣⁣⁢4. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		arr[10] = 10;
		console.log(arr.length);
        {
            // ✅ 11 (Длина массива = наибольший индекс + 1, появляются "дыры")
            // 4
            // 10
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢5. Какой результат?⁡
	{
		const obj = {};
		obj[true] = "yes";
		console.log(obj["true"]);
        {
            // ✅ 'yes' (Ключи объектов приводятся к строке: true → 'true')
            // undefined
            // 'no'
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢6. Что вернёт фильтрация?⁡
	{
		const arr = [0, 1, false, 2, "", 3];
		console.log(arr.filter(Boolean));
        {
            // ✅ [1, 2, 3] (Boolean отфильтрует все falsy-значения)
            // [0, 1, false, 2, '', 3]
            // [1, 2]
            // [1, 3]
        }
	}
	// ⚠️ ⁡⁣⁣⁢7. Что выведет код?⁡
	{
		const a = { x: 1 };
		const b = { x: 1 };
		console.log(a == b);
        {
            // ✅ false (Объекты сравниваются по ссылке, а не по значению)
            // true
            // undefined
            // NaN
        }
	}
	// ⚠️ ⁡⁣⁣⁢8. Какой результат?⁡
	{
		const arr = [1, 2, 3];
		const [x, ...y] = arr;
		console.log(y);
        {
            // ✅ [2, 3] (Rest-оператор собирает оставшиеся элементы)
            // [1, 2]
            // [3]
            // 2,3
        }
	}
	// ⚠️ ⁡⁣⁣⁢9. Что вернёт метод?⁡
	{
		const obj = { a: 1, b: 2 };
		console.log(Object.values(obj));
        {
            // ✅ [1, 2] (Object.values возвращает массив значений собственных свойств)
            // ['a', 'b']
            // [['a', 1], ['b', 2]]
            // {a: 1, b: 2}
        }
	}
	// ⚠️ ⁡⁣⁣⁢10. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.map((x) => x * 2).filter((x) => x > 3));
        {
            // ✅ [4, 6] (Сначала map удваивает, потом filter оставляет > 3)
            // [2, 4, 6]
            // [6]
            // [4]
        }
	}
	// ⚠️ ⁡⁣⁣⁢11. Какой результат?⁡
	{
		const obj = { a: 1 };
		const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
		console.log(descriptor.writable);
        {
            // ✅ true (По умолчанию свойства созданы writable: true)
            // false
            // undefined
            // null
        }
	}
	// ⚠️ ⁡⁣⁣⁢12. Что вернёт выражение?⁡
	{
		const arr = [3, 1, 2];
		console.log(arr.sort());
        {
            // ✅ [1, 2, 3] (sort() по умолчанию сортирует как строки, но для цифр 1,2,3 совпадает)
            // [3, 1, 2]
            // [1, 3, 2]
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢13. Что выведет код?⁡
	{
		const obj = { a: 1 };
		Object.freeze(obj);
		obj.a = 2;
		console.log(obj.a);
        {
            // ✅ 1 (freeze делает объект неизменяемым, присваивание игнорируется в strict/non-strict)
            // 2
            // undefined
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢14. Какой результат?⁡
	{
		const arr = [1, 2, 3, 4];
		console.log(arr.slice(1, 3));
        {
            // ✅ [2, 3] (slice включает начало, не включает конец)
            // [1, 2]
            // [2, 3, 4]
            // [1, 2, 3]
        }
	}
	// ⚠️ ⁡⁣⁣⁢15. Что вернёт метод?⁡
	{
		const obj = { a: 1, b: 2 };
		console.log("a" in obj);
        {
            // ✅ true (Оператор in проверяет наличие свойства, включая прототип)
            // false
            // undefined
            // null
        }
	}
	// ⚠️ ⁡⁣⁣⁢16. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.reduce((acc, cur) => acc + cur, 0));
        {
            // ✅ 6 (reduce суммирует все элементы с начальным значением 0)
            // 5
            // 3
            // 0
        }
	}
	// ⚠️ ⁡⁣⁣⁢17. Какой результат?⁡
	{
		const obj = { x: 1 };
		const keys = Object.getOwnPropertySymbols(obj);
		console.log(keys.length);
        {
            // ✅ 0 (Символьные ключи не добавлены, массив пуст)
            // 1
            // undefined
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢18. Что вернёт выражение?⁡
	{
		const arr = [1, [2, [3]]];
		console.log(arr.flat(2));
        {
            // ✅ [1, 2, 3] (flat(2) раскладывает вложенность на глубину 2)
            // [1, 2, [3]]
            // [1, [2, [3]]]
            // [1, 2, 3, []]
        }
	}
	// ⚠️ ⁡⁣⁣⁢19. Что выведет код?⁡
	{
		const obj = { a: 1 };
		const proto = { b: 2 };
		Object.setPrototypeOf(obj, proto);
		console.log(obj.b);
        {
            // ✅ 2 (b найдётся в прототипе объекта)
            // 1
            // undefined
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢20. Какой результат?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.find((x) => x > 1));
        {
            // ✅ 2 (find возвращает первый элемент, удовлетворяющий условию)
            // [2, 3]
            // 3
            // undefined
        }
	}
	// ⚠️ ⁡⁣⁣⁢21. Что вернёт метод?⁡
	{
		const obj = { a: 1, b: 2 };
		console.log(Object.entries(obj));
        {
            // ✅ [['a', 1], ['b', 2]] (entries возвращает массив пар [ключ, значение])
            // ['a', 'b']
            // [1, 2]
            // {a: 1, b: 2}
        }
	}
	// ⚠️ ⁡⁣⁣⁢22. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		arr.length = 1;
		console.log(arr);
        {
            // ✅ [1] (Установка length обрезает массив)
            // [1, 2, 3]
            // [1, undefined, undefined]
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢23. Какой результат?⁡
	{
		const obj = {};
		Object.defineProperty(obj, "x", { value: 42, enumerable: false });
		console.log(Object.keys(obj));
        {
            // ✅ [] (enumerable: false скрывает ключ от Object.keys)
            // ['x']
            // [42]
            // undefined
        }
	}
	// ⚠️ ⁡⁣⁣⁢24. Что вернёт выражение?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.some((x) => x > 2));
        {
            // ✅ true (some возвращает true, если хотя бы один элемент удовлетворяет условию)
            // false
            // [3]
            // undefined
        }
	}
	// ⚠️ ⁡⁣⁣⁢25. Что выведет код?⁡
	{
		const a = [1, 2];
		const b = a.concat([3, 4]);
		console.log(a.length);
        {
            // ✅ 2 (concat не мутирует исходный массив, возвращает новый)
            // 4
            // 3
            // Ошибка
        }
	}
	// ⚠️ ⁡⁣⁣⁢26. Какой результат?⁡
	{
		const obj = { a: 1 };
		console.log(JSON.stringify(obj, null, 2));
        {
            // ✅ Строка с форматированием (2 пробела), например: '{\n  "a": 1\n}'
            // {a: 1}
            // {"a":1}
            // undefined
        }
	}
	// ⚠️ ⁡⁣⁣⁢27. Что вернёт метод?⁡
	{
		const arr = [1, 2, 3, 2];
		console.log(arr.indexOf(2, 2));
		{
			// ✅ 3 (indexOf ищет с позиции 2, находит второе вхождение 2 на индексе 3)
			// 1
			// 2
			// -1
		}
	}
	// ⚠️ ⁡⁣⁣⁢28. Что выведет код?⁡
	{
		const obj = { a: 1 };
		const copy = { ...obj, a: 2, b: 3 };
		console.log(copy.a);
		{
			// ✅ 2 (Последующие свойства перезаписывают предыдущие при spread)
			// 1
			// 3
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢29. Какой результат?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.every((x) => typeof x === "number"));
		{
			// ✅ true (every возвращает true, если все элементы проходят проверку)
			// false
			// [true, true, true]
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢30. Что вернёт выражение?⁡
	{
		const obj = { a: 1 };
		console.log(Reflect.has(obj, "a"));
		{
			// ✅ true (Reflect.has аналогичен оператору in)
			// false
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢31. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.toSpliced(1, 1, 4, 5));
		{
			// ✅ [1, 4, 5, 3] (toSpliced — иммутабельная версия splice, возвращает новый массив)
			// [1, 2, 3]
			// [1, 4, 5]
			// Ошибка (метод не существует)
		}
	}
	// ⚠️ ⁡⁣⁣⁢32. Какой результат?⁡
	{
		const obj = { a: 1 };
		const proxy = new Proxy(obj, {
			get(target, prop) {
				return prop in target ? target[prop] : "default";
			},
		});
		console.log(proxy.b);
		{
			// ✅ 'default' (Handler возвращает 'default' для отсутствующих свойств)
			// undefined
			// 1
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢33. Что вернёт метод?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.findLast((x) => x > 1));
		{
			// ✅ 3 (findLast возвращает последний подходящий элемент, если поддерживается)
			// 2
			// [2, 3]
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢34. Что выведет код?⁡
	{
		const obj = { a: 1 };
		Object.seal(obj);
		obj.b = 2;
		console.log("b" in obj);
		{
			// ✅ false (seal запрещает добавление новых свойств)
			// true
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢35. Какой результат?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.with(1, 99));
		{
			// ✅ [1, 99, 3] (with — иммутабельная замена элемента по индексу)
			// [1, 2, 3]
			// [99, 2, 3]
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢36. Что вернёт выражение?⁡
	{
		const obj = { a: 1 };
		console.log(Object.isFrozen(obj));
		{
			// ✅ false (Объект не заморожен, если не вызван Object.freeze)
			// true
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢37. Что выведет код?⁡
	{
		const arr = [1, , 3];
		console.log(arr.map((x) => x ?? 0));
		{
			// ✅ [1, 0, 3] (Пропущенный элемент = undefined, ?? заменит на 0)
			// [1, 3]
			// [1, undefined, 3]
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢38. Какой результат?⁡
	{
		const obj = { a: 1 };
		const keys = Reflect.ownKeys(obj);
		console.log(keys);
		{
			// ✅ ['a'] (ownKeys возвращает собственные ключи, включая символы)
			// []
			// ['a', 'b']
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢39. Что вернёт метод?⁡
	{
		const arr = [1, 2, 3];
		console.log(Object.groupBy(arr, (x) => (x % 2 === 0 ? "even" : "odd")));
		{
			// ✅ { odd: [1, 3], even: [2] } (groupBy группирует по ключу, если поддерживается)
			// { even: [2], odd: [1, 3] }
			// [[1,3], [2]]
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢40. Что выведет код?⁡
	{
		const obj = { a: 1 };
		const cloned = structuredClone(obj);
		cloned.a = 2;
		console.log(obj.a);
		{
			// ✅ 1 (structuredClone создаёт глубокую копию, исходный объект не меняется)
			// 2
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢41. Какой результат?⁡
	{
		const arr = [1, 2, 3];
		console.log(arr.reduceRight((acc, cur) => acc + cur));
		{
			// ✅ 6 (reduceRight идёт справа налево, но для сложения порядок не важен)
			// 5
			// 3
			// 1
		}
	}
	// ⚠️ ⁡⁣⁣⁢42. Что вернёт выражение?⁡
	{
		const obj = { a: 1 };
		console.log(Object.getPrototypeOf(obj) === Object.prototype);
		{
			// ✅ true (Прототип обычного объекта — Object.prototype)
			// false
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢43. Что выведет код?⁡
	{
		const arr = [1, 2, 3];
		const iter = arr.entries();
		console.log([...iter][1]);
		{
			// ✅ [1, 2] (entries возвращает итератор пар [индекс, значение])
			// 2
			// [2, 1]
			// {1: 2}
		}
	}
	// ⚠️ ⁡⁣⁣⁢44. Какой результат?⁡
	{
		const obj = { a: 1 };
		console.log(JSON.parse(JSON.stringify(obj)).a);
		{
			// ✅ 1 (Сериализация + парсинг создаёт копию с тем же значением)
			// undefined
			// '1'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢45. Что вернёт метод?⁡
	{
		const arr = [1, 2, 3, 4, 5];
		console.log(arr.toReversed().slice(0, 3));
		{
			// ✅ [5, 4, 3] (toReversed возвращает новый перевёрнутый массив)
			// [1, 2, 3]
			// [3, 2, 1]
			// [5, 4]
		}
	}
}
// ⁡⁢⁣⁣🌐 РАЗДЕЛ 2: РАБОТА С СЕТЬЮ (ВОПРОСЫ 46–85)⁡
{
	// ⚠️ ⁡⁣⁣⁢46. Что выведет код?⁡
	{
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) => console.log(data));
		{
			// ✅ Данные в консоль асинхронно (fetch возвращает Promise, json() тоже)
			// Синхронно выведет undefined
			// Ошибка сети
			// Ничего не выведет
		}
	}
	// ⚠️ ⁡⁣⁣⁢47. Какой результат?⁡
	{
		const controller = new AbortController();
		fetch("/api/data", { signal: controller.signal }).catch((err) => console.log(err.name));
		controller.abort();
		{
			// ✅ 'AbortError' (abort() отменяет запрос, catch ловит ошибку)
			// 'TypeError'
			// 'NetworkError'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢48. Что вернёт выражение?⁡
	{
		const headers = new Headers({ "Content-Type": "application/json" });
		headers.append("X-Custom", "value");
		console.log(headers.get("content-type"));
		{
			// ✅ 'application/json' (Headers нечувствительны к регистру имён)
			// 'application/xml'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢49. Что выведет код?⁡
	{
		async function getData() {
			const res = await fetch("/api/data");
			if (!res.ok) throw new Error("HTTP " + res.status);
			return res.json();
		}
		{
			// ✅ Корректная обработка ошибок HTTP (ok = статус 200-299)
			// Игнорирует ошибки 404/500
			// Всегда выбрасывает ошибку
			// Возвращает текст вместо JSON
		}
	}
	// ⚠️ ⁡⁣⁣⁢50. Какой результат?⁡
	{
		const url = new URL("https://example.com/path?query=1");
		url.searchParams.set("query", "2");
		console.log(url.toString());
		{
			// ✅ 'https://example.com/path?query=2' (searchParams мутирует URL)
			// 'https://example.com/path?query=1'
			// 'https://example.com/path'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢51. Что вернёт метод?⁡
	{
		const formData = new FormData();
		formData.append("file", new Blob(["data"]), "test.txt");
		console.log(formData.get("file") instanceof Blob);
		{
			// ✅ true (FormData хранит Blob-объекты)
			// false
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢52. Что выведет код?⁡
	{
		const controller = new AbortController();
		setTimeout(() => controller.abort(), 100);
		fetch("/api/slow", { signal: controller.signal }).catch((err) =>
			console.log(err instanceof DOMException),
		);
		{
			// ✅ true (AbortError — экземпляр DOMException)
			// false
			// undefined
			// Ошибка типа
		}
	}
	// ⚠️ ⁡⁣⁣⁢53. Какой результат?⁡
	{
		const req = new Request("/api/data", { method: "POST" });
		console.log(req.method);
		{
			// ✅ 'POST' (Request сохраняет метод из опций)
			// 'GET'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢54. Что вернёт выражение?⁡
	{
		const res = new Response('{"a":1}', {
			headers: { "Content-Type": "application/json" },
		});
		console.log(res.headers.get("content-type"));
		{
			// ✅ 'application/json' (Response сохраняет заголовки)
			// 'text/plain'
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢55. Что выведет код?⁡
	{
		fetch("/api/data")
			.then((res) => res.text())
			.then((text) => console.log(typeof text));
		{
			// ✅ 'string' (text() возвращает Promise<string>)
			// 'object'
			// 'json'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢56. Какой результат?⁡
	{
		const url = new URL("/path", "https://base.com");
		console.log(url.origin);
		{
			// ✅ 'https://base.com' (origin = протокол + хост + порт)
			// '/path'
			// 'https://base.com/path'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢57. Что вернёт метод?⁡
	{
		const headers = new Headers();
		headers.set("X-Test", "1");
		headers.set("X-Test", "2");
		console.log(headers.get("X-Test"));
		{
			// ✅ '2' (set() перезаписывает значение)
			// '1'
			// '1,2'
			// ['1','2']
		}
	}
	// ⚠️ ⁡⁣⁣⁢58. Что выведет код?⁡
	{
		async function postData(data) {
			return fetch("/api", {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			});
		}
		{
			// ✅ Корректная отправка JSON (stringify + заголовок)
			// Отправляет объект как есть
			// Требует FormData
			// Не работает с async/await
		}
	}
	// ⚠️ ⁡⁣⁣⁢59. Какой результат?⁡
	{
		const params = new URLSearchParams({ a: 1, b: 2 });
		console.log(params.toString());
		{
			// ✅ 'a=1&b=2' (toString() сериализует параметры)
			// '{a:1,b:2}'
			// 'a=1,b=2'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢60. Что вернёт выражение?⁡
	{
		const res = await fetch("/api/data");
		const clone = res.clone();
		console.log(res.bodyUsed);
		{
			// ✅ false (clone() позволяет читать тело дважды, bodyUsed = false до чтения)
			// true
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢61. Что выведет код?⁡
	{
		fetch("/api/data").then((res) => {
			if (res.redirected) console.log("redirected");
			return res.json();
		});
		{
			// ✅ Выведет 'redirected', если был редирект (свойство redirected)
			// Всегда выводит 'redirected'
			// Никогда не выводит
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢62. Какой результат?⁡
	{
		const url = new URL("https://example.com:8080/path");
		console.log(url.port);
		{
			// ✅ '8080' (port возвращается как строка)
			// 8080
			// ''
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢63. Что вернёт метод?⁡
	{
		const formData = new FormData();
		formData.append("user", "admin");
		formData.append("user", "guest");
		console.log(formData.getAll("user"));
		{
			// ✅ ['admin', 'guest'] (getAll возвращает все значения по ключу)
			// 'admin'
			// 'guest'
			// ['admin']
		}
	}
	// ⚠️ ⁡⁣⁣⁢64. Что выведет код?⁡
	{
		const controller = new AbortController();
		const { signal } = controller;
		signal.addEventListener("abort", () => console.log("aborted"));
		controller.abort();
		{
			// ✅ 'aborted' (событие abort срабатывает при вызове abort())
			// Ничего не выведет
			// Ошибка
			// 'error'
		}
	}
	// ⚠️ ⁡⁣⁣⁢65. Какой результат?⁡
	{
		const headers = new Headers({ "X-Custom-Header": "a=1" });
		headers.append("X-Custom-Header", "b=2");
		console.log(headers.getAll());
		{
			// ✅ ['a=1', 'b=2'] (getAll() возвращает массив для мультизаголовков)
			// 'a=1, b=2'
			// 'b=2'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢66. Что вернёт выражение?⁡
	{
		const res = new Response(null, { status: 204 });
		console.log(await res.text());
		{
			// ✅ '' (204 No Content → пустое тело, text() вернёт пустую строку)
			// null
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢67. Что выведет код?⁡
	{
		fetch("/api/data", { credentials: "include" }).then((res) => res.json());
		{
			// ✅ Запрос с куками (credentials: 'include' отправляет cookies)
			// Без кук
			// Только для same-origin
			// Ошибка безопасности
		}
	}
	// ⚠️ ⁡⁣⁣⁢68. Какой результат?⁡
	{
		const url = new URL("https://user:pass@example.com/path");
		console.log(url.password);
		{
			// ✅ 'pass' (URL парсит credentials)
			// 'user'
			// ''
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢69. Что вернёт метод?⁡
	{
		const params = new URLSearchParams("?a=1&a=2");
		console.log(params.get("a"));
		{
			// ✅ '1' (get возвращает первое значение)
			// '2'
			// ['1','2']
			// '1,2'
		}
	}
	// ⚠️ ⁡⁣⁣⁢70. Что выведет код?⁡
	{
		const req = new Request("/api", { body: "data" });
		console.log(req.body instanceof ReadableStream);
		{
			// ✅ true (body Request — ReadableStream, если тело есть)
			// false
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢71. Какой результат?⁡
	{
		const res = await fetch("/api/data");
		const reader = res.body.getReader();
		const { done } = await reader.read();
		console.log(typeof done);
		{
			// ✅ 'boolean' (done — флаг завершения потока)
			// 'number'
			// 'object'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢72. Что вернёт выражение?⁡
	{
		const headers = new Headers();
		console.log(headers instanceof Headers);
		{
			// ✅ true (Headers — класс, instanceof работает)
			// false
			// undefined
			// Ошибка
		}
	}

	// ⚠️ ⁡⁣⁣⁢73. Что выведет код?⁡
	{
		fetch("/api/data", { method: "HEAD" }).then((res) => console.log(res.body));
		{
			// ✅ null (HEAD-запросы не имеют тела, body = null)
			// ReadableStream
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢74. Какой результат?⁡
	{
		const url = new URL("https://example.com/path#section");
		console.log(url.hash);
		{
			// ✅ '#section' (hash включает #)
			// 'section'
			// ''
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢75. Что вернёт метод?⁡
	{
		const formData = new FormData();
		formData.set("key", "new");
		console.log(formData.get("key"));
		{
			// ✅ 'new' (set() устанавливает/перезаписывает значение)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢76. Что выведет код?⁡
	{
		const controller = new AbortController();
		fetch("/api", { signal: controller.signal }).catch((err) => console.log(err.message));
		// Предположим, сеть недоступна
		{
			// ✅ Сообщение об ошибке сети (например, 'Failed to fetch')
			// 'AbortError'
			// ''
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢77. Какой результат?⁡
	{
		const res = new Response("data", { status: 404 });
		console.log(res.ok);
		{
			// ✅ false (ok = true только для статусов 200-299)
			// true
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢78. Что вернёт выражение?⁡
	{
		const url = new URL("https://example.com");
		url.protocol = "ftp:";
		console.log(url.protocol);
		{
			// ✅ 'ftp:' (protocol можно изменить, включая двоеточие)
			// 'https:'
			// 'ftp'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢79. Что выведет код?⁡
	{
		const headers = new Headers({ "Content-Type": "text/html" });
		console.log([...headers.entries()]);
		{
			// ✅ [['content-type', 'text/html']] (entries возвращает итератор пар)
			// [['Content-Type', 'text/html']]
			// ['content-type: text/html']
			// { 'content-type': 'text/html' }
		}
	}
	// ⚠️ ⁡⁣⁣⁢80. Какой результат?⁡
	{
		const params = new URLSearchParams();
		params.append("tag", "js");
		params.append("tag", "node");
		console.log(params.toString());
		{
			// ✅ 'tag=js&tag=node' (append добавляет дубликаты ключей)
			// 'tag=js,node'
			// 'tag=js'
			// {tag:['js','node']}
		}
	}
	// ⚠️ ⁡⁣⁣⁢81. Что вернёт метод?⁡
	{
		const res = await fetch("/api/data");
		console.log(res.status >= 200 && res.status < 300);
		{
			// ✅ true, если статус успешный (аналог res.ok)
			// false
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢82. Что выведет код?⁡
	{
		const req = new Request("/api", { headers: { "X-Test": "1" } });
		console.log(req.headers.get("x-test"));
		{
			// ✅ '1' (заголовки нечувствительны к регистру)
			// undefined
			// 'X-Test'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢83. Какой результат?⁡
	{
		const url = new URL("https://example.com/path");
		console.log(url.pathname);
		{
			// ✅ '/path' (pathname включает ведущий слэш)
			// 'path'
			// 'example.com/path'
			// undefined
		}
	}
	// ⚠️ ⁡⁣⁣⁢84. Что вернёт выражение?⁡
	{
		const formData = new FormData();
		console.log(formData instanceof FormData);
		{
			// ✅ true (FormData — глобальный конструктор в браузере/некоторых runtime)
			// false
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢85. Что выведет код?⁡
	{
		fetch("/api/data", { cache: "no-store" }).then((res) => res.json());
		{
			// ✅ Запрос без кэширования (cache: 'no-store' отключает кэш браузера)
			// С кэшированием
			// Только для GET
			// Ошибка
		}
	}
}
// 🔗 ⁡⁢⁣⁣РАЗДЕЛ 3: НАСЛЕДОВАНИЕ И ЗАМЫКАНИЯ (ВОПРОСЫ 86–130)⁡
{
	// ⚠️ ⁡⁣⁣⁢86. Что выведет код?⁡
	{
		function outer() {
			let count = 0;
			return {
				inc: () => ++count,
				get: () => count,
			};
		}
		const counter = outer();
		counter.inc();
		console.log(counter.get());
		{
			// ✅ 1 (Замыкание сохраняет count между вызовами)
			// 0
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢87. Какой результат?⁡
	{
		class Parent {
			getName() {
				return "Parent";
			}
		}
		class Child extends Parent {
			getName() {
				return "Child";
			}
		}
		console.log(new Child().getName());
		{
			// ✅ 'Child' (Метод переопределён в подклассе)
			// 'Parent'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢88. Что вернёт выражение?⁡
	{
		function createAdder(x) {
			return function (y) {
				return x + y;
			};
		}
		const add5 = createAdder(5);
		console.log(add5(3));
		{
			// ✅ 8 (Замыкание запоминает x = 5)
			// 3
			// 5
			// NaN
		}
	}
	// ⚠️ ⁡⁣⁣⁢89. Что выведет код?⁡
	{
		console.log(1);
		setTimeout(() => console.log(2), 0);
		Promise.resolve().then(() => setTimeout(() => console.log(3), 0));
		Promise.resolve().then(() => console.log(4));
		console.log(5);
		{
			// ✅ 1,5,4,2,3 (Синхронные → микрозадачи → макрозадачи)
			// 1,5,2,4,3
			// 1,5,4,3,2
			// 1,2,3,4,5
		}
	}
	// ⚠️ ⁡⁣⁣⁢90. Как работает оператор ?? (nullish coalescing)?⁡
	{
		// ✅ Возвращает правый операнд, если левый = null/undefined, иначе левый (в отличие от || не считает 0, '', false за "отсутствие")
		// Возвращает левый, если он truthy, иначе правый
		// То же, что &&
		// Всегда возвращает правый
	}
	// ⚠️ ⁡⁣⁣⁢91. Что выведет код?⁡
	{
		function Foo() {
			this.a = 1;
		}
		Foo.prototype.b = 2;
		const obj = new Foo();
		console.log(obj.b);
		{
			// ✅ 2 (b найдено в прототипе)
			// 1
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢92. Какой результат?⁡
	{
		const obj = {
			x: 1,
			getX() {
				return this.x;
			},
		};
		const fn = obj.getX;
		console.log(fn());
		{
			// ✅ undefined (Потеря контекста: this = global/undefined в strict)
			// 1
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢93. Что вернёт выражение?⁡
	{
		class A {
			static method() {
				return "A";
			}
		}
		class B extends A {}
		console.log(B.method());
		{
			// ✅ 'A' (Статические методы наследуются)
			// 'B'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢94. Что выведет код?⁡
	{
		function outer() {
			for (var i = 0; i < 3; i++) {
				setTimeout(() => console.log(i), 0);
			}
		}
		outer();
		{
			// ✅ 3,3,3 (var имеет функциональную область, i общая для всех замыканий)
			// 0,1,2
			// 1,2,3
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢95. Какой результат?⁡
	{
		class Parent {
			constructor() {
				this.value = 1;
			}
		}
		class Child extends Parent {
			constructor() {
				super();
				this.value = 2;
			}
		}
		console.log(new Child().value);
		{
			// ✅ 2 (super() вызывает конструктор родителя, затем перезапись)
			// 1
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢96. Что вернёт выражение?⁡
	{
		const createCounter = () => {
			let count = 0;
			return () => ++count;
		};
		const c1 = createCounter();
		const c2 = createCounter();
		c1();
		c1();
		c2();
		console.log(c1());
		{
			// ✅ 3 (Каждый вызов createCounter создаёт новое замыкание)
			// 2
			// 4
			// 1
		}
	}
	// ⚠️ ⁡⁣⁣⁢97. Что выведет код?⁡
	{
		function Foo() {}
		Foo.prototype.x = 1;
		const obj = new Foo();
		obj.x = 2;
		console.log(Foo.prototype.x);
		{
			// ✅ 1 (Свойство экземпляра не меняет прототип)
			// 2
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢98. Какой результат?⁡
	{
		const obj = {
			a: 1,
			getA() {
				return this.a;
			},
		};
		const { getA } = obj;
		console.log(getA());
		{
			// ✅ undefined (Деструктуризация теряет контекст this)
			// 1
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢99. Что вернёт выражение?⁡
	{
		class Base {
			#private = 1;
			getPrivate() {
				return this.#private;
			}
		}
		class Derived extends Base {}
		console.log(new Derived().getPrivate());
		{
			// ✅ 1 (Приватные поля наследуются и доступны через методы базового класса)
			// undefined
			// Ошибка доступа
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢100. Что выведет код?⁡
	{
		function createMultipliers(arr) {
			return arr.map((factor) => {
				return function (x) {
					return x * factor;
				};
			});
		}
		const [double, triple] = createMultipliers([2, 3]);
		console.log(double(5) + triple(5));
		{
			// ✅ 25 (2*5 + 3*5 = 10+15, замыкания сохраняют свои factor)
			// 10
			// 15
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢101. Какой результат?⁡
	{
		class A {
			method() {
				return "A";
			}
		}
		class B extends A {
			method() {
				return super.method() + "B";
			}
		}
		console.log(new B().method());
		{
			// ✅ 'AB' (super.method() вызывает метод родителя)
			// 'BA'
			// 'B'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢102. Что вернёт выражение?⁡
	{
		const createModule = () => {
			let _data = [];
			return {
				add: (x) => _data.push(x),
				getAll: () => [..._data],
			};
		};
		const m = createModule();
		m.add(1);
		m.add(2);
		console.log(m.getAll());
		{
			// ✅ [1, 2] (Замыкание инкапсулирует _data)
			// []
			// [2]
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢103. Что выведет код?⁡
	{
		function Parent() {
			this.name = "P";
		}
		Parent.prototype.getName = function () {
			return this.name;
		};
		function Child() {
			Parent.call(this);
			this.name = "C";
		}
		Child.prototype = Object.create(Parent.prototype);
		console.log(new Child().getName());
		{
			// ✅ 'C' (call устанавливает name, прототип наследует метод)
			// 'P'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢104. Какой результат?⁡
	{
		const obj = {
			x: 1,
			methods: {
				getX: function () {
					return this.x;
				},
			},
		};
		console.log(obj.methods.getX());
		{
			// ✅ undefined (this = methods, а не obj; x нет в methods)
			// 1
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢105. Что вернёт выражение?⁡
	{
		class Base {
			static {
				console.log("init");
			}
		}
		console.log("done");
		{
			// ✅ 'init' затем 'done' (static-блоки выполняются при объявлении класса)
			// 'done' затем 'init'
			// Только 'done'
			// Ошибка синтаксиса
		}
	}
	// ⚠️ ⁡⁣⁣⁢106. Что выведет код?⁡
	{
		function outer(x) {
			return {
				inner: (y) => x + y,
			};
		}
		const obj = outer(10);
		console.log(obj.inner(5));
		{
			// ✅ 15 (Стрелочная функция замыкает x из outer)
			// 5
			// 10
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢107. Какой результат?⁡
	{
		class A {
			#x = 1;
			getX() {
				return this.#x;
			}
		}
		const a = new A();
		// console.log(a.#x);
		{
			// ✅ Ошибка синтаксиса (приватные поля доступны только внутри класса)
			// 1
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢108. Что вернёт выражение?⁡
	{
		const createCache = () => {
			const cache = {};
			return {
				get: (key) => cache[key],
				set: (key, val) => (cache[key] = val),
			};
		};
		const c = createCache();
		c.set("a", 1);
		console.log(c.get("a"));
		{
			// ✅ 1 (Замыкание хранит cache приватно)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢109. Что выведет код?⁡
	{
		function Foo() {}
		Foo.prototype = { x: 1 };
		const obj = new Foo();
		console.log(obj.constructor === Foo);
		{
			// ✅ false (Перезапись prototype удаляет constructor по умолчанию)
			// true
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢110. Какой результат?⁡
	{
		const obj = {
			x: 1,
			getX: () => this.x,
		};
		console.log(obj.getX());
		{
			// ✅ undefined (Стрелочная функция берёт this из лексической области, не из obj)
			// 1
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢111. Что вернёт выражение?⁡
	{
		class Parent {
			greet() {
				return "Hi";
			}
		}
		class Child extends Parent {
			greet() {
				return super.greet() + "!";
			}
		}
		const c = new Child();
		console.log(c.greet());
		{
			// ✅ 'Hi!' (super.greet() вызывает метод родителя)
			// 'Hi'
			// '!'
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢112. Что выведет код?⁡
	{
		function createCounter() {
			let count = 0;
			return {
				inc: () => count++,
				reset: () => {
					count = 0;
				},
			};
		}
		const c = createCounter();
		c.inc();
		c.inc();
		c.reset();
		console.log(c.inc());
		{
			// ✅ 1 (reset обнуляет, затем inc возвращает 0 и увеличивает до 1)
			// 0
			// 2
			// 3
		}
	}
	// ⚠️ ⁡⁣⁣⁢113. Какой результат?⁡
	{
		class Base {
			method() {
				return this.value;
			}
		}
		class Derived extends Base {
			constructor() {
				super();
				this.value = 42;
			}
		}
		console.log(new Derived().method());
		{
			// ✅ 42 (Наследование метода + собственное свойство)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢114. Что вернёт выражение?⁡
	{
		const module = (function () {
			let privateVar = "secret";
			return {
				get: () => privateVar,
			};
		})();
		console.log(module.get());
		{
			// ✅ 'secret' (IIFE создаёт замыкание для приватной переменной)
			// undefined
			// null
			// Ошибка доступа
		}
	}
	// ⚠️ ⁡⁣⁣⁢115. Что выведет код?⁡
	{
		function Foo() {
			this.a = 1;
		}
		Foo.prototype = { b: 2 };
		const obj = new Foo();
		console.log("a" in obj, "b" in obj);
		{
			// ✅ true true (a — собственное, b — в прототипе)
			// true false
			// false true
			// false false
		}
	}
	// ⚠️ ⁡⁣⁣⁢116. Какой результат?⁡
	{
		const obj = {
			x: 1,
			getX() {
				return this.x;
			},
			createGetter() {
				return () => this.getX();
			},
		};
		const getter = obj.createGetter();
		console.log(getter());
		{
			// ✅ 1 (Стрелочная функция сохраняет this из createGetter = obj)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢117. Что вернёт выражение?⁡
	{
		class A {
			static x = 1;
		}
		class B extends A {}
		console.log(B.x);
		{
			// ✅ 1 (Статические поля наследуются)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢118. Что выведет код?⁡
	{
		function outer() {
			let x = 1;
			return {
				getX: () => x,
				setX: (val) => {
					x = val;
				},
			};
		}
		const o = outer();
		o.setX(2);
		console.log(o.getX());
		{
			// ✅ 2 (Замыкание разделяет x между методами)
			// 1
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢119. Какой результат?⁡
	{
		class Parent {
			constructor() {
				this.data = [];
			}
		}
		class Child extends Parent {}
		const c1 = new Child();
		const c2 = new Child();
		c1.data.push(1);
		console.log(c2.data.length);
		{
			// ✅ 0 (Каждый экземпляр получает свой data из конструктора)
			// 1
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢120. Что вернёт выражение?⁡
	{
		const createPrivate = () => {
			let _value;
			return class {
				set(val) {
					_value = val;
				}
				get() {
					return _value;
				}
			};
		};
		const Cls = createPrivate();
		const inst = new Cls();
		inst.set(42);
		console.log(inst.get());
		{
			// ✅ 42 (Замыкание инкапсулирует _value для всех экземпляров класса)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢121. Что выведет код?⁡
	{
		function Foo() {}
		const obj = new Foo();
		console.log(obj instanceof Foo, obj instanceof Object);
		{
			// ✅ true true (instanceOf проверяет цепочку прототипов)
			// true false
			// false true
			// false false
		}
	}
	// ⚠️ ⁡⁣⁣⁢122. Какой результат?⁡
	{
		const obj = {
			x: 1,
			methods: {
				getX: () => this.x,
			},
		};
		console.log(obj.methods.getX.call(obj));
		{
			// ✅ undefined (call не меняет this стрелочной функции)
			// 1
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢123. Что вернёт выражение?⁡
	{
		class Base {
			#x = 1;
		}
		class Derived extends Base {
			getX() {
				// return this.#x;
			}
		}
		console.log(new Derived().getX());
		{
			// ✅ Ошибка (приватное поле #x недоступно в подклассе)
			// 1
			// undefined
			// null
		}
	}
	// ⚠️ ⁡⁣⁣⁢124. Что выведет код?⁡
	{
		function createFactory(name) {
			return function (age) {
				return { name, age };
			};
		}
		const createUser = createFactory("Alice");
		console.log(createUser(30).name);
		{
			// ✅ 'Alice' (Замыкание сохраняет name из внешней функции)
			// 'Bob'
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢125. Какой результат?⁡
	{
		class A {
			method() {
				return "A";
			}
		}
		class B extends A {
			method() {
				return "B";
			}
		}
		const b = new B();
		console.log(b instanceof A, b instanceof B);
		{
			// ✅ true true (instanceOf работает по цепочке наследования)
			// true false
			// false true
			// false false
		}
	}
	// ⚠️ ⁡⁣⁣⁢126. Что вернёт выражение?⁡
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
		{
			// ✅ 2 ((0+1)*2 = 2, замыкание хранит state)
			// 1
			// 3
			// 0
		}
	}
	// ⚠️ ⁡⁣⁣⁢127. Что выведет код?⁡
	{
		function Parent() {
			this.x = 1;
		}
		function Child() {
			Parent.call(this);
		}
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
		const c = new Child();
		console.log(c.x, c.constructor === Child);
		{
			// ✅ 1 true (call копирует свойства, constructor восстановлен)
			// 1 false
			// undefined true
			// undefined false
		}
	}
	// ⚠️ ⁡⁣⁣⁢128. Какой результат?⁡
	{
		const obj = {
			x: 1,
			getX: function () {
				return this.x;
			},
		};
		const bound = obj.getX.bind({ x: 2 });
		console.log(bound());
		{
			// ✅ 2 (bind жёстко фиксирует this)
			// 1
			// undefined
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢129. Что вернёт выражение?⁡
	{
		class Base {
			static {
				this.x = 1;
			}
		}
		console.log(Base.x);
		{
			// ✅ 1 (static-блок выполняется в контексте класса)
			// undefined
			// null
			// Ошибка
		}
	}
	// ⚠️ ⁡⁣⁣⁢130. Что выведет код?⁡
	{
		const createCounter = (step = 1) => {
			let count = 0;
			return {
				next: () => {
					count += step;
					return count;
				},
				reset: () => {
					count = 0;
				},
			};
		};
		const c = createCounter(3);
		c.next();
		c.next();
		c.reset();
		console.log(c.next());
		{
			// ✅ 3 (reset обнуляет, next добавляет step = 3)
			// 0
			// 6
			// 9
		}
	}
}