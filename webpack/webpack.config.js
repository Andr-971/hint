const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
	const isProduction = argv.mode === "production";
	return {
		// Базовые настройки
		mode: isProduction ? "production" : "development",
		target: "web", // 'node' для серверных приложений
		devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
		// Точки входа
		entry: {
			main: "./src/index.js",
			vendor: "./src/vendor.js",
		},
		// Настройки вывода
		output: {
			filename: isProduction ? "[name].[contenthash].js" : "[name].js",
			path: path.resolve(__dirname, "dist"),
			clean: true, // Очищать выходную директорию
			assetModuleFilename: "assets/[hash][ext][query]", // Шаблон для asset-модулей
			publicPath: "/", // Базовый путь для ресурсов
		},
		// Модули и загрузчики
		module: {
			rules: [
				// JavaScript/JSX
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				},
				// TypeScript
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				// CSS (с поддержкой PostCSS)
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : "style-loader",
						{
							loader: "css-loader",
							options: {
								modules: {
									auto: true, // Включает CSS Modules для *.module.css файлов
									localIdentName: isProduction
										? "[hash:base64]"
										: "[path][name]__[local]",
								},
								importLoaders: 1, // Количество загрузчиков до css-loader
							},
						},
						"postcss-loader", // Для autoprefixer и других плагинов
					],
				},
				// SCSS/SASS
				{
					test: /\.s[ac]ss$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : "style-loader",
						"css-loader",
						"sass-loader",
					],
				},
				// Изображения
				{
					test: /\.(png|jpe?g|gif|svg|webp)$/i,
					type: "asset/resource", // Встроенный asset-модуль
					generator: {
						filename: "images/[hash][ext][query]",
					},
				},
				// Шрифты
				{
					test: /\.(woff2?|eot|ttf|otf)$/i,
					type: "asset/resource",
					generator: {
						filename: "fonts/[hash][ext][query]",
					},
				},
				// Загрузка JSON
				{
					test: /\.json$/,
					type: "json",
				},
			],
		},
		// Разрешение расширений
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
			alias: {
				"@components": path.resolve(__dirname, "src/components/"),
				"@utils": path.resolve(__dirname, "src/utils/"),
			},
			modules: ["node_modules", path.resolve(__dirname, "src")],
		},
		// Плагины
		plugins: [
			// Генерация HTML
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				filename: "index.html",
				favicon: "./src/favicon.ico",
				minify: isProduction,
			}),
			// Извлечение CSS в отдельные файлы
			new MiniCssExtractPlugin({
				filename: isProduction ? "styles/[name].[contenthash].css" : "styles/[name].css",
				chunkFilename: isProduction ? "styles/[id].[contenthash].css" : "styles/[id].css",
			}),
		],
		// Оптимизация для production
		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserPlugin({
					// Минификация JS
					parallel: true,
					terserOptions: {
						ecma: 2020,
						compress: { drop_console: true },
					},
				}),
				new CssMinimizerPlugin(), // Минификация CSS
			],
			splitChunks: {
				chunks: "all", // Разделение vendor и common кода
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						chunks: "all",
					},
				},
			},
			runtimeChunk: "single", // Выделение runtime в отдельный файл
		},
		// Dev Server
		devServer: {
			static: {
				directory: path.join(__dirname, "dist"),
			},
			compress: true,
			port: 3000,
			open: true,
			hot: true,
			historyApiFallback: true, // Для SPA
			client: {
				overlay: {
					errors: true,
					warnings: false,
				},
			},
			proxy: {
				"/api": "http://localhost:5000",
			},
		},
		// Производительность
		performance: {
			hints: isProduction ? "warning" : false,
			maxAssetSize: 500000, // 500 KB
			maxEntrypointSize: 500000,
		},
		// Внешние зависимости
		externals: {
			react: "React",
			"react-dom": "ReactDOM",
		},
	};
};
