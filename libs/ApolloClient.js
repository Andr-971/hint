
// ⁡⁣⁣⁢Apollo Client — это комплексная библиотека для управления данными в JavaScript-приложениях, ориентированная на работу с GraphQL. Она предоставляет инструменты для выполнения запросов, управления кэшем, обработки ошибок и интеграции с UI-библиотеками (React, Vue, Angular и др.). Apollo Client особенно популярен в экосистеме React.⁡
// ⁡⁢⁣⁣ОСНОВНЫЕ ВОЗМОЖНОСТИ⁡
{
	// ⁡⁣⁣⁢- Запросы данных через GraphQL (GET-аналоги).⁡
	// ⁡⁣⁣⁢- Мутации для изменения данных (POST/PUT/DELETE-аналоги).⁡
	// ⁡⁣⁣⁢- Подписки на реальные обновления (WebSocket).⁡
	// ⁡⁣⁣⁢- Кэширование данных с автоматической нормализацией.⁡
	// ⁡⁣⁣⁢- Локальное состояние (управление клиентским состоянием через GraphQL).⁡
	// ⁡⁣⁣⁢- Интеграция с React через хуки (useQuery, useMutation).⁡
	// ⁡⁣⁣⁢- Оптимистичные обновления (UI реагирует на изменения до ответа сервера).⁡
	// ⁡⁣⁣⁢- Пагинация и предзагрузка данных.⁡
	// ⁡⁣⁣⁢- DevTools для отладки.⁡
}
// ⁡⁢⁣⁣ПРИНЦИПЫ РАБОТЫ⁡
{
	// ⁡⁣⁢⁢1. АРХИТЕКТУРА⁡
	{
		// ⁡⁣⁣⁢- Apollo Client действует как прослойка между приложением и GraphQL-сервером⁡
		// UI → Apollo Client → GraphQL Server
		//   ↑
		// Кэш
	}
	// ⁡⁣⁢⁢2. НОРМАЛИЗАЦИЯ КЭША⁡
	{
		// ⁡⁣⁣⁢- Данные хранятся в форме нормализованной таблицы (как в Redux).⁡
		// ⁡⁣⁣⁢- Каждый объект сохраняется по уникальному __typename + id.⁡
		// ⁡⁣⁣⁢- Пример⁡
		// query GetBooks {
		//     books {
		//         id
		//         title
		//         author {
		//             id
		//             name
		//         }
		//     }
		// }
		// ⁡⁣⁣⁢В кэше будет храниться⁡
		// ⁡⁢⁢⁢-- Book:1 → { id: 1, title: "...", author: Author:1 }⁡
		// ⁡⁢⁢⁢-- Author:1 → { id: 1, name: "..." }⁡
	}
	// ⁡⁣⁢⁢3. ЗАПРОСЫ⁡
	{
		// ⁡⁣⁣⁢- При выполнении запроса Apollo Client сначала проверяет кэш.⁡
		// ⁡⁣⁣⁢- Если все данные есть в кэше — возвращает их мгновенно (без сетевого запроса).⁡
		// ⁡⁣⁣⁢- Если данных нет — выполняет запрос к серверу и обновляет кэш.⁡
	}
    // ⁡⁣⁢⁢4. МУТАЦИИ⁡
    {
		// ⁡⁣⁣⁢- После мутации Apollo автоматически обновляет связанные данные в кэше.⁡
		// ⁡⁣⁣⁢- Можно задать оптимистичный ответ для мгновенного обновления UI.⁡
	}
}
// ⁡⁢⁣⁣ПРИМЕНЕНИЕ В REACT-ПРИЛОЖЕНИИ⁡
{
	// ⁡⁣⁢⁢1. УСТАНОВКА⁡
	{
		// npm install @apollo/client graphql
	}
	// ⁡⁣⁢⁢2. НАСТРОЙКА КЛИЕНТА⁡
	{
		// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
		const client = new ApolloClient({
			uri: "https://api.example.com/graphql",
			cache: new InMemoryCache(),
		});
		// Оберните приложение в ApolloProvider
		function App() {
			return (
				<ApolloProvider client={client}>
					<MyComponent />
				</ApolloProvider>
			);
		}
	}
	// ⁡⁣⁢⁢3. ВЫПОЛНЕНИЕ ЗАПРОСА (USEQUERY)⁡
	{
		// import { useQuery, gql } from "@apollo/client";
		const GET_BOOKS = gql`
			query GetBooks {
				books {
					id
					title
				}
			}
		`;
		function BookList() {
			const { loading, error, data } = useQuery(GET_BOOKS);

			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error: {error.message}</p>;

			return (
				<ul>
					{data.books.map((book) => (
						<li key={book.id}>{book.title}</li>
					))}
				</ul>
			);
		}
	}
	// ⁡⁣⁢⁢4. МУТАЦИЯ (USEMUTATION)⁡
	{
		// import { useMutation, gql } from "@apollo/client";
		const ADD_BOOK = gql`
			mutation AddBook($title: String!, $author: String!) {
				addBook(title: $title, author: $author) {
					id
					title
				}
			}
		`;
		function AddBookForm() {
			const [addBook, { data, loading, error }] = useMutation(ADD_BOOK);
			const [title, setTitle] = useState("");
			const [author, setAuthor] = useState("");

			const handleSubmit = (e) => {
				e.preventDefault();
				addBook({ variables: { title, author } });
			};
			return (
				<form onSubmit={handleSubmit}>
					<input value={title} onChange={(e) => setTitle(e.target.value)} />
					<input value={author} onChange={(e) => setAuthor(e.target.value)} />
					<button type="submit">Add Book</button>
				</form>
			);
		}
	}
    // ⁡⁣⁢⁢5. ОПТИМИСТИЧНОЕ ОБНОВЛЕНИЕ⁡
    {
        addBook({
			variables: { title, author },
			optimisticResponse: {
				__typename: "Mutation",
				addBook: {
					__typename: "Book",
					id: Date.now(), // Временный ID
					title,
					author,
				},
			},
			update(cache, { data: { addBook } }) {
				cache.modify({
					fields: {
						books(existingBooks = []) {
							return [...existingBooks, addBook];
						},
					},
				});
			},
		});
    }
}
// ⁡⁢⁣⁣РАСШИРЕННЫЕ ФУНКЦИИ⁡
{
	// ⁡⁣⁢⁢1. ЛОКАЛЬНОЕ СОСТОЯНИЕ⁡
	{
		// ⁡⁣⁣⁢- Управление клиентским состоянием через GraphQL⁡
		const GET_VISIBILITY = gql`
			query GetVisibility {
				visibilityFilter @client
			}
		`;
		const SET_VISIBILITY = gql`
			mutation SetVisibility($filter: String!) {
				setVisibility(filter: $filter) @client
			}
		`;
		// В настройках клиента:
		const client = new ApolloClient({
			resolvers: {
				Mutation: {
					setVisibility: (_, { filter }, { cache }) => {
						cache.writeQuery({
							query: GET_VISIBILITY,
							data: { visibilityFilter: filter },
						});
						return null;
					},
				},
			},
		});
	}
	// ⁡⁣⁢⁢2. ПАГИНАЦИЯ⁡
	{
		const FEED_QUERY = gql`
			query Feed($offset: Int!, $limit: Int!) {
				feed(offset: $offset, limit: $limit) {
					id
					title
				}
			}
		`;
		const { data, fetchMore } = useQuery(FEED_QUERY, {
			variables: { offset: 0, limit: 10 },
		});
		const loadMore = () => {
			fetchMore({
				variables: {
					offset: data.feed.length,
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					return {
						feed: [...prev.feed, ...fetchMoreResult.feed],
					};
				},
			});
		};
	}
    // ⁡⁣⁢⁢3. ПОДПИСКИ (WEBSOCKET)⁡
    {
        // import { split, HttpLink, ApolloClient } from "@apollo/client";
		// import { getMainDefinition } from "@apollo/client/utilities";
		// import { WebSocketLink } from "@apollo/client/link/ws";

		const httpLink = new HttpLink({ uri: "http://api.example.com/graphql" });
		const wsLink = new WebSocketLink({
			uri: "ws://api.example.com/graphql",
			options: { reconnect: true },
		});
		const splitLink = split(
			({ query }) => {
				const definition = getMainDefinition(query);
				return (
					definition.kind === "OperationDefinition" &&
					definition.operation === "subscription"
				);
			},
			wsLink,
			httpLink,
		);
		const client = new ApolloClient({ link: splitLink, cache: new InMemoryCache() });
    }
}
// ⁡⁢⁣⁣ПРЕИМУЩЕСТВА APOLLO CLIENT⁡
{
	// ⁡⁣⁣⁢- Универсальность: Работает с любым GraphQL-сервером.⁡
	// ⁡⁣⁣⁢- Производительность: Интеллектуальное кэширование сокращает количество запросов.⁡
	// ⁡⁣⁣⁢- Интеграция с React: Нативные хуки и HOC.⁡
	// ⁡⁣⁣⁢- Экосистема: DevTools, Apollo Studio для мониторинга.⁡
	// ⁡⁣⁣⁢- TypeScript: Полная поддержка типов.⁡
}
// ⁡⁢⁣⁣КОГДА ИСПОЛЬЗОВАТЬ APOLLO CLIENT?⁡
{
	// ⁡⁣⁣⁢- При работе с GraphQL-API⁡
	// ⁡⁣⁣⁢- Для сложных приложений с частыми обновлениями данных⁡
	// ⁡⁣⁣⁢- Когда нужно централизованное управление состоянием⁡
	// ⁡⁣⁣⁢- Для реальных обновлений через подписки⁡
	// ⁡⁣⁣⁢- В больших проектах с необходимостью оптимизации запросов⁡
	// ⁡⁢⁣⁣Apollo Client существенно упрощает работу с GraphQL, предоставляя готовые решения для большинства задач управления данными в современном веб-приложении.⁡
}