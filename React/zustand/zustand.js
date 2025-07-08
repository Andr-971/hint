
// Установка:
// npm i zustand

// Создание хранилища для хранения и изменения данных
export const useState = create((set) => ({
    state: [{ name: "Ivan" }], // Начальный объект
    changeState: (params) => set((state) => (state.option = [params])), // Изменение объекта
    loading: false,
    error: null,
    // (set) => () Обновляект объект как useState
    // (set) может принимать как объект для обновления так и функцию для обновления
    // Если принимает функцию то параметром принимает (state) state.option state.changeOption
    // state - как this в объектах
}));

// Использование: импортируем {useState}
// Вызываем:
const option = useState((state) => state.state); // Получаем текщий объект
import { usePopapInterActive } from "@/store"; // Получаем текщий объект
// Изменение:
const newOption = useState((state) => state.changeOption); // Получаем объект для обновления
const { changePopapInter } = usePopapInterActive();
newOption({ name: "Andr" }); // Изменяем объект