// 🏗️ ⁡⁢⁣⁢FEATURE-SLICED DESIGN (FSD) - ШПАРГАЛКА⁡
// 🎯 ⁡⁢⁣⁣ОСНОВНЫЕ КОНЦЕПЦИИ ПРОСТЫМ ЯЗЫКОМ⁡
{
    // ☑️ ⁡⁣⁢⁢FSD - ЭТО АРХИТЕКТУРА ДЛЯ ФРОНТЕНД-ПРИЛОЖЕНИЙ, ГДЕ:⁡
    {
		// ✅ ⁡⁢⁢⁢Код организуется по бизнес-логике, а не по техническим деталям⁡
		// ✅ ⁡⁢⁢⁢Каждый кусок функциональности изолирован и независим⁡
		// ✅ ⁡⁢⁢⁢Четкие правила зависимостей между слоями⁡
	}
}
// 📁 ⁡⁢⁣⁣ОПТИМАЛЬНАЯ СТРУКТУРА ПРОЕКТА⁡
{
    // ⁡⁣⁣⁢src/⁡
    // ⁡⁣⁣⁢├── app/ ⁡                   ⁡⁢⁣⁣# Инициализация приложения⁡
    // ⁡⁣⁣⁢│   ├── styles/⁡            ⁡⁢⁣⁣# Глобальные стили⁡
    // ⁡⁣⁣⁢│   ├── store/ ⁡            ⁡⁢⁣⁣# Глобальный state (Redux, Zustand)⁡
    // ⁡⁣⁣⁢│   └── main.tsx⁡           ⁡⁢⁣⁣# Точка входа⁡
    // ⁡⁣⁣⁢├── pages/⁡                 ⁡⁢⁣⁣# Страницы приложения⁡
    // ⁡⁣⁣⁢│   ├── feed/⁡
    // ⁡⁣⁣⁢│   └── profile/⁡
    // ⁡⁣⁣⁢├── widgets/ ⁡              ⁡⁢⁣⁣# Самостоятельные блоки⁡
    // ⁡⁣⁣⁢│   ├── header/⁡
    // ⁡⁣⁣⁢│   └── sidebar/⁡
    // ⁡⁣⁣⁢├── features/ ⁡             ⁡⁢⁣⁣# Пользовательские фичи⁡
    // ⁡⁣⁣⁢│   ├── auth/⁡
    // ⁡⁣⁣⁢│   └── comments/⁡
    // ⁡⁣⁣⁢├── entities/⁡              ⁡⁢⁣⁣# Бизнес-сущности⁡
    // ⁡⁣⁣⁢│   ├── user/⁡
    // ⁡⁣⁣⁢│   └── post/⁡
    // ⁡⁣⁣⁢└── shared/⁡                ⁡⁢⁣⁣# Переиспользуемый код⁡
    //     ⁡⁣⁣⁢├── ui/⁡                ⁡⁢⁣⁣# UI компоненты⁡
    //     ⁡⁣⁣⁢├── lib/⁡               ⁡⁢⁣⁣# Утилиты, хелперы⁡
    //     ⁡⁣⁣⁢└── api/⁡               ⁡⁢⁣⁣# API клиенты⁡
}
// 🎪 ⁡⁢⁣⁣ДЛЯ ЧЕГО СЛУЖАТ СЛОИ⁡
{
	// ☑️ ⁡⁣⁢⁢app/⁡ ⁡⁣⁣⁢- Инициализация приложения⁡
	// ☑️ ⁡⁣⁢⁢pages/⁡ ⁡⁣⁣⁢- Композиция страниц⁡
	// ☑️ ⁡⁣⁢⁢widgets/⁡ ⁡⁣⁣⁡⁣⁣⁢- Крупные независимые блоки, например, header, footer, sidebar⁡
	// ☑️ ⁡⁣⁢⁢features/⁡ ⁡⁣⁣⁡⁣⁣⁢- Пользовательские сценарии, например автор, комментарий, кнопка создания⁡
	// ☑️ ⁡⁣⁢⁢entities/⁡ ⁡⁣⁣⁢- Бизнес-сущности, например, посты, пользователи, карточки⁡
	// ☑️ ⁡⁣⁢⁢shared/⁡ ⁡⁣⁣⁢- Переиспользуемый код, например, UI компоненты, утилиты, API клиенты⁡
}
// ➕ ⁡⁢⁣⁣КАК ДОБАВЛЯТЬ НОВЫЕ ФИЧИ⁡
{
	// ☑️ ⁡⁣⁢⁢Определяем слой⁡
	{
		// ❌ ⁡⁢⁣⁢ПЛОХО - создаем в неправильном месте⁡
		// ⁡⁣⁣⁢src/components/like-button.tsx  // Это фича, а не shared компонент!⁡
		// ✅ ⁡⁢⁢⁢ХОРОШО - создаем в правильном слое⁡
		// ⁡⁣⁣⁢src/features/like-post/         // Пользовательское действие⁡
	}
	// ☑️ ⁡⁣⁢⁢Создаем структуру фичи⁡
	{
		// ⁡⁣⁣⁢features/like-post/⁡
		// ⁡⁣⁣⁢├── index.ts⁡           // ⁡⁢⁣⁣Public API⁡
		// ⁡⁣⁣⁢├── model/⁡             // ⁡⁢⁣⁣Логика⁡
		// ⁡⁣⁣⁢│   ├── store.ts⁡       // ⁡⁢⁣⁣Состояние⁡
		// ⁡⁣⁣⁢│   └── events.ts ⁡     // ⁡⁢⁣⁣События⁡
		// ⁡⁣⁣⁢├── ui/ ⁡               // ⁡⁢⁣⁣Компоненты⁡
		// ⁡⁣⁣⁢│   └── like-button.tsx⁡
		// ⁡⁣⁣⁢└── lib/⁡               // ⁡⁢⁣⁣Локальные утилиты⁡
		//     ⁡⁣⁣⁢└── hooks.ts⁡
	}
	// ☑️ ⁡⁣⁢⁢Реализуем фичу⁡
	{
		// features/like-post/model/store.ts
		// export const $likes = createStore<Record<number, boolean>>({});
		// export const toggleLike = createEvent<number>();
		// $likes.on(toggleLike, (state, postId) => ({
		// ...state,
		// [postId]: !state[postId]
		// }));
		// - features/like-post/ui/like-button.tsx
		// export const LikeButton = ({ postId }: { postId: number }) => {
		// const isLiked = useStore($likes)[postId];
		//     return (
		//         <button
		//         onClick={() => toggleLike(postId)}
		//         className={isLiked ? 'liked' : ''}
		//         >
		//         ♥ {isLiked ? 'Liked' : 'Like'}
		//         </button>
		//     );
		// };
	}
    // ☑️ ⁡⁣⁢⁢Экспортируем через Public API⁡
    {
		// features/like-post/index.ts
		// export { LikeButton } from "./ui/like-button";
	}
}
// 🚫 ⁡⁢⁣⁣КАК ИЗБЕГАТЬ "ПРОТЕКАНИЯ" ФИЧ⁡
{
	// ☑️ ⁡⁣⁢⁢Строгое направление зависимостей⁡
	{
		// ✅ ⁡⁢⁢⁢РАЗРЕШЕНО⁡
		// ⁡⁣⁣⁢pages/    → widgets/ → features/ → entities/ → shared/⁡
		//         ⁡⁣⁣⁢↘                    ↘           ↘⁡
		//             ⁡⁣⁣⁢↘_____________________________↘⁡
		// ❌ ⁡⁢⁣⁢ЗАПРЕЩЕНО⁡
		// ⁡⁣⁣⁢shared/   → entities/⁡    // ⁡⁢⁣⁣shared не знает о бизнес-логике⁡
		// ⁡⁣⁣⁢entities/ → features/⁡    // ⁡⁢⁣⁣сущности не знают о фичах⁡
		// ⁡⁣⁣⁢features/ → widgets/⁡     // ⁡⁢⁣⁣фичи не знают о виджетах⁡
	}
	// ☑️ ⁡⁣⁢⁢Изолированные импорты⁡
	{
		// ❌ ⁡⁢⁣⁢ПЛОХО⁡ ⁡⁣⁣⁢- прямой импорт внутренностей⁡
		// import { LikeButton } from "features/like-post/ui/like-button";
		// import { $likes } from "features/like-post/model/store";
		// ✅ ⁡⁢⁢⁢ХОРОШО⁡ ⁡⁣⁣⁢- только через public API⁡
		// import { LikeButton } from "features/like-post";
	}
	// ☑️ ⁡⁣⁢⁢Инверсия зависимостей для взаимодействия⁡
	{
		// features/delete-post/model/store.ts
		// ❌ ⁡⁢⁣⁢ПЛОХО⁡ ⁡⁣⁣⁢- фича знает о другой фиче⁡
		// import { $posts } from 'entities/post/model/store';

		// ✅ ⁡⁢⁢⁢ХОРОШО⁡ ⁡⁣⁣⁢- используем события/колбэки⁡
		// export const deletePost = createEvent<number>();
		// В слое инициализации связываем
		sample({
			clock: deletePost,
			source: $posts,
			fn: (posts, postId) => posts.filter((p) => p.id !== postId),
			target: $posts,
		});
	}
    // ☑️ ⁡⁣⁢⁢TypeScript для контроля зависимостей⁡
    {
        // .eslintrc.json
        {
			// "rules": { 
			//     "import/no-restricted-paths": [
			//     "error",
			//     {
			//         "zones": [
			//         { "target": "./src/app", "from": "./src/entities" },
			//         { "target": "./src/app", "from": "./src/features" },
			//         { "target": "./src/shared", "from": "./src/entities" },
			//         { "target": "./src/entities", "from": "./src/features" }
			//         ]
			//     }
			//     ]
			// }
		}
    }
}
// 🛡️ ⁡⁢⁣⁣BEST PRACTICES(Лучшие практики)⁡
{
	// ☑️ ⁡⁣⁢⁢Четкие контракты между слоями⁡
	{
		// shared/api/posts.ts
		// export type Post = {
		// id: number;
		// title: string;
		// content: string;
		// authorId: number;
		// };
		// export const postsApi = {
		// getPosts: () => request<Post[]>('/posts'),
		// createPost: (data: CreatePostData) => request<Post>('/posts', { method: 'POST', data })
		// };
	}
	// ☑️ ⁡⁣⁢⁢Локальное состояние в фичах⁡
	{
		// features/search-posts/model/store.ts
		// export const $searchQuery = createStore('');
		// export const $searchResults = createStore<Post[]>([]);
		// ⁡⁢⁣⁢Не храним глобальное состояние в фичах!⁡
	}
    // ☑️ ⁡⁣⁢⁢Переиспользование через shared⁡
    {
        // ❌ ⁡⁢⁣⁢ПЛОХО⁡ ⁡⁣⁣⁢- дублирование⁡
        // features/auth/lib/validation.ts
        // features/profile/lib/validation.ts

        // ✅ ⁡⁢⁢⁢ХОРОШО⁡ ⁡⁣⁣⁢- выносим в shared⁡
        // shared/lib/validation.ts
        // export const validateEmail = (email: string) => {
        //  return email.includes('@');
        //}
    }
}
// 🔄 ⁡⁢⁣⁣ПРИМЕР ДОБАВЛЕНИЯ ФИЧИ "КОММЕНТАРИИ"⁡
{
    // ⁡⁣⁣⁢features/add-comment/⁡
    // ⁡⁣⁣⁢├── index.ts⁡
    // ⁡⁣⁣⁢├── model/⁡
    // ⁡⁣⁣⁢│   ├── store.ts⁡
    // ⁡⁣⁣⁢│   └── events.ts⁡
    // ⁡⁣⁣⁢├── ui/⁡
    // ⁡⁣⁣⁢│   ├── add-comment-form.tsx⁡
    // ⁡⁣⁣⁢│   └── comment-list.tsx⁡
    // ⁡⁣⁣⁢└── lib/⁡
    //     ⁡⁣⁣⁢└── hooks.ts⁡
    // ⁡⁣⁣⁢entities/comment/index.ts⁡
    // export type Comment = {
    // id: number;
    // postId: number;
    // text: string;
    // author: User;
    // };

    // ⁡⁣⁣⁢features/add-comment/ui/add-comment-form.tsx⁡
    // export const AddCommentForm = ({ postId }: { postId: number }) => {
    //      const [text, setText] = useState('');
    //      const { addComment } = useAddComment();
        
    //      return (
    //     <form onSubmit={(e) => {
    //     e.preventDefault();
    //     addComment({ postId, text });
    //     setText('');
    //     }}>
    //     <textarea value={text} onChange={e => setText(e.target.value)} />
    //     <Button type="submit">Добавить комментарий</Button>
    //     </form>
    //     ;
    // };
}
// 🎯 ⁡⁢⁣⁣КЛЮЧЕВЫЕ ПРИНЦИПЫ⁡
{
	// ⚡ ⁡⁣⁣⁢Одна ответственность - каждый слой отвечает за свою зону⁡
	// ⚡ ⁡⁣⁣⁢Изоляция - фичи не знают друг о друге⁡
	// ⚡ ⁡⁣⁣⁢Переиспользование - общий код в shared⁡
	// ⚡ ⁡⁣⁣⁢Масштабируемость - легко добавлять новые фичи⁡
	// ⚡ ⁡⁣⁣⁢Поддержка - понятная структура для новых разработчиков⁡
}