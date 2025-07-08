
// ⁡⁢⁣⁣ДЛЯ ЧЕГО ПРИМЕНЯЕТСЯ?⁡
{
	// ⁡⁣⁢⁢ОПТИМИЗАЦИЯ РАЗМЕРА БАНДЛА⁡
	// ⁡⁣⁣⁢- Уменьшение времени загрузки приложения за счет удаления "тяжелых" или неиспользуемых библиотек. Пример: Обнаружение случайно подключенной 500-килобайтной библиотеки для форматирования дат, когда можно использовать нативную Intl.DateTimeFormat.⁡
	// ⁡⁣⁢⁢ПОИСК ДУБЛИКАТОВ⁡
	// ⁡⁣⁣⁢- Выявление одинаковых пакетов, подключенных несколько раз. Пример: lodash и lodash-es в одном проекте.⁡
	// ⁡⁣⁢⁢АНАЛИЗ ЭФФЕКТИВНОСТИ CODE SPLITTING⁡
	// ⁡⁣⁣⁢- Проверка, как разбиение кода на чанки влияет на размеры файлов. Пример: Убедиться, что React.lazy() корректно разделяет бандл⁡
    // ⁡⁣⁢⁢СРАВНЕНИЕ СБОРОК⁡
    // ⁡⁣⁣⁢- Сравнение размеров бандлов до и после оптимизаций. Пример: После замены moment.js на date-fns⁡
}
// ⁡⁢⁣⁣ПРИМЕРЫ ПРИМЕНЕНИЯ⁡
{
	// ⁡⁣⁢⁢1. Webpack Bundle Analyzer (для проектов на Webpack) ⁡
	// ⁡⁣⁣⁢Установка⁡
	// npm install --save-dev webpack-bundle-analyzer
	// ⁡⁣⁣⁢Настройка в webpack.config.js⁡
	{
		const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
		module.exports = {
			plugins: [
				new BundleAnalyzerPlugin({
					analyzerMode: "static", // Генерирует HTML-отчет
					reportFilename: "bundle-report.html",
					openAnalyzer: false, // Не открывать автоматически
				}),
			],
		};
	}
	// ⁡⁣⁣⁢Запуск⁡
	// npm run build
	// ⁡⁣⁣⁢После сборки в папке build/ появится файл bundle-report.html — откройте его в браузере⁡
	// ⁡⁣⁢⁢2. Source Map Explorer (универсальный инструмент)⁡
	// ⁡⁣⁣⁢Установка⁡
	// npm install --save-dev source-map-explorer
	// ⁡⁣⁣⁢Анализ бандла⁡
	// npx source-map-explorer build/static/js/main.*.js
}