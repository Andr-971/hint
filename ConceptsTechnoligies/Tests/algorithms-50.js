// 📊 ⁡⁢⁣⁢50 АЛГОРИТМИЧЕСКИХ ЗАДАЧ ПО КАТЕГОРИЯМ⁡
// ⭐ ⁡⁤⁥⁥УТИЛИТЫ⁡
{
	// Создаёт связный список из массива
	const makeList = (arr) => {
		let head = null,
			tail = null;
		for (const val of arr) {
			const node = { val, next: null };
			if (!head) head = tail = node;
			else {
				tail.next = node;
				tail = node;
			}
		}
		return head;
	};
	// Превращает список в массив для сравнения
	const listToArray = (head) => {
		const res = [];
		while (head) {
			res.push(head.val);
			head = head.next;
		}
		return res;
	};
}
// 1️⃣ ⁡⁢⁣⁡⁢⁣⁣МАССИВЫ И СТРОКИ(Поиск суммы двух чисел)⁡
{
	// ⁡⁣⁢⁡⁣⁢⁢ПРОВЕРКА АНАГРАММЫ(ПЕРЕСТАНОВКА БУКВ)⁡
	{
		const isAnagram = (s, t) => {
			if (s.length !== t.length) return false;
			const freq = new Map();
			for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);
			for (const c of t) {
				if (!freq.has(c) || freq.get(c) === 0) return false;
				freq.set(c, freq.get(c) - 1);
			}
			return true;
		};
		// 🧪 Тесты
		console.assert(isAnagram("anagram", "nagaram") === true, "case1");
		console.assert(isAnagram("rat", "car") === false, "case2");
		console.assert(isAnagram("", "") === true, "case3 (пустые)");
		console.assert(isAnagram("a", "ab") === false, "case4 (разная длина)");
	}
	// ⁡⁣⁢⁢НАЛИЧИЕ ДУБЛИКАТОВ⁡
	{
		const containsDuplicate = (nums) => {
			const seen = new Set();
			for (const n of nums) {
				if (seen.has(n)) return true;
				seen.add(n);
			}
			return false;
		};
		// 🧪 Тесты
		console.assert(containsDuplicate([1, 2, 3, 1]) === true, "case1");
		console.assert(containsDuplicate([1, 2, 3, 4]) === false, "case2");
		console.assert(containsDuplicate([]) === false, "case3");
	}
	// ⁡⁣⁢⁢САМАЯ ДЛИННАЯ ПОДСТРОКА БЕЗ ПОВТОРОВ⁡
	{
		const lengthOfLongestSubstring = (s) => {
			const lastSeen = new Map();
			let maxLen = 0,
				start = 0;
			for (let i = 0; i < s.length; i++) {
				if (lastSeen.has(s[i]) && lastSeen.get(s[i]) >= start) {
					start = lastSeen.get(s[i]) + 1;
				}
				lastSeen.set(s[i], i);
				maxLen = Math.max(maxLen, i - start + 1);
			}
			return maxLen;
		};
		// 🧪 Тесты
		console.assert(lengthOfLongestSubstring("abcabcbb") === 3, "case1");
		console.assert(lengthOfLongestSubstring("bbbbb") === 1, "case2");
		console.assert(lengthOfLongestSubstring("pwwkew") === 3, "case3");
		console.assert(lengthOfLongestSubstring("") === 0, "case4");
	}
	// ⁡⁣⁢⁢ГРУППИРОВКА АНАГРАММ⁡
	{
		const groupAnagrams = (strs) => {
			const groups = new Map();
			for (const s of strs) {
				// Ключ: отсортированная строка (для ASCII можно использовать частотный массив)
				const key = s.split("").sort().join("");
				if (!groups.has(key)) groups.set(key, []);
				groups.get(key).push(s);
			}
			return Array.from(groups.values());
		};

		// 🧪 Тесты
		console.assert(
			JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]).sort()) ===
				JSON.stringify([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].sort()),
			"case1",
		);
		console.assert(JSON.stringify(groupAnagrams([""])) === '[[""]]', "case2");
	}
	// ⁡⁣⁢⁢СУММА ДВУХ ЧИСЕЛ O(n) время, O(n) память⁡
	{
		// ⁡⁢⁢⁡⁥⁥⁡⁤⁥⁥Функция решает задачу Two Sum(сумма двух чисел): ищет в массиве два числа, сумма которых равна заданному целевому значению (target), и возвращает их индексы.⁡
		const twoSum = (nums, target) => {
			// Храним значение → индекс для поиска дополнения за O(1)
			const seen = new Map(); //  — создание пустого Map для хранения пройденных чисел и их индексов.
			for (let i = 0; i < nums.length; i++) {
				// — цикл по всем элементам массива.
				const need = target - nums[i]; // — вычисление числа, которое нужно для достижения
				if (seen.has(need)) return [seen.get(need), i]; // — проверка, встречали ли мы это число раньше. — если нашли, возвращаем индексы: сначала индекс need, затем текущий индекс.
				seen.set(nums[i], i); // — добавляем текущее число и его индекс в Map.
			}
			return [];
		};
		// 💡 ⁡⁣⁣⁢Паттерн: Хеш-таблица заменяет вложенный цикл. Map в JS оптимизирован под числовые ключи.⁡
		const nums = [2, 7, 11, 15];
		const target = 9;
		const result = twoSum(nums, target);
		console.log(result); // [0, 1]
	}
}
// 2️⃣ ⁡⁢⁣⁣ДВА УКАЗАТЕЛЯ / СКОЛЬЗЯЩЕЕ ОКНО ()⁡
{
	// ⁡⁣⁢⁢СУММА ТРЁХ ЧИСЕЛ⁡
	{
		const threeSum = (nums) => {
			nums.sort((a, b) => a - b);
			const res = [];
			for (let i = 0; i < nums.length - 2; i++) {
				if (i > 0 && nums[i] === nums[i - 1]) continue; // пропуск дубликатов
				let left = i + 1,
					right = nums.length - 1;
				while (left < right) {
					const sum = nums[i] + nums[left] + nums[right];
					if (sum === 0) {
						res.push([nums[i], nums[left], nums[right]]);
						while (left < right && nums[left] === nums[left + 1]) left++;
						while (left < right && nums[right] === nums[right - 1]) right--;
						left++;
						right--;
					} else if (sum < 0) {
						left++;
					} else {
						right--;
					}
				}
			}
			return res;
		};

		// 🧪 Тесты
		console.assert(threeSum([-1, 0, 1, 2, -1, -4]).length === 2, "case1");
		console.assert(JSON.stringify(threeSum([0, 0, 0])) === "[[0,0,0]]", "case2");
		console.assert(threeSum([0, 1, 1]).length === 0, "case3");
	}
	// ⁡⁣⁢⁢КОНТЕЙНЕР С МАКСИМАЛЬНЫМ ОБЪЁМОМ ВОДЫ⁡
	{
		const maxArea = (height) => {
			let left = 0,
				right = height.length - 1,
				max = 0;
			while (left < right) {
				const h = Math.min(height[left], height[right]);
				max = Math.max(max, h * (right - left));
				// Двигаем указатель с меньшей высотой
				if (height[left] < height[right]) left++;
				else right--;
			}
			return max;
		};

		// 🧪 Тесты
		console.assert(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, "case1");
		console.assert(maxArea([1, 1]) === 1, "case2");
		console.assert(maxArea([4, 3, 2, 1, 4]) === 16, "case3");
	}
	// ⁡⁣⁢⁢САМАЯ ДЛИННАЯ ПОДСТРОКА С ЗАМЕНОЙ СИМВОЛОВ⁡
	{
		const characterReplacement = (s, k) => {
			const freq = new Array(26).fill(0);
			let maxFreq = 0,
				left = 0;
			for (let right = 0; right < s.length; right++) {
				const idx = s.charCodeAt(right) - 65; // 'A' = 65
				freq[idx]++;
				maxFreq = Math.max(maxFreq, freq[idx]);
				// Если окно > (макс_частота + k), сжимаем слева
				if (right - left + 1 - maxFreq > k) {
					freq[s.charCodeAt(left) - 65]--;
					left++;
				}
			}
			return s.length - left;
		};

		// 🧪 Тесты
		console.assert(characterReplacement("ABAB", 2) === 4, "case1");
		console.assert(characterReplacement("AABABBA", 1) === 4, "case2");
		console.assert(characterReplacement("AAAA", 2) === 4, "case3 (k >= len)");
	}
	// ⁡⁣⁢⁢УЛАВЛИВАНИЕ ДОЖДЕВОЙ ВОДЫ⁡
	{
		const trap = (height) => {
			let left = 0,
				right = height.length - 1;
			let leftMax = 0,
				rightMax = 0,
				water = 0;
			while (left < right) {
				if (height[left] < height[right]) {
					if (height[left] >= leftMax) leftMax = height[left];
					else water += leftMax - height[left];
					left++;
				} else {
					if (height[right] >= rightMax) rightMax = height[right];
					else water += rightMax - height[right];
					right--;
				}
			}
			return water;
		};

		// 🧪 Тесты
		console.assert(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6, "case1");
		console.assert(trap([4, 2, 0, 3, 2, 5]) === 9, "case2");
		console.assert(trap([1, 0, 2]) === 1, "case3");
		console.assert(trap([]) === 0, "case4");
	}
	// ⁡⁢⁢⁡⁢⁢⁡⁣⁢⁡⁣⁢⁢МИНИМАЛЬНЫЙ РАЗМЕР ПОДМАССИВА O(n) время, O(1) память — используются только несколько переменных (left, sum, minLen, right).⁡
	{
		// ⁡⁤⁥⁥Функция решает задачу поиска минимальной длины непрерывного подмассива, сумма элементов которого не меньше заданного значения target.⁡
		const minSubArrayLen = (target, nums) => {
			// 👇  — инициализация:
			// left — левая граница окна (индекс);
			// sum — текущая сумма элементов в окне;
			// minLen — минимальная длина подмассива (изначально бесконечность).
			let left = 0,
				sum = 0,
				minLen = Infinity;
			for (let right = 0; right < nums.length; right++) {
				// — основной цикл: right — правая граница окна.
				sum += nums[right]; // — добавляем текущий элемент в сумму.
				// Сжимаем окно слева, пока сумма достаточна
				while (sum >= target) {
					minLen = Math.min(minLen, right - left + 1); // — обновляем минимальную длину, если текущий подмассив короче
					sum -= nums[left++]; // — вычитаем левый элемент из суммы и сдвигаем left на 1 вправо.
				}
			}
			return minLen === Infinity ? 0 : minLen;
		};
		// 💡 ⁡⁣⁣⁢Паттерн: Плавающее окно без вложенных циклов. Каждый элемент посещается максимум дважды.⁡
		const target = 7;
		const nums = [2, 3, 1, 2, 4, 3];
		const result = minSubArrayLen(target, nums);
		console.log(result); // 2
		// Подмассив [4, 3] имеет сумму 7 и длину 2 — это минимальный вариант.
		// Другие подходящие подмассивы (например, [2, 3, 1, 2]) длиннее.
	}
}
// 3️⃣ ⁡⁢⁣⁡⁢⁣⁣ХЕШ-ТАБЛИЦЫ И ПРЕФИКСНЫЕ СУММЫ⁡
{
	// ⁡⁣⁢⁢ПЕРВЫЙ УНИКАЛЬНЫЙ СИМВОЛ⁡
	{
		const firstUniqChar = (s) => {
			const freq = new Map();
			for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);
			for (let i = 0; i < s.length; i++) {
				if (freq.get(s[i]) === 1) return i;
			}
			return -1;
		};

		// 🧪 Тесты
		console.assert(firstUniqChar("leetcode") === 0, "case1");
		console.assert(firstUniqChar("loveleetcode") === 2, "case2");
		console.assert(firstUniqChar("aabb") === -1, "case3");
		console.assert(firstUniqChar("") === -1, "case4 (пусто)");
	}
	// ⁡⁣⁢⁢ПЕРЕСЕЧЕНИЕ ДВУХ МАССИВОВ⁡
	{
		const intersection = (nums1, nums2) => {
			const set2 = new Set(nums2);
			// Filter + new Set убирает дубликаты результата
			return [...new Set(nums1.filter((n) => set2.has(n)))];
		};

		// 🧪 Тесты
		console.assert(
			intersection([1, 2, 2, 1], [2, 2]).length === 1 &&
				intersection([1, 2, 2, 1], [2, 2])[0] === 2,
			"case1",
		);
		console.assert(intersection([4, 9, 5], [9, 4, 9, 8, 4]).length === 2, "case2");
		console.assert(intersection([], [1, 2]).length === 0, "case3");
	}
	// ⁡⁣⁢⁢ПОИСК ВСЕХ АНАГРАММ(ПЕРЕСТАНОВКА БУКВ) В СТРОКЕ⁡
	{
		const findAnagrams = (s, p) => {
			if (s.length < p.length) return [];
			const pCount = new Int32Array(26);
			const sCount = new Int32Array(26);
			for (let i = 0; i < p.length; i++) {
				pCount[p.charCodeAt(i) - 97]++;
				sCount[s.charCodeAt(i) - 97]++;
			}
			const res = [];
			const match = () => pCount.every((v, i) => v === sCount[i]);
			if (match()) res.push(0);

			for (let i = 1; i <= s.length - p.length; i++) {
				sCount[s.charCodeAt(i - 1) - 97]--; // убираем выходящий символ
				sCount[s.charCodeAt(i + p.length - 1) - 97]++; // добавляем входящий
				if (match()) res.push(i);
			}
			return res;
		};

		// 🧪 Тесты
		console.assert(JSON.stringify(findAnagrams("cbaebabacd", "abc")) === "[0,6]", "case1");
		console.assert(JSON.stringify(findAnagrams("abab", "ab")) === "[0,1,2]", "case2");
		console.assert(findAnagrams("a", "aa").length === 0, "case3");
	}
	// ⁡⁣⁢⁢САМАЯ ДЛИННАЯ ПОСЛЕДОВАТЕЛЬНАЯ ПОДПОСЛЕДОВАТЕЛЬНОСТЬ⁡
	{
		const longestConsecutive = (nums) => {
			const set = new Set(nums);
			let maxLen = 0;
			for (const n of set) {
				// Начинаем считать только если n - начало последовательности
				if (!set.has(n - 1)) {
					let curLen = 1;
					while (set.has(n + curLen)) curLen++;
					maxLen = Math.max(maxLen, curLen);
				}
			}
			return maxLen;
		};
		// 🧪 Тесты
		console.assert(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4, "case1");
		console.assert(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9, "case2");
		console.assert(longestConsecutive([]) === 0, "case3");
		console.assert(longestConsecutive([1, 2, 0, 1]) === 3, "case4 (дубликаты)");
	}
	// ⁡⁢⁢⁡⁣⁢⁢СУММА ПОДМАССИВА РАВНА K O(N) ВРЕМЯ, O(N) ПАМЯТЬ⁡
	{
		// ⁡⁤⁥⁥Функция решает задачу подсчёта количества непрерывных подмассивов, сумма элементов которых равна заданному числу k.⁡
		// nums — массив целых чисел (могут быть положительные, отрицательные и нули);
		// k — целевое число (искомая сумма подмассива).
		const subarraySum = (nums, k) => {
			// 👇 — инициализация:
			// count — счётчик найденных подмассивов;
			// prefix — текущая префиксная сумма (изначально 0).
			let count = 0,
				prefix = 0;

			const freq = new Map([[0, 1]]); // — создание карты частот префиксных сумм. Начальная сумма 0 считается встретившейся 1 раз (это важно для случаев, когда подмассив начинается с первого элемента).
			for (const n of nums) {
				// — перебор всех элементов массива.
				prefix += n; // — обновление текущей префиксной суммы.
				// Если (текущая - K) уже была в префиксах, значит между ними есть подмассив с суммой K
				// 👇 — проверка, встречалась ли ранее префиксная сумма prefix - k.
				if (freq.has(prefix - k)) count += freq.get(prefix - k); // — если встречалась, увеличиваем счётчик на количество таких вхождений.
				freq.set(prefix, (freq.get(prefix) || 0) + 1); // — обновляем частоту текущей префиксной суммы в карте.
			}
			// 👇 целое число — количество подмассивов с суммой, равной k.
			return count;
		};
		// 💡 ⁡⁣⁣⁢Паттерн: Префиксные суммы + частотная карта. Избегает O(n²) перебора подмассивов.⁡
		const nums = [1, 1, 1];
		const k = 2;
		const result = subarraySum(nums, k);
		console.log(result); // 2
		// Подмассивы с суммой 2: [1, 1] (индексы 0–1) и [1, 1] (индексы 1–2).
		// Итого 2 подмассива.
	}
}
// 4️⃣ ⁡⁢⁣⁣СВЯЗНЫЕ СПИСКИ⁡
{
	// ⁡⁣⁢⁢РАЗВОРОТ СВЯЗНОГО СПИСКА⁡
	{
		const reverseList = (head) => {
			let prev = null,
				curr = head;
			while (curr) {
				const next = curr.next; // сохраняем ссылку
				curr.next = prev; // разворачиваем
				prev = curr; // сдвигаем prev
				curr = next; // сдвигаем curr
			}
			return prev;
		};

		// 🧪 Тесты
		console.assert(
			JSON.stringify(listToArray(reverseList(makeList([1, 2, 3, 4, 5])))) === "[5,4,3,2,1]",
			"case1",
		);
		console.assert(listToArray(reverseList(makeList([1, 2])))[0] === 2, "case2");
		console.assert(reverseList(makeList([])) === null, "case3");
	}
	// ⁡⁣⁢⁢СЛИЯНИЕ ДВУХ ОТСОРТИРОВАННЫХ СПИСКОВ⁡
	{
		const mergeTwoLists = (l1, l2) => {
			const dummy = { next: null };
			let tail = dummy;
			while (l1 && l2) {
				if (l1.val <= l2.val) {
					tail.next = l1;
					l1 = l1.next;
				} else {
					tail.next = l2;
					l2 = l2.next;
				}
				tail = tail.next;
			}
			tail.next = l1 || l2; // прицепляем остаток
			return dummy.next;
		};

		// 🧪 Тесты
		console.assert(
			JSON.stringify(listToArray(mergeTwoLists(makeList([1, 2, 4]), makeList([1, 3, 4])))) ===
				"[1,1,2,3,4,4]",
			"case1",
		);
		console.assert(listToArray(mergeTwoLists(makeList([]), makeList([0])))[0] === 0, "case2");
		console.assert(mergeTwoLists(makeList([]), makeList([])) === null, "case3");
	}
	// ⁡⁣⁢⁢УДАЛЕНИЕ N-ГО УЗЛА С КОНЦА⁡
	{
		const removeNthFromEnd = (head, n) => {
			const dummy = { next: head };
			let fast = dummy,
				slow = dummy;
			// Отводим fast на n+1 шагов вперёд
			for (let i = 0; i <= n; i++) fast = fast.next;
			while (fast) {
				slow = slow.next;
				fast = fast.next;
			}
			slow.next = slow.next.next; // пропускаем целевой узел
			return dummy.next;
		};

		// 🧪 Тесты
		console.assert(
			JSON.stringify(listToArray(removeNthFromEnd(makeList([1, 2, 3, 4, 5]), 2))) ===
				"[1,2,3,5]",
			"case1",
		);
		console.assert(
			listToArray(removeNthFromEnd(makeList([1]), 1)).length === 0,
			"case2 (удаление head)",
		);
		console.assert(listToArray(removeNthFromEnd(makeList([1, 2]), 1))[0] === 1, "case3");
	}
	// ⁡⁣⁢⁢СПИСОК-ПАЛИНДРОМ⁡
	{
		const isPalindrome = (head) => {
			if (!head || !head.next) return true;
			// 1. Находим середину (slow/fast)
			let slow = head,
				fast = head;
			while (fast && fast.next) {
				slow = slow.next;
				fast = fast.next.next;
			}
			// 2. Разворачиваем вторую половину
			let prev = null,
				curr = slow;
			while (curr) {
				const next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;
			}
			// 3. Сравниваем первую и развёрнутую вторую половины
			let left = head,
				right = prev;
			while (right) {
				if (left.val !== right.val) return false;
				left = left.next;
				right = right.next;
			}
			return true;
		};

		// 🧪 Тесты
		console.assert(isPalindrome(makeList([1, 2, 2, 1])) === true, "case1 (чётная)");
		console.assert(isPalindrome(makeList([1, 2, 3, 2, 1])) === true, "case2 (нечётная)");
		console.assert(isPalindrome(makeList([1, 2])) === false, "case3");
		console.assert(isPalindrome(makeList([1])) === true, "case4");
	}
	// ⁡⁢⁢⁡⁣⁢⁢ЦИКЛ В СВЯЗНОМ СПИСКЕ (АЛГОРИТМ ФЛОЙДА) O(N) ВРЕМЯ, O(1) ПАМЯТЬ⁡
	{
		// ⁡⁤⁤⁤КАК РАБОТАЕТ АЛГОРИТМ⁡
		// ⁡⁢⁢⁣Идея основана на использовании двух указателей, движущихся с разной скоростью:⁡
		// ⁡⁢⁢⁣slow («черепаха») — двигается на 1 узел за шаг;⁡
		// ⁡⁢⁢⁣fast («заяц») — двигается на 2 узла за шаг.⁡
		// ⁡⁤⁤⁤ЛОГИКА РАБОТЫ:⁡
		// ⁡⁢⁢⁣Если в списке нет цикла, «заяц» рано или поздно достигнет конца списка (null) и функция вернёт false.⁡
		// ⁡⁢⁢⁣Если в списке есть цикл, «заяц», двигаясь быстрее, в какой‑то момент догонит «черепаху» внутри цикла — указатели встретятся (slow === fast), и функция вернёт true.⁡
		// ⁡⁤⁥⁥Функция проверяет, содержит ли односвязный список цикл (зацикленность). Возвращает: true, если цикл есть; false, если списка нет цикла.⁡
		const hasCycle = (head) => {
			// 👇 — инициализация обоих указателей в начале списка.
			let slow = head,
				fast = head;
			while (fast && fast.next) {
				// — цикл продолжается, пока «заяц» не достигнет конца:
				slow = slow.next; // шаг ×1
				fast = fast.next.next; // шаг ×2
				if (slow === fast) return true; // встреча = цикл
			}
			return false;
		};
		// 💡 ⁡⁣⁣⁢Паттерн: "Черепаха и заяц". Не требует дополнительной памяти для пометок.⁡
	}
}
// 6️⃣ ⁡⁢⁣⁣ДЕРЕВЬЯ⁡
{
	// ⁡⁣⁢⁢КОРРЕКТНЫЕ СКОБКИ (VALID PARENTHESES)⁡
	{
		const isValid = (s) => {
			if (s.length % 2 !== 0) return false;
			const stack = [];
			const map = { ")": "(", "}": "{", "]": "[" };

			for (const char of s) {
				if (map[char]) {
					const top = stack.pop();
					if (top !== map[char]) return false;
				} else {
					stack.push(char);
				}
			}
			return stack.length === 0;
		};

		// 🧪 Тесты
		console.assert(isValid("()[]{}") === true, "case1");
		console.assert(isValid("(]") === false, "case2");
		console.assert(isValid("([)]") === false, "case3 (пересечение)");
		console.assert(isValid("") === true, "case4");
	}
	// ⁡⁣⁢⁢СТЕК С МИНИМУМОМ (MIN STACK)⁡
	{
		const createMinStack = () => {
			const stack = [];
			const minStack = [];
			return {
				push: (val) => {
					stack.push(val);
					// Храним минимум на текущем уровне
					minStack.push(minStack.length === 0 ? val : Math.min(val, minStack.at(-1)));
				},
				pop: () => {
					stack.pop();
					minStack.pop();
				},
				top: () => stack.at(-1),
				getMin: () => minStack.at(-1),
			};
		};

		// 🧪 Тесты
		const ms = createMinStack();
		ms.push(-2);
		ms.push(0);
		ms.push(-3);
		console.assert(ms.getMin() === -3, "case1");
		ms.pop();
		console.assert(ms.top() === 0, "case2");
		console.assert(ms.getMin() === -2, "case3");
	}
	// ⁡⁣⁢⁡⁣⁢⁢ВЫЧИСЛЕНИЕ ОБРАТНОЙ ПОЛЬСКОЙ ЗАПИСИ (Evaluate RPN)⁡
	{
		const evalRPN = (tokens) => {
			const stack = [];
			for (const t of tokens) {
				if ("+-*/".includes(t)) {
					const b = stack.pop();
					const a = stack.pop();
					let res;
					switch (t) {
						case "+":
							res = a + b;
							break;
						case "-":
							res = a - b;
							break;
						case "*":
							res = a * b;
							break;
						case "/":
							res = Math.trunc(a / b); // JS делит с плавающей точкой
					}
					stack.push(res);
				} else {
					stack.push(Number(t));
				}
			}
			return stack[0];
		};

		// 🧪 Тесты
		console.assert(evalRPN(["2", "1", "+", "3", "*"]) === 9, "case1");
		console.assert(evalRPN(["4", "13", "5", "/", "+"]) === 6, "case2");
		console.assert(
			evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]) === 22,
			"case3",
		);
	}
	// ⁡⁣⁢⁡⁣⁢⁢ОЧЕРЕДЬ НА ДВУХ СТЕКАХ(FIFO (First In, First Out — «первый пришёл, первый ушёл»))⁡
	{
		// ⁡⁤⁥⁥Функция createQueue создаёт очередь (FIFO — First‑In‑First‑Out) с использованием двух стеков (inStack и outStack).⁡
		// ⁡⁤⁤⁤Стек работает по принципу LIFO (Last‑In‑First‑Out), а очередь — FIFO. Чтобы эмулировать поведение очереди, используют два стека:⁡
		// ⁡⁢⁢⁣— inStack — для операций push(добавление элементов); ⁡
		// ⁡⁢⁢⁣— outStack — для операций pop и peek(извлечение и просмотр).⁡
		const createQueue = () => {
			const inStack = [], // — стек для добавления новых элементов (push).
				outStack = []; // — стек для извлечения элементов (pop, peek).
			// 👇 — вспомогательная функция, которая переносит элементы из inStack в outStack, переворачивая их порядок (чтобы обеспечить FIFO).
			const transfer = () => {
				// 👇 Условие: выполняется только если outStack пуст.
				if (outStack.length === 0) {
					// 👇 Действие: переносит все элементы из inStack в outStack с помощью pop() и push().
					// Эффект: порядок элементов в outStack становится обратным относительно inStack, что обеспечивает FIFO для очереди.
					while (inStack.length) outStack.push(inStack.pop());
				}
			};
			return {
				push: (x) => inStack.push(x), // Добавляет элемент x в inStack.
				pop: () => {
					// 👇 Вызывает transfer(), чтобы убедиться, что outStack содержит актуальные элементы в правильном порядке.
					transfer();
					// 👇 Извлекает верхний элемент из outStack.
					return outStack.pop();
					// Если outStack пуст, transfer() перемещает все элементы из inStack в outStack (при этом порядок элементов меняется на обратный, что соответствует FIFO).
				},
				peek: () => {
					// 👇 Вызывает transfer(), чтобы убедиться, что outStack содержит актуальные элементы в правильном порядке.
					transfer();
					// 👇 Аналогично pop(), но не удаляет элемент, а возвращает верхний элемент outStack (outStack.at(-1)).
					return outStack.at(-1);
					// Использует transfer() для актуализации outStack.
				},
				// 👇 Проверяет, пусты ли оба стека. Возвращает true, если inStack и outStack пусты.
				empty: () => inStack.length === 0 && outStack.length === 0,
			};
		};

		// 🧪 Тесты
		const q = createQueue();
		q.push(1);
		q.push(2);
		console.assert(q.peek() === 1, "case1");
		console.assert(q.pop() === 1, "case2");
		console.assert(q.empty() === false, "case3");
	}
	// ⁡⁣⁢⁢СЛЕДУЮЩИЙ БОЛЬШИЙ ЭЛЕМЕНТ I (NEXT GREATER ELEMENT)⁡
	{
		// ⁡⁤⁥⁥Функция решает задачу «Следующий больший элемент» (Next Greater Element): для каждого элемента из nums1 находит первый больший элемент, который идёт после него в массиве nums2. Если такого элемента нет, возвращается -1.⁡
		// ⁡⁢⁢⁢Входные данные:⁡ nums1 — массив целых чисел (для этих элементов ищем следующий больший); nums2 — массив целых чисел, содержащий все элементы nums1 (возможно, с дополнительными), в котором производится поиск.
		const nextGreaterElement = (nums1, nums2) => {
			const nextGreater = new Map(); // — создаём Map для хранения пар (число, следующий больший).
			const stack = []; // — инициализируем пустой стек. Он будет монотонно убывающим.
			for (const n of nums2) {
				// — перебираем элементы nums2 слева направо.
				// 👇 — пока стек не пуст и текущий элемент n больше верхнего элемента стека:
				while (stack.length && n > stack.at(-1)) {
					nextGreater.set(stack.pop(), n); // — извлекаем верхний элемент стека и сохраняем, что его следующий больший — n.
				}
				stack.push(n); // — добавляем текущий элемент в стек (он может стать следующим большим для последующих элементов).
			}
			return nums1.map((n) => nextGreater.get(n) ?? -1); // — для каждого элемента nums1 ищем его следующий больший в nextGreater. Если не найден (undefined), возвращаем -1.
		};

		// 🧪 Тесты
		const nums1 = [4, 1, 2];
		const nums2 = [1, 3, 4, 2];
		console.log(nextGreaterElement(nums1, nums2)); // [-1, 3, -1]
		// Разбор: 
		// Для 4 в nums2 нет большего элемента после него → -1. 
		// Для 1 следующий больший — 3 → 3. 
		// Для 2 в nums2 нет большего элемента после него → -1.
	}
	// ⁡⁣⁢⁢МАКСИМАЛЬНАЯ ГЛУБИНА БИНАРНОГО ДЕРЕВА⁡
	{
		const maxDepth = (root) => {
			if (!root) return 0;
			// Итеративный DFS для обхода лимита стека вызовов
			const stack = [[root, 1]];
			let max = 0;
			while (stack.length) {
				const [node, depth] = stack.pop();
				if (node) {
					max = Math.max(max, depth);
					if (node.left) stack.push([node.left, depth + 1]);
					if (node.right) stack.push([node.right, depth + 1]);
				}
			}
			return max;
		};

		// 🧪 Тесты
		console.assert(
			maxDepth({
				val: 3,
				left: { val: 9 },
				right: { val: 20, left: { val: 15 }, right: { val: 7 } },
			}) === 3,
			"case1",
		);
		console.assert(maxDepth(null) === 0, "case2");
		console.assert(maxDepth({ val: 1, right: { val: 2 } }) === 2, "case3 (скошенное)");
	}
	// ⁡⁣⁢⁢Инверсия бинарного дерева⁡
	// ⁡⁣⁢⁢Симметричное дерево⁡
	// ⁡⁣⁢⁢Обход по уровням⁡
	// ⁡⁢⁢⁡⁣⁢⁢ПРОВЕРКА БИНАРНОГО ДЕРЕВА ПОИСКА O(N) ВРЕМЯ, O(H) ПАМЯТЬ⁡
	{
		// ⁡⁤⁥⁥Функция проверяет, является ли заданное бинарное дерево корректным бинарным деревом поиска (BST — Binary Search Tree).⁡
		{
			// ⁡⁢⁢⁣Входные данные:⁡ ⁡⁣⁣⁡⁤⁤⁤root⁡⁡ — корень бинарного дерева (узел или null); ⁡⁣⁣⁡⁤⁤⁤min⁡⁡ — нижняя граница допустимых значений для текущего узла (по умолчанию -Infinity); ⁡⁤⁤⁤max⁡ ⁡— верхняя граница допустимых значений для текущего узла (по умолчанию Infinity).
			const isValidBST = (root, min = -Infinity, max = Infinity) => {
				if (!root) return true; // — базовый случай: пустой узел (конец ветви) всегда валиден.
				// Проверяем границы, а не только соседей
				if (root.val <= min || root.val >= max) return false; // — проверка, что значение узла строго между границами. Если нет — дерево не BST.
				return (
					isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
				); // — рекурсивная проверка поддеревьев: левое поддерево: границы [min, root.val); правое поддерево: границы (root.val, max].
			};
			// 💡 ⁡⁣⁣⁢Паттерн: Рекурсивная проверка допустимого интервала для каждой ветки.⁡
		}
	}
}
// 7️⃣ ⁡⁢⁣⁣ГРАФЫ (BFS/DFS)(Поиск в ширину(BFS))⁡
{
	// ⁡⁣⁢⁢Клонирование графа⁡
	// ⁡⁣⁢⁢Расписание курсов (топологическая сортировка)⁡
	// ⁡⁣⁢⁢Лестница слов⁡
	// ⁡⁣⁢⁢Сток воды (Тихий/Атлантический)⁡
	// ⁡⁢⁢⁡⁣⁢⁢КОЛИЧЕСТВО ОСТРОВОВ (BFS) O(M·N) ВРЕМЯ, O(MIN(M,N)) ПАМЯТЬ⁡
	{
		// ⁡⁤⁥⁥Функция решает задачу «Количество островов» (Number of Islands): подсчитывает количество связных групп единиц ("1") в двумерной сетке, где: "1" — суша; "0" — вода; острова образованы единицами, соединёнными по горизонтали или вертикали; диагональные связи не учитываются.⁡
		// ⁡⁢⁢⁣Алгоритм: поиск в ширину (BFS — Breadth‑First Search) с модификацией сетки «на месте».⁡
		// ⁡⁤⁤⁤КАК РАБОТАЕТ АЛГОРИТМ⁡
		// ⁡⁢⁢⁣Проверка на пустоту: если сетка пуста или не существует, возвращаем 0.⁡
		// ⁡⁢⁢⁣Инициализация: count — счётчик островов (изначально 0); m, n — размеры сетки; dirs — массив направлений для обхода соседей (вверх, вниз, влево, вправо).⁡
		// ⁡⁢⁢⁣Основной цикл: проходим по всем ячейкам сетки.⁡
		// ⁡⁢⁢⁣Обнаружение острова: если находим "1", увеличиваем count и запускаем BFS для «затопления» всего острова (пометки всех его ячеек как посещённых).⁡
		// ⁡⁢⁢⁣BFS‑обход:⁡
		// ⁡⁢⁢⁡⁤⁤⁥— добавляем текущую ячейку в очередь q;⁡
		// ⁡⁢⁢⁡⁤⁤⁥— пока очередь не пуста, извлекаем ячейку и проверяем всех её соседей;⁡
		// ⁡⁢⁢⁡⁤⁤⁥— если сосед — суша ("1"), помечаем его как посещённый ("0") и добавляем в очередь;⁡
		// ⁡⁢⁢⁡⁤⁤⁥— повторяем, пока весь остров не будет «затоплен».⁡⁡
		// ⁡⁢⁢⁡⁤⁤⁡⁢⁢⁣Продолжение поиска: после обработки острова продолжаем обход сетки.⁡
		{
			const numIslands = (grid) => {
				if (!grid?.length) return 0; // — если сетка не существует или пуста, возвращаем 0.
				let count = 0; // — инициализируем счётчик островов.
				const m = grid.length,
					n = grid[0].length; // — получаем размеры сетки.
				const dirs = [
					[0, 1],
					[0, -1],
					[1, 0],
					[-1, 0],
				]; // — задаём направления для обхода соседних ячеек (вверх, вниз, влево, вправо).

				for (let r = 0; r < m; r++) {
					// — двойной цикл для перебора всех ячеек сетки.
					for (let c = 0; c < n; c++) {
						if (grid[r][c] === "1") {
							// — если нашли сушу, начинаем обработку острова.
							count++; // — увеличиваем счётчик островов.
							grid[r][c] = "0"; // помечаем как посещённый
							const q = [[r, c]]; // — создаём очередь BFS и добавляем в неё начальную ячейку.
							while (q.length) {
								// — пока в очереди есть ячейки, продолжаем обход.
								const [cr, cc] = q.shift(); // — извлекаем первую ячейку из очереди.
								for (const [dr, dc] of dirs) {
									// — перебираем все четыре направления.
									const nr = cr + dr, // — вычисляем координаты соседа.
										nc = cc + dc; // — вычисляем координаты соседа.
									if (
										nr >= 0 &&
										nr < m &&
										nc >= 0 &&
										nc < n &&
										grid[nr][nc] === "1"
									) {
										grid[nr][nc] = "0";
										q.push([nr, nc]); // — помечаем соседа как посещённый и добавляем в очередь для дальнейшего обхода.
									}
								}
							}
						}
					}
				}
				return count; // — после обработки всей сетки возвращаем количество островов.
			};
		}
		// 💡 ⁡⁣⁣⁢Паттерн: BFS по сетке. Модификация входного массива экономит память visited.⁡
	}
}
// 8️⃣ ⁡⁢⁣⁣СОРТИРОВКА И БИНАРНЫЙ ПОИСК()⁡
{
	// ⁡⁣⁢⁢Объединение интервалов⁡
	// ⁡⁣⁢⁢Поиск в повёрнутом отсортированном массиве⁡
	// ⁡⁣⁢⁢K-й по величине элемент⁡
	// ⁡⁣⁢⁢Поиск элемента-пика⁡
	// ⁡⁣⁢⁢Медиана двух отсортированных массивов⁡
	// ⁡⁢⁢⁢Поиск в повёрнутом отсортированном массиве O(log n) время, O(1) память⁡
	{
		const search = (nums, target) => {
			let l = 0,
				r = nums.length - 1;
			while (l <= r) {
				const mid = (l + r) >>> 1; // безопасное деление пополам
				if (nums[mid] === target) return mid;
				// Левая часть отсортирована
				if (nums[l] <= nums[mid]) {
					if (nums[l] <= target && target < nums[mid]) r = mid - 1;
					else l = mid + 1;
				} else {
					// Правая часть отсортирована
					if (nums[mid] < target && target <= nums[r]) l = mid + 1;
					else r = mid - 1;
				}
			}
			return -1;
		};
		const grid = [
			["1", "1", "0", "0"],
			["1", "1", "0", "0"],
			["0", "0", "1", "0"],
			["0", "0", "0", "1"],
		];
		console.log(numIslands(grid)); // 3
		// Остров 1: объединённые "1" в левом верхнем углу (2×2).
		// Остров 2: одиночная "1" в середине.
		// Остров 3: одиночная "1" в правом нижнем углу.
		// 💡 ⁡⁣⁣⁢Паттерн: Бинарный поиск с определением отсортированной половины на каждом шаге.⁡
	}
}
// 9️⃣ ⁡⁢⁣⁣ДИНАМИЧЕСКОЕ ПРОГРАММИРОВАНИЕ / ЖАДНЫЕ АЛГОРИТМЫ⁡
{
	// ⁡⁣⁢⁢Подъём по лестнице⁡
	// ⁡⁣⁢⁢Размен монет⁡
	// ⁡⁣⁢⁢Самая длинная возрастающая подпоследовательность⁡
	// ⁡⁣⁢⁢Игра с прыжками⁡
	// ⁡⁣⁢⁢Расстояние редактирования⁡
	// ⁡⁢⁢⁢Размен монет (минимальное количество) O(amount·coins) время, O(amount) память⁡
	// ⁡⁤⁥⁥Функция решает классическую задачу «Размен монет» (Coin Change): находит минимальное количество монет, необходимое для составления заданной суммы amount, используя доступные номиналы coins.⁡
	// ⁡⁢⁢⁣Алгоритм: динамическое программирование (DP) с заполнением массива снизу вверх.⁡
	{
		// Входные данные: coins — массив целых положительных чисел (номиналы монет); amount — целое неотрицательное число (искомая сумма).
		const coinChange = (coins, amount) => {
			const dp = new Array(amount + 1).fill(Infinity); // — создаём массив DP, где индекс — сумма, значение — минимальное количество монет. Изначально все суммы недостижимы.
			dp[0] = 0; // 0 монет для суммы 0
			for (const c of coins) {
				// — перебираем все доступные номиналы монет.
				for (let i = c; i <= amount; i++) {
					// — для каждой суммы от номинала монеты c до целевой amount.
					// Берём минимум: не использовать монету или использовать её 1 раз
					dp[i] = Math.min(dp[i], dp[i - c] + 1); // — обновляем dp[i]: dp[i] — текущее минимальное количество монет для суммы i; dp[i - c] + 1 — вариант с добавлением одной монеты номиналом c.
				}
			}
			return dp[amount] === Infinity ? -1 : dp[amount]; // — если сумма недостижима, возвращаем -1, иначе — минимальное количество монет.
		};
		const coins = [1, 2, 5];
		const amount = 11;
		console.log(coinChange(coins, amount)); // 3
		// Разбор: Оптимальное решение: 5 + 5 + 1 = 11 → 3 монеты.
	}
	// 💡 ⁡⁣⁣⁢Паттерн: Unbounded Knapsack. Массив dp хранит ответ для каждой промежуточной суммы.⁡
}
// 🔟 ⁡⁢⁣⁣РЕКУРСИЯ / БИТЫ / КОМБИНАТОРИКА⁡
{
	// ⁡⁣⁢⁢Все подмножества⁡
	// ⁡⁣⁢⁢Все перестановки⁡
	// ⁡⁣⁢⁢Задача о N ферзях⁡
	// ⁡⁣⁢⁢Подсчёт единичных битов⁡
	// ⁡⁣⁢⁢Степень двойки / Разворот целого числа⁡
	// ⁡⁢⁢⁢Подсчёт единичных битов (динамическое программирование + биты) O(n) время, O(1) доп. память⁡
	// ⁡⁤⁥⁥Функция решает задачу «Подсчёт единиц в двоичном представлении»: для каждого числа от 0 до n (включительно) вычисляет количество единиц (1) в его двоичной записи и возвращает массив результатов.⁡
	// ⁡⁢⁢⁣Алгоритм: динамическое программирование с использованием битовых операций.⁡
	// ⁡⁤⁤⁤КЛЮЧЕВАЯ ИДЕЯ АЛГОРИТМА⁡
	// ⁡⁢⁢⁣Основная идея основана на рекуррентном соотношении: Количество единиц в числе i равно: countOnes(i)=countOnes(⌊2i⌋)+(imod2) Где: ⌊ 2i ⌋ — результат сдвига вправо на 1 бит (i >> 1); (imod2) — младший бит числа (i & 1).⁡
	{
		// Входные данные: n — целое неотрицательное число (верхняя граница диапазона).
		const countBits = (n) => {
			const res = new Array(n + 1).fill(0); // — создаём массив res длиной n+1 и заполняем нулями. res[0] = 0 (в двоичном представлении 0 нет единиц).
			for (let i = 1; i <= n; i++) {
				// — перебираем числа от 1 до n.
				// Сдвиг вправо убирает младший бит, (i & 1) добавляет его, если он был 1
				res[i] = res[i >> 1] + (i & 1); //  — вычисляем количество единиц для числа i: i >> 1 — сдвигаем i вправо на 1 бит (эквивалентно ⌊ 2i​ ⌋); res[i >> 1] — берём уже вычисленное количество единиц для этого числа; (i & 1) — проверяем младший бит i (1 или 0); суммируем результаты.
			}
			return res; // — возвращаем массив с результатами для всех чисел от 0 до n.
		};
		console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
	}
	// 💡 ⁡⁣⁣⁢Паттерн: Переиспользование уже вычисленных значений. i>>1 эквивалентно Math.floor(i/2).⁡
}
// 🔟1️⃣