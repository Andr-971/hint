
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { renderToStaticMarkup } from "react-dom/server";


export const goodsApi = createApi({
    reducerPath: "goodsApi", // Ключ reducer
    tagTypes: "Products", // С каким тегом работаем
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }), // Базовый запрос
    endpoints: (build) => ({
        // Создание хука
        getGoods: build.query({ // Запрос для получения списка
            query: (limit) => {
                return `goods?${limit && `_limit=${limit}`}`;
            }, // name json []
            providesTags: (result) => result // Описание тега с каким работаем
            ? [
                ...result.map(({ id }) => ({ type: "Products", id })),
                { type: "Products", id: "LIST"}, // Лист
                ]
            : [{type: "Products", id: "LIST"}] // Лист
        }),
        addProduct: build.mutation({ // Запрос для добавления в список
            query: (body) => {
                return ({
                    url: `goods`,
                    method: "POST",
                    body,
                })
            },
            invalidatesTags: [{type: "Products", id: "LIST"}] // После мутации обновить тег с которым работаем
        }),
        deleteProduct: build.mutation({
            query: (id) => {
                return ({
                    url: `goods/${id}`,
                    method: "DELETE",
                })
            },
            invalidatesTags: [{type: "Products", id: "LIST"}] // После мутации обновить тег с которым работаем
        })
    }),
});
export const { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } = goodsApi; // Формируется хук из use getGoods query для запроса по адресу
//"http://localhost:3001/" и "/goods"
// `goods?${limit && `_limit=${limit}`}`
// и хук use addProduct mutation по тому же адресу