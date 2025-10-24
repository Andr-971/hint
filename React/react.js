//! УСТАНОВКА ПРОЕКТА

//* npx create-react-app . // Установка в эту папку в которой находишься
// *npx create-react-app react_app-1 react_app-1 // Установка в созданную(react_app-1) дочернюю папку
// ⁡⁢⁣⁣1. БЫСТРЫЙ СТАРТ С CREATE-REACT-APP (CRA)⁡
{
	// npx create-react-app . // Установка в эту папку в которой находишься
	// npx create-react-app react_app-1 react_app-1 // Установка в созданную(react_app-1) дочернюю папку
	// npx create-react-app my-app
	// cd my-app
	// npm start
	// ⁡⁣⁣⁢Плюсы:⁡
	// ✅ Готовый конфиг Webpack/Babel
	// ✅ Встроенный dev-сервер (npm start)
	// ✅ Подходит для небольших проектов
	// ⁡⁣⁣⁢Минусы:⁡
	// ❌ Медленный в больших проектах
	// ❌ Тяжело кастомизировать
}
// ⁡⁢⁣⁣2. VITE — СУПЕРБЫСТРАЯ АЛЬТЕРНАТИВА CRA⁡
{
	// ⁡⁣⁣⁢Ппошаговое руководство по настройке React-приложения с TypeScript, TailwindCSS, Prettier и ESLint⁡
	{
		// npm cache clean --force // Очистка кэша
		// npm create vite@latest -- --template react-ts .
		// ⁡⁣⁣⁢Изменить порт⁡:
		server: {
			port: 3000;
		}
		// ⁡⁣⁣⁢Настройка алисов⁡
		{
			// npm install -D vite-tsconfig-paths
			// vite.config.ts
			{
				`import tsconfigPaths from "vite-tsconfig-paths"`;
				`plugins: [
					react(),
					tsconfigPaths(), // ← подключаем плагин
				],
				server: {
					port: 3000,
				},`;
			}
			// tsconfig.json
			{
				`	"compilerOptions": {
					"baseUrl": ".",
					"paths": {
					"@/*": ["src/*"],
					"@components/*": ["src/components/*"],
					"@utils/*": ["src/utils/*"]
					}
				}	`;
			}
		}
	}
	// ⁡⁣⁣⁢Полезные плагины⁡
	{
		// # Роутинг
		// npm install react-router-dom
		// # State management
		// npm install @reduxjs/toolkit react-redux
		// # HTTP клиент
		// npm install axios
		// # UI библиотеки
		// npm install @mui/material @emotion/react @emotion/styled
		// # или
		// npm install antd
	}
	// ⁡⁣⁣⁢Установка TailwindCSS⁡
	{
		// npm install tailwindcss @tailwindcss/vite
		// ⁡⁣⁣⁢vite.config.ts⁡
		{
			// import tailwindcss from "@tailwindcss/vite";
			` plugins: [
				tailwindcss(),
			], `;
		}
		// ⁡⁣⁣⁢file.css⁡
		{
			// @import "tailwindcss";
		}
	}
	// ⁡⁣⁣⁡⁣⁣⁢Настройка ESLint Prettier⁡
	{
		// npm install -D eslint prettier
		// ⁡⁣⁣⁢Если у вас TypeScript⁡:
		// npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
		// ⁡⁣⁣⁢Для интеграции ESLint и Prettier (чтобы они не конфликтовали)⁡:
		// npm install -D eslint-config-prettier eslint-plugin-prettier
		// 💡 ⁡⁣⁣⁢eslint-config-prettier отключает правила ESLint, которые конфликтуют с Prettier. eslint-plugin-prettier позволяет запускать Prettier как правило ESLint⁡.
		// .eslintrc.cjs
		{
			`	// .eslintrc.cjs
			module.exports = {
			env: {
				browser: true,
				es2021: true,
				node: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'@typescript-eslint/recommended', // если используете TS
				'plugin:prettier/recommended', // должен быть последним!
			],
			parser: '@typescript-eslint/parser', // если используете TS, иначе можно убрать
			parserOptions: {
				ecmaFeatures: {
				jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			plugins: ['react', '@typescript-eslint'], // уберите @typescript-eslint если нет TS
			rules: {
				// Ваши кастомные правила
				'react/react-in-jsx-scope': 'off', // не нужно в React 17+
			},
			settings: {
				react: {
				version: 'detect',
				},
			},
			};`;
		}
		// .eslint.config.js
		{
			` // Отдельный объект ТОЛЬКО для игнорирования
			{
				ignores: [
					"node_modules/",
					"dist/",
					".env",
					"**/temp.js", // обратите внимание: используйте **/ для рекурсивного игнорирования
				],
			},	`;
			
		}
		// .prettierignore
		{
			`	node_modules/
				dist/
				build/
				.env
				public/ 	`;
		}
		// package.json
		{
			// json scripts
			`	"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
				"lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
				"format": "prettier --write ."	`;
		}
		// ⁡⁣⁣⁢Если вы хотите гарантировать, что в репозиторий не попадёт «грязный» код⁡:
		{
			// npm install -D husky lint-staged
			// Инициализация Husky:
			// npx husky install
			// package.json
			{
				`"lint-staged": {
					"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
				}`;
			}
			// Создайте хук:
			// npx husky add .husky/pre-commit "npx lint-staged"
			// 💡 Не забудьте добавить husky в prepare скрипт (для новых разработчиков):
			{
				// json
				`"scripts": {
					"prepare": "husky install"
				}`
			}
		}
	}
}
// ⁡⁢⁣⁣3. NEXT.JS — ЕСЛИ НУЖЕН SSR/SSG⁡ //
{
	// npm create next-app@latest . // Установка в эту папку в которой находишься
	// ⁡⁣⁣⁢Плюсы:⁡
	// 🌐 Серверный рендеринг (SSR) и статика (SSG)☻
	// 🚀 Оптимизирован для продакшена
	// ⚡ Быстрый, как Vite (в новых версиях)
	// ⁡⁣⁣⁢Минусы:⁡
	// ❌ Сложнее, чем чистый React
	// ⁡⁣⁣⁢Установка TailwindCSS⁡
	{
		// npm install tailwindcss @tailwindcss/postcss postcss
		// ⁡⁣⁣⁢Создать файл⁡ postcss.config.mjs
		{
			` const config = {
			plugins: {
				"@tailwindcss/postcss": {},
			},
			};
			export default config; `;
		}
		// ⁡⁣⁣⁢file.css⁡
		{
			// @import "tailwindcss";
		}
	}
}
// ⁡⁢⁣⁣4. REMIX — СОВРЕМЕННЫЙ ФУЛЛ-СТЕК ФРЕЙМВОРК ДЛЯ REACT⁡
{
	// npm create remix@latest . // Установка в эту папку в которой находишься
	// ⁡⁣⁣⁢Плюсы:⁡
	// 🔄 Встроенный API-роутинг
	// 📡 Поддержка WebSockets, SSR, SSG
	// 💡 Умная загрузка данных
	// ⁡⁣⁣⁢Минусы:⁡
	// ❌ Меньше документации, чем у Next.js
}
// ⁡⁢⁣⁣5. ГОТОВЫЕ ШАБЛОНЫ (ДЛЯ УСКОРЕНИЯ РАЗРАБОТКИ)⁡
{
	// Если не хочется настраивать проект вручную:
	// T3 Stack (Next.js + tRPC + Tailwind)
	// Chakra UI + Vite
	// Mantine + Vite
}
// ⁡⁢⁣⁣6. БЫСТРЫЙ ДЕПЛОЙ НА ХОСТИНГ⁡
{
	// ⁡⁣⁢⁢ХОСТИНГ			КОМАНДА / ДЕЙСТВИЕ							БЕСПЛАТНЫЙ ВАРИАНТ?⁡
	// Vercel			Просто залить через git push				✅ Да
	// Netlify			Drag & Drop билда или Git-интеграция		✅ Да
	// GitHub Pages		npm run build + залить build/				✅ Да
	// Cloudflare		Через wrangler deploy						✅ Да
	
} 

