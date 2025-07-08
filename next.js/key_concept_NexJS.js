
//! ДЕПЛОЙ ПРИЛОЖЕНИЯ: ОПИСАНИЕ, ПРОЦЕСС И КОНФИГУРАЦИЯ
{
	// ⭐  ⁡⁣⁣⁢Деплой приложения - это процесс развертывания и настройки веб-приложения на сервере или облачной платформе, чтобы оно стало доступным для пользователей в интернете. Этот процесс включает в себя несколько этапов, таких как сборка приложения, настройка окружения, загрузка файлов на сервер и конфигурация домена.⁡
	// ⭐ ⁡⁣⁣⁢Важно правильно настроить деплой, чтобы обеспечить безопасность, производительность и надежность приложения.⁡
	// ⭐ ⁡⁣⁣⁢Процесс деплоя приложения может включать следующие шаги:⁡
	// ⚡ ⁡⁢⁣⁣Сборка приложения: компиляция кода и создание оптимизированной версии приложения.⁡
	// ⚡ ⁡⁢⁣⁣Настройка окружения: установка необходимых зависимостей и конфигурация переменных окружения.⁡
	// ⚡ ⁡⁢⁣⁣Загрузка файлов: перенос собранных файлов на сервер или облачную платформу.⁡
	// ⚡ ⁡⁢⁣⁣Настройка домена: привязка доменного имени к IP-адресу сервера.⁡
	// ⚡ ⁡⁢⁣⁣Тестирование: проверка работоспособности приложения после деплоя.⁡
	// ⭐ ⁡⁣⁣⁢Конфигурация деплоя может включать:⁡
	// 🔹 ⁡⁣⁢⁢Выбор сервера или облачной платформы (например, AWS, Heroku, Vercel).⁡
	// 🔹 ⁡⁣⁢⁢Настройка CI/CD (непрерывной интеграции и доставки) для автоматизации процесса деплоя.⁡
	// 🔹 ⁡⁣⁢⁢Настройка мониторинга и логирования для отслеживания состояния приложения.⁡
    // ⭐ ⁡⁣⁣⁢Пример файла конфигурации CI/CD для GitHub Actions с подробными комментариями для каждой ключевой секции:⁡
    {
        // ```yaml
        // ⁡⁣⁣⁢# Название workflow (произвольное имя)⁡
        // name: Node.js CI/CD Pipeline
        // ⁡⁣⁣⁢# Условия запуска workflow⁡
        // on:
        // ⁡⁣⁣⁢# Триггер при пуше в ветку main⁡
        // push:
        //     branches: [ "main" ]
        // ⁡⁣⁣⁢# Триггер при создании pull request в main⁡
        // pull_request:
        //     branches: [ "main" ]
        // ⁡⁣⁣⁢# Ручной запуск из интерфейса GitHub⁡
        // workflow_dispatch:
        // ⁡⁣⁣⁢# Переменные среды (можно переопределять в секретах)⁡
        // env:
        // NODE_VERSION: 16.17.0    ⁡⁣⁣⁢# Версия Node.js⁡
        // DOCKER_IMAGE: ghcr.io/${{ github.repository }} # Docker image name
        // ⁡⁣⁣⁢# Секция jobs (набор выполняемых задач)⁡
        // jobs:
        // ⁡⁣⁣⁢# Job: Сборка и тестирование⁡
        // build-and-test:
        // ⁡⁣⁣⁢# Запуск на последней Ubuntu версии⁡
        // runs-on: ubuntu-latest
        // ⁡⁣⁣⁢# Шаги выполнения job⁡
        // steps:
        // ⁡⁣⁣⁢# Шаг 1: Checkout кода из репозитория⁡
        // - name: Checkout code
        // uses: actions/checkout@v3
        // ⁡⁣⁣⁢# Шаг 2: Установка Node.js с кэшированием⁡
        // - name: Setup Node.js
        // uses: actions/setup-node@v3
        // with:
        //     node-version: ${{ env.NODE_VERSION }}
        //     cache: 'npm'  ⁡⁣⁣⁢# Кэширование node_modules⁡
        // ⁡⁣⁣⁢# Шаг 3: Установка зависимостей⁡
        // - name: Install dependencies
        // run: npm ci  ⁡⁣⁣⁢# "Clean install" для точного соответствия package-lock.json⁡
        // ⁡⁣⁣⁢# Шаг 4: Запуск линтера⁡
        // - name: Run Linter
        // run: npm run lint
        // ⁡⁣⁣⁢# Шаг 5: Запуск тестов⁡
        // - name: Run Tests
        // run: npm test
        // ⁡⁣⁣⁢# Job: Сборка Docker образа⁡
        // docker-build:
        // ⁡⁣⁣⁢# Зависит от успешного выполнения предыдущего job⁡
        // needs: build-and-test
        // runs-on: ubuntu-latest
        // steps:
        // - name: Checkout code
        // uses: actions/checkout@v3
        // ⁡⁣⁣⁢# Шаг: Логин в GitHub Container Registry⁡
        // - name: Login to GitHub Container Registry
        // uses: docker/login-action@v2
        // with:
        //     registry: ghcr.io
        //     username: ${{ github.actor }}
        //     password: ${{ secrets.GITHUB_TOKEN }}
        // ⁡⁣⁣⁢# Шаг: Сборка и публикация Docker образа⁡
        // - name: Build and Push Docker Image
        // uses: docker/build-push-action@v4
        // with:
        //     context: .
        //     push: true
        //     tags: |
        //     ${{ env.DOCKER_IMAGE }}:latest
        //     ${{ env.DOCKER_IMAGE }}:${{ github.sha }}
        // ⁡⁣⁣⁢# Job: Деплой в production⁡
        // deploy-production:
        // needs: docker-build
        // runs-on: ubuntu-latest
        // ⁡⁣⁣⁢# Условие выполнения (только для ветки main)⁡
        // if: github.ref == 'refs/heads/main'
        // steps:
        // - name: Checkout code
        // uses: actions/checkout@v3
        // ⁡⁣⁣⁢# Шаг: Деплой через SSH (пример для Kubernetes)⁡
        // - name: Deploy to Production
        // uses: appleboy/ssh-action@v1
        // with:
        //     host: ${{ secrets.PRODUCTION_HOST }}
        //     username: ${{ secrets.SSH_USER }}
        //     key: ${{ secrets.SSH_PRIVATE_KEY }}
        //     script: |
        //     kubectl set image deployment/myapp \
        //     myapp=${{ env.DOCKER_IMAGE }}:${{ github.sha }}
    }
}
//! ОСНОВНЫЕ ПРИНЦИПЫ РАЗРАБОТКИ В NEXT.JS
{
	// 🔳 ⁡⁢⁣⁣РЕНДЕРИНГ НА СТОРОНЕ СЕРВЕРА (SSR) И СТАТИЧЕСКАЯ ГЕНЕРАЦИЯ (SSG)⁡
	{
		// 🔹 ⁡⁣⁢⁢SSR(Server Side Rendering): Страницы генерируются на сервере при каждом запросе (getServerSideProps(context)).⁡
		{
			// ✅ ⁡⁢⁢⁢getServerSideProps - это функция в Next.js, которая позволяет выполнять серверный рендеринг страницы при каждом запросе. Вот примеры использования⁡
			{
				// export
				async function getServerSideProps(context) {
					// Получаем параметры из URL
					const { params } = context;
					const { id } = params;

					// Запрашиваем данные с API или базы данных
					const res = await fetch(`https://api.example.com/posts/${id}`);
					const data = await res.json();

					// Возвращаем данные как props
					return {
						props: {
							data,
						},
					};
				}
			}
		}
		// 🔹 ⁡⁣⁢⁢SSG(Static Site Generator): Страницы генерируются на этапе сборки (getStaticProps). Идеально для контента, не требующего частых обновлений.⁡
		{
			// ✅ ⁡⁢⁢⁢getStaticProps — функция для статической генерации страниц в Next.js. Страницы рендерятся на этапе сборки (npm run build), а результат кешируется и переиспользуется. Идеально для контента, который редко меняется.⁡
			{
				// export
				async function getStaticProps() {
					// Получаем данные при сборке (build time)
					const res = await fetch("https://api.example.com/posts");
					const posts = await res.json();
					return {
						props: { posts }, // данные передаются в компонент как пропсы
						revalidate: 60, // ISR: страница обновляется каждые 60 секунд
					};
				}
			}
		}
		// 🔹 ⁡⁣⁢⁢ISR (Incremental Static Regeneration): Обновление статических страниц после сборки через заданные интервалы (revalidate в getStaticProps).⁡
	}
	// 🔳 ⁡⁢⁣⁣КЛИЕНТСКИЙ РЕНДЕРИНГ (CSR)⁡
	{
		// 🔹 ⁡⁢⁢⁡⁣⁢⁢Для динамических компонентов без SSR используйте useEffect и useState для загрузки данных на клиенте.⁡
	}
	// 🔳 ⁡⁢⁣⁣ФАЙЛОВАЯ МАРШРУТИЗАЦИЯ⁡
	{
		// 🔹 ⁡⁣⁢⁢Автоматическая маршрутизация на основе структуры папок pages/ или app/ (в Next.js 13+).⁡
	}
	// 🔳 ⁡⁢⁣⁣КОМПОНЕНТЫ СЕРВЕРА И КЛИЕНТА⁡
	{
		// 🔹 ⁡⁣⁢⁢Серверные компоненты (RSC): По умолчанию в app/ (Next.js 13+). Не имеют клиентского бандла.⁡
		// 🔹 ⁡⁣⁢⁢Клиентские компоненты: Помечаются директивой 'use client' для интерактивности.⁡
	}
    // 🔳 ⁡⁢⁣⁣КЛЮЧЕВЫЕ ХУКИ NEXT.JS⁡
    {
		// 🔹 ⁡⁣⁢⁢useRouter Навигация и работа с URL.⁡
		{
			const router = useRouter();
			router.push("/dashboard");
		}
		// 🔹 ⁡⁣⁢⁢usePathname (Next.js 13+) Получение текущего пути.⁡
		{
			const pathname = usePathname();
		}
        // 🔹 ⁡⁣⁢⁢useSearchParams (Next.js 13+) Чтение/обновление параметров строки запроса.⁡
        {
            const [params, setParams] = useSearchParams();
			params.get("query");
        }
		// 🔹
	}
	// 🔳
}