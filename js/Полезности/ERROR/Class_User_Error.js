class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError"; // Переопределяем имя ошибки
	}
}

// Использование
try {
	throw new ValidationError("Поле обязательно для заполнения");
} catch (e) {
	if (e instanceof ValidationError) {
		console.error("Ошибка валидации:", e.message);
	}
}