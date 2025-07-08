// ⁡⁢⁣⁢ШПАРГАЛКА TYPESCRIPT ДЛЯ REACT: ХУКИ, ОБРАБОТЧИКИ, СОБЫТИЯ⁡
// ⁡⁢⁣⁣1. ТИПИЗАЦИЯ ХУКОВ⁡
{
	// ⁡⁣⁢⁢useState⁡;
	// Примитивы
	// const [count, setCount] = useState<number>(0);
	// Объекты
	interface User {
		name: string;
		age: number;
	}
	// const [user, setUser] = useState<User | null>(null);
	// Автовывод типа
	// const [visible, setVisible] = useState(false); // boolean
	// ⁡⁣⁢⁢useRef⁡
	// Для DOM-элементов
	// const inputRef = useRef<HTMLInputElement>(null);
	// Для изменяемых значений
	// const timerId = useRef<number | null>(null);
	// ⁡⁣⁢⁢useReducer⁡
	type State = { count: number };
	type Action = { type: "increment" } | { type: "decrement" };
	const reducer = (state: State, action: Action): State => {
		switch (action.type) {
			case "increment":
				return { count: state.count + 1 };
			case "decrement":
				return { count: state.count - 1 };
			default:
				return state;
		}
	};
	// const [state, dispatch] = useReducer(reducer, { count: 0 });
	// ⁡⁣⁢⁢useContext⁡
	interface ThemeContextType {
		theme: "light" | "dark";
		toggleTheme: () => void;
	}
	// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
	// Использование
	// const themeContext = useContext(ThemeContext)!; // ! если уверены в наличии значения
}
// ⁡⁢⁣⁣2. ТИПИЗАЦИЯ ОБРАБОТЧИКОВ СОБЫТИЙ⁡
{
	// ⁡⁣⁣⁢- Основные типы событий:⁡
	// React.FormEvent<HTMLFormElement>; // Формы
	// React.ChangeEvent<HTMLInputElement>; // Инпуты
	// React.MouseEvent<HTMLButtonElement>; // Клики
	// React.KeyboardEvent<HTMLInputElement>; // Клавиатура
	// ⁡⁣⁣⁢- Примеры:⁡
	// ⁡⁣⁢⁢Форма⁡
	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
	// 	e.preventDefault();
	// };
	// ⁡⁣⁢⁢Инпут⁡
	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
	// setValue(e.target.value);
	// };
	// ⁡⁣⁢⁢Клик⁡
	// const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
	// console.log(e.currentTarget.dataset.id);
	// };
	// ⁡⁣⁢⁢Кастомное событие⁡
	// const handleCustom = (e: React.SyntheticEvent): void => {
	// 	const target = e.target as HTMLInputElement;
	// 	console.log(target.value);
	// };
}
// ⁡⁢⁣⁣3. ТИПИЗАЦИЯ КОМПОНЕНТОВ⁡
{
	// ⁡⁣⁢⁢Функциональный компонент:⁡
	interface Props {
		title: string;
		isActive?: boolean;
		onClick: (id: number) => void;
	}
	// const Button: FC<Props> = ({ title, isActive = false, onClick }) => {
	// 	return <button onClick={() => onClick(1)}>{title}</button>;
	// };
	// ⁡⁣⁢⁡⁢⁣⁡⁣⁢⁢Компонент с children⁡
	interface LayoutProps {
		// children: React.ReactNode;
	}
	// const Layout: FC<LayoutProps> = ({ children }) => {
	// 	return <div className="container">{children}</div>;
	// }
    // ⁡⁣⁢⁢Компонент с forwardRef⁡
    interface InputProps {
		label: string;
	}
	// const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => {
	// 	return <input ref={ref} placeholder={label} />;
	// });
}
// ⁡⁢⁣⁣4. ПОЛЕЗНЫЕ ПАТТЕРНЫ⁡
{
	// ⁡⁣⁢⁢Типизация API-ответов⁡
	interface UserData {
		id: number;
		name: string;
		email: string;
	}
	const fetchUser = async (): Promise<UserData> => {
		const response = await fetch("/api/user");
		return response.json();
	};
    // ⁡⁣⁢⁢Generic-компоненты⁡
    interface ListProps<T> {
		items: T[];
		// renderItem: (item: T) => React.ReactNode;
	}
	// const List = <T extends {}>({ items, renderItem }: ListProps<T>) => {
	// 	return <div>{items.map(renderItem)}</div>;
	// };
}
// ⁡⁢⁣⁣5. УТИЛИТЫ ДЛЯ ТИПОВ⁡
{
	// ⁡⁣⁢⁢Типизация пропсов из компонента⁡
	// import { ComponentProps } from "react";
	// type ButtonProps = ComponentProps<typeof Button>; // Получение пропсов компонента
    // ⁡⁣⁢⁢Тип для CSS-свойств⁡
    // const style: React.CSSProperties = {
	// 	display: "flex",
	// 	gap: "10px",
	// };
}
// ⁡⁢⁣⁣6. РАБОТА С ФОРМАМИ⁡
{
	// ⁡⁣⁢⁢Управляемый компонент⁡
	const Form_1 = () => {
		// const [value, setValue] = useState("");
		// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			// setValue(e.target.value);
		// };
		// return <input value={value} onChange={handleChange} />;
	};
    // ⁡⁣⁢⁢Неуправляемый компонент⁡
    const Form_2 = () => {
		// const inputRef = useRef<HTMLInputElement>(null);
		// const handleSubmit = (e: React.FormEvent) => {
			// e.preventDefault();
			// console.log(inputRef.current?.value);
		// };
		return (
			// <form onSubmit={handleSubmit}>
				{/* <input ref={inputRef} /> */}
			// </form>
		);
	};
}
// ⁡⁢⁣⁣7. КАСТОМНЫЕ ХУКИ⁡
{
    interface UseCounter {
		count: number;
		increment: () => void;
		decrement: () => void;
	}
	// const useCounter = (initialValue: number): UseCounter => {
		// const [count, setCount] = useState(initialValue);

		// const increment = () => setCount((c) => c + 1);
		// const decrement = () => setCount((c) => c - 1);
		// return { count, increment, decrement };
	// };
}
// ⁡⁢⁣⁣8. РАБОТА С REFS⁡
{
    const Component = () => {
		// const divRef = useRef<HTMLDivElement>(null);
		// useEffect(() => {
		// 	if (divRef.current) {
		// 		divRef.current.scrollTop = 100; // Безопасный доступ
		// 	}
		// }, []);
		// return <div ref={divRef}>Content</div>;
	};
}
// ⁡⁢⁣⁣9. ЭКСПОРТ И ИМПОРТ⁡
{
	// ☑️ ⁡⁣⁢⁢Экспорт типов в файле (например, types.ts):⁡
	{
		// ⚪ ⁡⁣⁣⁢Добавьте ключевое слово export перед каждым типом:⁡
		{
			// export type Todo = {
			// 	id: number;
			// 	text: string;
			// 	completed: boolean;
			// };
			// export type TodoItemProps = {
			// 	todo: Todo;
			// 	onToggle: (id: number) => void;
			// 	onDelete: (id: number) => void;
			// };
		}
	}
	// ☑️ ⁡⁣⁢⁢Импорт типов в другом файле:⁡
	{
		// ⚪ ⁡⁣⁣⁢Вариант 1: Именованный импорт⁡
		{
			// import { Todo, TodoItemProps } from "./types";
		}
		// ⚪ ⁡⁣⁣⁢Вариант 2: Импорт с псевдонимом (alias)⁡
		{
			// import { Todo as TodoType, TodoItemProps as ItemProps } from "./types";
		}
		// ⚪ ⁡⁣⁣⁢Вариант 3: Импорт всех типов как модуля⁡
		{
			// import * as Types from "./types";
			// Использование: Types.Todo, Types.TodoItemProps
		}
	}
}