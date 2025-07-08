
import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./goodsApi";

export const store = configureStore({ // Хранилище на сервере 
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer, // Адрес с reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsApi.middleware)
})