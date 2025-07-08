//! КЛОНИРОВАНИЕ МНОГОМЕРНОГО МАССИВА ОБЪЕКТОВ
{
	structuredClone(array); //* Встроенная функция глубокого копирования
	// 🔳 ⁡⁢⁣⁣ФУНКЦИЯ ГЛУБОКОГО КОПИРОВАНИЯ⁡
	{
		function deepCopy(obj, hash = new WeakMap()) {
			// Примитивы и null/undefined
			if (obj === null || typeof obj !== "object") {
				return obj;
			}
			// Обработка циклических ссылок
			if (hash.has(obj)) {
				return hash.get(obj);
			}
			// Специальные объекты
			if (obj instanceof Date) {
				return new Date(obj);
			}
			if (obj instanceof RegExp) {
				return new RegExp(obj);
			}
			// Массивы
			if (Array.isArray(obj)) {
				const copy = [];
				hash.set(obj, copy);
				for (let i = 0; i < obj.length; i++) {
					copy[i] = deepCopy(obj[i], hash);
				}
				return copy;
			}
			// Объекты
			const copy = Object.create(Object.getPrototypeOf(obj));
			hash.set(obj, copy);
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					copy[key] = deepCopy(obj[key], hash);
				}
			}
			// Обработка функций
			if (typeof obj === "function") {
				return obj.bind({});
			}
			// Копирование символьных свойств
			const symbolKeys = Object.getOwnPropertySymbols(obj);
			for (const symKey of symbolKeys) {
				copy[symKey] = deepCopy(obj[symKey], hash);
			}
			return copy;
		}
	}
}

