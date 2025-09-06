
//! ПОДКЛЮЧЕНИЕ СЕБЯ К СВОЕМУ АККАУНТУ GITHUB
{
	// 🔳 ⁡⁢⁣⁣ГЕНЕРАЦИЯ ОТДЕЛЬНЫХ SSH-КЛЮЧЕЙ ДЛЯ КАЖДОГО АККАУНТА⁡
	{
		// bash
		// ⁡⁢⁢⁢# Для первого аккаунта⁡
		// ssh-keygen -t ed25519 -C "andrei.ryabov2020@gmail.com" -f ~/.ssh/id_ed25519_Andr-971
		// ⁡⁢⁢⁢# Для второго аккаунта⁡
		// ssh-keygen -t ed25519 -C "andrei.ryabov2020@gmail.com" -f ~/.ssh/id_ed25519_Andr-137
		// 🔹 ⁡⁣⁢⁢Замените email1@example.com и email2@example.com на email ваших аккаунтов GitHub⁡
		// 🔹 ⁡⁣⁢⁢При запросе пароля нажмите Enter (оставьте пустым).⁡
	}
	// 🔳 ⁡⁢⁣⁣ДОБАВЛЕНИЕ SSH-КЛЮЧЕЙ В АГЕНТ SSH⁡
	{
		// bash
		// ⁡⁢⁢⁢# Запустите ssh-agent⁡
		// eval $(ssh-agent -s)
		// ⁡⁢⁢⁢# Добавьте ключи⁡
		// ssh-add ~/.ssh/id_ed25519_Andr-971
		// ssh-add ~/.ssh/id_ed25519_Andr-137
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА ФАЙЛА ~/.ssh/config⁡
	{
		// 🔹 ⁡⁣⁢⁢Путь⁡ C:\Program Files\Git\etc\ssh
		// config
		// # Первый аккаунт
		// Host github.com-Andr-971
		// HostName github.com
		// User git
		// IdentityFile ~/.ssh/id_ed25519_Andr-971
		// # Второй аккаунт
		// Host github.com-Andr-137
		// HostName github.com
		// User git
		// IdentityFile ~/.ssh/id_ed25519_Andr-971
	}
	// 🔳 ⁡⁢⁣⁣ДОБАВЛЕНИЕ ПУБЛИЧНЫХ КЛЮЧЕЙ В GITHUB⁡
	{
		// 🔹 ⁡⁣⁢⁢Скопируйте содержимое ключей⁡
		{
			// bash
			// cat ~/.ssh/id_ed25519_Andr-971.pub
			// cat ~/.ssh/id_ed25519_Andr-137.pub
		}
		// 🔹 ⁡⁣⁢⁢Для каждого аккаунта GitHub⁡
		{
			// ☑️ Settings → SSH and GPG keys → New SSH Key
			// ☑️ Вставьте содержимое .pub-файла.
		}
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА РЕПОЗИТОРИЕВ⁡
	{
		// 🔹 ⁡⁣⁢⁢При клонировании⁡
		{
			// bash
			// ⁡⁢⁢⁢# Для первого аккаунта⁡
			// git clone git@github.com-account1:username1/repo.git
			// ⁡⁢⁢⁢# Для второго аккаунта⁡
			// git clone git@github.com-account2:username2/repo.git
		}
		// 🔹 ⁡⁣⁢⁢Для существующих репозиториев⁡
		{
			// bash
			// cd /path/to/repo
			// git remote set-url origin git@github.com-Andr-971:Andr-971/hint.git
			// git remote set-url origin git@github.com-Andr-137:Andr-137/hint.git
		}
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА ЛОКАЛЬНЫХ GIT-КОНФИГОВ (ВАЖНО!)⁡
	{
		// 🔹 ⁡⁣⁢⁢Для каждого репозитория задайте свой email и имя⁡
		{
			// bash
			// ⁡⁢⁢⁢# Для репозиториев первого аккаунта⁡
			// cd /path/to/Andr-971
			// git config user.email "andrei.ryabov2020@gmail.com"
			// git config user.name "Andr-971"
			// ⁡⁢⁢⁢# Для репозиториев второго аккаунта⁡
			// cd /path/to/Andr-137
			// git config user.email "andrei.ryabov2020@gmail.com"
			// git config user.name "Andr-137"
		}
	}
	// 🔳 ⁡⁢⁣⁣ПРОВЕРКА ПОДКЛЮЧЕНИЯ⁡
	{
		// bash
		// ssh -T git@github.com-Andr-971
		// ssh -T git@github.com-Andr-137
		// # Должно вернуть: Hi Andr-971! You've successfully authenticated, but GitHub does not provide shell access.
		// # Должно вернуть: Hi Andr-137! You've successfully authenticated, but GitHub does not provide shell access.
	}
	// 🔳 ⁡⁢⁣⁣ДОПОЛНИТЕЛЬНО: ГЛОБАЛЬНЫЕ НАСТРОЙКИ (ЕСЛИ НУЖНО)⁡
	{
		// 🔹 ⁡⁣⁢⁢Установите глобальные настройки для "основного" аккаунта⁡
		{
			// bash
			// git config --global user.name "Main Account Name"
			// git config --global user.email "main@example.com"
		}
		// 🔹 ⁡⁣⁢⁢Но помните: для репозиториев второго аккаунта это будет переопределено локальными настройками (шаг 6)⁡
		// ssh -vT git@github.com # Проверьте настройки 
	}
	// 🔳 ⁡⁢⁣⁣КАК ЭТО РАБОТАЕТ⁡
	{
		// 🔹 ⁡⁣⁢⁢Разные хосты в SSH: Вы используете github.com-account1 вместо github.com, что связывается с нужным ключом через ~/.ssh/config.⁡
		// 🔹 ⁡⁣⁢⁢Локальные настройки репозитория: Git в каждом проекте использует свой email/имя для коммитов.⁡
		// 🔹 ⁡⁣⁢⁢SSH-ключи: GitHub определяет аккаунт по ключу, используемому при подключении.⁡
		// ⚠️ ⁡⁣⁣⁢Важно! Всегда проверяйте URL удалённого репозитория (git remote -v) и локальные настройки user.email/user.name перед коммитами.⁡
	}
}
//! РАЗВЕРТЫВАНИЕ (VITE) ПРИЛОЖЕНИЯ НА GITHUB PAGES
{
	// 🔳 ⁡⁢⁣⁣ПОДГОТОВКА ПРОЕКТА VITE⁡
	{
		// bash
		// ⁡⁢⁢⁢# Создаем новый проект Vite (выберите фреймворк и язык)⁡
		// npm create vite@latest my-vite-app
		// cd my-vite-app
		// ⁡⁢⁢⁢# Устанавливаем зависимости⁡
		// npm install
		// ⁡⁢⁢⁢# Тестируем локально⁡
		// npm run dev
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА vite.config.js⁡
	{
		//* vite.config.js
		// import { defineConfig } from "vite";
		// export default
		defineConfig({
			plugins: [react()],
			// Добавьте эту строку (замените 'my-vite-app' на имя вашего репозитория)
			base: "/card_product/",
			build: {
				outDir: "dist",
			},
		});
		// ⚠️ ⁡⁣⁣⁢Важно: base должен соответствовать названию вашего GitHub-репозитория, слеши, регистры.⁡
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА СКРИПТА ДЕПЛОЯ В package.json⁡
	{
		// "scripts": {
		// 	"build": "vite build",
		// 	"predeploy": "npm run build",
		// 	"deploy": "gh-pages -d dist"
		// }
	}
	// 🔳 ⁡⁢⁣⁣УСТАНОВКА ПАКЕТА gh-pages⁡
	{
		// bash
		// npm install gh-pages --save-dev
		// 🔹 ⁡⁣⁢⁢Если ветки нет → создайте её через деплой⁡
		{
			// ⁡⁢⁢⁢# В проекте выполните⁡
			// npm run build
			// npm install gh-pages --save-dev
			// npx gh-pages -d dist
		}
		// 🔹 ⁡⁣⁢⁢Если ветка пустая → добавьте контент⁡
		{
			// ⁡⁢⁢⁢# Удалите пустую ветку (если есть)⁡
			// git push origin --delete gh-pages
			// ⁡⁢⁢⁢# Соберите проект и пересоздайте ветку⁡
			// npm run build
			// npx gh-pages -d dist
		}
	}
	// 🔳 ⁡⁢⁣⁣ИНИЦИАЛИЗАЦИЯ GIT И ПОДКЛЮЧЕНИЕ К GitHub⁡
	{
		// ⁡⁢⁢⁢# Инициализируем репозиторий⁡
		// git init
		// ⁡⁢⁢⁢# Добавляем файлы⁡
		// git add .
		// git commit -m "Initial commit"
		// ⁡⁢⁢⁢# Создаем новый репозиторий на GitHub (без README!)⁡
		// ⁡⁢⁢⁢# Затем подключаем его⁡
		// git remote add origin https://github.com/ВАШ_АККАУНТ/НАЗВАНИЕ_РЕПО.git
		// git branch -M main
		// git push -u origin main
	}
	// 🔳 ⁡⁢⁣⁣ДЕПЛОЙ НА GITHUB PAGES⁡
	{
		// npm run deploy
	}
	// 🔳 ⁡⁢⁣⁣ВКЛЮЧЕНИЕ GitHub Pages⁡
	{
		// 🔹 ⁡⁣⁢⁢Зайдите в репозиторий на GitHub: Settings > Pages⁡
		// 🔹 ⁡⁣⁢⁢В разделе Build and deployment⁡
		{
			// ✅ ⁡⁢⁢⁢Source: Deploy from a branch⁡
			// ✅ ⁡⁢⁢⁢Branch: gh-pages (папка /(root))⁡
			// ⚠️ ⁡⁣⁣⁢Убедитесь, что выбрано: Branch: gh-pages, Folder: /(root)⁡
		}
		// 🔹 ⁡⁣⁢⁢Сохраните. Через 1-2 минута приложение будет доступно по адресу https://ВАШ_АККАУНТ.github.io/НАЗВАНИЕ_РЕПО⁡
	}
	// 🔳 ⁡⁢⁣⁣РЕШЕНИЕ РАСПРОСТРАНЕННЫХ ПРОБЛЕМ⁡
	{
		// 🔹 ⁡⁣⁢⁢Белая страница после деплоя⁡
		{
			// ✅ ⁡⁢⁢⁢Причина: Неправильный base в vite.config.js⁡
			// ✅ ⁡⁢⁢⁢Решение: Убедитесь, что base точно совпадает с названием репозитория (регистр, слэши)⁡
		}
		// 🔹 ⁡⁣⁢⁢Ошибка 404⁡
		{
			// ✅ ⁡⁢⁢⁢Причина: GitHub Pages не нашел index.html⁡
			// ⚠️ ⁡⁣⁣⁢Убедитесь что папка dist существует после npm run build⁡
			// ⚠️ ⁡⁣⁣⁢Проверьте ветку gh-pages в репозитории: там должны быть файлы сборки⁡
		}
		// 🔹 ⁡⁣⁢⁢Ссылки/роутинг не работают⁡
		{
			// Для React Router (добавьте в корневой файл)
			// import { BrowserRouter } from "react-router-dom";

			ReactDOM.render(
				<BrowserRouter basename="/my-vite-app">
					<App />
				</BrowserRouter>,
				document.getElementById("root"),
			);
		}
	}
	// 🔳 ⁡⁢⁣⁣СОВЕТЫ⁡
	{
		// 🔹 ⁡⁣⁢⁢Обновляйте приложение: вносите изменения → git commit → npm run deploy⁡
		// 🔹 ⁡⁣⁢⁢Всегда проверяйте ветку gh-pages в репозитории⁡
		// 🔹 ⁡⁣⁢⁢Для кастомного домена добавьте CNAME файл в public/ перед деплоем⁡
	}
}
//! РАЗВЁРТЫВАНИЕ REACT-ПРИЛОЖЕНИЯ (WEBPACK) НА GITHUB PAGES
{
	// 🔳 ⁡⁢⁣⁣ПОДГОТОВКА ПРОЕКТА⁡
	{
		// 🔹 ⁡⁣⁢⁢Структура проекта (пример)⁡
		{
			// 	my-app/
			// ├── src/
			// │   ├── index.js       ⁡⁢⁢⁢# Точка входа React⁡
			// │   └── App.js
			// ├── public/
			// │   └── index.html     ⁡⁢⁢⁢# Основной HTML⁡
			// ├── package.json
			// └── webpack.config.js  ⁡⁢⁢⁢# Конфиг Webpack⁡
		}
		// 🔹 ⁡⁣⁢⁢Настройка Webpack (webpack.config.js)⁡
		{
			const path = require("path");
			const HtmlWebpackPlugin = require("html-webpack-plugin");

			module.exports = {
				entry: "./src/index.js",
				output: {
					path: path.resolve(__dirname, "dist"),
					filename: "bundle.[contenthash].js",
					publicPath: "/", // Важно для роутинга!
					clean: true,
				},
				plugins: [
					new HtmlWebpackPlugin({
						template: "./public/index.html",
					}),
				],
				// ... loaders, devServer, etc.
			};
		}
	}
	// 🔳 ⁡⁢⁣⁣УСТАНОВКА gh-pages⁡
	{
		// npm install gh-pages --save-dev
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА package.json⁡
	{
		// 🔹 ⁡⁣⁢⁢Добавьте homepage (замените username и repo-name)⁡
		{
			// "homepage": "https://alexdev.github.io/my-react-app"
		}
		// 🔹 ⁡⁣⁢⁢Добавьте скрипты⁡
		{
			// "scripts": {
			// 	"predeploy": "npm run build",  ⁡⁢⁢⁢# Собирает проект перед деплоем⁡
			// 	"deploy": "gh-pages -d dist",   ⁡⁢⁢⁢# Путь к папке сборки (у вас может быть build)⁡
			// 	"build": "webpack --mode production",
			// 	"start": "webpack serve"
			// }
		}
		// 🔹 ⁡⁣⁢⁢Итоговая структура package.json⁡
		{
			{
				// "name": "my-app",
				// "version": "1.0.0",
				// "homepage": "https://username.github.io/repo-name",
				// "scripts": {
				//   "start": "webpack serve",
				//   "predeploy": "npm run build",
				//   "deploy": "gh-pages -d dist",
				//   "build": "webpack --mode production"
				// },
				// "devDependencies": {
				//   "gh-pages": "^6.1.0"
				// }
			}
		}
	}
	// 🔳 ⁡⁢⁣⁣НАСТРОЙКА РОУТИНГА (ЕСЛИ ИСПОЛЬЗУЕТСЯ REACT ROUTER)⁡
	{
		// 🔹 ⁡⁣⁢⁢Оберните роутер в <BrowserRouter>⁡
		{
			// src/index.js
			// import { BrowserRouter } from "react-router-dom";
			ReactDOM.render(
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<App />
				</BrowserRouter>,
				document.getElementById("root"),
			);
		}
		// 🔹 ⁡⁣⁢⁢Используйте хеш-роутер (альтернатива для GitHub Pages)⁡
		{
			// import { HashRouter } from "react-router-dom";
			// Замените <BrowserRouter> на <HashRouter>
		}
	}
	// 🔳 ⁡⁢⁣⁣ДЕПЛОЙ НА GitHub Pages⁡
	{
		// 🔹 ⁡⁣⁢⁢Соберите проект и запустите деплой⁡
		{
			// npm run deploy
		}
		// 🔹 ⁡⁣⁢⁢Что произойдёт⁡
		{
			// ✅ ⁡⁢⁢⁢Создастся ветка gh-pages в вашем репозитории.⁡
			// ✅ ⁡⁢⁢⁢Файлы из папки dist (или указанной в -d) будут загружены в эту ветку.⁡
			// ✅ ⁡⁢⁢⁢Приложение будет доступно по адресу: https://username.github.io/repo-name⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣ПРОВЕРКА И ОБНОВЛЕНИЕ⁡
	{
		// 🔹 ⁡⁣⁢⁢На GitHub
		{
			// ✅ ⁡⁢⁢⁢Перейдите в Settings > Pages вашего репозитория.⁡
			// ✅ ⁡⁢⁢⁢Убедитесь, что ветка gh-pages выбрана как источник.⁡
			// ✅ ⁡⁢⁢⁢Ссылка будет в разделе GitHub Pages.⁡
		}
		// 🔹 ⁡⁣⁢⁢Обновление приложения⁡
		{
			// ✅ ⁡⁢⁢⁢После изменений в коде выполните⁡
			{
				// npm run deploy
			}
			// ✅ ⁡⁢⁢⁢Обновление займёт 1-2 минуты.⁡
		}
	}
	// 🔳 ⁡⁢⁣⁣ВОЗМОЖНЫЕ ОШИБКИ И РЕШЕНИЯ⁡
	{
		// 🔹 ⁡⁣⁢⁢404 при обновлении страницы⁡
		{
			// ✅ ⁡⁢⁢⁢Используйте HashRouter вместо BrowserRouter.⁡
			// ✅ ⁡⁢⁢⁢Добавьте basename={process.env.PUBLIC_URL} в роутер.⁡
		}
		// 🔹 ⁡⁢⁢⁡⁣⁢⁢Пустая страница⁡
		{
			// ✅ ⁡⁢⁢⁢Проверьте путь в homepage в package.json.⁡
			// ✅ ⁡⁢⁢⁢Убедитесь, что в webpack.config.js указано publicPath: '/'.⁡
			// ✅ ⁡⁢⁢⁢Добавьте <base href="/"> в <head> HTML-файла.⁡
		}
		// 🔹 ⁡⁣⁢⁢Стили/скрипты не загружаются⁡
		{
			// ✅ ⁡⁢⁢⁢В конфиге Webpack укажите абсолютные пути⁡
			{
				// output: {
				// 	publicPath: '/',
				//   }
			}
		}
	}
	// ⚠️ ⁡⁣⁣⁢ВАЖНО!⁡
	{
		// 🔹 ⁡⁣⁢⁢GitHub Pages не поддерживает серверную часть (backend).⁡
		// 🔹 ⁡⁣⁢⁢Для SPA (Single Page Application) настройте 404-редирект (создайте 404.html с копией index.html).⁡
		// 🔹 ⁡⁣⁢⁢Все пути к ресурсам должны быть абсолютными.⁡
	}
}
export {}
