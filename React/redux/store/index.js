
// Точка входа Redux
import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlice"

export default configureStore({ // Создание объекта reducer с объектом todos
    reducer: {
        todos: todoReduser,
    }
});