//! КОЛЛЕКЦИЮ html В МАССИВ
Array.from(коллекция - элементов);
[...(коллекция - элементов)];
//! ПРОВЕРИТЬ МАССИВ ИЛИ НЕТ
Array.isArray(массив) // true/false
//! МЕТОДЫ МАССИВОВ
{
	console.log(Array.isArray(arr)); //* возвращает true/false массив или нет
	join(); //* возвращает представление массива в виде строки, состоящей из значений всех элементов массива, разделённых запятой или другим указанным разделителем.
	unshift(); //* добавляет элементы в начало массива
	array.unshift(element1, elementN);
	push(); //* добавляет элементы в конец массива
	array.push(element1, elementN);
	shift(); //* удаляет и возвращает первый элемент массива
	array.shift();
	pop(); //* извлекает элементы из конца массива
	array.pop();
	splice(); //* добавляет, удаляет или заменяет элементы из любой части массива, возвращает не удалённые
	array.splice(start, [deleteCount, item1, item2]);
	//TODO start — это начальный индекс элемента массива, с которого мы хотим начать изменения. Данный параметр может принимать отрицательные индексы, которые указывают на позицию элемента с конца массива.
	//TODO deleteCount — это количество элементов, которые мы хотим удалить из массива. Если указать 0, то все элементы останутся. А если не указать никакого значения, то метод удалит все элементы начиная со стартового индекса — того, что мы записали в параметре start.
	//TODO item1, item2, … — это список новых элементов, которые нужно добавить после стартового индекса. Эти элементы указывать необязательно.
	slice(); //* копирует элементы одного массива  и создаёт новый массив
	array.slice([start, end]);
	//TODO start — это стартовый индекс, с которого начинается копирование элементов. Если не указать, то всё начнётся с нулевого индекса.
	//TODO end — это конечный индекс, до которого будут копироваться элементы. Если не указать, то скопируются все элементы от стартового индекса до конца выбранного массива.
	concat(); //* копирует элементы нескольких массивов, объединяет несколько массивов в один
	array.concat(arg1, arg2, argN);
	filter(); //* возвращает массив по условию, перебирает массив и выбирает из него элементы, которые проходят проверку по заданному условию.
	const animals = ["🐶", "🐱", "🦁", "🐯", "🐷"];
	animals.filter((animal) => animal === "🦁" || animal === "🐯");
	map(); //* возвращает массив на основе исходного
	animals.map((animal) => `${animal}💉`);
	forEach(); //* перебирает массив и ничего не возвращает, То есть вы можете что-то сделать с каждым элементом, посмотреть результат и не записывать его в новый массив.
	const vehicles = ["🚗", "🚕", "🚙", "🚌", "🚎", "🏍️", "🚲", "🚜", "✈️", "🚢"];
	vehicles.forEach((vehicle) => console.log(vehicle));
	every(); //* проверяет, соответствуют ли все элементы массива заданному условию, проходит по всему массиву и возвращает булево значение true, если каждый элемент удовлетворяет условию. Если есть хотя бы одно несовпадение — метод every() вернёт false
	array.every(callback);
	some(); //* проверяет, выполняется ли условие хотя бы для одного элемента массива, после перебора массива возвращает true, если хотя бы один элемент соответствует условию. Если совпадений нет — метод вернёт false
	array.some(callback);
	indexOf(); //* возвращает индекс искомого элемента, принимает два аргумента: искомый элемент и индекс, с которого должен начинаться поиск. Если в массиве несколько одинаковых элементов, то indexOf вернёт только первый индекс. В случае если нужного элемента не будет, метод вернёт отрицательный индекс со значением -1
	array.indexOf(searchElement, [fromIndex]);
	findIndex(callback(el)); //* возвращает индекс первого элемента массива, удовлетворяющего условиям заданной функции, или возвращает -1, если ни один из элементов не удовлетворяет функции.
	//TODO searchElement — элемент, который мы хотим найти в массиве.
	//TODO fromIndex — номер индекса, с которого должен стартовать поиск. Если этот параметр не указать, то поиск начнётся с начала массива.
	lastIndexOf(); //* возвращает индекс искомого элемента, но начинает поиск с конца массива
	array.lastIndexOf(searchElement, [fromIndex]);
	includes(); //* проверяет наличие элемента в массиве, возвращает булево значение true или false.
	array.includes(searchElement, [fromIndex]);
	find(); //* возвращает первый элемент в массиве, который удовлетворяет условию поиска, Если нужный элемент будет найден, то find() его вернёт, если нет то вернётся undefined
	array.find(callback);
	sort(); //* возвращает отсортированный массив. То есть после применения метода исходный массив изменится. По умолчанию элементы сортируются в лексикографическом порядке — как строки. Если в массиве будут числа, то метод sort() преобразует их в строки и после отсортирует по кодам символов Unicode.
	const foods = ["🍕", "🍔", "🌭", "🍟", "🥗", "🍣", "🍝", "🌮", "🥪", "🍰"];
	foods.sort();
	foods.sort(callback);
	reverse(); //* разворачивает массив, меняет порядок элементов
	array.reverse();
	reduce(); //* свёртывает элементы массива в единое значение, применяет функцию обратного вызова последовательно для каждого элемента массива, сохраняет промежуточный результат и выводит общее значение. Это может быть объединённые строки, сумма чисел и так далее.
	const numbers = [1, 2, 3, 4, 5];
	// Используем метод reduce() для нахождения суммы всех элементов
	const summa = numbers.reduce((accumulator, currentValue) => {
		// На каждой итерации добавляем текущее значение (currentValue) к аккумулятору (accumulator)
		return accumulator + currentValue;
	}, 0); // Начальное значение аккумулятора 0

	console.log(sum); // 15
	//TODO Функция получает начальное значение.
	//TODO Переходит к первому элементу массива и начальному значению.
	//TODO Получается промежуточный результат, который становится новым начальным значением.
	//TODO Функция переходит к следующему элементу массива и обновлённому начальному значению.
	//TODO Процесс повторяется, пока функция не пройдёт по всем элементам.
}
//! РАЗБИВКА НА N МАССИВОВ
//-------------------------------------------
{
	function* chunks(arr, n) {
		for (let i = 0; i < arr.length; i += n) {
			yield arr.slice(i, i + n);
		}
	}
	const arrRes = [...chunks(array, 4)];
	console.log(arrRes);
	//------------------------------------------
	const perChunk = 4; // Предметы на кусок
	const inputArray = array; // Массив который разбить
	const result = inputArray.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // начать новый кусок
		}
		resultArray[chunkIndex].push(item);
		return resultArray;
	}, []);
	console.log(result); // result: [['a','b'], ['c','d'], ['e']]
	//-----------------------------------------------
	function chunkAr(arr, len) {
		var chunks = [],
			i = 0,
			n = arr.length;
		while (i < n) {
			chunks.push(arr.slice(i, (i += len)));
		}
		return chunks;
	}
	console.log(chunkAr(array, 4));
}
//! ДОБАВЛЯТЬ В МАССИВ ОБЪЕКТЫ ИГНОРИРУЯ УЖЕ ИМЕЮЩИЕСЯ
let newParams;
if (state.filterValue.findIndex((item) => item.id === params.id) === -1) {
	newParams = params;
	return (state.filterValue = [...state.filterValue, newParams]);
} else {
	return state.filterValue;
}
//! ФИЛЬТРОВАТЬ МАССИВ
let новыйMассив = массив.filter(function (элемент, индекс, массив) {
	код;
	return true || false; // true что попадёт в новый массив
});
//--------------
//! ФИЛЬТРОВАТЬ ОДИНАКОВЫЕ ОБЪЕКТЫ В МАССИВЕ
{
    //* 1. Явное решение. Основано на полном знании содержащегося в объекте массива.
    list = list.reduce((r, i) => (!r.some((j) => i.x === j.x && i.y === j.y) ? [...r, i] : r), []);
    //* Здесь у нас есть строгое ограничение на структуру сравниваемых объектов: {x: N, y: M}. И [{x:1, y:2}, {x:1, y:2, z:3}] будут отфильтрованы по [{x:1, y:2}].

    //* 2. Универсальное решение, JSON.stringify(). Сравниваемые объекты могут иметь любое количество любых свойств.
    list = list.reduce(
        (r, i) => (!r.some((j) => JSON.stringify(i) === JSON.stringify(j)) ? [...r, i] : r),
        [],
    );
    // Этот подход имеет ограничение на порядок свойств, поэтому [{x:1, y:2}, {y:2, x:1}] не будет отфильтрован.

    //* 3. Универсальное решение, Object.keys(). Порядок не имеет значения.

    list = list.reduce(
        (r, i) => (!r.some((j) => !Object.keys(i).some((k) => i[k] !== j[k])) ? [...r, i] : r),
        [],
    );
    // Этот подход имеет еще одно ограничение: сравниваемые объекты должны иметь одинаковый список ключей. Таким образом, [{x:1, y:2}, {x:1}] будет отфильтрован, несмотря на очевидную разницу.

    //* 4. Универсальное решение, Object.keys() + .length.
    list = list.reduce(
        (r, i) =>
            !r.some(
                (j) =>
                    Object.keys(i).length === Object.keys(j).length &&
                    !Object.keys(i).some((k) => i[k] !== j[k]),
            )
                ? [...r, i]
                : r,
        [],
	);
	function incluseArray(array) {
		return array.reduce(
			(r, i) =>
				!r.some(
					(j) =>
						Object.keys(i).length === Object.keys(j).length &&
						!Object.keys(i).some((k) => i[k] !== j[k]),
				)
					? [...r, i]
					: r,
			[],
		);
	}
    // При последнем подходе объекты сравниваются по количеству ключей, по самим ключам и по значениям ключей.
}
//! ЗАПОЛНЕНИЕ МАССИВА
const itemArray = Array(5).fill(1);
// Array(5) Массив с количеством индексов
// Первый параметр чем заполнять
// Не обязательный с какой позиции
// Не обязательный по какую позицию
console.log(itemArray); // [1, 1, 1, 1, 1]
//! МЕТОДЫ ОБХОДА МАССИВА
{
    //* Самый быстрый
    var i = testData.length;
    while (i--) {
        console.log(testData[i]);
    }
    //* for
    var a = ["a", "b", "c"];
    var index;
    for (index = 0; index < a.length; ++index) {
        console.log(a[index]);
    }
    //* for in
    // a - разреженный массив
    // Выполнит всего 3 итерации
    var a = [];
    a[0] = "a";
    a[10] = "b";
    a[10000] = "c";
    for (var key in a) {
        if (a.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
            console.log(a[key]);
        }
    }
    //* for of
    var val;
    var a = ["a", "b", "c"];
    for (val of a) {
        console.log(val);
    }
    //* forEach перебор не чего не возвращпет
    //* forEach и другие методы Array.prototype также применимы к массивоподобным объектам.
    //* Array.prototype.slice можно использовать более наглядный метод Array.from.
    var a = ["a", "b", "c"];
    a.forEach(function (entry) {
        console.log(entry);
    });
    //* filter — создает новый массив, включающий те элементы исходного массива, для которых колбек возвращает true.
    function isBigEnough(value) {
        return value >= 10;
    }
    let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // массив filtered теперь содержит [12, 130, 44]
    //* map — создает новый массив, состоящий из значений возращаемых колбеком.
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const squares = nums.map(function (num) {
        return num * num;
    });
    console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
    //* reduce — сводит массив к единственному значению, применяя колбек по очереди к каждому элементу массива, начиная с первого (может быть полезен для вычисления суммы элементов массива и других итоговых функций).
    const numBer = [1, 2, 3, 4, 5, 6, 7, 8];

    const sum = numBer.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber;
    }, 0);
    // 36
    //* reduceRight — работает аналогично reduce, но перебирает элементы в обратном порядке.
}