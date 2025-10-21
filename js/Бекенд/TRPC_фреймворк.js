// ! TRPC(TypeScript Remote Procedure Call) - ШПАРГАЛКА ДЛЯ СОБЕСЕДОВАНИЯ
{
	// 🔳 ⁡⁢⁣⁣ОСНОВНОЕ ОПРЕДЕЛЕНИЕ⁡
	{
		// ⭐ ⁡⁣⁣⁢TRPC(TypeScript Remote Procedure Call) - это фреймворк(библиотека) для создания полностью типобезопасных API между клиентом и сервером в TypeScript-приложениях. Позволяет вызывать серверные функции напрямую с клиента с автоматическим выводом типов.⁡
	}
	// 🔳 ⁡⁢⁣⁣КОНЦЕПЦИЯ⁡
	{
		// ⭐ ⁡⁣⁣⁢End-to-end type safety(это подход, который обеспечивает согласованность типов на всех уровнях приложения, от базы данных до клиента.) - типы автоматически передаются от сервера к клиенту⁡
		// ⭐ ⁡⁣⁣⁡⁣⁣⁢Нет необходимости в генерации кода или Swagger-схемах(набор правил и стандартов для описания API)⁡
		// ⭐ ⁡⁣⁣⁢Протокол-агностик - работает поверх HTTP, WebSockets и др.⁡
		// ⭐ ⁡⁣⁣⁢Минимальный бойлерплейт(это набор инструментов) - просто экспортируйте функции⁡
	}
	// 🔳 ⁡⁢⁣⁣ДЛЯ ЧЕГО ИСПОЛЬЗОВАТЬ⁡
	{
		// ⭐ ⁡⁣⁣⁢Full-stack TypeScript приложения⁡
		// ⭐ ⁡⁣⁣⁢Когда нужна типобезопасность между клиентом и сервером⁡
		// ⭐ ⁡⁣⁣⁢Для замены REST/GraphQL с меньшей сложностью⁡
		// ⭐ ⁡⁣⁣⁢Проекты с Next.js, React, Vue и другими фронтенд-фреймворками⁡
	}
	// 🔳 ⁡⁢⁣⁣КАК ИСПОЛЬЗОВАТЬ⁡
	{
		// ☑️ ⁡⁣⁢⁢Установка⁡
		{
			// npm install @trpc/server @trpc/client
		}
		// ☑️ ⁡⁣⁢⁢Серверная часть⁡
		{
			// server.ts
			// import { initTRPC } from '@trpc/server';
			const t = initTRPC.create();
			// export const appRouter = t.router({
			// getUser: t.procedure
			//     .input((val: unknown) => {
			//     if (typeof val === 'string') return val;
			//     throw new Error('Invalid input');
			//     })
			//     .query(({ input }) => {
			//     return { id: input, name: 'John Doe' };
			//     }),
			// createUser: t.procedure
			//     .input(z.object({ name: z.string() })) // с Zod валидацией
			//     .mutation(({ input }) => {
			//     return { id: 1, name: input.name };
			//     }),
			// });

			// export type AppRouter = typeof appRouter;
		}
		// ☑️ ⁡⁣⁢⁢Клиентская часть⁡
		{
			// client.ts
			// import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
			// import type { AppRouter } from './server';
			// const trpc = createTRPCProxyClient<AppRouter>({
			// links: [
			//     httpBatchLink({
			//     url: 'http://localhost:3000/trpc',
			//     }),
			// ],
			// });
			// Использование с полной типобезопасностью
			// const user = await trpc.getUser.query('123');
			// const newUser = await trpc.createUser.mutate({ name: 'Jane' });
		}
		// ☑️ ⁡⁣⁢⁢Интеграция с Next.js⁡
		{
			// pages/api/trpc/[trpc].ts
			// import { createNextApiHandler } from "@trpc/server/adapters/next";
			// import { appRouter } from "../../../server";
			// export default createNextApiHandler({
			// 	router: appRouter,
			// 	createContext: () => ({}),
			// });
		}
	}
	// 🔳 ⁡⁢⁣⁣КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА⁡
	{
		// 🚀 ⁡⁣⁣⁢Автоматическая типобезопасность⁡
		// ⚡ ⁡⁣⁣⁢Отличная производительность⁡
		// 🔄 ⁡⁣⁣⁢Реактивность через подписки⁡
		// ⁡⁣⁣⁢🛠 Простота разработки⁡
		// 📦 ⁡⁣⁣⁡⁣⁣⁢Tree-shakeable(это возможность уменьшения размера пакета)⁡
	}
	// 🔳 ⁡⁢⁣⁣ИСТОРИЯ⁡
	{
		// ⭐ ⁡⁣⁣⁢Создан в 2020 году KATT (разработчик из Швеции)⁡
		// ⭐ ⁡⁣⁣⁢Изначально разработан для внутренних нужд⁡
		// ⭐ ⁡⁣⁣⁢Быстро набрал популярность в TypeScript-сообществе⁡
		// ⭐ ⁡⁣⁣⁢Стал стандартом де-факто для типобезопасных API в Next.js⁡
	}
	// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ КОНЦЕПЦИИ⁡
	{
		// ⭐ ⁡⁣⁣⁢Procedures - методы API (query, mutation, subscription)⁡
		// ⭐ ⁡⁣⁣⁢Routers - группировка procedures⁡
		// ⭐ ⁡⁣⁣⁢Context - данные, доступные во всех procedures⁡
		// ⭐ ⁡⁣⁣⁢Middleware - перехватчики для логики⁡
		// ⭐ ⁡⁣⁣⁢Validation - runtime-валидация через Zod/Yup⁡
	}
	// 🔳 ⁡⁢⁣⁣КОГДА НЕ ИСПОЛЬЗОВАТЬ⁡
	{
		// ⭐ ⁡⁣⁣⁢В гетерогенных стеках (разные языки)⁡
		// ⭐ ⁡⁣⁣⁢Для публичных API (лучше REST/GraphQL)⁡
		// ⭐ ⁡⁣⁣⁢Когда нужна строгая спецификация OpenAPI⁡
	}
    // 🔳 ⁡⁢⁣⁣ИТОГ ДЛЯ СОБЕСЕДОВАНИЯ⁡
    {
		// ⭐ ⁡⁣⁣⁢"TRPC - это современный подход к созданию типобезопасных API, который устраняет разрыв между клиентом и сервером в TypeScript-приложениях, предоставляя end-to-end типизацию без необходимости в кодогенерации или ручном описании типов."⁡
	}
}