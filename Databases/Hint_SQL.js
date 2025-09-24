//! ШПАРГАЛКА ПО SQL
// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ ПРИНЦИПЫ SQL
{
	// ☑️ ⁡⁣⁡⁣⁢⁢SQL (Structured Query Language) — это декларативный язык программирования, предназначенный для управления реляционными базами данных и работы с данными в них. Ключевое слово — "декларативный". Это означает, что вы описываете что вы хотите получить, а не как это сделать (как в императивных языках, например, Python или Java). Система управления базами данных (СУБД), такая как MySQL, PostgreSQL или SQLite, сама определяет наиболее эффективный способ выполнения вашего запроса.⁡
	// ☑️ ⁡⁣⁢⁢Реляционная модель: данные хранятся в таблицах (отношениях)⁡
	// ☑️ ⁡⁣⁢⁢Команды делятся на категории: DDL, DML, DQL, DCL, TCL⁡
    // ☑️ ⁡⁣⁢⁢КАК ПРАВИЛЬНО СТРОИТЬ КОМАНДЫ? КЛЮЧЕВЫЕ ПРИНЦИПЫ⁡
    {
		// ✅ ⁡⁢⁢⁢Порядок следования предложений (Clause Order): Запомните основной порядок, в котором пишутся части запроса. Это не порядок выполнения, но синтаксический порядок.⁡
		// ⁡⁣⁣⁢SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY⁡
		// ✅ ⁡⁢⁢⁢Обязательность SELECT и FROM: Любой запрос на выборку начинается с этих двух ключевых слов.⁡
		// ✅ ⁡⁢⁢⁢Всегда используйте WHERE в UPDATE и DELETE: Это правило безопасности данных. Прежде чем выполнять эти команды, всегда убеждайтесь, что условие WHERE написано корректно. Лучше сначала написать SELECT ... WHERE ..., чтобы посмотреть, какие строки будут затронуты.⁡
		// ✅ ⁡⁢⁢⁢Соблюдайте синтаксис:⁡
		{
			// ⚡ ⁡⁢⁣⁣Регистр ключевых слов: Хотя SELECT и select обычно работают одинаково, общепринятой практикой является написание ключевых слов SQL в верхнем регистре для лучшей читаемости.⁡
			// ⚡ ⁡⁢⁣⁣Точка с запятой: В большинстве СУБД точка с запятой (;) используется для разделения нескольких SQL-запросов. Для одиночного запроса она часто необязательна, но хорошим тоном считается ее ставить.⁡
		}
		// ✅ ⁡⁢⁢⁢Читаемость и форматирование: Используйте отступы и переносы строк для сложных запросов.⁡
		{
			// ❌ ⁡⁢⁣⁢SELECT id, name, salary FROM employees WHERE salary > 50000 AND department_id = 2 ORDER BY name ASC;⁡
			// ✔️ ⁡⁢⁢⁢SELECT id, name, salary⁡
			// ⁡⁢⁢⁢FROM employees⁡
			// ⁡⁢⁢⁢WHERE salary > 50000⁡
			// ⁡⁢⁢⁢AND department_id = 2⁡
			// ⁡⁢⁢⁢ORDER BY name ASC;⁡
		}
		// ✅ ⁡⁢⁢⁢СНАЧАЛА ПРОЕКТИРУЙТЕ, потом пишите (SELECT): Прежде чем писать сложный SELECT, определите:⁡
		{
			// ⚡ ⁡⁢⁣⁣Что нужно? (SELECT - какие столбцы, вычисления, агрегатные функции).⁡
			// ⚡ ⁡⁢⁣⁣Откуда? (FROM - какие таблицы, возможно, с соединениями JOIN).⁡
			// ⚡ ⁡⁢⁣⁣Какие условия? (WHERE - фильтрация строк)⁡
			// ⚡ ⁡⁢⁣⁣Как сгруппировать? (GROUP BY).⁡
			// ⚡ ⁡⁢⁣⁣Как отсортировать результат? (ORDER BY).⁡
			// ☑️ ⁡⁣⁢⁢БАЗОВЫЙ СИНТАКСИС АГРЕГАТНЫХ ФУНКЦИЙ⁡
			{
				`SELECT АГРЕГАТНАЯ_ФУНКЦИЯ(столбец_или_выражение) 
                FROM таблица
                [WHERE условия]
                [GROUP BY столбцы_для_группировки]
                [HAVING условия_на_агрегаты];`;
			}
			// ☑️ ⁡⁣⁢⁢ОСНОВНЫЕ АГРЕГАТНЫЕ ФУНКЦИИ⁡
			{
				// ✅ ⁡⁣⁣⁢COUNT()⁡ ⁡⁢⁢⁢— подсчитывает количество строк.⁡
				// ✅ ⁡⁣⁣⁢SUM()⁡ ⁡⁢⁢⁢— возвращает сумму значений.⁡
				// ✅ ⁡⁣⁣⁢AVG()⁡ ⁡⁢⁢⁢— возвращает среднее значение.⁡
				// ✅ ⁡⁣⁣⁢MIN()⁡ ⁡⁢⁢⁢— возвращает минимальное значение.⁡
				// ✅ ⁡⁣⁣⁢MAX()⁡ ⁡⁢⁢⁢— возвращает максимальное значение.⁡
			}
			// ☑️ ⁡⁣⁢⁢ПАРАМЕТРЫ И ТЕЛО ФУНКЦИИ⁡
			{
				// ✅ ⁡⁢⁢⁢Параметр — это столбец или выражение в скобках (), к которому применяется функция.⁡
				// ✅ ⁡⁢⁢⁢Тело функции — это внутренняя логика, реализуемая СУБД (пользователь не видит её кода). Например, SUM() последовательно складывает значения.⁡
				{
					`-- Параметр: столбец price
                    SELECT SUM(price) AS total_sum 
                    FROM orders;

                    -- Параметр: выражение (price * quantity)
                    SELECT SUM(price * quantity) AS total_revenue 
                    FROM order_items;

                    -- Параметр: * (все строки) для COUNT
                    SELECT COUNT(*) AS total_orders 
                    FROM orders;`;
				}
				// ✅ ⁡⁢⁢⁢Особенности агрегатных функций - Агрегатные функции игнорируют NULL (кроме COUNT(*)).
				{
					`-- Если в столбце price есть NULL, они исключаются из расчета
                    SELECT AVG(price) FROM products; -- NULL не влияет на результат.`;
				}
				// ✅ ⁡⁢⁢⁢Ключевое слово DISTINCT - Используется для исключения дубликатов перед применением функции.⁡
				{
					`-- Считает уникальные значения столбца category_id
                    SELECT COUNT(DISTINCT category_id) 
                    FROM products;`;
				}
				// ✅ ⁡⁢⁢⁢GROUP BY и HAVING⁡
				{
					// ⚡ ⁡⁢⁣⁣GROUP BY группирует строки перед применением агрегатной функции.⁡
					// ⚡ ⁡⁢⁣⁣HAVING фильтрует результаты агрегации (аналог WHERE для агрегатов).⁡
					{
						`-- Группировка по category_id с фильтрацией через HAVING
                        SELECT category_id, AVG(price) AS avg_price
                        FROM products
                        WHERE price > 10 -- фильтрация ДО группировки
                        GROUP BY category_id
                        HAVING AVG(price) > 50; -- фильтрация ПОСЛЕ группировки`;
					}
				}
			}
			// ☑️ ⁡⁣⁢⁢ПОЛЬЗОВАТЕЛЬСКИЕ АГРЕГАТНЫЕ ФУНКЦИИ⁡
			{
				// ✅ ⁡⁢⁢⁢В некоторых СУБД (например, PostgreSQL, SQL Server) можно создавать собственные агрегатные функции. Пример для PostgreSQL:⁡
				{
					`-- Шаг 1: Создаем функцию-обработчик
                    CREATE OR REPLACE FUNCTION my_agg_func(state INT, value INT) 
                    RETURNS INT AS $$
                    BEGIN
                        RETURN state + value * 2; -- Тело функции: например, сумма удвоенных значений
                    END;
                    $$ LANGUAGE plpgsql;

                    -- Шаг 2: Создаем агрегатную функцию
                    CREATE AGGREGATE my_custom_agg (INT) (
                        SFUNC = my_agg_func, -- Функция-обработчик
                        STYPE = INT,         -- Тип данных состояния
                        INITCOND = '0'       -- Начальное значение состояния
                    );

                    -- Использование
                    SELECT my_custom_agg(column) FROM table;`;
				}
			}
            // ☑️ ⁡⁣⁢⁢ВАЖНЫЕ ЗАМЕЧАНИЯ⁡
            {
				// ✅ ⁡⁢⁢⁢Агрегатные функции нельзя использовать в WHERE (для этого используется HAVING).⁡
				// ✅ ⁡⁢⁢⁢Если не использовать GROUP BY, агрегатная функция применяется ко всей таблице.⁡
                // ✅ ⁡⁢⁢⁢В одном запросе можно использовать несколько агрегатных функций:⁡
                {
                    `SELECT 
                        COUNT(*) AS total,
                        AVG(price) AS avg_price,
                        MAX(price) AS max_price
                    FROM products;`;
                }
			}
		}
        // ✅ ⁡⁢⁢⁢Сводная таблица основных команд⁡
        {
			// ⁡⁢⁣⁣КОМАНДА	    КАТЕГОРИЯ	    НАЗНАЧЕНИЕ              КЛЮЧЕВОЙ СИНТАКСИС⁡
			// ⁡⁣⁣⁢SELECT	    DML	            Чтение данных	        SELECT ... FROM ... [WHERE ...]⁡
			// ⁡⁣⁣⁢INSERT	    DML	            Добавление данных	    INSERT INTO ... VALUES ...⁡
			// ⁡⁣⁣⁢UPDATE	    DML	            Изменение данных	    UPDATE ... SET ... WHERE ...⁡
			// ⁡⁣⁣⁢DELETE	    DML	            Удаление данных	        DELETE FROM ... WHERE ...⁡
			// ⁡⁣⁣⁢CREATE TABLE	DDL	            Создание таблицы	    CREATE TABLE ... (...)⁡
			// ⁡⁣⁣⁢ALTER TABLE	DDL	            Изменение таблицы	    ALTER TABLE ... ADD ..⁡.
			// ⁡⁣⁣⁢DROP TABLE	DDL	            Удаление таблицы	    DROP TABLE ...⁡
		}
	}
}
// 🔳 ⁡⁢⁣⁣КАТЕГОРИИ SQL КОМАНД
{
	// ☑️ ⁡⁣⁢⁢DDL (Data Definition Language) — Язык определения данных: Эти команды используются для создания, изменения и удаления структуры базы данных (схемы), но не самих данных.⁡
	{
		// ✅ ⁡⁣⁣⁢CREATE⁡⁢⁢ ⁢: Создает новые объекты (базу данных, таблицу, индекс и т.д.).⁡
		// ✅ ⁡⁣⁣⁢ALTER⁡⁢⁢ ⁢: Изменяет структуру существующего объекта (добавляет столбец, меняет тип данных).⁡
		// ✅ ⁡⁣⁣⁢DROP⁡⁢⁢ ⁢: Полностью удаляет объект (таблицу, базу данных).⁡
		// ✅ ⁡⁣⁣⁢TRUNCATE⁡⁢⁢ ⁢: Быстро удаляет все данные из таблицы, но сохраняет ее структуру.⁡
		// ✅ ⁡⁢⁢⁢Создание таблицы⁡
		{
			`CREATE TABLE employees(сотрудники) (
                id INT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                department VARCHAR(50),
                salary DECIMAL(10,2),
                hire_date DATE
            );`;
		}
		// ✅ ⁡⁢⁢⁢Изменение таблицы⁡
		{
			`ALTER TABLE employees(сотрудники) ADD COLUMN email VARCHAR(100);
            ALTER TABLE employees(сотрудники) DROP COLUMN email;`;
		}
		// ✅ ⁡⁢⁢⁢Удаление таблицы⁡
		{
			`DROP TABLE employees(сотрудники);`;
		}
	}
	// ☑️ ⁡⁣⁡⁣⁢⁢DML (Data Manipulation Language) — Язык управления данными: Эти команды используются для работы с самими данными внутри таблиц.⁡
	{
        // ✅ ⁡⁣⁣⁢SELECT ⁡⁢⁢⁢: Читает и возвращает данные из таблиц. Это самая часто используемая команда.⁡
        {
            `SELECT [DISTINCT] column1, column2, ...  -- Какие столбцы выбрать? DISTINCT - только уникальные значения.
            FROM table_name                          -- Из какой таблицы?
            [WHERE condition]                        -- Условие фильтрации строк (необязательно)
            [GROUP BY column_name]                   -- Группировка строк по значениям столбца
            [HAVING condition]                       -- Фильтрация результатов группировки (необязательно)
            [ORDER BY column_name [ASC|DESC]];       -- Сортировка результатов (по возрастанию/убыванию)
            -- Выбрать всех сотрудников
            SELECT * FROM employees;

            -- Выбрать только имена и зарплаты сотрудников
            SELECT first_name, salary FROM employees;

            -- Выбрать сотрудников с зарплатой больше 50000
            SELECT first_name, salary
            FROM employees
            WHERE salary > 50000;

            -- Выбрать и отсортировать сотрудников по убыванию зарплаты
            SELECT first_name, salary
            FROM employees
            ORDER BY salary DESC;

            -- Сгруппировать и посчитать количество сотрудников в каждом отделе
            SELECT department_id, COUNT(*) as employee_count
            FROM employees
            GROUP BY department_id;`;
        }
        // ✅ ⁡⁣⁣⁢INSERT ⁡⁢⁢⁢: Добавляет новые строки в таблицу.⁡
        {
            `-- Вариант 1: Указание значений для всех столбцов по порядку
            INSERT INTO table_name
            VALUES (value1, value2, value3, ...);

            -- Вариант 2: Указание значений только для конкретных столбцов (более безопасный способ)
            INSERT INTO table_name (column1, column2, column3, ...)
            VALUES (value1, value2, value3, ...);

            -- Добавить нового сотрудника (предположим, что таблица имеет столбцы: id, name, salary)
            INSERT INTO employees (id, name, salary)
            VALUES (101, 'Иван Петров', 75000);`;
        }
        // ✅ ⁡⁣⁣⁢UPDATE ⁡⁢⁢⁢: Изменяет существующие данные в строках таблицы.⁡
        {
            `UPDATE table_name
            SET column1 = value1, column2 = value2, ...  -- Какие столбцы и на какие значения изменить?
            WHERE condition; -- КАКУЮ строку (строки) обновить? ОЧЕНЬ ВАЖНО! Без WHERE обновятся все строки.
            
            -- Повысить зарплату сотруднику с id=101
            UPDATE employees
            SET salary = 80000
            WHERE id = 101;

            -- Увеличить всем зарплату на 10% (осторожно, без WHERE!)
            UPDATE employees
            SET salary = salary * 1.1;`;
        }
        // ✅ ⁡⁣⁣⁢DELETE ⁡⁢⁢⁢: Удаляет строки из таблицы.⁡
        {
            `DELETE FROM table_name
            WHERE condition; -- КАКУЮ строку (строки) удалить? ОЧЕНЬ ВАЖНО! Без WHERE удалятся все строки.
            
            -- Удалить сотрудника с id=101
            DELETE FROM employees
            WHERE id = 101;`;
        }
		// ✅ ⁡⁢⁢⁢Вставка данных⁡
		{
			`INSERT INTO employees(сотрудники) (id, name, department, salary, hire_date)
            VALUES (1, 'Иван Иванов', 'IT', 50000, '2023-01-15');`;
		}
		// ✅ ⁡⁢⁢⁢Обновление данных⁡
		{
			`UPDATE employees(сотрудники) 
            SET salary = 55000 
            WHERE id = 1;`;
		}
		// ✅ ⁡⁢⁢⁢Удаление данных⁡
		{
			`DELETE FROM employees(сотрудники) 
            WHERE id = 1;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢DCL (Data Control Language) — Язык управления доступом: Эти команды управляют правами доступа к данным.⁡
	{
		// ✅ ⁡⁣⁣⁢GRANT⁡ ⁡⁢⁢⁢: Предоставляет пользователям разрешения на выполнение определенных действий.⁡
		// ✅ ⁡⁣⁣⁢REVOKE⁡ ⁡⁢⁢⁢: Отзывает ранее выданные разрешения.⁡
	}
    // ☑️ ⁡⁣⁢⁢TCL (Transaction Control Language) — Язык управления транзакциями: Эти команды управляют транзакциями (группами операций, которые должны быть выполнены как единое целое).⁡
    {
		// ✅ ⁡⁣⁣⁢COMMIT⁡ ⁡⁢⁢⁢: Сохраняет все изменения, сделанные в текущей транзакции.⁡
		// ✅ ⁡⁣⁣⁢ROLLBACK⁡ ⁡⁢⁢⁢: Отменяет все изменения, сделанные в текущей транзакции.⁡
		// ✅ ⁡⁣⁣⁢BEGIN TRANSACTION⁡ ⁡⁢⁢⁢: Начинает новую транзакцию.⁡
	}
	// ☑️ ⁡⁣⁢⁢DQL (Data Query Language) - запросы данных⁡
	{
		// ✅ ⁡⁢⁢⁢Базовый SELECT⁡
		{
			`SELECT name, department, salary 
            FROM employees(сотрудники) 
            WHERE salary > 40000 
            ORDER BY salary DESC;`;
		}
		// ✅ ⁡⁢⁢⁢Выбор всех столбцов⁡
		{
			`SELECT * FROM employees(сотрудники);`;
		}
		// ✅ ⁡⁢⁢⁢Ограничение количества строк⁡
		{
			`SELECT * FROM employees(сотрудники) LIMIT 10;`;
		}
	}
}
// 🔳 ⁡⁢⁣⁣ОСНОВНЫЕ КОНСТРУКЦИИ SELECT⁡
{
	// ☑️ ⁡⁣⁢⁢WHERE - фильтрация условий⁡
	{
		// ✅ ⁡⁢⁢⁢Операторы сравнения⁡
		{
			`SELECT * FROM employees(сотрудники) WHERE salary = 50000;
            SELECT * FROM employees(сотрудники) WHERE salary > 40000;
            SELECT * FROM employees(сотрудники) WHERE salary BETWEEN 40000 AND 60000;`;
		}
		// ✅ ⁡⁢⁢⁢Логические операторы⁡
		{
			`SELECT * FROM employees(сотрудники) 
            WHERE department = 'IT' AND salary > 45000;

            SELECT * FROM employees(сотрудники) 
            WHERE department = 'IT' OR department = 'HR';

            SELECT * FROM employees(сотрудники) 
            WHERE department IN ('IT', 'HR', 'Finance');`;
		}
		// ✅ ⁡⁢⁢⁢Поиск по шаблону⁡
		{
			`SELECT * FROM employees(сотрудники) WHERE name LIKE 'Ив%';  -- начинается с "Ив"
            SELECT * FROM employees(сотрудники) WHERE name LIKE '%ов';  -- заканчивается на "ов"`;
		}
	}
	// ☑️ ⁡⁣⁢⁢ORDER BY - сортировка⁡
	{
		// ✅ ⁡⁢⁢⁢по возрастанию (по умолчанию)⁡
		{
			`SELECT name, hire_date 
            FROM employees(сотрудники) 
            ORDER BY hire_date ASC;`;
		}
		// ✅ ⁡⁢⁢⁡⁢⁢⁢по убыванию⁡
		{
			`SELECT name, salary 
            FROM employees(сотрудники) 
            ORDER BY salary DESC;`;
		}
		// ✅ ⁡⁢⁢⁢Сортировка по нескольким столбцам⁡
		{
			`SELECT department, name, salary 
            FROM employees(сотрудники) 
            ORDER BY department ASC, salary DESC;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢GROUP BY - группировка⁡
	{
		// ✅ ⁡⁢⁢⁢Агрегатные функции⁡
		{
			`SELECT department, COUNT(*) as employee_count
            FROM employees(сотрудники) 
            GROUP BY department;

            SELECT department, AVG(salary) as avg_salary
            FROM employees(сотрудники) 
            GROUP BY department;`;
		}
		// ✅ ⁡⁢⁢⁢HAVING - фильтрация групп⁡
		{
			`SELECT department, AVG(salary) as avg_salary
            FROM employees(сотрудники) 
            GROUP BY department 
            HAVING AVG(salary) > 45000;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢JOIN - объединение таблиц⁡
	{
		// ✅ ⁡⁢⁢⁢INNER JOIN (пересечение)⁡
		{
			`SELECT e.name, d.department_name
            FROM employees(сотрудники) e
            INNER JOIN departments d ON e.department_id = d.id;`;
		}
		// ✅ ⁡⁢⁢⁢LEFT JOIN (все из левой таблицы)⁡
		{
			`SELECT e.name, d.department_name
            FROM employees(сотрудники) e
            LEFT JOIN departments d ON e.department_id = d.id;`;
		}
		// ✅ ⁡⁢⁢⁢RIGHT JOIN (все из правой таблицы)⁡
		{
			`SELECT e.name, d.department_name
            FROM employees(сотрудники) e
            RIGHT JOIN departments d ON e.department_id = d.id;`;
		}
		// ✅ ⁡⁢⁢⁢FULL OUTER JOIN (все записи из обеих таблиц)⁡
		{
			`SELECT e.name, d.department_name
            FROM employees(сотрудники) e
            FULL OUTER JOIN departments d ON e.department_id = d.id;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢Подзапросы⁡
	{
		// ✅ ⁡⁢⁢⁢В WHERE⁡
		{
			`SELECT name, salary
            FROM employees(сотрудники)
            WHERE salary > (SELECT AVG(salary) FROM employees);`;
		}
		// ✅ ⁡⁢⁢⁢В FROM⁡
		{
			`SELECT dept_stats.department, dept_stats.avg_sal
            FROM (SELECT department, AVG(salary) as avg_sal 
                FROM employees(сотрудники) 
                GROUP BY department) as dept_stats
            WHERE dept_stats.avg_sal > 50000;`;
		}
		// ✅ ⁡⁢⁢⁢В SELECT (коррелированный)⁡
		{
			`SELECT name, salary,
                (SELECT AVG(salary) FROM employees e2 
                    WHERE e2.department = e1.department) as dept_avg
            FROM employees(сотрудники) e1;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢Работа с датами и строками⁡
	{
		// ✅ ⁡⁢⁢⁢Функции для дат⁡
		{
			`SELECT name, hire_date,
                EXTRACT(YEAR FROM hire_date) as hire_year,
                CURRENT_DATE - hire_date as days_worked
            FROM employees(сотрудники);`;
		}
		// ✅ ⁡⁢⁢⁢Строковые функции⁡
		{
			`SELECT UPPER(name) as upper_name,
                LENGTH(name) as name_length,
                SUBSTRING(name FROM 1 FOR 3) as first_three_chars
            FROM employees(сотрудники);`;
		}
	}
	// ☑️ ⁡⁣⁢⁢Оконные функции⁡
	{
		// ✅ ⁡⁢⁢⁢Ранжирование⁡
		{
			`SELECT name, department, salary,
                RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,
                ROW_NUMBER() OVER (ORDER BY salary DESC) as overall_rank
            FROM employees(сотрудники);`;
		}
		// ✅ ⁡⁢⁢⁢Скользящее среднее⁡
		{
			`SELECT name, hire_date, salary,
                AVG(salary) OVER (ORDER BY hire_date 
                ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
            FROM employees(сотрудники);`;
		}
	}
	// ☑️ ⁡⁣⁢⁢Объединение результатов (UNION)⁡
	{
		// ✅ ⁡⁢⁢⁢UNION (уникальные строки)⁡
		{
			`SELECT name FROM current_employees
            UNION
            SELECT name FROM former_employees;`;
		}
		// ✅ ⁡⁢⁢⁢UNION ALL (все строки)⁡
		{
			`SELECT name FROM it_employees
            UNION ALL
            SELECT name FROM hr_employees;`;
		}
	}
	// ☑️ ⁡⁣⁢⁢Практические примеры
	{
		// ✅ ⁡⁢⁢⁢Пример 1: Анализ зарплат по отделам⁡
		{
			`SELECT 
                department,
                COUNT(*) as employee_count,
                ROUND(AVG(salary), 2) as avg_salary,
                MAX(salary) as max_salary,
                MIN(salary) as min_salary
            FROM employees
            WHERE hire_date > '2020-01-01'
            GROUP BY department
            HAVING COUNT(*) > 5
            ORDER BY avg_salary DESC;`;
		}
		// ✅ ⁡⁢⁢⁢Пример 2: Поиск сотрудников с максимальной зарплатой в отделе⁡
		{
			`SELECT e.name, e.department, e.salary
            FROM employees e
            WHERE e.salary = (SELECT MAX(salary) 
            FROM employees e2 
            WHERE e2.department = e.department);`;
		}
		// ✅ ⁡⁢⁢⁢Пример 3: Ежемесячная статистика найма⁡
		{
			`SELECT 
                EXTRACT(YEAR FROM hire_date) as year,
                EXTRACT(MONTH FROM hire_date) as month,
                COUNT(*) as hires_count
            FROM employees
            GROUP BY year, month
            ORDER BY year, month;`;
		}
	}
    // ☑️ ⁡⁣⁢⁢Советы по построению запросов⁡
    {
		// ✅ ⁡⁢⁢⁢Начинайте с FROM - определите основные таблицы⁡
		// ✅ ⁡⁢⁢⁢Добавляйте JOIN - подключите связанные таблицы⁡
		// ✅ ⁡⁢⁢⁢Применяйте WHERE - отфильтруйте данные⁡
		// ✅ ⁡⁢⁢⁢Группируйте с GROUP BY - если нужны агрегаты⁡
		// ✅ ⁡⁢⁢⁢Фильтруйте группы с HAVING⁡
		// ✅ ⁡⁢⁢⁢Выбирайте поля в SELECT⁡
		// ✅ ⁡⁢⁢⁢Сортируйте с ORDER BY⁡
		// ✅ ⁡⁢⁢⁢Ограничивайте вывод с LIMIT⁡
	}
}