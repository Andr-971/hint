// ! CSS MODULES: ПОДРОБНОЕ РУКОВОДСТВО С ПРИМЕРАМИ
// ⭐ ⁡⁣⁣⁢CSS Modules - это технология, которая позволяет изолировать стили CSS на уровне компонентов, избегая проблем с глобальными пространствами имен в CSS. Давайте разберем это подробно.⁡
// 🔳 ⁡⁢⁣⁣ЧТО ТАКОЕ CSS MODULES?⁡
{
	// ⁡⁣⁣⁡⁣⁢⁢CSS Modules - это система, которая⁡⁡
	// ✅ ⁡⁢⁢⁢Автоматически генерирует уникальные имена классов⁡
	// ✅ ⁡⁢⁢⁢Позволяет импортировать CSS прямо в JavaScript⁡
	// ✅ ⁡⁢⁢⁢Обеспечивает локальную область видимости для стилей⁡
}
// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ ПРЕИМУЩЕСТВА⁡
{
	// ✅ ⁡⁢⁢⁢Изоляция стилей - классы не конфликтуют между компонентами⁡
	// ✅ ⁡⁢⁢⁢Явные зависимости - видно, какие стили используются в компоненте⁡
	// ✅ ⁡⁢⁢⁢Поддержка композиции - можно комбинировать стили из разных модулей⁡
	// ✅ ⁡⁢⁢⁢Простота рефакторинга - можно безопасно переименовывать классы⁡
}
// 🔳 ⁡⁢⁣⁣КАК РАБОТАЮТ CSS MODULES, НАСТРОЙКА?⁡
{
	// 🔹 ⁡⁣⁢⁡⁣⁢⁢При сборке проекта (с помощью Webpack, Vite Rollup или другого инструмента) имена классов преобразуются в уникальные идентификаторы, что предотвращает конфликты имен. Пример базовой настройки - Для работы CSS Modules обычно нужен сборщик модулей. Вот пример настройки для Webpack⁡
	// ⁡⁣⁣⁢webpack.config.js⁡
	module.exports = {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[name]__[local]--[hash:base64:5]", // формат имен классов
								},
							},
						},
					],
				},
			],
		},
	};
	// ⁡⁣⁣⁢vite.config.js⁡
	// import { defineConfig } from "vite";
	// export default
	defineConfig({
		css: {
			modules: {
				// Генерация имен классов (опции)
				localsConvention: "camelCase", // 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
				generateScopedName: "[name]__[local]___[hash:base64:5]", // Шаблон имен
				globalModulePaths: [/\.global\.css$/], // Файлы, игнорирующие CSS Modules
				hashPrefix: "prefix", // Добавка к хешу (для избежания коллизий)
				// Экспериментальные опции (Vite 5+)
				scopeBehaviour: "local", // 'local' | 'global'
			},
		},
	});
}
// 🔳 ⁡⁢⁣⁣ИСПОЛЬЗОВАНИЕ CSS MODULES⁡
{
	// 🔹 ⁡⁣⁢⁢Создание CSS файла⁡
	{
		// ✅ ⁡⁢⁢⁢Создадим файл Button.module.css (важно использовать .module.css для автоматического распознавания многими инструментами⁡
		// Button.module.css
		// Обычный класс
		`.button {
			padding: 10px 20px;
			border: none;
			border-radius: 4px;
			font-size: 16px;
		}`;
		// Модификатор
		`.primary {
			background-color: #3498db;
			color: white;
		}`;
		// Псевдоклассы
		`.button:hover {
			opacity: 0.9;
		}`;
	}
	// 🔹 ⁡⁣⁢⁢Импорт в JavaScript/React⁡
	{
		// import React from "react";
		// import styles from "./Button.module.css"; // Импорт стилей как объекта
		function Button({ primary, children }) {
			// Комбинирование классов
			const buttonClasses = [styles.button, primary && styles.primary]
				.filter(Boolean)
				.join(" ");
			return <button className={buttonClasses}>{children}</button>;
		}
		// export default Button;
	}
	// 🔹 ⁡⁣⁢⁢Результат в DOM⁡
	{
		// ✅ ⁡⁢⁢⁢После обработки CSS Modules сгенерирует уникальные имена классов⁡
		<button class="Button__button--1a2b3 Button__primary--4c5d6">Нажми меня</button>;
	}
}
// 🔳 ⁡⁢⁣⁣ПРОДВИНУТЫЕ ВОЗМОЖНОСТИ⁡
{
	// 🔹 ⁡⁣⁢⁢Композиция классов⁡
	{
		// ✅ ⁡⁢⁢⁢CSS Modules поддерживают композицию - возможность наследовать стили из других классов⁡
		{
			// Button.module.css
			`.base {
				padding: 10px 20px;
				border: none;
			}
			.button {
				composes: base; // Наследование стилей из .base 
				border-radius: 4px;
			}
			.primary {
				composes: button; // Наследование стилей из .button 
				background-color: blue;
			}`;
		}
	}
	// 🔹 ⁡⁣⁢⁢Композиция из других файлов⁡
	{
		// ✅ ⁡⁢⁢⁢Можно компоновать классы из других CSS Modules, чтобы они не конфликтовали между собой.⁡
		`.button {
			composes: common from './shared.module.css';
			// остальные стили 
		}`;
	}
	// 🔹 ⁡⁣⁢⁢Глобальные стили⁡
	{
		// ✅ ⁡⁢⁢⁢Иногда нужно добавить глобальные стили (используйте осторожно)⁡
		`:global(.global-class) {
			color: red;
		}
		// Или целый глобальный блок 
		:global {
			body {
				margin: 0;
			}
		}`;
	}
}
// 🔳 ⁡⁢⁣⁣ПЕРЕМЕННЫЕ И ИМПОРТЫ⁡
{
	// 🔹 ⁡⁣⁢⁢Можно использовать переменные CSS и импортировать их⁡
	{
		// variables.module.css
		`@value primaryColor: #3498db;
		@value secondaryColor: #e74c3c;
		@value borderRadius: 4px;`;
		// Button.module.css
		`@value primaryColor, borderRadius from './variables.module.css';`;
		`.button {
			border-radius: borderRadius;
			background: primaryColor;
		}`;
	}
}
// 🔳 ⁡⁢⁣⁣ПРИМЕР С REACT КОМПОНЕНТОМ⁡
{
	// Alert/Alert.jsx
	// import React from "react";
	// import styles from "./Alert.module.css";
	// import commonStyles from "../common/styles.module.css";
	function Alert({ type = "info", children }) {
		const alertClasses = [
			styles.alert,
			styles[type], // Динамический класс на основе пропса
			commonStyles.shadow, // Композиция из общего файла
		].join(" ");
		return (
			<div className={alertClasses}>
				<span className={styles.icon} aria-hidden="true" />
				<div className={styles.content}>{children}</div>
			</div>
		);
	}
	// export default Alert;
	// Alert/Alert.module.css
	`.alert {
		padding: 15px;
		margin: 10px 0;
		border-radius: borderRadius;
		transition: opacity animationSpeed ease;
	}
	.info {
		background: #d1ecf1;
		color: #0c5460;
	}
	.warning {
		background: #fff3cd;
		color: #856404;
	}
	.icon {
		float: left;
		margin-right: 10px;
	}
	.content {
		overflow: hidden;
	}`;
}
// 🔳 ⁡⁢⁣⁣ОСОБЕННОСТИ И ЛУЧШИЕ ПРАКТИКИ⁡
{
	// ✅ ⁡⁢⁡⁢⁢⁢Именование файлов: Используйте Name.module.css для явного указания, что это CSS Module⁡
	// ✅ ⁡⁢⁡⁢⁢⁢Именование классов: Используйте camelCase или kebab-case (но будьте последовательны)⁡
	// ✅ ⁡⁢⁡⁢⁢⁢Глобальные стили: Минимизируйте их использование, чтобы избежать конфликтов с другими CSS Modules.⁡
	// ✅ ⁡⁢⁢⁢Композиция: Используйте composes для повторного использования стилей⁡
	// ✅ ⁡⁢⁢⁢Переменные: Выносите цвета, отступы и другие константы в отдельные файлы переменных⁡
}
// 🔳 ⁡⁢⁣⁣ПОДДЕРЖКА В РАЗЛИЧНЫХ ИНСТРУМЕНТАХ⁡
{
	// ✅ ⁡⁢⁢⁢Create React App: Поддерживается из коробки⁡
	// ✅ ⁡⁢⁢⁢Next.js: Полная поддержка⁡
	// ✅ ⁡⁢⁢⁢Vue CLI: Требуется дополнительная настройка⁡
	// ✅ ⁡⁢⁢⁢Rollup: Через плагин rollup-plugin-postcss⁡
	// ✅ ⁡⁢⁢⁢Parcel: Поддерживается без дополнительной настройки⁡
}
// 🔳 ⁡⁢⁣⁣АЛЬТЕРНАТИВЫ⁡
{
	// ✅ ⁡⁢⁢⁢Styled Components: CSS-in-JS решение⁡
	// ✅ ⁡⁢⁢⁢Emotion: Еще одно CSS-in-JS решение⁡
	// ✅ ⁡⁢⁢⁢SASS/LESS с БЭМ: Классический подход с ручным неймингом⁡
}
// 🔳
