
// 🔳 ⁡⁢⁣⁣ВЫДАЧА КУПЮР НОМИНАЛОМ, НАЛИЧИЕМ И ИХ КОЛЛИЧЕСТВО⁡
{
	import { useState } from "react";
	import "./TestTask.css"

	// ⁡⁣⁢⁢Простая типизация (без ограничений):⁡
	// const nominals: number[] = [50, 100, 200, 500, 1000, 2000, 5000];
	// ⁡⁣⁢⁢Точная типизация с as const (фиксированные значения и порядок)⁡
	// const nominals = [50, 100, 200, 500, 1000, 2000, 5000] as const;
	// ⁡⁣⁢⁢Типизация доступных номиналов(допустимые значения без фиксации порядка)⁡
	type Nominal = "50" | "100" | "200" | "500" | "1000" | "2000" | "5000";
	// Доступные номиналы
	const allNominals: Nominal[] = ["50", "100", "200", "500", "1000", "2000", "5000"];
	/*
	* ATM
	* 
	* @param {number} amount - Введённая сумма
	* @param {number[]} nominals - Номиналы купюр
	* @return {string[]} Renurns format ["Nx3", "Nx4", "Nx1"] - колличество и номинал купюр
	*/

	function atm(
		amount: string | number,
		nominals: string | number | number[] | string[],
		excludedNominals: string[] | number[] = [],
	): string[] {
		if (!amount) return []; // Проверка на есть ли сумма
		// Приведение amount(денежная сумма) к числу
		const numericAmount = Number(amount);
		if (numericAmount < 0) return []; // Проверка на отрицательную сумму
		const result: string[] = []; // Массив для результата
		let remainingAmount = numericAmount;
		// Приведение nominals(массив номинала купюр) к массиву чисел
		const numericNominals: number[] = Array.isArray(nominals)
			? nominals.map((n) => Number(n))
			: [Number(nominals)];
		// Приведение excludedNominals(массив исключенных номиналов) к массиву чисел
		const numericExcludedNominals: number[] = Array.isArray(excludedNominals)
			? excludedNominals.map((n) => Number(n))
			: [Number(excludedNominals)];
		// Фильтрация доступных номиналов (исключаем те, что в excludedNominals(массив исключенных номиналов))
		// Фильтруем, условие если массив исключённых номиналов содержит этот элемент, то он исключается из массива доступных номиналов
		// Сортируем массив доступных номиналов по убыванию
		const availableNominals = numericNominals
			.filter((n) => !numericExcludedNominals.includes(n))
			.sort((a, b) => a - b);
		// Переборка массива с учётом доступных номиналов
		// Перебираем массив доступных номиналов с конца, чтобы выдавать купюры большими номиналами
		for (let i = availableNominals.length - 1; i >= 0; i--) {
			const count = Math.floor(remainingAmount / availableNominals[i]); // Количество купюр по текущему номиналу
			// Если количество купюр больше 0, то добавляем в массив
			if (remainingAmount < availableNominals[i]) continue; // Пропускаем если сумма меньше номинала
			if (count > 0) {
				result.push(`Купюры: ${availableNominals[i]} рублей колличество ${count} штуки`); // Добавляем в массив колличество купюр
				remainingAmount -= count * availableNominals[i]; // Уменьшаем сумму на колличество купюр добавленных в массив
			}
		}
		return result;
	}

	const TestTask = () => {
		const [amount, setAmount] = useState<string | number>("");
		const [result, setResult] = useState<string[]>([]);
		const [excludedNominals, setExcludedNominals] = useState<Nominal[]>([]);

		const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
			setAmount(+e.target.value);
		}
		// Обработчик изменение массива номинала купюр
		const handleToggleNominal = (nominal: Nominal) => {
			setExcludedNominals((prev) =>
				prev.includes(nominal) ? prev.filter((n) => n !== nominal) : [...prev, nominal],
			);
		};
		const handleSubmit = () => {
			const atmResult = atm(amount, allNominals, excludedNominals);
			setResult(atmResult);
		}
		const handleClear = () => {
			setAmount("");
			setResult([]);
			setExcludedNominals([]);
		}

		return (
			<>
				<div className="form">
					<span className="clean" title="Очистить поле" onClick={handleClear}>
						❌
					</span>
					<input
						type="number"
						name="amount"
						value={amount}
						className="input__number"
						onChange={handleChangeAmount}
					/>
					<button className="button__choose" onClick={handleSubmit}>
						Выбрать сумму
					</button>
					<div className="nominals-group">
						<label className="label__title">Исключить номиналы:</label>
						<div className="nominals-list">
							{allNominals.map((nominal) => (
								<label key={nominal} className="nominal-checkbox">
									<input
										type="checkbox"
										checked={excludedNominals.includes(nominal)}
										onChange={() => handleToggleNominal(nominal)}
									/>
									{nominal} руб.
								</label>
							))}
						</div>
					</div>
					<div className="out__block">
						<span className="out__text">Выдача купюр:</span>
						<ul className="out__list">
							{result.map((item, index) => (
								<li key={index} className="out__item">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</>
		);
	}

	export default TestTask;
}
// 🔳 // ⁡⁣⁣⁡⁢⁣⁣НАПИСАТЬ КОМПОНЕНТ ЧАСЫ ДОСТИГШИХ ОПРЕДЕЛЁННОГО ВРЕМЕНИ И УДАЛЕНИЯ, ПОСЛЕДНЕЕ ЗНАЧЕНИЕ ВРЕМЕНИ ПЕРЕДАТЬ В ФУНКЦИЮ LOGMETRIC, КОТОРАЯ ОТПРАВИТ ЕГО НА СЕРВЕР.⁡
{
	function logMetric(data) {
		fetch("https://api.example.com/metrics", {
			method: "POST",
			body: JSON.stringify({ time: data }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const Clock = () => {
		const [currentTime, setCurrentTime] = useState(new Date());
		const [shouldUnmount, setShouldUnmount] = useState(false);

		// Установка целевого времени (например, на 10 секунд вперед от момента монтирования)
		const targetTime = useRef(new Date());
		targetTime.current.setSeconds(targetTime.current.getSeconds() + 10);

		useEffect(() => {
			const timer = setInterval(() => {
				const now = new Date();
				setCurrentTime(now);
				// Проверяем достижение целевого времени
				if (now >= targetTime.current) {
					logMetric(now.toLocaleTimeString());
					setShouldUnmount(true);
				}
			}, 1000);
			return () => clearInterval(timer);
		}, []);

		return shouldUnmount ? null : <h1>{currentTime.toLocaleTimeString()}</h1>;
	};
}
// 🔳 ⁡⁣⁣⁡⁢⁣⁡⁢⁣⁣КАСТОМНАЯ РЕАЛИЗАЦИЯ ВИРТУАЛИЗАЦИИ (Бесконечного скрола)⁡
{
	// import { useState, useRef, useEffect } from "react";
	const VirtualList = ({ items, itemHeight, containerHeight }) => {
		const [scrollTop, setScrollTop] = useState(0);
		const containerRef = useRef(null);
		const handleScroll = () => {
			setScrollTop(containerRef.current.scrollTop);
		};
		const totalHeight = items.length * itemHeight;
		const startIndex = Math.floor(scrollTop / itemHeight);
		const endIndex = Math.min(
			items.length - 1,
			Math.floor((scrollTop + containerHeight) / itemHeight),
		);
		const visibleItems = items.slice(startIndex, endIndex + 1);
		return (
			<div
				ref={containerRef}
				style={{
					height: `${containerHeight}px`,
					overflow: "auto",
					position: "relative",
				}}
				onScroll={handleScroll}
			>
				<div style={{ height: `${totalHeight}px` }}>
					<div
						style={{
							position: "absolute",
							top: `${startIndex * itemHeight}px`,
							width: "100%",
						}}
					>
						{visibleItems.map((item, index) => (
							<div
								key={startIndex + index}
								style={{
									height: `${itemHeight}px`,
									borderBottom: "1px solid #ddd",
									boxSizing: "border-box",
								}}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};
	// Использование
	const items = Array(10000)
		.fill()
		.map((_, i) => `Item ${i}`);
	const App = () => <VirtualList items={items} itemHeight={40} containerHeight={400} />;
}
// 🔳 