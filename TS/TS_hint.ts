
//! ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
{
    // tsc --init tsconfig.json - создание файла конфигурации
    // tsc main.ts - компиляция файла main.ts.
    let string_var:string = "string"; // Строчные данные
    let number_var: number = 137 // Цифровые данные
    let boolean_var: boolean = true // Булевые значения
    let null_var: null = null // Пустое значение
    let undefinedD_var: undefined = undefined // Не объявленное значение
    let any_var: any = "" // Любой тип данных
    let str_num: string | number = "string" // Строка или число
}
//! ⁡⁢⁣⁢ЭКСПОРТ ИМПОРТ typescript⁡
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
//! ⁡⁣⁣⁡⁢⁣⁡⁢⁣⁢ОПРЕДЕЛЕНИЕ СВОИХ ТИПОВ ДАННЫХ
{
	// ⁡⁣⁢⁢Для объектов⁡
	type TypeUser = {
		nameFirst: string;
		age: number;
		address: string;
	};
	type State = {
		nameState: string;
	};

	let user: TypeUser = {
		nameFirst: "Андрей",
		age: 54,
		address: "Пермь",
	};
	// ⁡⁣⁢⁢Объединение типов⁡
	let superUser: TypeUser & State = {
		...user,
		nameState: "Россия",
	};
	// ⁡⁣⁢⁢Для массивов⁡
	let array: string[] = ["строка", "параграф"];
}