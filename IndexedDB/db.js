
class Database {
	constructor(dbName, version, storesConfig) {
		this.dbName = dbName;
		this.version = version;
		this.storesConfig = storesConfig || {
			default: { keyPath: "id", autoIncrement: true },
		};
		this.db = null;
	}
	// Открытие/создание базы данных с автоматическим созданием хранилищ
	async open() {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.version);

			request.onupgradeneeded = (event) => {
				const db = event.target.result;

				// Создаем все указанные хранилища
				for (const [storeName, config] of Object.entries(this.storesConfig)) {
					if (!db.objectStoreNames.contains(storeName)) {
						const store = db.createObjectStore(storeName, config);

						// Создаем индексы если они указаны
						if (config.indexes) {
							for (const [indexName, indexConfig] of Object.entries(config.indexes)) {
								store.createIndex(indexName, indexConfig.path, indexConfig.options);
							}
						}
					}
				}
			};

			request.onsuccess = (event) => {
				this.db = event.target.result;
				resolve(this.db);
			};

			request.onerror = (event) => {
				reject(`Database error: ${event.target.error}`);
			};
		});
	}
	// Универсальный метод добавления/обновления данных
	async addItem(storeName, data, options = {}) {
		if (!this.db) await this.open();

		if (!this.db.objectStoreNames.contains(storeName)) {
			throw new Error(`Object store "${storeName}" not found`);
		}

		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction([storeName], "readwrite");
			const store = transaction.objectStore(storeName);

			const item = this.prepareData(data, options);

			const request = options.update ? store.put(item) : store.add(item);

			request.onsuccess = () => resolve(request.result);
			request.onerror = (event) => reject(`DB operation failed: ${event.target.error}`);
		});
	}
	// Подготовка данных
	prepareData(data, options) {
		if (options.disableWrapper) return data;

		return {
			id: options.key || this.generateUUID(),
			data: this.deepClone(data),
			meta: {
				createdAt: new Date(),
				updatedAt: new Date(),
				type: this.getDataType(data),
				...options.metadata,
			},
		};
	}
	// Генерация id
	generateUUID() {
		return (
			crypto.randomUUID?.() ||
			([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
				(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
			)
		);
	}
	// Вспомогательные методы
	deepClone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
	// generateUUID() {
	// 	// Шаблон UUID: 8-4-4-4-12 символов
	// 	const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

	// 	return pattern.replace(/[xy]/g, function (char) {
	// 		// Генерация случайного шестнадцатеричного числа
	// 		const random = (Math.random() * 16) | 0;

	// 		// Для символа 'x' просто возвращаем случайное значение
	// 		if (char === "x") {
	// 			return random.toString(16);
	// 		}

	// 		// Для символа 'y' устанавливаем версию UUID (8, 9, a или b)
	// 		// 0x8 = 8 в шестнадцатеричной системе
	// 		return ((random & 0x3) | 0x8).toString(16);
	// 	});
	// }
	getDataType(data) {
		if (Array.isArray(data)) return "array";
		if (data instanceof Date) return "date";
		if (data === null) return "null";
		if (typeof data === "object") return "object";
		return typeof data;
	}

	// Открытие/создание базы данных
	open() {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.version);

			request.onupgradeneeded = (event) => {
				const db = event.target.result;

				// Создаем хранилище объектов (аналог таблицы) с настройками
				if (!db.objectStoreNames.contains("complexData")) {
					const store = db.createObjectStore("complexData", {
						keyPath: "id",
						autoIncrement: true,
					});

					// Создаем индексы для поиска по вложенным свойствам
					store.createIndex("category", "data.category", { unique: false });
					store.createIndex("tags", "data.tags", { unique: false, multiEntry: true });
				}
			};

			request.onsuccess = (event) => {
				this.db = event.target.result;
				resolve(this.db);
			};

			request.onerror = (event) => {
				reject(event.target.error);
			};
		});
	}
	// Закрытие соединения
	close() {
		if (this.db) {
			this.db.close();
			this.db = null;
		}
	}
	// Добавление данных со сложной структурой
	addComplexItem(data) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(["complexData"], "readwrite");
			const store = transaction.objectStore("complexData");

			const request = store.add({
				data: data,
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
	// Получение данных по ID
	async getItem(storeName, key) {
		if (!this.db) await this.open();

		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction([storeName], "readonly");
			const store = transaction.objectStore(storeName);

			const request = store.get(key);

			request.onsuccess = () => resolve(request.result);
			request.onerror = (event) => reject(`Get operation failed: ${event.target.error}`);
		});
	}
	// getItem(id) {
	// 	return new Promise((resolve, reject) => {
	// 		const transaction = this.db.transaction(["complexData"], "readonly");
	// 		const store = transaction.objectStore("complexData");

	// 		const request = store.get(id);

	// 		request.onsuccess = () => resolve(request.result);
	// 		request.onerror = () => reject(request.error);
	// 	});
	// }
	// Поиск по вложенным свойствам
	getItemsByCategory(category) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(["complexData"], "readonly");
			const store = transaction.objectStore("complexData");
			const index = store.index("category");

			const request = index.getAll(category);

			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
	// Обновление данных
	updateItem(id, newData) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(["complexData"], "readwrite");
			const store = transaction.objectStore("complexData");

			// Сначала получаем текущие данные
			const getRequest = store.get(id);

			getRequest.onsuccess = () => {
				const existingData = getRequest.result;
				if (!existingData) {
					reject(new Error("Item not found"));
					return;
				}

				// Обновляем только измененные поля, сохраняя структуру
				const updatedData = {
					...existingData,
					data: {
						...existingData.data,
						...newData,
					},
					updatedAt: new Date(),
				};

				const updateRequest = store.put(updatedData);

				updateRequest.onsuccess = () => resolve(updateRequest.result);
				updateRequest.onerror = () => reject(updateRequest.error);
			};

			getRequest.onerror = () => reject(getRequest.error);
		});
	}
	// Удаление данных
	async deleteItem(storeName, key) {
		if (!this.db) await this.open();

		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction([storeName], "readwrite");
			const store = transaction.objectStore(storeName);

			const request = store.delete(key);

			request.onsuccess = () => resolve(true);
			request.onerror = (event) => reject(`Delete operation failed: ${event.target.error}`);
		});
	}
	// deleteItem(id) {
	// 	return new Promise((resolve, reject) => {
	// 		const transaction = this.db.transaction(["complexData"], "readwrite");
	// 		const store = transaction.objectStore("complexData");

	// 		const request = store.delete(id);

	// 		request.onsuccess = () => resolve(request.result);
	// 		request.onerror = () => reject(request.error);
	// 	});
	// }
	// Получение всех данных
	async getAllItems(storeName) {
		if (!this.db) await this.open();

		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction([storeName], "readonly");
			const store = transaction.objectStore(storeName);

			const request = store.getAll();

			request.onsuccess = () => resolve(request.result);
			request.onerror = (event) => reject(`GetAll operation failed: ${event.target.error}`);
		});
	}
	// getAllItems() {
	// 	return new Promise((resolve, reject) => {
	// 		const transaction = this.db.transaction(["complexData"], "readonly");
	// 		const store = transaction.objectStore("complexData");

	// 		const request = store.getAll();

	// 		request.onsuccess = () => resolve(request.result);
	// 		request.onerror = () => reject(request.error);
	// 	});
	// }
}

