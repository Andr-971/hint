// Создание reducers
import { createSlice} from "@reduxjs/toolkit"; // Импорт toolkit

const todoSlice = createSlice({
    name: "todos", // Название
    initialState: {
        todos: [], // Изначальное состояние
    },
    reducers: {
            addTodo(state, action) { // Методы обработки данных
                state.todos.push({
                    id: new Date().toISOString(),
                    textInput: action.payload.textInput, // Изменяемые данные action.payload
                    completed: false,
                });
            },
            removeTodo(state, action) { // Методы обработки данных
                state.todos = state.todos.filter((todo) => {
                    return todo.id !== action.payload.id; // Изменяемые данные action.payload
                })
            },
            ToggleTodoComplete(state, action) { // Методы обработки данных
                const toggledTodo = state.todos.find((todo) => {
                    return todo.id === action.payload.id; // Изменяемые данные action.payload
                });
                toggledTodo.completed = !toggledTodo.completed;
            },
        },
    },
);

export const { addTodo, removeTodo, ToggleTodoComplete } = todoSlice.actions; // Импорт методов в React или куда там ещё

export default todoSlice.reducer; // Импорт конкретного reducer в точку входа

