
// ⁡⁢⁣⁢TYPE SCRIPT⁡
{
	// ⁡⁣⁢⁢TypeScript⁡ ⁡⁣⁣⁢— это язык программирования, который является надстройкой над JavaScript. Он добавляет к нему дополнительный синтаксис для описания типов данных (числа, строки, булевы значения и т. д.), которые используются в переменных, функциях и объектах.⁡
	// ⁡⁢⁣⁣ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ НА СОБЕСЕДОВАНИИ⁡
	{ 
		// ☑️ ⁡⁣⁢⁢В ЧЕМ РАЗНИЦА МЕЖДУ TYPESCRIPT И JAVASCRIPT?⁡
		{
			// ⁡⁣⁣⁢TypeScript - это надмножество JavaScript, добавляющее статическую типизацию. Код TypeScript компилируется в JavaScript. Основные преимущества:⁡
			// ⁡⁣⁣⁢-- Статическая типизация⁡
			// ⁡⁣⁣⁢-- Поддержка современных фич ECMAScript⁡⁣⁣⁢(ECMAScript — это спецификация, определяющая стандарты для языков программирования, таких как JavaScript, JScript и ActionScript.Он включает в себя типы данных, основные конструкции и правила синтаксиса, которые делают код понятным и легко исполняемым в различных средах.)⁡
			// ⁡⁣⁣⁢-- Лучшая поддержка IDE⁡
			// ⁡⁣⁣⁢-- Возможность обнаружения ошибок на этапе компиляции⁡
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "УТИНАЯ ТИПИЗАЦИЯ" В TYPESCRIPT?⁡
		{
			// ⁡⁣⁣⁢Утиная типизация - это концепция, согласно которой тип объекта определяется его структурой, а не явным объявлением типа. То есть, если объект имеет необходимые свойства и методы, он может быть использован как другой тип.⁡
			interface Duck {
				quack(): void;
			}
			class MallardDuck implements Duck {
				quack() {
					console.log("Quack!");
				}
			}
			function makeItQuack(duck: Duck) {
				duck.quack();
			}
			const duck = new MallardDuck();
			makeItQuack(duck); // OK
		}
		// ☑️ ⁡⁣⁢⁢КАК РАБОТАЮТ ДЖЕНЕРИКИ В TYPESCRIPT?⁡
		{
			// ⁡⁣⁣⁢Дженерики позволяют создавать компоненты, которые могут работать с разными типами, а не только с одним. Это обеспечивает повторное использование кода с сохранением типовой безопасности.⁡
			function reverse<T>(items: T[]): T[] {
				return items.reverse();
			}
			const numbers = [1, 2, 3];
			const reversedNumbers = reverse<number>(numbers);
			const strings = ["a", "b", "c"];
			const reversedStrings = reverse<string>(strings);
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "TYPE ASSERTION" И КАК ЕГО ИСПОЛЬЗОВАТЬ?⁡⁡
		{
			// ⁡⁣⁣⁢Type assertion - это способ сказать компилятору, что вы знаете о типе лучше, чем он. Это не то же самое, что приведение типов в других языках.⁡
			// Угловые скобки
			let someValue_: any = "this is a string";
			let strLength_: number = (<string>someValue_).length;
			// as-синтаксис
			let someValue: any = "this is a string";
			let strLength: number = (someValue as string).length;
		}
		// ☑️ ⁡⁣⁢⁢КАК TYPESCRIPT ОБРАБАТЫВАЕТ НЕОБЯЗАТЕЛЬНЫЕ И NULLABLE ПАРАМЕТРЫ?⁡⁡
		{
			// ⁡⁣⁣⁢TypeScript позволяет явно указать, что параметр является необязательным или может быть null/undefined.⁡
			function greet(name: string, greeting?: string) {
				// greeting - необязательный параметр
				console.log(`${greeting || "Hello"}, ${name}`);
			}
			function processing(value: string | null): void {
				// value может быть string или null
				if (value !== null) {
					console.log(value.toUpperCase());
				}
			}
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "ДЕКОРАТОРЫ" И КАК ОНИ РАБОТАЮТ?⁡⁡
		{
			// ⁡⁣⁣⁢Декораторы - это специальный вид объявления, который можно прикрепить к классам, методам, свойствам или параметрам. Они используют форму @expression.⁡
			function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
				const originalMethod = descriptor.value;
				descriptor.value = function (...args: any[]) {
					console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
					const result = originalMethod.apply(this, args);
					console.log(`Result: ${result}`);
					return result;
				};
				return descriptor;
			}
			class Calculator {
				// @log
				add(a: number, b: number): number {
					return a + b;
				}
			}
		}
		// ☑️ ⁡⁣⁢⁢КАК TYPESCRIPT ПОДДЕРЖИВАЕТ ПЕРЕГРУЗКУ ФУНКЦИЙ?⁡
		{
			// ⁡⁣⁣⁢TypeScript позволяет объявлять несколько сигнатур для одной функции, но реализация должна быть совместима со всеми сигнатурами.⁡
			function add(a: number, b: number): number;
			function add(a: string, b: string): string;
			function add(a: any, b: any): any {
				return a + b;
			}
			add(1, 2); // number
			add("1", "2"); // string
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "УТИЛИТАРНЫЕ ТИПЫ" (UTILITY TYPES)?⁡⁡
		{
			// ⁡⁣⁣⁢TypeScript предоставляет несколько встроенных утилитарных типов для преобразования типов:⁡
			interface User {
				id: number;
				name: string;
				age: number;
				email: string;
			}
			// ⁡⁣⁢⁣Partial - все свойства становятся необязательными⁡
			type PartialUser = Partial<User>;
			// ⁡⁣⁢⁣Readonly - все свойства только для чтения⁡
			type ReadonlyUser = Readonly<User>;
			// ⁡⁣⁢⁣Pick - выбирает только указанные свойства⁡
			type UserNameAndEmail = Pick<User, "name" | "email">;
			// ⁡⁣⁢⁣Omit - исключает указанные свойства⁡
			type UserWithoutEmail = Omit<User, "email">;
		}
		// ☑️ ⁡⁣⁢⁢КАК TYPESCRIPT ОБРАБАТЫВАЕТ МОДУЛИ?⁡
		{
			// ⁡⁣⁣⁢TypeScript поддерживает модули ES6, а также пространства имен (namespaces). Рекомендуется использовать модули ES6.⁡
			// math.ts
			// export function add(a: number, b: number): number {
			// 	return a + b;
			// }
			// app.ts
			// import { add } from "./math";
			// console.log(add(1, 2));
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "NEVER" ТИП И КОГДА ОН ИСПОЛЬЗУЕТСЯ?⁡
		{
			// ⁡⁣⁣⁢Тип never представляет тип значений, которые никогда не происходят. Например, функция, которая всегда выбрасывает исключение или никогда не завершается.⁡
			function error(message: string): never {
				throw new Error(message);
			}
			function infiniteLoop(): never {
				while (true) {}
			}
			function assertNever(x: never): never {
				throw new Error("Unexpected object: " + x);
			}
		}
		// ☑️ ⁡⁣⁢⁢КАК ИСПОЛЬЗОВАТЬ МИКСИНЫ В TYPESCRIPT?⁡
		{
			// ⁡⁣⁣⁢Миксины - это способ реализовать множественное наследование.⁡
			type Constructor<T = {}> = new (...args: any[]) => T;
			function Timestamped<TBase extends Constructor>(Base: TBase) {
				return class extends Base {
					timestamp = Date.now();
				};
			}
			class User {
				name: string;
				constructor(name: string) {
					this.name = name;
				}
			}
			const TimestampedUser = Timestamped(User);
			const user = new TimestampedUser("John");
			console.log(user.timestamp);
		}
		// ☑️ ⁡⁣⁢⁢КАК TYPESCRIPT РАБОТАЕТ С REACT?⁡
		{
			// ⁡⁣⁣⁢TypeScript поддерживает JSX и предоставляет типы для React. Основные концепции:⁡
			{
				interface Props {
					name: string;
					age?: number;
				}
				// const Greeting: React.FC<Props> = ({ name, age = 18 }) => {
				// 	return <div>Hello, {name}. You are {age} years old.</div>;
				// };
				// Использование состояния и эффектов
				// const Counter: React.FC = () => {
				// 	const [count, setCount] = React.useState<number>(0);
				// 	React.useEffect(() => {
				// 		document.title = `Count: ${count}`;
				// 	}, [count]);

				// 	return (
				// 		<button onClick={() => setCount(count + 1)}>
				// 		Clicked {count} times
				// 		</button>
				// 	);
				// };
			}
			// 🔳 ⁡⁢⁣⁣ФУНКЦИОНАЛЬНЫЕ КОМПОНЕНТЫ⁡
			{
				// ⚪ ⁡⁣⁣⁢React.FC<Props> / React.FunctionComponent<Props>⁡
				{
					// interface Props { title: string }
					// const Component: React.FC<Props> = ({ title }) => <div>{title}</div>;
				}
				// ⚪ ⁡⁣⁣⁢React.memo<Props>⁡
				{
					// const MemoizedComponent = React.memo<Props>(({ text }) => <div>{text}</div>);
				}
			}
			// 🔳 ⁡⁢⁣⁣ХУКИ⁡
			{
				// ⚪ ⁡⁣⁣⁢useState<T>(initialState)⁡
				{
					// const [state, setState] = useState<string | null>(null);
				}
				// ⚪ ⁡⁣⁣⁢useReducer<Reducer, State, Action>⁡
				{
					// type Action = { type: 'increment' };
					// const reducer = (state: number, action: Action) => ...;
					// const [state, dispatch] = useReducer<typeof reducer>(reducer, 0);
				}
				// ⚪ ⁡⁣⁣⁢useRef<T>(initialValue)⁡
				{
					// const inputRef = useRef<HTMLInputElement>(null); // Для DOM
					// const valueRef = useRef<number>(0); // Для мутабельных значений
				}
				// ⚪ ⁡⁣⁣⁢useContext<T>(Context)⁡
				{
					// interface ContextType {
					// 	theme: string;
					// }
					// const context = useContext<ContextType>(ThemeContext);
				}
			}
			// 🔳 ⁡⁢⁣⁣REFS И FORWARDING REFS⁡
			{
				// ⚪ ⁡⁣⁣⁢React.forwardRef<T, Props>⁡
				{
					// const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
					// <button ref={ref}>{props.text}</button>
					// ));
				}
			}
			// 🔳 ⁡⁢⁣⁣КОНТЕКСТ⁡
			{
				// ⚪ ⁡⁣⁣⁢React.createContext<T>(defaultValue)⁡
				{
					interface Theme {
						darkMode: boolean;
					}
					// const ThemeContext = React.createContext<Theme>({ darkMode: false });
				}
			}
			// 🔳 ⁡⁢⁣⁣СОБЫТИЯ (EVENTS)⁡
			{
				// ⚪ ⁡⁣⁣⁢React.ХХХEvent<Element>⁡
				{
					// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
					// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
				}
			}
			// 🔳
			// 🔳
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "УСЛОВНЫЕ ТИПЫ" (CONDITIONAL TYPES)?⁡
		{
			//⁡⁣⁣⁢ Условные типы позволяют выбирать один из двух типов на основе условия.⁡
			type IsString<T> = T extends string ? true : false;
			type A = IsString<string>; // true
			type B = IsString<number>; // false
			// Пример из стандартной библиотеки - Exclude
			type Exclude<T, U> = T extends U ? never : T;
			type T = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
		}
		// ☑️ ⁡⁣⁢⁢КАК ИСПОЛЬЗОВАТЬ КЛЮЧЕВЫЕ СЛОВА "KEYOF" И "IN"?⁡
		{
			// ⁡⁣⁣⁢keyof получает все ключи типа, in используется для итерации по ключам.⁡
			interface Person {
				name: string;
				age: number;
			}
			type PersonKeys = keyof Person; // "name" | "age"
			type NullablePerson = {
				[K in keyof Person]: Person[K] | null;
			};
			// { name: string | null; age: number | null; }
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ "ИНТЕРСЕКШН ТИПЫ" (INTERSECTION TYPES)?⁡
		{
			// ⁡⁣⁣⁢Интерсекшн типы объединяют несколько типов в один.⁡
			interface Employee {
				id: number;
				name: string;
			}
			interface Manager {
				department: string;
				manage(): void;
			}
			type ManagerEmployee = Employee & Manager;
			const me: ManagerEmployee = {
				id: 1,
				name: "John",
				department: "IT",
				manage() {
					console.log("Managing...");
				},
			};
		}
		// ☑️ ⁡⁣⁢⁡⁣⁢⁢ЧТО ТАКОЕ ANY?⁡
		{
			// ⁡⁢⁢⁢Any — специальный тип в TypeScript, который используется для отключения проверки типов. Он описывает данные, тип которых может быть неизвестен на момент написания приложения. Any может представлять любое значение JavaScript без всяких ограничений.⁡
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ UNKNOWN?⁡
		{
			// ⁡⁢⁢⁢Unknown — тип в TypeScript, который представляет значение, о типе которого ничего не известно. Представлен в версии TypeScript 3.0 и является более безопасной альтернативой типу any, так как требует явного приведения типов перед использованием.⁡
		}
		// ☑️ ⁡⁣⁢⁢ЧТО ТАКОЕ NEVER?⁡
		{
			// ⁡⁢⁢⁢never — это тип в TypeScript, который обозначает значения, которых никогда не будет.⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣СТРУКТУРА ТИПОВ⁡
	{
		// 🔹 ⁡⁣⁢⁢Схема⁡
		{
			// ⁡⁢⁢⁡⁣⁣⁢⁡⁢⁢⁢union(обеденение)(A | B) или то или другое⁡
			// ⁡⁢⁢⁢intersection(пересечение)(A & B) и то и другое⁡
			// | ⁡⁣⁣⁢generic types⁡ || ⁡⁣⁣⁢Литералы("red"|"green")⁡ || ⁡⁣⁣⁢union(обеденение)/intersection(пересечение)(A|B, A&B)⁡ |
			// | ⁡⁣⁣⁢Примитивы⁡ | 				| ⁡⁢⁣⁢ТИПЫ⁡ |             | ⁡⁢⁣⁡⁣⁣⁡⁣⁣⁢специальные типы(any, unknown, never)⁡⁡ |
			// 		| ⁡⁣⁣⁢Составные типы(Composite types) объекты, массивы, функции, классы⁡⁡ |
		}
		// 🔹 ⁡⁣⁡⁣⁢⁢Итоговая структура типов в TypeScript⁡:
		{
			// ⁡⁣⁣⁢Типы⁡
			// ⁡⁣⁣⁢├── Примитивные (string, number, boolean, ...)⁡
			// ⁡⁣⁣⁢├── Объектные⁡
			// ⁡⁣⁣⁢│   ├── Объекты⁡ - type Person = { name: string; age: number; }⁡ interface Person {name: string; age: number;}
			// ⁡⁣⁣⁢│   ├── Массивы⁡
			// ⁡⁣⁣⁢│   │   └── Кортежи — это массив известной длины и типов элементов по позициям⁡.⁡
			// ⁡⁣⁣⁡⁣⁣⁡⁣⁣⁢│   └── Enums(перечисления) - enum Color {Red = "RED",  Green = "GREEN",  Blue = "BLUE"}⁡
			// ⁡⁣⁣⁢├── Специальные (any, unknown, never, void)⁡
			// ⁡⁣⁣⁢├── Композитные⁡
			// ⁡⁣⁣⁢│	├── Union Types (`|`) — выбор одного из⁡
			// ⁡⁣⁣⁢│	├── Intersection Types (`&`) — объединение всех⁡
			// ⁡⁣⁣⁢│	├── Комбинации (`|` + `&`)⁡
			// ⁡⁣⁣⁢│	└── Утилитарные типы (Partial, Pick, Readonly, Omit)⁡
			// ⁡⁣⁣⁢├── Обобщённые (Generics)⁡
			// ⁡⁣⁣⁢└── Продвинутые⁡
			// ⁡⁣⁣⁢│	  ├── Mapped Types — «отобразить тип»⁡
			// ⁡⁣⁡⁣⁣⁢│		├── Conditional Types — «если-то-иначе» для типов⁡
			// ⁡⁣⁡⁣⁣⁢│		├── Infer — «выведи тип за меня»⁡
			// ⁡⁣⁡⁣⁣⁢│		├── Indexed Access Types (T[K]) — «получить тип по ключу»⁡
			// ⁡⁣⁣⁢│	  └── Template Literal Types — «строки как типы»⁡
		}
		// 🔹 ⁡⁣⁢⁢Экспорт / импорт typescript⁡
		{
			// export
			type Todo = {
				id: number;
				text: string;
				completed: boolean;
			};
			// export
			type TodoItemProps = {
				todo: Todo;
				onToggle: (id: number) => void;
				// onDelete: (id: number) => void;
			};
			// import * as Types from "./TypeTodoList";
			// Type.Todo Type.TodoItemProps
		}
	}
	// ⁡⁢⁣🔳 ⁡⁢⁣⁣ТИПЫ И ИНТЕРФЕЙСЫ⁡
	{
		// ⁡⁢⁢⁢Примитивные типы:⁡
		{
			let name: string = "TypeScript";
			let count: number = 10;
			let bigint: bigint = 123n;
			let isDone: boolean = false;
			// let null: null = null;
			// let undefined: undefined = undefined;
			let simbol: symbol = Symbol("id");

			// Примитивные типы
			type ID = string | number;
			type Status = "active" | "inactive";
			// Объекты
			interface User {
				id: ID;
				name: string;
				age?: number; // Опциональное свойство
			}
			// Расширение interface
			interface Admin extends User {
				permissions: string[];
			}
			// Расширение type
			type SuperAdmin = Admin & { level: number };
		}
		// ⁡⁢⁢⁢Специальные типы⁡
		{
			let any: any = "Hello";
			let unknown: unknown = "Hello";
			let never: never;
			// let void: void = "Hello";
		}
		// ⁡⁢⁢⁢Интерфейсы:⁡
		{
			interface User {
				id: number;
				name: string;
				age?: number; // Необязательное свойство
			}
			const user: User = {
				id: 1,
				name: "John",
			};
			// Запрет лишних свойств (через интерфейс)
			interface StrictUser {
				id: string;
				name: string;
				[key: number]: never; // Блокировка дополнительных свойств
			}
			// Точные типы (с дженериками)
			type Exact<T> = T & { [K in Exclude<PropertyKey, keyof T>]?: never };
			type StrictUserType = Exact<{ id: string; name: string }>;
			// Обобщенный тип
			type ApiResponse<T = void> = {
				data: T;
				error: string | null;
			};
			// Использование
			const userResponse: ApiResponse<User> = {
				data: { id: 1, name: "Alice" },
				error: null,
			};
			// Обобщенные функции
			function identity<T>(arg: T): T {
				return arg;
			}
			// Ограничения дженериков
			interface HasLength {
				length: number;
			}
			function logLength<T extends HasLength>(obj: T): void {
				console.log(obj.length);
			}
		}
		// ⁡⁢⁢⁢Типы vs Интерфейсы:⁡
		{
			// ⁡⁢⁣⁣Интерфейс⁡
			interface Point {
				x: number;
				y: number;
			}
			// ⁡⁢⁣⁣Тип⁡
			type Point1 = {
				x: number;
				y: number;
			};
			// ⁡⁣⁣⁢Основное отличие: интерфейсы можно расширять⁡
			interface Point3D extends Point {
				z: number;
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣ДЖЕНЕРИКИ (GENERICS, ОБОБЩЕНИЯ)⁡
	// ⁡⁣⁣⁢Суть дженериков — определение типов-параметров, которые можно заменить конкретными типами во время использования. Это делает код более гибким и повторно используемым.⁡
	{
		interface KeyValuePair<K, V> {
			key: K;
			value: V;
		}
		const agePair: KeyValuePair<string, number> = {
			key: "age",
			value: 25,
		};
		const userPair: KeyValuePair<number, string> = {
			key: 1,
			value: "Alice",
		};
		async function fetchDataQuery<T>(url: string): Promise<T> {
			const response = await fetch(url);
			return response.json();
		}
		interface User {
			id: number;
			name: string;
		}
		// Использование
		// const userData = (await fetchDataQuery) < User > "/api/user";
		// ⚡ ⁡⁣⁣⁢Денерик по умолчанию наследует интерфейс⁡
		interface Lengthwise {
			length: number;
		}
		function getLength<T extends Lengthwise>(arg: T): number {
			return arg.length;
		}
		getLength(["Я", "люблю", "Тинькофф"]) === 3;
		getLength("Я люблю Тинькофф") === 16;
		// getLength(1027739642281); // Ошибка, у number нет свойства length
	}
	// 🔳 ⁡⁢⁣⁣КЛАССЫ И МОДИФИКАТОРЫ ДОСТУПА (PUBLIC, PRIVATE, PROTECTED)⁡:⁡
	// ⁡⁣⁣⁢Классы в TypeScript — это шаблоны для создания объектов с определенными свойствами и методами. Модификаторы доступа определяют видимость членов класса (свойств и методов) из других частей программы.⁡
	{
		// ⁡⁣⁢⁢Основные модификаторы доступа⁡⁡⁣⁢⁢:⁡
		// ⁡⁣⁣⁢1. public (по умолчанию): доступен везде, где доступен класс.⁡
		// ⁡⁣⁣⁢2. private: доступен только внутри класса.⁡
		// ⁡⁣⁣⁢3. protected: доступен внутри класса и его подклассов.⁡⁡
		// ⁡⁣⁣⁢4. readonly: доступен только для чтения, нельзя изменить после инициализации.⁡
		class Person {
			// Публичное свойство (по умолчанию)
			public name: string;
			// Приватное свойство
			private age: number;
			// Защищенное свойство
			protected id: string;
			// Readonly свойство
			readonly birthDate: Date;
			constructor(name: string, age: number, id: string, birthDate: Date) {
				this.name = name;
				this.age = age;
				this.id = id;
				this.birthDate = birthDate;
			}
			// Публичный метод
			public greet() {
				console.log(`Hello, my name is ${this.name}`);
				// Доступ к приватному свойству внутри класса
				console.log(`I'm ${this.age} years old`);
			}
			// Приватный метод
			private calculateBirthYear(): number {
				return this.birthDate.getFullYear();
			}
		}
		// Использование
		const person = new Person("Alice", 30, "ID123", new Date(1993, 5, 15));
		console.log(person.name); // OK - public
		// console.log(person.age); // Ошибка - private
		// console.log(person.id); // Ошибка - protected
		person.greet(); // OK - public метод
		// person.calculateBirthYear(); // Ошибка - private метод
		// ⁡⁣⁣⁢Наследование и protected⁡
		class Employee extends Person {
			private salary: number;

			constructor(name: string, age: number, id: string, birthDate: Date, salary: number) {
				super(name, age, id, birthDate);
				this.salary = salary;
			}

			public showEmployeeInfo() {
				console.log(`Employee ID: ${this.id}`); // OK - protected доступен в подклассе
				// console.log(this.age); // Ошибка - private недоступен
				console.log(`Salary: ${this.salary}`);
			}
		}

		const emp = new Employee("Bob", 35, "EMP456", new Date(1988, 2, 10), 5000);
		emp.showEmployeeInfo(); // OK - public метод
		// ⁡⁣⁣⁢Сокращенная запись в конструкторе⁡
		class Product {
			constructor(
				public id: number,
				private name: string,
				protected price: number,
				readonly createdAt: Date = new Date(),
			) {}

			public getDescription(): string {
				return `${this.name} costs $${this.price}`;
			}
		}

		const product = new Product(1, "Laptop", 999);
		console.log(product.id); // OK
		// console.log(product.name); // Ошибка - private
		console.log(product.getDescription()); // OK - public метод
		// console.log(product.createdAt); // OK - readonly доступен только для чтения
		// ⁡⁣⁣⁢Getter и Setter⁡
		class BankAccount {
			private _balance: number = 0;

			// Getter
			public get balance(): number {
				return this._balance;
			}

			// Setter с проверкой
			public set balance(amount: number) {
				if (amount >= 0) {
					this._balance = amount;
				} else {
					console.log("Balance cannot be negative");
				}
			}
		}
		const account = new BankAccount();
		account.balance = 100; // Используется setter
		console.log(account.balance); // Используется getter
		account.balance = -50; // Ошибка через setter
		// ⁡⁣⁣⁢Статические члены класса⁡
		class MathHelper {
			// Статическое свойство
			public static readonly PI = 3.14159;

			// Статический метод
			public static calculateCircleArea(radius: number): number {
				return this.PI * radius * radius;
			}
		}
		// Доступ без создания экземпляра
		console.log(MathHelper.PI);
		console.log(MathHelper.calculateCircleArea(5));
		// ⁡⁣⁣⁢Абстрактные классы⁡
		abstract class Animal {
			constructor(public name: string) {}

			// Абстрактный метод (без реализации)
			public abstract makeSound(): void;

			// Обычный метод
			public move(distance: number = 0): void {
				console.log(`${this.name} moved ${distance}m`);
			}
		}
		class Dog extends Animal {
			constructor(name: string) {
				super(name);
			}
			// Реализация абстрактного метода
			public makeSound(): void {
				console.log("Woof! Woof!");
			}
		}
		const dog = new Dog("Rex");
		dog.makeSound();
		dog.move(10);
		// ⁡⁣⁢⁢Когда использовать модификаторы:⁡
		// ⁡⁣⁣⁢-- public - для API класса, к которому должен быть доступ извне⁡
		// ⁡⁣⁣⁢-- private - для внутренней реализации, которую нужно скрыть⁡
		// ⁡⁣⁣⁢-- protected - для членов, которые должны быть доступны в наследниках⁡
		// ⁡⁣⁣⁢-- readonly - для свойств, которые не должны изменяться после инициализации⁡
		// ⁡⁣⁣⁢Использование модификаторов помогает создавать более надежный и поддерживаемый код, четко определяя контракты классов и ограничивая нежелательный доступ к внутренней реализации.⁡
	}
	// 🔳 ⁡⁢⁣⁣ДЕКОРАТОРЫ (DECORATORS)⁡⁡
	// ⁡⁣⁣⁢Декораторы — это специальные функции, которые позволяют добавлять метаданные и изменять поведение классов, методов, свойств, параметров или аксессоров (геттеров/сеттеров). Они широко используются в фреймворках вроде Angular, NestJS и TypeORM.⁡
	{
		function sealed(constructor: Function) {
			Object.seal(constructor);
			Object.seal(constructor.prototype);
		}
		@sealed
		class Greeter {
			greeting: string;
			constructor(message: string) {
				this.greeting = message;
			}
			greet() {
				return "Hello, " + this.greeting;
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣УТИЛИТАРНЫЕ ТИПЫ (UTILITY TYPES)⁡:⁡
	// ⁡⁣⁣⁢Утилитарные типы (или утилитарные типы данных) — это специальные типы в программировании, предназначенные для решения конкретных задач, таких как обработка данных, валидация, преобразование или управление состояниями. Они часто используются в строго типизированных языках (TypeScript, Rust, Haskell и др.) для повышения безопасности кода и улучшения его читаемости.⁡
	{
		// ⁡⁣🔹⁢ ⁡⁣⁢⁢Partial<T>:⁡⁡ ⁡⁢⁢⁢Делает все свойства типа T необязательными.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			interface User {
				name: string;
				age: number;
			}
			type PartialUser = Partial<User>;
			// Эквивалентно:
			// { id?: number; name?: string; email?: string; }

			const userDraft: PartialUser = { name: "Alice" }; // OK
		}
		// 🔹 ⁡⁣⁢⁢Required<T>:⁡ ⁡⁢⁢⁢Делает все свойства типа T обязательными.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			interface User {
				name: string;
				age: number;
			}
			type OptionalUser = { id?: number; name?: string };
			type RequiredUser = Required<OptionalUser>;
			// { id: number; name: string }
			const user: RequiredUser = { id: 1, name: "Bob" }; // OK
			type PartialUser = Partial<User>; // { name?: string; age?: number }
		}
		// ⁡⁣⁢🔹 ⁡⁣⁢⁢Readonly<T>⁡:⁡⁡ ⁡⁢⁢⁢Делает все свойства типа T доступными только для чтения.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			interface User {
				name: string;
				age: number;
			}
			type ReadonlyUser = Readonly<User>;
			// { readonly id: number; readonly name: string; ... }
			const user: ReadonlyUser = { age: 1, name: "Charlie" };
			// user.name = "Dave"; // Ошибка: нельзя изменять readonly-свойство.
		}
		// 🔹 ⁡⁣⁢⁢Record<K, T>:⁡ ⁡⁢⁢⁢Создаёт тип с ключами K и значениями T.⁡
		{
			interface User {
				name: string;
				id: number;
				email: string;
			}
			type UserRoles = Record<"admin" | "user", User>;
			// Эквивалентно:
			// { admin: User; user: User; }
			const roles: UserRoles = {
				admin: { id: 1, name: "Admin", email: "admin@test.com" },
				user: { id: 2, name: "User", email: "user@test.com" },
			};
		}
		// 🔹 ⁡⁣⁢⁢Pick<T, K>: ⁡⁡⁢⁢⁢Создает новый тип, выбирая только указанные свойства K из типа T.⁡⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			interface User {
				name: string;
				email: string;
			}
			type UserName = Pick<User, "name">; // { name: string }
			type UserPreview = Pick<User, "name" | "email">;
			// { name: string; email: string; }
			const preview: UserPreview = { name: "Eve", email: "eve@test.com" };
		}
		// 🔹 ⁡⁣⁢⁢Omit<T, K>:⁡⁡ ⁡⁢⁢⁢Удаляет из типа T указанные свойства K.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			interface User {
				name: string;
				id: number;
				email: string;
			}
			type UserWithoutEmail = Omit<User, "email">;
			// { id: number; name: string; }
			const user: UserWithoutEmail = { id: 3, name: "Frank" };
		}
		// 🔹 ⁡⁣⁢⁢Exclude<T, U>:⁡ ⁡⁢⁢⁢Исключает из T типы, которые есть в U.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
			type T1 = Exclude<string | number | (() => void), Function>; // string | number
		}
		// 🔹 ⁡⁣⁢⁡⁣⁢⁢Extract<T, U>:⁡ ⁡⁢⁢⁢Извлекает из T типы, которые совпадают с U.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			type T2 = Extract<"a" | "b" | "c", "a" | "d">; // "a"
			type T3 = Extract<string | number | (() => void), Function>; // () => void
		}
		// 🔹 ⁡⁣⁢⁢NonNullable<T>:⁡ ⁡⁢⁢⁢Удаляет null и undefined из T.⁡
		{
			// ⁡⁣⁣⁢Пример:⁡
			type T4 = NonNullable<string | null | undefined>; // string
		}
		// 🔹 ⁡⁣⁢⁢ReturnType<T>:⁡ ⁡⁢⁢⁢Получает тип возвращаемого значения функции.⁡
		{
			interface User {
				name: string;
				id: number;
				email: string;
			}
			const getUser = (): User => ({ id: 1, name: "Alice", email: "alice@test.com" });
			type GetUserReturnType = ReturnType<typeof getUser>; // User
		}
		// 🔹 ⁡⁣⁢⁢Parameters<T>:⁡ ⁡⁢⁢⁢Получает кортеж типов параметров функции.⁡
		{
			type Func = (a: number, b: string) => void;
			type FuncParams = Parameters<Func>; // [a: number, b: string]
		}
		// 🔹 ⁡⁣⁢⁢ConstructorParameters<T>:⁡ ⁡⁢⁢⁢Получает параметры конструктора класса.⁡
		{
			class Person {
				constructor(
					public name: string,
					public age: number,
				) {}
			}
			type PersonParams = ConstructorParameters<typeof Person>; // [name: string, age: number]
		}
		// 🔹 ⁡⁣⁢⁢InstanceType<T>:⁡ ⁡⁢⁢⁢Получает тип экземпляра класса.⁡
		{
			class Person {
				constructor(
					public name: string,
					public age: number,
				) {}
			}
			type PersonInstance = InstanceType<typeof Person>; // Person
		}
		// 🔹 ⁡⁣⁢⁢Awaited<T> (TypeScript 4.5+):⁡ ⁡⁢⁢⁢Раскрывает тип промиса или цепочки промисов.⁡
		{
			type PromiseType = Awaited<Promise<Promise<string>>>; // string
		}
		// 🔹 ⁡⁣⁢⁡⁣⁢⁢Строковые манипуляции:⁡ ⁡⁢⁢⁢Типы для работы со строковыми литералами:⁡
		{
			type T5 = Uppercase<"hello">; // "HELLO"
			type T6 = Lowercase<"HELLO">; // "hello"
			type T7 = Capitalize<"hello">; // "Hello"
			type T8 = Uncapitalize<"Hello">; // "hello"
		}
		// 🔹
		// ⁡⁣⁣⁢Заключение⁡
		// ⁡⁣⁣⁢-- Утилитарные типы помогают:⁡
		// ⁡⁣⁣⁢-- Упрощать обработку данных,⁡
		// ⁡⁣⁣⁢-- Делать код более предсказуемым,⁡
		// ⁡⁣⁣⁢-- Избегать ошибок на этапе компиляции.⁡
		// ⁡⁣⁣⁢-- Их часто используют в функциональном программировании.⁡
	}
	// 🔳 ⁡⁢⁣⁣TYPE GUARDS (СТРАЖИ ТИПОВ)⁡
	{
		// ⁡⁣⁣⁢Type Guards (стражи типов) - это механизм TypeScript, позволяющий сужать типы в пределах блока кода на основе проверок условий.
		// 🔳 ⁡⁢⁣⁣КЛАССИФИКАЦИЯ TYPE GUARDS⁡
		{
			// 🔹 ⁡⁣⁢⁢ВСТРОЕННЫЕ (BUILT-IN) TYPE GUARDS⁡
			{
				// ✅ ⁡⁢⁢⁢typeof - для примитивных типов⁡
				// ✅ ⁡⁢⁢⁢instanceof - для проверки классов⁡
				// ✅ ⁡⁢⁢⁢in - для проверки наличия свойства в объекте⁡
			}
			// 🔹 ⁡⁣⁢⁢ПОЛЬЗОВАТЕЛЬСКИЕ TYPE GUARDS⁡
			{
				// ⭐ ⁡⁣⁣⁢Функции, возвращающие предикат типа (type predicate)⁡
			}
			// 🔹 ⁡⁣⁢⁢ЗАЩИТНИКИ НА ОСНОВЕ DISCRIMINATED UNIONS⁡
			{
				// ⭐ ⁡⁣⁣⁢Использование общего поля (дискриминатора) для различения типов⁡
			}
		}
		// 🔳 ⁡⁢⁣⁣ОБЛАСТИ ПРИМЕНЕНИЯ⁡
		{
			// ✅ ⁡⁢⁢⁢Работа с полиморфными типами (union types)⁡
			// ✅ ⁡⁢⁢⁢Обработка данных неизвестной структуры (unknown, any)⁡
			// ✅ ⁡⁢⁢⁢Проверка типов во время выполнения (runtime type checking)⁡
			// ✅ ⁡⁢⁢⁢Работа с API, возвращающими данные разных типов⁡
		}
		// 🔳 ⁡⁢⁣⁣ПРИМЕРЫ⁡
		{
			// ⚡ ⁡⁣⁣⁢typeof⁡
			{
				function padLeft(value: string, padding: string | number) {
					if (typeof padding === "number") {
						return Array(padding + 1).join(" ") + value; // padding: number
					}
					return padding + value; // padding: string
				}
			}
			// ⚡ ⁡⁣⁣⁢instanceof⁡
			{
				class Bird {
					fly() {
						console.log("Flying");
					}
				}
				class Fish {
					swim() {
						console.log("Swimming");
					}
				}
				function move(pet: Bird | Fish) {
					if (pet instanceof Bird) {
						pet.fly(); // pet: Bird
					} else {
						pet.swim(); // pet: Fish
					}
				}
			}
			// ⚡ ⁡⁣⁣⁢in⁡
			{
				interface Circle {
					kind: "circle";
					radius: number;
				}
				interface Square {
					kind: "square";
					sideLength: number;
				}

				function getArea(shape: Circle | Square) {
					if ("radius" in shape) {
						return Math.PI * shape.radius ** 2; // shape: Circle
					}
					return shape.sideLength ** 2; // shape: Square
				}
			}
			// ⚡ ⁡⁣⁣⁢Пользовательский Type Guard⁡
			{
				// ⭐ ⁡⁣⁣⁢Ключевое слово «is» указывает, что функция возвращает логическое значение⁡
				function isString(value: any): value is string {
					return typeof value === "string";
				}
				function process_1(input: string | number) {
					if (isString(input)) {
						console.log(input.toUpperCase()); // input: string
					} else {
						console.log(input.toFixed(2)); // input: number
					}
				}
			}
			// ⚡ ⁡⁣⁣⁢Discriminated Unions⁡
			{
				type Success = {
					type: "success";
					data: string;
				};
				type Error = {
					type: "error";
					message: string;
				};
				function handleResponse(response: Success | Error) {
					switch (response.type) {
						case "success":
							console.log(response.data); // response: Success
							break;
						case "error":
							console.error(response.message); // response: Error
							break;
					}
				}
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣ТИПИЗАЦИЯ ФУНКЦИЙ⁡
	{
		// 🔹 ⁡⁣⁢⁡⁣⁢⁢Дженерики (Generics), Декларативные функции⁡
		{
			// Обобщенные функции
			function identity<T>(arg: T): T {
				return arg;
			}
			identity<string>("5"); // Применение
			// Ограничения дженериков
			interface HasLength {
				length: number;
			}
			function logLength<T extends HasLength>(obj: T): void {
				console.log(obj.length);
			}
			logLength({ length: 5 }); // Применение
		}
		// 🔹 ⁡⁣⁢⁢Декларативные функции (Function Declaration)⁡
		{
			// Строгая типизация
			function add(a: number, b: number): number {
				return a + b;
			}
			add(5, 7);
			// Обычная типизация (вывод типов)
			function greet(name: string) {
				// :string выводится автоматически
				return `Hello, ${name}`;
			}
			greet("Word");
			// Параметры по умолчанию
			type User = {
				id: number;
				name: string;
				age: number;
			};
			function createUser(name: string, age: number = 18): User {
				return { id: Math.random(), name, age };
			}
			createUser("Иван");
		}
		// 🔹 ⁡⁣⁢⁢Функциональные выражения (Function Expression)⁡
		{
			// Явная аннотация типа
			const sum: (a: number, b: number) => number = function (a, b) {
				return a + b;
			};
			sum(5, 7);
			type ID = {
				id: number;
			};
			type User = {
				id: ID;
				name: string;
				age: number;
			};
			// Вывод типа через контекст
			const users: User[] = [];
			const findUser = function (id: ID) {
				return users.find((u) => u.id === id);
			}; // (id: ID) => User | undefined
			findUser({ id: 5 });
		}
		// 🔹 ⁡⁣⁢⁢Стрелочные функции (Arrow Functions)⁡
		{
			// Явная аннотация
			const multiply: (a: number, b: number) => number = (a, b) => a * b;
			multiply(5, 7);
			// Вывод типа
			const toUpperCase = (str: string) => str.toUpperCase(); // :string
			toUpperCase("string");
			// Дженерики со стрелочными функциями
			const reverse = <T>(array: T[]): T[] => array.reverse();
			reverse<string>(["анна"]);
			reverse<number>([5, 0, 0, 5]);
		}
		// 🔹 ⁡⁣⁢⁢IIFE (Immediately Invoked Function Expressions)⁡
		{
			// Строгая типизация параметров и возвращаемого значения
			const result = ((prefix: string): string => {
				return prefix + Math.random().toString(36).substring(2);
			})("id_");
			// Асинхронная IIFE
			interface ApiResponse {
				id: number;
				name: string;
			}
			(async () => {
				const data: ApiResponse[] = await fetch("http://localhost:3002/rooms").then((res) =>
					res.json(),
				);
			})();
			const getFromCache = () => {
				return 5;
			};
			// Дженерик в IIFE
			const results = (function <T>(arg: T): T {
				return arg;
			})<number>(42);
			console.log(results); // 42
			// Альтернативный вариант с явным вызовом
			const value = (function <T>(arg: T): T {
				return arg;
			})<string>("Здравствуй, TypeScript!");
			console.log(value); // "Здравствуй, TypeScript!"
		}
		// 🔹 ⁡⁣⁢⁢Ключевые различия типизаций⁡
		{
			// ⁡⁢⁣⁣СИТУАЦИЯ						ОБЫЧНАЯ ТИПИЗАЦИЯ							СТРОГАЯ ТИПИЗАЦИЯ⁡
			// ⁡⁣⁣⁢Лишние свойства в объекте	Разрешены ({ id:1, name:"A", age:20 })		Запрещены (age вызовет ошибку)⁡
			// ⁡⁣⁣⁢Параметры функций			Неявный вывод типа (function(a) { ... })	Обязательная аннотация (a: number)⁡
			// ⁡⁣⁣⁢Опциональные свойства		age?: number (допускает undefined)			Требует явной проверки на undefined⁡
		}
		// 🔹 ⁡⁣⁢⁢Рекомендации⁡
		{
			// ✅ ⁡⁢⁢⁢interface vs type:⁡
			{
				// ⚡ ⁡⁢⁣⁣Используйте interface для объектов/классов (лучшая поддержка в IDE).⁡
				// ⚡ ⁡⁢⁣⁣Используйте type для объединений, кортежей и сложных типов.⁡
			}
			// ✅ ⁡⁢⁢⁢Строгая типизация:⁡
			{
				// ⚡ ⁡⁢⁣⁣Включите в tsconfig.json: "strict": true.⁡
				// ⚡ ⁡⁢⁣⁣Всегда аннотируйте возвращаемые типы в функциях.⁡
			}
			// ✅ ⁡⁢⁢⁢Дженерики:⁡
			{
				// ⚡ ⁡⁢⁣⁣Применяйте для создания переиспользуемых компонентов.⁡
				// ⚡ ⁡⁢⁣⁣Используйте ограничения (extends) для безопасности типов.⁡
			}
		}
	}
}
// ⁡⁢⁣⁢ЗАДАЧИ ПО ТИПИЗИРОВАНИЮ⁡
{
	// ⁡⁣⁣⁢Типизировать промисы⁡
	{
		function slips(ms: number): Promise<void> {
			return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
		}
		let a: Promise<void> = slips(2000);
		console.log(a); // Вывод: Promise { <pending> } (Ожидание выполнения)
		a.then(() => console.log("2 секунды спустя")); // Через 2 секунды выведет "2 секунды спустя"
		// ⁡⁣⁣⁢Реальный смысл дженерикам здесь появится, если добавить параметр для значения:⁡
		function sleeps<T>(ms: number, value: T): Promise<T> {
			return new Promise((resolve) => setTimeout(() => resolve(value), ms));
		}
		sleeps(2000, "Hello").then(console.log); // Через 2 сек: "Hello"
	}
}

export {}