// Рендер в index.html file main.js(jsx, tsx)
import ReactDOM from "react-dom/client"
import App from "./App.js(jsx, tsx)"
import { useRef } from "react";

ReactDOM.createRoot(document.getElementById("app")).render(<App/>);

//! ХУКИ:
{
    //* Основные хуки:                                  Дополнительные хуки:
    //* - useEffect                                     - useCalldack
    //* - useState                                      - useReducer
    //* - useContext                                    - useMemo
    //*                                                 - useRef
    //*                                                 - useImperativeHandle
    //*                                                 - useLayoutEffect
    //*                                                 - useDebugValue
    //*                                                 - custom hooks

    const [card, setCart] = useState(data); // cart - текщее состояние, setCart(fun()) - функция изменить состояние
	useEffect(fun(), [])
	galleryWin = useRef();
	galleryWin.current.getBoundingClientRect(); // Ширина элемента
    //? КАСТОМНЫЕ ХУКИ: 
    //* usePrevious - сохранение предыдущего значения состояния; npm i @uidotdev/usehooks; const previousColor = usePrevious(color);
    //* useDebounce - задержка вызова функции; npm i @uidotdev/usehooks; import { useDebounce } from "@uidotdev/usehooks"; const //* debouncedSearchTerm = useDebounce(searchTerm, 300);
    //* useThrottle - ограничение частоты вызова функции;
    //* useInterval - запуск функции через определенный интервал времени;
    //* useOnClickOutside - обработка клика за пределами элемента;
    //* useWindowSize - получение текущего размера окна браузера; npm i @uidotdev/usehooks;import { useWindowSize } from "@uidotdev///* usehooks"; const size = useWindowSize();
    //* useAsync - управление асинхронными операциями;
    //* useKeyPress - обработка нажатия клавиши;
    //* useHover - обработка наведения курсора на элемент;

    //? СОСТОЯНИЯ:
    //* Состояния в функции компонента:
    const Component = () => {
        const [card, setCart] = useState(data);
        const fun = (id) => {
            setCart((card) => card.filter((product) => id !== product.id)
            )
        }
        return (
            <section></section>
        );
    }
    // export default Component;
}
//! СОБЫТИЯ:
{
	// ⚪ ⁡⁣⁣⁡⁣⁣⁢События названия⁡
	{
		//? События мыши:
		//* onClick         - Это событие срабатывает, когда пользователь щелкает левой кнопкой мыши.
		//* onDoubleClick   - Это событие срабатывает, когда пользователь дважды щелкает кнопкой мыши.
		//* onMouseDown     - Это событие происходит при нажатии кнопки мыши на любом теге.
		//* onMouseUp       - Это событие срабатывает при отпускании кнопки после нажатия.
		//* onMouseMove     - Это событие происходит, когда курсор мыши перемещается на определенный тег или элемент.(:hover)
		//* onMouseEnter    - Это событие срабатывает, когда курсор мыши перемещается внутрь HTML-элемента.
		//* onMouseLeave    - Это событие происходит, когда курсор мыши покидает границы HTML-элемента.
		//? Форма события:
		//* onChange        - Это событие срабатывает при изменении значения входного тега.
		//* onInput         - Это событие срабатывает при изменении значения поля ввода.
		//* onSubmit        - Это событие срабатывает, когда пользователь отправляет форму с помощью кнопки Отправки.
		//* onFocus         - Это событие запускается, когда пользователь нажимает на любой тег ввода и этот тег становится активным для ввода данных.
		//* onBlur          - Это событие происходит, когда элемент больше не активен.
		//? События буфера обмена:
		//* onCopy          - Это событие происходит, когда пользователь копирует данные из какого-либо конкретного элемента.
		//* onCut           - Это событие происходит, когда пользователь вырезает данные из какого-либо конкретного элемента.
		//* onPaste         - Это событие происходит, когда пользователь вставляет данные из какого-либо конкретного элемента.
		//? Сенсорные события:
		//* onTouchStart    - Это событие происходит, когда пользователь прикасается к экрану.
		//* onTouchMove     - Это событие срабатывает, когда пользователь касается и перемещает палец, не убирая палец.
		//* onTouchEnd      - Это событие происходит одним касанием, отпущенным пользователем.
		//* onTouchCancel   - Это событие возникает, когда пользователь отменяет касание.
		//? События указателя:
		//* onPointerDown    - Это событие срабатывает, когда указывающее устройство запускает экран наведения.
		//* onPointerMove    - Это событие срабатывает, когда указывающее устройство начинает инициировать и перемещать указатель.
		//* onPointerUp      - Это событие запускается, когда пользователь отпускает кнопку на устройстве ввода после указания на метку.
		//* onPointerCancel  - Это событие происходит, когда пользователь отменяет касание экрана.
		//? События пользовательского интерфейса:
		//* onScroll         - Это событие происходит, когда пользователь начинает прокручивать страницу.
		//* onResize         - Это событие происходит при изменении размера браузера.
		//? События клавиатуры:
		//* onKeyDown        - Это событие происходит, когда пользователь нажимает клавишу с клавиатуры.
		//* onKeyPress       - Это событие происходит, когда пользователь нажимает клавишу с клавиатуры.
		//* onKeyUp          - Это событие происходит, когда пользователь нажимает и отпускает клавишу с клавиатуры.
	}
	// ⚪ ⁡⁣⁣⁢Инпут события⁡
	{
		// <input
		// 	value={addTitle}
		// 	onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddTitle(e.target.value)}
		// />;
	}
}
//! HTML UL
<ul style={{ listStyleType: "disc" }}></ul>
//! АТРИБУТЫ
{
	// ⁡⁣⁢⁢input⁡
	{
		// Простое отключение автозаполнения
		// <input type="text" autoComplete="off" />;
		// Для полей формы (рекомендуемые значения)
		// <input type="email" autoComplete="email" />
		// <input type="password" autoComplete="current-password" />
		// <input type="text" autoComplete="name" />
	}
}
//! РАБОТА с useState()
{
	// 🔳 ⁡⁢⁣⁣ИЗМЕНЕНИЕ МАССИВА ОБЪЕКТОВ⁡
	{
		const [todos, setTodos] = useState([{ id: 1, text: "", completed: false }, { id: 2, text: "", completed: false }])
		// ⚪ ⁡⁣⁣⁢Добавление нового объекта⁡
		{
			setTodos((prevTodos) => {
				return [
					...prevTodos,
					{
						id: nextId,
						text: inputValue,
						completed: false,
					},
				];
			});
		}
		// ⚪ ⁡⁣⁣⁡⁣⁣⁢Изменить отдельное поле у конкретного id⁡
		{
			setTodos((prevTodos) =>
				prevTodos.map((todo) => (todo.id === 2 ? { ...todo, completed: !todo.completed } : todo)),
			);
		}
		// ⚪ ⁡⁣⁣⁢Удалить объект по конкретному id⁡
		{
			// возвращает массив по условию, перебирает массив и выбирает из него элементы, которые проходят проверку по заданному условию.
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
		}
	}
	
}