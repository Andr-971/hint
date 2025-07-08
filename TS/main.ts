
// tsc --init tsconfig.json - создание файла конфигурации
// tsc main.ts - компиляция файла main.ts.
let string_var:string = "string"; // Строчные данные
let number_var: number = 137 // Цифровые данные
let boolean_var: boolean = true // Булевые значения
let null_var: null = null // Пустое значение
let undefinedD_var: undefined = undefined // Не объявленное значение
let any_var: any = "" // Любой тип данных
let str_num: string | number = "string" // Строка или число
// ⁡⁣⁣⁢ЭКСПОРТ ИМПОРТ typescript⁡
    export type Todo = {
		id: number;
		text: string;
		completed: boolean;
	};
	export type TodoItemProps = {
		todo: Todo;
		onToggle: (id: number) => void;
		// onDelete: (id: number) => void;
	};
// import * as Types from "./TypeTodoList";
    // Type.Todo Type.TodoItemProps

// ⁡⁣⁣⁢ОПРЕДЕЛЕНИЕ СВОИХ ТИПОВ ДАННЫХ⁡
{
    // ⁡⁣⁢⁢Для объектов⁡
    type TypeUser = {
        nameFirst: string
        age: number
        address: string
    }
    type State = {
        nameState: string
    }

    let user: TypeUser = {
        nameFirst: "Андрей",
        age: 54,
        address: "Пермь"
    }
    // ⁡⁣⁢⁢Объединение типов⁡
    let superUser: TypeUser & State = {
        ...user,
        nameState: "Россия"
    }
    // ⁡⁣⁢⁢Для массивов⁡
    let array: string[] = ["строка", "параграф"]
}
// ⁡⁣⁣⁢КЛЮЧЕВЫЕ СЛОВА⁡
{
	// ⁡⁢⁣⁣as const⁡ ⁡⁣⁢⁢— это утверждение типа, которое указывает компилятору обрабатывать значение как литерал, не подлежащий изменению. Это означает, что значение нельзя изменить или сузить каким-либо образом.⁡
	// ⁡⁢⁣⁣typeof⁡ ⁡⁣⁢⁢— это оператор, который, как и в обычном JavaScript, работает с типами, а не с значениями. Его часто используют в аннотациях типов или выражениях типов, чтобы определить форму значения.⁡
	// ⁡⁢⁣⁣keyof⁡ ⁡⁣⁢⁢— это оператор, который используется для извлечения ключей (имен свойств) типа объекта. Его часто применяют в сочетании с сопоставленными типами или для создания безопасных по типу доступа к свойствам объекта.⁡
}
// ⁡⁣⁣⁢ДЖЕНЕРИКИ⁡
{
	// ⁡⁣⁢⁢для массивов⁡
	let arrayj: Array<number> = [1, 2, 3];
    // ⁡⁣⁢⁢Для функций⁡
	function entity<T>(args: T): T {
		return args;
	}
	// ⁡⁣⁢⁢привызове определяем тип данных⁡
	entity<number>(3);
    entity<string>("строка");
    // ⁡⁣⁢⁢Стрелочная функция⁡
	const entity2 = <T>(arges: T): T => {
		return arges;
    };
    entity2<number>(5);
    // ⁡⁣⁢⁢Для стрелочной функции по умолчанию⁡
    const nunb_2 = <N extends {id: number}>(arg: N): N => {
        return arg;
    }
    nunb_2({id: 5});

	// ⁡⁣⁢⁢для классов⁡
	class Channel2<T> {
		private name: T;
		constructor(name: T) {
			this.name = name;
		}
	}
	new Channel2<string>("строка");
	// ⁡⁣⁢⁢для интерфейсов определяем тип при использовании⁡
	interface IPair<K, V> {
		key: K;
		value: V;
	}
	const pair1: IPair<string, number> = {
		key: "1",
		value: 2,
	};
	// ⁡⁣⁢⁢Только для чтения⁡
	const strings: ReadonlyArray<string> = ["строка", "параграф"];
}
// ⁡⁣⁣⁢КАРТЕЖИ⁡
{
    type TypeArray = [number, string, null]
    const newArray: TypeArray = [5, "string", null]
}
// ⁡⁣⁣⁢ФУНКЦИИ⁡
{
    // ⁡⁣⁢⁢Параметром только строка и возврат только строки⁡
    type TypeChannelReturn = {
        name: string
    }
    function getChannel_fun(name: string): TypeChannelReturn {
        return {name}
    }
    // ⁡⁣⁢⁢Типизация самой функции(стрелочной) параметр строка и возврат строки⁡
    type TypeChannelFun = (name: string) => TypeChannelReturn
    const getChannelName: TypeChannelFun = (name) => {
        return {name}
    }
}
// ⁡⁣⁣⁢КЛАССЫ⁡
{
    class Car {
        name: string
        price: number
        constructor(name: string, price: number) {
            this.name = name
            this.price = price
        }
        // ⁡⁣⁢⁢По умолчанию методы public, private - только внутри класса, protected - только в классах наследниках⁡
        // ⁡⁣⁢⁢Вернуть строку⁡
        getInfo(): string {
            return `${this.name} - ${this.price}`
        }
    }
    const car = new Car("BMW", 100000).getInfo()
}
// ⁡⁣⁣⁢ИНТЕРФЕЙСЫ⁡
{
    interface IUser {
        email: string
        name: string
    }
    const userCar = {
        email: "string",
        name: "string"
    }
    // ⁡⁣⁢⁢Енамы(константы)⁡
    enum EnumRoles {
        ADMIN,
        GUEST,
        USER
    }
    interface IUser {
        role: EnumRoles
    }
    const userRoles = {
        role: EnumRoles.ADMIN,
    }
}
// ⁡⁣⁣⁢УТВЕРЖДЕНИЯ
{
    const inputElement = document.querySelector("input");
    const valueOne = (inputElement as HTMLInputElement).value // Вариант 1
    const valueTwo = (<HTMLInputElement>inputElement).value // Вариант 2
}
// ⁡⁣⁣⁢УТИЛИТЫ ТИПОВ⁡
{
    interface IProduct { // * ? у поля параметр не обязательный
        id: number
        title: string
        price: number
        img: string
    }
    interface ICreateProduct extends Omit<IProduct, "id"> {} // Исключает id
    interface IProductID extends Pick<IProduct, "id"> { } // Только id
    interface IOptionsProduct extends Partial<IProduct> { } // Все поля не обязательны
    interface IRequiredProduct extends Required<IProduct> { } // Все поля обязательны
    interface IReadonlyProduct extends Readonly<IProduct> { } // Только для чтения

    const product: IOptionsProduct = {}
}
// ⁡⁣⁣⁢РАСШИРЕННЫЕ ТИПЫ⁡
{
    type TypeIsNumber<T> = T extends number ? "yes" : "no"
    type Type1 = TypeIsNumber<number>
    type Type2 = TypeIsNumber<string>
}
// ⁡⁣⁣⁢ТИПИЗАЦИЯ PROPS REACT⁡
{
    // import PropTypes from "prop-types";

    // const Component = ({ name, age, isActive }) => (
    //     <div>
    //         <p>Name: {name}</p>
    //         <p>Age: {age}</p>
    //         <p>Active: {isActive ? 'Yes' : 'No'}</p>
    //     </div>
    // );

    // Component.propTypes = {
    //     name: PropTypes.string.isRequired,
    //     age: PropTypes.number.isRequired,
    //     isActive: PropTypes.bool,
    // };

    // * Типы PropTypes
    // PropTypes.any: Любое значение.
    // PropTypes.bool: Булевое значение.
    // PropTypes.number: Число.
    // PropTypes.string: Строка.
    // PropTypes.func: Функция.
    // PropTypes.array: Массив.
    // PropTypes.object: Объект.
    // PropTypes.symbol: Символ.
    // PropTypes.node: Что-то, что можно отрендерить (число, строка, элемент, массив и т.д.).
    // PropTypes.element: React элемент.
    // PropTypes.instanceOf(Class): Экземпляр определенного класса.
    // PropTypes.oneOf(['Option1', 'Option2']): Один из указанных значений.
    // PropTypes.oneOfType([PropTypes.string, PropTypes.number]): Один из указанных типов.
    // PropTypes.arrayOf(PropTypes.number): Массив элементов определенного типа.
    // PropTypes.objectOf(PropTypes.number): Объект со значениями определенного типа.
    // PropTypes.shape({ name: PropTypes.string, age: PropTypes.number }): Объект с заданной структурой.
    // PropTypes.exact({ name: PropTypes.string, age: PropTypes.number }): Объект с точно заданной структурой (дополнительные свойства запрещены).
}
