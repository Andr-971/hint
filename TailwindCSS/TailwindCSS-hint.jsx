
// 🚩 ⁡⁢⁣⁢УСТАНОВКА, НАСТРОЙКА⁡
{
	// 🔳 ⁡⁣⁢⁡⁢⁣⁡⁢⁣⁣УСТАНОВКА В ПРОЕКТ vite⁡
	{
		// npm install tailwindcss @tailwindcss/vite postcss autoprefixer
		// ✅  ⁡⁢⁢⁢Настройка конфигурации vite.config.js⁡
		{
			// import tailwindcss from "@tailwindcss/vite";
			// export default defineConfig({
			// 	plugins: [tailwindcss()],
			// });
		}
		// ✅ ⁡⁢⁢⁢В файл CSS, в который импортируется Tailwind CSS⁡
		{
			// @import "tailwindcss";
			// @tailwind base;
			// @tailwind components;
			// @tailwind utilities;
		}
		// ✅ ⁡⁢⁢⁢Установка плагина  prettier-plugin-tailwindcss⁡
		{
			// npm install -D prettier-plugin-tailwindcss
			{
				// .prettierrc.json
				{
					// "plugins": ["prettier-plugin-tailwindcss"],
				}
			}
		}
		// ✅ ⁡⁢⁢⁢Инициализация Tailwind CSS в проекте⁡
		{
			// npx tailwindcss init -p
			// Флаг -p автоматически создаст также postcss.config.js.
			// tailwind.config.js — основной конфиг Tailwind
			// postcss.config.js — конфиг PostCSS (нужен для обработки CSS)
			// ⁡⁣⁢⁢tailwind.config.js⁡
			{
				/** @type {import('tailwindcss').Config} */
				module.exports = {
					// Указываем пути к шаблонам, где используются классы Tailwind
					content: [
						"./index.html",
						"./src/**/*.{js,jsx,ts,tsx}", // Поддержка всех файлов React
					],
					theme: {
						extend: {}, // Здесь можно расширять тему (цвета, шрифты и т.д.)
					},
					plugins: [], // Можно добавить плагины (например, forms, typography)
				};
			}
			// ⁡⁣⁢⁢postcss.config.js⁡
			{
				// module.exports = {
				// 	plugins: {
				// 		tailwindcss: {},
				// 		autoprefixer: {},
				// 	},
				// }
			}
		}
		// ✅ ⁡⁢⁢⁢Создание и подключение CSS-файлов⁡
		{
			// ⚡ ⁡⁢⁣⁣Создайте файл стилей в папке src⁡
			{
				// mkdir src/css
				// touch src/css/index.css
			}
		}
		// ✅
	}
	// 🔳 ⁡⁢⁣⁣УСТАНОВКА В NEXT.JS⁡
	{
		// npx create-next-app@latest --typescript --tailwind --eslint --app .
		// Комментарии:
		// --typescript — добавляет TypeScript
		// --tailwind — добавляет Tailwind CSS
		// --eslint — добавляет ESLint
		// --app — включает новую структуру App Router (Next.js 13+)

		// npm install -D prettier prettier-plugin-tailwindcss autoprefixer
		// Комментарии:
		// Prettier для форматирования кода
		// Плагин для правильного порядка классов в Tailwind
	}
	// 🔳 ⁡⁢⁣⁣ГЛОБАЛЬНЫЕ НАСТРОЙКИ @theme⁡
	{
		// ⁡⁣⁣⁢ПРОСТРАНСТВО ИМЕН		КЛАССЫ ПОЛЕЗНОСТИ⁡
		// --color-*				Цветовые утилиты, такие как bg-red-500, text-sky-300, и многие другие
		// --font-*					Утилиты семейства шрифтов, такие как font-sans
		// --text-*					Утилиты для определения размера шрифта, такие как text-xl
		// --font-weight-*			Утилиты для определения веса шрифта, такие как font-bold
		// --tracking-*				Утилиты для разделения букв, такие как tracking-wide
		// --leading-*				Утилиты для определения высоты линии, такие как leading-tight
		// --breakpoint-*			Адаптивные варианты точек останова, такие как sm:*
		// --container-*			Варианты запросов к контейнеру, например @sm:*, и утилиты для определения размера, например max-w-md
		// --spacing-*				Утилиты для настройки интервалов и размеров, такие как px-4, max-h-16, и многие другие
		// --radius-*				Утилиты Border radius, такие как rounded-sm
		// --shadow-*				Боковые теневые утилиты, такие как shadow-md
		// --inset-shadow-*			Утилиты для создания теней во вставках inset-shadow-xs
		// --drop-shadow-*			Утилиты для фильтрации отбрасывающей тени, такие как drop-shadow-md
		// --blur-*					Утилиты для фильтрации размытия, такие как blur-md
		// --perspective-*			Перспективные утилиты, такие как perspective-near
		// --aspect-*				Утилиты с соотношением сторон, такие как aspect-video
		// --ease-*					Утилиты функции синхронизации перехода, такие как ease-out
		// --animate-*				Анимационные утилиты, такие как animate-spin
	}
}
// 🚀 ⁡⁢⁣⁢ШПАРГАЛКА ПО TAILWIND CSS (V3.0+)⁡
{
	// 📐 ⁡⁢⁣⁣ ⁡⁢⁣⁣LAYOUT⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// container	                                    Центрированный контейнер с max-width
		// block / inline	                                Блочный / строчный элемент
		// flex / inline-flex	                            Flex-контейнер
		// grid / inline-grid	                            Grid-контейнер
		// hidden	                                        Скрыть элемент (display: none)
		// static / fixed / absolute / relative / sticky	Позиционирование
	}
	// 🔄 ⁡⁢⁣⁣ FLEXBOX⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// flex-row / flex-col	                            Направление (row/column)
		// flex-wrap	                                    Перенос элементов
		// flex-nowrap 										flex-wrap: nowrap;
		// flex-wrap-reverse 								flex-wrap: wrap-reverse;
		// justify-start/center/end/between/around	        Выравнивание по главной оси
		// items-start/center/end/stretch	                Выравнивание по поперечной оси
		// gap-{size}	                                    Отступы между элементами (0-96)
		// grow grow-[3]									flex-grow: 1; увеличивается пропорционально родителю, 0 не увеличивается
	}
	// 🔳 ⁡⁢⁣⁣ GRID⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// grid-cols-{n}	                                Количество колонок (1-12)
		// grid-rows-{n}	                                Количество строк (1-6)
		// col-span-{n}	                                    Объединение колонок (1-12)
		// row-span-{n}	                                    Объединение строк (1-6)
		// gap-{size}	                                    Отступы (0-96)
		// gap-x-{size}	                                    По оси X (0-96)
		// gap-y-{size}	                                    По оси Y (0-96)
    }
    // 📝 ⁡⁢⁣⁣ТЕКСТ⁡
    {
		// ⁡⁣⁣⁡⁣⁣⁢КЛАСС	                                           ОПИСАНИЕ⁡
		// text-{size}	                                    Размер текста (xs, sm, base, lg, xl...)
		// font-{weight}	                                Жирность (thin, normal, medium, light, bold...)
		// text-{color}	                                    Цвет текста (slate-500, red-400...)
		// text-left/center/right/justify	                Выравнивание текста
		// align-text-bottom, align-bottom	                Выравнивание текста
		// underline 										text-decoration-line: underline; — подчёркивание;
		// overline 										text-decoration-line: overline; — линия над текстом;
		// line-through 									text-decoration-line: line-through; - перечёркивание;
		// no-underline 									text-decoration-line: none; — отменяет все эффекты (по умолчанию).
		// italic / not-italic	                            Курсив
		// uppercase / lowercase / capitalize	            Регистр
		// leading-{size}	                                Высота строки (3-10)
		// tracking-{size}	                                Межбуквенный интервал
	}
	// 📏 ⁡⁢⁣⁣ SPACING (ОТСТУПЫ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ПРИМЕРЫ ЗНАЧЕНИЙ⁡
		// m-{size} / p-{size}	                            margin/padding (0-96, auto)
		// mx-{size} / my-{size}	                        Горизонтальные/вертикальные отступы
		// mt-{size} / mb-{size} / ml-{size} / mr-{size}	Отступы по сторонам
		// space-{x/y}-{size}	                            Отступы между элементами
	}
	// 📦 ⁡⁢⁣⁣ SIZING (РАЗМЕРЫ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// w-{size} / h-{size}	                            Ширина/высота (0-96, full(100%), screen, auto, 1/2, 10/12)
		// min-w-{size}	                                    Минимальная ширина
		// max-w-{size}	                                    Максимальная ширина (xs, sm, md, lg, xl, 2xl...)
		// min-h-{size}	                                    Минимальная высота
		// max-h-{size}	                                    Максимальная высота
	}
	// 🎨 ⁡⁢⁣⁣ BACKGROUNDS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// bg-{color}	                                    Цвет фона (slate-100, blue-500...)
		// bg-gradient-{type}	                            Градиенты (to-r, to-br...)
		// bg-cover / bg-contain	                        Размер фона
		// bg-center / bg-top	                            Позиция фона
		// bg-repeat	                                    Не повторять фон
		// bg-no-repeat	                                    Повтор фона
	}
	// 🖼️ ⁡⁢⁣⁣ BORDERS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// border / border-{size}	                        Толщина границы (0-8)
		// border-{color}	                                Цвет границы
		// rounded-{size}	                                Скругление углов (none, sm, md, lg, xl, full, [10px_0px_0px_10px]
		// border-t / border-r	                            Границы по сторонам
	}
	// ✨ ⁡⁢⁣⁣ EFFECTS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// shadow-{size}	                                Тень (sm, md, lg, xl, 2xl, none)
		// opacity-{value}	                                Прозрачность (0-100)
		// mix-blend-{mode}	                                Режим наложения
		// cursor-pointer                                   cursor: pointer;
		// box-border                                       box-sizing: border-box;
		// box-content                                      box-sizing: content-box;
		// translate-full 									translate: 100% 100%;
		// -translate-full 									translate: -100% -100%;
		// translate-x-[-1px] 								transform: 'translateX(-1px)
		// translate-y-[-1px] 								transform: 'translateY(-1px)
	}
	// 🖌️ ⁡⁢⁣⁣ FILTERS (ФИЛЬТРЫ)
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// blur-{size}	                                    Размытие (sm, md, lg...)
		// brightness-{value}	                            Яркость (90, 100, 110...)
		// contrast-{value}	                                Контраст (50, 100, 150...)
		// grayscale-{value}	                            Оттенок серого (0, 100...)
		// invert-{value}	                                Инверсия (0, 100...)
		// saturate-{value}	                                Насыщенность (50, 100, 150...)
		// sepia-{value}	                                Сепия (0, 100...)
	}
	// 🚦 ⁡⁢⁣⁣ ⁡⁢⁣⁣TRANSITIONS & ANIMATION(АНИМАЦИЯ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// transition	                                    Базовый переход
		// duration-{ms}	                                Длительность (75, 100, 300...)
		// ease-{type}	                                    Тайминг-функция (linear, in-out...)
		// animate-{type}	                                Анимация (spin, ping, bounce...)
		// animate-[keyframes]	                            Анимация (animate-spin, animate-ping, animate-bounce...)
	}
	// 🎯 ⁡⁢⁣ ⁡⁢⁣⁣INTERACTIVITY(НАВЕДЕНИЕ КУРСОР И.Д.)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// hover:...	                                    Стили при наведении
		// focus:...	                                    Стили при фокусе
		// active:...	                                    Стили при нажатии
		// cursor-{type}	                                Тип курсора (pointer, not-allowed...)
		// select-none	                                    Запрет выделения текста
	}
	// 🔧 ⁡⁢⁣ ⁡⁢⁣⁣SVG⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// fill-{color}	                                    Цвет заливки
		// stroke-{color}	                                Цвет обводки
		// stroke-{width}	                                Толщина обводки (1-2)
	}
	// 📱 ⁡⁢⁣⁣ RESPONSIVE (ПРИМЕРЫ)⁡
    {
        // ☑️ ⁡⁣⁢⁢Контрольные точки ширины⁡
        {
            //  sm:{class} - для минимальной ширины экрана 640px.
            //  md:{class} - для минимальной ширины экрана 768px.
            //  lg:{class} - для минимальной ширины экрана 1024px.
            //  xl:{class} - для минимальной ширины экрана 1280px.
            //  2xl:{class} - для минимальной ширины экрана 1536px.
        }
        // ☑️ ⁡⁣⁢⁢Пример⁡
        {
            // Мобильный → Десктоп
            <>
                <div class="text-sm md:text-base lg:text-lg">{/* Контент */}</div>
                {/* Скрыть на мобильных */}
                <div class="hidden md:block">{/* Контент */}</div>
            </>;
        }
	}
    // 💡 ⁡⁢⁣⁣ПОЛЕЗНОЕ⁡
    {
		// ☑️ ⁡⁣⁢⁢Кастомные значения⁡
		{
			// w-[200px] → произвольное значение через []
			// m-[20px_auto] → нижнее подчёркивание это пробел
		}
		// ☑️ ⁡⁣⁢⁢!important⁡
		{
			// Добавьте ! в конце: mt-4!
		}
		// ☑️
        // ⚠️ ⁡⁣⁢⁢Все классы работают с префиксами состояний⁡
        {
			// hover:bg-blue-700, focus:ring-2, dark:text-white, max-md:hidden
		}
	}
}