export default Database;

// main.js (рендер-процесс)
const path = require("path");
import Database from "../../IndexedDB/db.js";

// Инициализация базы данных
const db = new Database("MyAppDB", 1, {
	users: {
		keyPath: "email",
		indexes: {
			firstName_idx: { path: "firstName", options: { unique: false } },
			lastName_idx: { path: "LastName", options: { unique: false } },
			age_idx: { path: "age", options: { unique: false } },
		},
	},
});

// const user = {
// 	firstName: "Андрей",
// 	LastName: "Рябов",
// 	age: 55,
// }
// async function addDatabase() {
// 	try {
// 		await db.open();

// 		// Добавление пользователя
// 		await db.addItem("admin", {
// 			firstName: "Андрей",
// 			LastName: "Рябов",
// 			age: 55,
// 			contacts: {
// 				email: "exemple@yandex.ru",
// 				phone: +79082636117,
// 			},
// 		});

// 		// Добавление продукта
// 		// const productId = await db.addItem("products", {
// 		// 	name: "Smartphone",
// 		// 	category: "electronics",
// 		// 	price: 699.99,
// 		// 	specs: {
// 		// 		ram: "8GB",
// 		// 		storage: "128GB",
// 		// 	},
// 		// });

// 		console.log("Продукт добавлен с ID:", productId);

// 		// Простые настройки без обертки
// 		await db.addItem(
// 			"settings",
// 			{
// 				key: "dark_mode",
// 				value: true,
// 			},
// 			{ disableWrapper: true },
// 		);
// 	} catch (error) {
// 		console.error("Операция базы данных не удалась:", error);
// 	}
// }
// addDatabase();