
/** @type {import('tailwindcss').Config} */
module.exports = {
	// Указание путей ко всем файлам, где используются классы Tailwind
	content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}", "./public/index.html"],

	// Настройка базовой темы
	theme: {
		// Расширение стандартных значений
		extend: {
			// Пользовательские цвета
			colors: {
				primary: "#3b82f6",
				secondary: {
					100: "#e0f2fe",
					500: "#0ea5e9",
					900: "#0c4a6e",
				},
				brand: {
					light: "#fde68a",
					DEFAULT: "#f59e0b",
					dark: "#b45309",
				},
			},

			// Пользовательские шрифты
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["Fira Code", "monospace"],
			},

			// Пользовательские размеры
			spacing: {
				128: "32rem",
				144: "36rem",
			},

			// Пользовательские breakpoints
			screens: {
				xs: "480px",
				"3xl": "1920px",
			},

			// Пользовательская анимация
			animation: {
				"bounce-slow": "bounce 3s infinite",
			},

			// Пользовательские тени
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
		},

		// Переопределение стандартных значений
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1600px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},

	// Варианты генерации классов
	variants: {
		extend: {
			backgroundColor: ["active", "disabled"],
			textColor: ["disabled"],
			opacity: ["disabled"],
		},
	},

	// Плагины Tailwind
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],

	// Экспериментальные функции
	experimental: {
		uniformColorPalette: true,
		extendedSpacingScale: true,
	},

	// Глобальные стили
	corePlugins: {
		// Отключение ненужных базовых стилей
		float: false,
		clear: false,
	},

	// Настройки для JIT-режима
	mode: "jit",
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["./src/**/*.{js,jsx,ts,tsx}"],
	},

	// Префикс для всех классов (опционально)
	prefix: "tw-",

	// Важные стили (добавляет !important)
	important: "#app",

	// Темная тема (class-based)
	darkMode: "class",
};