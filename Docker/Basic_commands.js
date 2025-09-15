//? DOCKER: ОСНОВНЫЕ КОМАНДЫ ПО КАТЕГОРИЯМ С КОММЕНТАРИЯМИ
//! ИНФОРМАЦИЯ И ВЕРСИЯ
{
    // ⁡⁣⁣⁢# Проверить версию Docker⁡
    // docker version
    // ⁡⁣⁣⁢# Показать общую информацию о Docker (версия, количество контейнеров/образов и т.д.)⁡
    // docker info
}
//! РАБОТА С ОБРАЗАМИ (IMAGES)
{
	// ⁡⁣⁣⁡⁣⁣⁢# Скачать образ из репозитория (Docker Hub по умолчанию) Пример: docker pull nginx:latest(latest по умолчанию)⁡
	// docker pull <image_name>:<tag>
	// ⁡⁣⁣⁢# Показать все скачанные образы⁡
	// docker images
	// ⁡⁣⁣⁢# или⁡
	// docker image ls
	// ⁡⁣⁣⁢# Удалить образ. Пример: docker rmi nginx⁡
	// docker rmi <image_id_or_name>
	// ⁡⁣⁣⁢# Показать историю образа⁡
	// docker history <image_id_or_name>
	// ⁡⁣⁣⁡⁣⁣⁢# Собрать образ из Dockerfile в текущей директории. Пример: docker build -t myapp:1.0 .⁡
	// docker build -t <image_name>:<tag> .
	// ⁡⁣⁣⁢# Просмотр информации об образе⁡
	// docker inspect <image_id_or_name>
	// ⁡⁣⁣⁢# Пометить образ тегом (часто используется для загрузки в репозиторий). Пример: docker tag myapp:1.0 myrepo/myapp:1.0⁡
	// docker tag <image_id> <repository>:<tag>
	// ⁡⁣⁣⁢# Загрузить образ в репозиторий (предварительно нужно выполнить docker login)⁡
	// docker push <repository>:<tag>
	// ⁡⁣⁣⁢# Экспорт образа в файл. Пример: docker save -o myapp.tar myapp:1.0⁡
	// docker save -o <file_name>.tar <image_name>
	// ⁡⁣⁣⁢# Импорт образа из файла⁡
	// docker load -i <file_name>.tar
	// ⁡⁣⁣⁢# Поиск образов в Docker Hub. Пример: docker search nginx⁡
	// docker search <query>
}
//! РАБОТА С КОНТЕЙНЕРАМИ (CONTAINERS)
{
	// ☑️ ⁡⁣⁢⁢ЗАПУСК КОНТЕЙНЕРОВ⁡
	{
		// ⁡⁣⁣⁢# Запустить контейнер из образа в интерактивном режиме с подключением терминала. Пример: docker run -it ubuntu bash⁡
		// docker run -it <image_name> <command>
		// ⁡⁣⁣⁢# Запустить контейнер в фоновом режиме (демон). Пример: docker run -d nginx⁡
		// docker run -d <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с указанием имени⁡
		// docker run --name <container_name> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с пробросом портов (host_port:container_port)ю Пример: docker run -p 8080:80 nginx⁡
		// docker run -p <host_port>:<container_port> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с подключением тома. Пример: docker run -v /home/user/data:/data ubuntu⁡
		// docker run -v <host_path>:<container_path> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с переменными окружения. Пример: docker run -e MY_VAR=my_value ubuntu⁡
		// docker run -e <ENV_VAR>=<value> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер и автоматически удалить его после остановки⁡
		// docker run --rm <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер и подключить его к сети⁡
		// docker run --network <network_name> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с ограничением памяти. Пример: docker run -m 512m nginx⁡
		// docker run -m <memory_limit> <image_name>
		// ⁡⁣⁣⁢# Запустить контейнер с ограничением CPU. Пример: docker run --cpus=1.5 nginx⁡
		// docker run --cpus=<number> <image_name>
	}
    // ☑️ ⁡⁣⁢⁢УПРАВЛЕНИЕ КОНТЕЙНЕРАМИ⁡
    {
        // ⁡⁣⁣⁢# Показать запущенные контейнеры⁡
        // docker ps
        // ⁡⁣⁣⁢# Показать все контейнеры (включая остановленные)⁡
        // docker ps -a
        // ⁡⁣⁣⁢# Остановить контейнер⁡
        // docker stop <container_id_or_name>
        // ⁡⁣⁣⁢# Принудительно остановить контейнер (не дожидаясь graceful shutdown)⁡
        // docker kill <container_id_or_name>
        // ⁡⁣⁣⁢# Запустить остановленный контейнер⁡
        // docker start <container_id_or_name>
        // ⁡⁣⁣⁢# Перезапустить контейнер⁡
        // docker restart <container_id_or_name>
        // ⁡⁣⁣⁢# Приостановить контейнер (заморозка)⁡
        // docker pause <container_id_or_name>
        // ⁡⁣⁣⁢# Возобновить приостановленный контейнер⁡
        // docker unpause <container_id_or_name>
        // ⁡⁣⁣⁢# Удалить контейнер (только остановленный, если не использовать -f)⁡
        // docker rm <container_id_or_name>
        // ⁡⁣⁣⁢# Принудительно удалить контейнер (даже если он запущен)⁡
        // docker rm -f <container_id_or_name>
        // ⁡⁣⁣⁢# Просмотреть логи контейнера⁡
        // docker logs <container_id_or_name>
        // ⁡⁣⁣⁢# Просмотреть логи в реальном времени⁡
        // docker logs -f <container_id_or_name>
        // ⁡⁣⁣⁢# Просмотреть процессы, запущенные в контейнере⁡
        // docker top <container_id_or_name>
        // ⁡⁣⁣⁢# Выполнить команду в запущенном контейнере. Пример: docker exec mycontainer ls⁡
        // docker exec <container_id_or_name> <command>
        // ⁡⁣⁣⁢# Выполнить команду в запущенном контейнере в интерактивном режиме. Пример: docker exec -it mycontainer bash⁡
        // docker exec -it <container_id_or_name> <command>
        // ⁡⁣⁣⁢# Просмотреть изменения в файловой системе контейнера⁡
        // docker diff <container_id_or_name>
        // ⁡⁣⁣⁢# Просмотреть статистику использования ресурсов (в реальном времени)⁡
        // docker stats <container_id_or_name>
        // ⁡⁣⁣⁢# Просмотреть информацию о контейнере⁡
        // docker inspect <container_id_or_name>
        // ⁡⁣⁣⁢# Скопировать файлы из контейнера на хост⁡
        // docker cp <container_id_or_name>:<container_path> <host_path>
        // ⁡⁣⁣⁢# Скопировать файлы с хоста в контейнер⁡
        // docker cp <host_path> <container_id_or_name>:<container_path>
        // ⁡⁣⁣⁢# Создать образ из контейнера⁡
        // docker commit <container_id_or_name> <new_image_name></new_image_name>
    }
}
//! СЕТИ (NETWORKING)
{
    // ⁡⁣⁣⁢# Показать список сетей⁡
    // docker network ls
    // ⁡⁣⁣⁢# Создать сеть⁡
    // docker network create <network_name>
    // ⁡⁣⁣⁢# Показать подробности сети⁡
    // docker network inspect <network_name>
    // ⁡⁣⁣⁢# Подключить контейнер к сети⁡
    // docker network connect <network_name> <container_name>
    // ⁡⁣⁣⁢# Отключить контейнер от сети⁡
    // docker network disconnect <network_name> <container_name>
    // ⁡⁣⁣⁢# Удалить сеть⁡
    // docker network rm <network_name>
    // ⁡⁣⁣⁢# Удалить все неиспользуемые сети⁡
    // docker network prune
}
//! ТОМА (VOLUMES)
{
    // ⁡⁣⁣⁢# Показать список томов⁡
    // docker volume ls
    // ⁡⁣⁣⁢# Создать том⁡
    // docker volume create <volume_name>
    // ⁡⁣⁣⁢# Показать информацию о томе⁡
    // docker volume inspect <volume_name>
    // ⁡⁣⁣⁢# Удалить том⁡
    // docker volume rm <volume_name>
    // ⁡⁣⁣⁢# Удалить все неиспользуемые тома⁡
    // docker volume prune
    // ⁡⁣⁣⁢# Просмотреть данные в томе (например, подключив временный контейнер)⁡
    // docker run --rm -v <volume_name>:/data alpine ls /data
}
//! DOCKER COMPOSE (для управления многоконтейнерными приложениями)
{
    // ⚠️ ⁡⁣⁣⁢Docker Compose позволяет управлять многоконтейнерными приложениями через YAML-файл.⁡
    // ⁡⁣⁣⁢# Запуск приложения в фоновом режиме⁡
    // docker-compose up -d
    // ⁡⁣⁣⁢# Остановка приложения⁡
    // docker-compose down
    // ⁡⁣⁣⁢# Просмотр логов⁡
    // docker-compose logs
    // ⁡⁣⁣⁢# Запуск конкретного сервиса⁡
    // docker-compose up <service_name>
    // ⁡⁣⁣⁢# Показать статус сервисов⁡
    // docker-compose ps
    // ⁡⁣⁣⁢# Выполнить команду в сервисе⁡
    // docker-compose exec <service_name> <command>
    // ⁡⁣⁣⁢# Пересобрать образы и запустить сервисы⁡
    // docker-compose up --build
    // ⁡⁣⁣⁢# Остановка и удаление контейнеров, сетей, образов и томов⁡
    // docker-compose down --rmi all -v
}
//! ПРОЧИЕ ПОЛЕЗНЫЕ КОМАНДЫ
{
	// ⁡⁣⁣⁢# Посмотреть команды. Например: docker run --help⁡
	// docker <command> --help
	// ⁡⁣⁣⁢# Просмотр информации о дисковом пространстве, используемом Docker⁡
	// docker system df
	// ⁡⁣⁣⁢# Удаление неиспользуемых данных (образы, контейнеры, сети, тома)⁡
	// docker system prune
	// ⁡⁣⁣⁢# Удаление с подтверждением и including volumes⁡
	// docker system prune -a --volumes
	// ⁡⁣⁣⁢# Просмотр событий Docker в реальном времени⁡
	// docker events
	// ⁡⁣⁣⁢# Просмотр информации о Docker (аналогично docker info, но в формате JSON)⁡
	// docker info --format '{{json .}}'
	// ⁡⁣⁣⁢# Просмотр версии Docker⁡
	// docker version --format '{{.Server.Version}}'
}
//! ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ
{
    // ⁡⁣⁣⁢# Запуск Nginx с пробросом портов⁡
    // docker run -d -p 8080:80 --name nginx-container nginx
    // ⁡⁣⁣⁢# Запуск PostgreSQL с томом для данных⁡
    // docker run -d \
    // --name postgres-container \
    // -e POSTGRES_PASSWORD=secret \
    // -v pgdata:/var/lib/postgresql/data \
    // postgres:13
    // ⁡⁣⁣⁢# Сборка и запуск кастомного образа⁡
    // docker build -t myapp:1.0 .
    // docker run -d -p 5000:5000 myapp:1.0
}
//! ВАЖНЫЕ ПОЯСНЕНИЯ
{
	// ☑️ ⁡⁣⁢⁢ТЕГИ ОБРАЗОВ⁡
	{
		// ✅ ⁡⁢⁢⁢latest — последняя версия (может быть нестабильной).⁡
		// ✅ ⁡⁢⁢⁢Всегда указывайте конкретную версию (например: nginx:1.21-alpine) для production.⁡
	}
	// ☑️ ⁡⁣⁢⁢ФЛАГИ⁡
	{
		// ✅ ⁡⁢⁢⁢-d — запуск в фоне (демон).⁡
		// ✅ ⁡⁢⁢⁢-it — интерактивный режим с TTY.⁡
		// ✅ ⁡⁢⁢⁢-p <host_port>:<container_port> — проброс портов.⁡
		// ✅ ⁡⁢⁢⁢-v — монтирование томов/директорий.⁡
		// ✅ ⁡⁢⁢⁢-e — передача переменных окружения.⁡
	}
	// ☑️ ⁡⁣⁢⁢Dockerfile⁡
	{
		// ✅ ⁡⁢⁢⁢Используйте .dockerignore чтобы исключить файлы из контекста сборки.⁡
		// ✅ ⁡⁢⁢⁢Многоступенчатая сборка (multi-stage) уменьшает итоговый размер образа.⁡
	}
	// ☑️ ⁡⁣⁢⁢БЕЗОПАСНОСТЬ⁡
	{
		// ✅ ⁡⁢⁢⁢Не используйте privileged режим без необходимости.⁡
		// ✅ ⁡⁢⁢⁢Избегайте запуска контейнеров от root-пользователя.⁡
	}
    // ☑️ ⁡⁣⁢⁢ПРОИЗВОДИТЕЛЬНОСТЬ⁡
    [
		// ✅ ⁡⁢⁢⁢Кэширование слоев: распологайте редко меняющиеся инструкции в начале Dockerfile.⁡
		// ✅ ⁡⁢⁢⁢Используйте легковесные базовые образы (например, alpine).⁡
	];
	// ☑️
}
