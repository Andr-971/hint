
//! УСТАНОВКА
//* npm i next-auth
//* В корне создаём папку /configs/auth.tsx

// import type { AuthOptions } from "next-auth";
// import YandexProvider from "next-auth/providers/yandex"
// import GoogleProvider from "next-auth/providers/gitlab"

// export const authConfig: AuthOptions = {
//     providers: [
        // GoogleProvider({
        //     clientId: "",
        //     clientSecret: "",
        // }),
//         YandexProvider({
//             clientId: process.env.YANDEX_CLIENT_ID!, || ключ в .env.local
//             clientSecret: process.env.YANDEX_SECRET!, || ключ в .env.local
//         }),
//     ],
// };
//* в папке src/app/api/auth/[...nextauth]/route.tsx

import NextAuth from "next-auth/next";
import { authConfig } from "../../../../../configs/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

// TODO /api/auth/signin - адрес авторизации signin - это [...nextauth]/route.tsx
// TODO http://localhost:3000/api/auth/callback/yandex для ключа и секрета

//* Для клиентских компонентов в папке src/app/components/Providers.tsx
"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";

const Providers = ({ children }) => {
const session = useSession();
console.log(session);
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
        </>
    );
}
//* в папке src/app/layout.tsx
import Providers from "@/components/Providers";
//* Обернуть
return (
    <html lang="ru">
        <body>
            <Providers>
                <div className="wrapper">
                    <Header />
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            </Providers>
        </body>
    </html>
);
//* Разлогиниься
<li
    className="header__user-item header__user-item_last"
    onClick={() =>
        signOut({
            callbackUrl: "/", // переадресация на главную
        })
    }
>
    Выйти
</li>;

export default Providers;
//* Для серверных компонентов 
import { authConfig } from "@/configs/auth"
import {getServerSession} from "next-auth/next"

const sessions = await getServerSession(authConfig); // Получение объекта
console.log(sessions);


