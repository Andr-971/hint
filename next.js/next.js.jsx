
//! УСТАНОВКА ФРЕЙВОРКА 
//* npm install react@latest react-dom@latest next@latest // В эту дирикторию по документации
//* npx create-next-app@latest . // в эту директорию
//* npx create-next-app@13.4 . // в эту директорию @версия
//* Отладка: NODE_OPTIONS='--inspect' npm run dev
//* SCSS плагин: npm add sass -D
//* src/styles/style.scss - создать папку styles

//? Пакеты npm:

    //* npm i -D style-loader css-loader loader-utils sass sass-loader postcss postcss-loader postcss-preset-env group-css-media-queries-loader ; 
    //* npm i -D @babel/core @babel/preset-env @squoosh/lib

// Используйте клиентские компоненты когда:
//     - необходимо использовать куки;
//     - когда необходимы обработчики событий на пользовательские действия;
//     - при использовании браузерных API;
//     - когда используется классовый компонент;
// Используйте серверные компоненты когда:
//     - Вы получаете данные через серверные API;
//     - когда нужен прямой доступ к ресурсам бекенда;
//     - когда используется sensetive информация (ключи API, токены и пр.);
//     - когда используются тяжёлые зависимости;

//! ЗАРЕЗЕРВИРОВАННЫЕ НАЗВАНИЯ ФАЙЛОВ ПАПОК И СЕРВЕРНЫХ КОМПОНЕНТОВ(ФУНКЦИЙ) НА СТРАНИЦЕ: ============
{
    // Страницы(папки) - name, динамические страницы(папки) - [name]
    // в папках файлы: page.tsx, layout.tsx, loading.tsx, error.tsx("use client")

    // Метаданные на простой странице: папка - name, page.tsx
    // import { Metadata } from "next";
    // export const metadata: Metadata = {
    //     title: "О нас | Контакты"
    // };

    // Метаданные на динамической странице: папка - [name], page.tsx
    // export async function generateMetadata({ params: { id } }: Props) {
    //     return {
    //         title: id,
    //     }
    // }

    // Показ загрузки страницы для пользователя loading.tsx
    // получение с сервера разметки, компонент будет серверный:
    // export default function LoadingPosts() {
    //     return <h1 className="h1">Загрузка...</h1>
    // }

    // Вывод ошибки на страницу для пользователя error.tsx
    "use client"; // Объявление, что этот компонент будет клиентский
    // export default function ErrorWrapper({ error }: { error: Error }) {
    //     return <h1 className="h1">Извините произошла ошибка: { error.message}</h1>
    // }

    //! ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА, КЕШИРОВАНИЕ 60 СЕКУНД
    // серверный компонент: 
    async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
        revalidate: 60,
        }
    })
    
    if (!response.ok) throw new Error("Не удалось получить пост");

    return response.json();
    }
}

//! ХУКИ NEXT-JS
{
    // теущий адрес в адресной строке
    // import { usePathname } from "next/navigation"

    // const pathname = usePathname();
}

//! РАБОТА НА СЕРВЕРЕ

import { headers, cookies } from "next/headers"; // Импорт заголовков, куков
import { redirect } from "next/navigation"; // Импорт redirect

// Получение заголовков, но не изменение get а не set
    const headerList = headers()
    const type = headerList.get("Content-Type") // "Application/json"
    // Работа с куками
    const cookiesList = cookies()
    const name = cookiesList.get("name")?.value
// Создать файл .env для констант 
MY_SECRET=12345;
// Вызвать
const API_KEY = process.env.MY_SECRET; // 12345

// ОТПРАВКА ДАННЫХ НА СЕРВЕР И ПОЛУЧЕНИЕ ОТВЕТА

'use client'
import { useState } from 'react'

export default function Home() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const submitData = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ // Отправка объекта
                title: title,
                body: body,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        response = await response.json() // Получение объекта
        // alert(JSON.stringify(response))
        // JSON.stringify(response); Приведения в строку
        let pageNum = JSON.stringify(response);
        console.log(pageNum);
    }
    return (
        <>
            <h2 className="h2">Отправка данных на серверное api</h2>
            <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Ввести заголовок"
            />
            <input
                type='text'
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder='Ввести тект'
            />
            <button onClick={submitData}>Submit</button>
        </>
    )
}

// ПОЛУЧЕНИЕ ДАННЫХ НА СЕРВЕРЕ
// Отправка GET json на клиента
export async function GET(req) {
    const { searchParams } = new URL(req.url); // Получение url из запроса

    const query = searchParams.get("s"); // Определить get параметр ?s=
    // query - ?s=тело get запроса
    // Отфильтровка объектов по id
    let currentStocksBlock = stocksBlock;
    if (query) {
        currentStocksBlock = stocksBlock.filter((stock) =>
            stock.id.toLowerCase().includes(query.toLowerCase()),
        );
    }
    return NextResponse.json(currentStocksBlock);
}
// Отправка POST json на клиента
export async function POST(req) {
    const body = await req.json();
    console.log(body); // получение запроса c клиента {объект}
    return NextResponse.json({ body }); // отправка ответа
}