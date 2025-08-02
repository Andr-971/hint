
// 🚀 ⁡⁢⁣⁢ШПАРГАЛКА ПО TAILWIND CSS (V3.0+)⁡
{
	// 📐 ⁡⁢⁣⁣ ⁡⁢⁣⁣LAYOUT⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// container	                                    Центрированный контейнер с max-width
		// block / inline	                                Блочный / строчный элемент
		// flex / inline-flex	                            Flex-контейнер
		// grid / inline-grid	                            Grid-контейнер
		// hidden	                                        Скрыть элемент (display: none)
		// static / fixed / absolute / relative / sticky	Позиционирование
	}
	// 🔄 ⁡⁢⁣⁣ FLEXBOX⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// flex-row / flex-col	                            Направление (row/column)
		// flex-wrap	                                    Перенос элементов
		// justify-start/center/end/between/around	        Выравнивание по главной оси
		// items-start/center/end/stretch	                Выравнивание по поперечной оси
		// gap-{size}	                                    Отступы между элементами (0-96)
	}
	// 🔳 ⁡⁢⁣⁣ GRID⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// grid-cols-{n}	                                Количество колонок (1-12)
		// grid-rows-{n}	                                Количество строк (1-6)
		// col-span-{n}	                                    Объединение колонок (1-12)
		// row-span-{n}	                                    Объединение строк (1-6)
		// gap-{size}	                                    Отступы (0-96)
		// gap-x-{size}	                                    По оси X (0-96)
		// gap-y-{size}	                                    По оси Y (0-96)
    }
    // 📝 ⁡⁢⁣⁣ТЕКСТ⁡
    {
		// ⁡⁣⁣⁡⁣⁣⁢КЛАСС	                                           ОПИСАНИЕ⁡
		// text-{size}	                                    Размер текста (xs, sm, base, lg, xl...)
		// font-{weight}	                                Жирность (thin, normal, medium, light, bold...)
		// text-{color}	                                    Цвет текста (slate-500, red-400...)
		// text-left/center/right/justify	                Выравнивание текста
		// underline / line-through	                        Декорации
		// italic / not-italic	                            Курсив
		// uppercase / lowercase / capitalize	            Регистр
		// leading-{size}	                                Высота строки (3-10)
		// tracking-{size}	                                Кернинг (tighter, wide...)
	}
	// 📏 ⁡⁢⁣⁣ SPACING (ОТСТУПЫ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ПРИМЕРЫ ЗНАЧЕНИЙ⁡
		// m-{size} / p-{size}	                            margin/padding (0-96, auto)
		// mx-{size} / my-{size}	                        Горизонтальные/вертикальные отступы
		// mt-{size} / mb-{size} / ml-{size} / mr-{size}	Отступы по сторонам
		// space-{x/y}-{size}	                            Отступы между элементами
	}
	// 📦 ⁡⁢⁣⁣ SIZING (РАЗМЕРЫ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// w-{size} / h-{size}	                            Ширина/высота (0-96, full(100%), screen, auto, 1/2, 10/12)
		// min-w-{size}	                                    Минимальная ширина
		// max-w-{size}	                                    Максимальная ширина (xs, sm, md, lg, xl, 2xl...)
		// min-h-{size}	                                    Минимальная высота
		// max-h-{size}	                                    Максимальная высота
	}
	// 🎨 ⁡⁢⁣⁣ BACKGROUNDS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// bg-{color}	                                    Цвет фона (slate-100, blue-500...)
		// bg-gradient-{type}	                            Градиенты (to-r, to-br...)
		// bg-cover / bg-contain	                        Размер фона
		// bg-center / bg-top	                            Позиция фона
		// bg-repeat	                                    Не повторять фон
		// bg-no-repeat	                                    Повтор фона
	}
	// 🖼️ ⁡⁢⁣⁣ BORDERS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// border / border-{size}	                        Толщина границы (0-8)
		// border-{color}	                                Цвет границы
		// rounded-{size}	                                Скругление углов (none, sm, md, lg, xl, full, [10px_0px_0px_10px]
		// border-t / border-r	                            Границы по сторонам
	}
	// ✨ ⁡⁢⁣⁣ EFFECTS⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// shadow-{size}	                                Тень (sm, md, lg, xl, 2xl, none)
		// opacity-{value}	                                Прозрачность (0-100)
		// mix-blend-{mode}	                                Режим наложения
	}
	// 🖌️ ⁡⁢⁣⁣ FILTERS (ФИЛЬТРЫ)
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// blur-{size}	                                    Размытие (sm, md, lg...)
		// brightness-{value}	                            Яркость (90, 100, 110...)
		// contrast-{value}	                                Контраст (50, 100, 150...)
		// grayscale-{value}	                            Оттенок серого (0, 100...)
		// invert-{value}	                                Инверсия (0, 100...)
		// saturate-{value}	                                Насыщенность (50, 100, 150...)
		// sepia-{value}	                                Сепия (0, 100...)
	}
	// 🚦 ⁡⁢⁣⁣ ⁡⁢⁣⁣TRANSITIONS & ANIMATION(АНИМАЦИЯ)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// transition	                                    Базовый переход
		// duration-{ms}	                                Длительность (75, 100, 300...)
		// ease-{type}	                                    Тайминг-функция (linear, in-out...)
		// animate-{type}	                                Анимация (spin, ping, bounce...)
		// animate-[keyframes]	                            Анимация (animate-spin, animate-ping, animate-bounce...)
	}
	// 🎯 ⁡⁢⁣ ⁡⁢⁣⁣INTERACTIVITY(НАВЕДЕНИЕ КУРСОР И.Д.)⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// hover:...	                                    Стили при наведении
		// focus:...	                                    Стили при фокусе
		// active:...	                                    Стили при нажатии
		// cursor-{type}	                                Тип курсора (pointer, not-allowed...)
		// select-none	                                    Запрет выделения текста
	}
	// 🔧 ⁡⁢⁣ ⁡⁢⁣⁣SVG⁡
	{
		// ⁡⁣⁣⁢КЛАСС	                                        ОПИСАНИЕ⁡
		// fill-{color}	                                    Цвет заливки
		// stroke-{color}	                                Цвет обводки
		// stroke-{width}	                                Толщина обводки (1-2)
	}
	// 📱 ⁡⁢⁣⁣ RESPONSIVE (ПРИМЕРЫ)⁡
    {
        // ☑️ ⁡⁣⁢⁢Контрольные точки ширины⁡
        {
            //  sm:{class} - для минимальной ширины экрана 640px.
            //  md:{class} - для минимальной ширины экрана 768px.
            //  lg:{class} - для минимальной ширины экрана 1024px.
            //  xl:{class} - для минимальной ширины экрана 1280px.
            //  2xl:{class} - для минимальной ширины экрана 1536px.
        }
        // ☑️ ⁡⁣⁢⁢Пример⁡
        {
            // Мобильный → Десктоп
            <>
                <div class="text-sm md:text-base lg:text-lg">{/* Контент */}</div>
                {/* Скрыть на мобильных */}
                <div class="hidden md:block">{/* Контент */}</div>
            </>;
        }
	}
    // 💡 ⁡⁢⁣⁣ПОЛЕЗНОЕ⁡
    {
		// ☑️ ⁡⁣⁢⁢Кастомные значения⁡
		{
			// w-[200px] → произвольное значение через []
			// m-[20px_auto] → нижнее подчёркивание это пробел
		}
		// ☑️ ⁡⁣⁢⁢!important⁡
		{
			// Добавьте ! в конце: mt-4!
		}
		// ☑️
        // ⚠️ ⁡⁣⁢⁢Все классы работают с префиксами состояний⁡
        {
			// hover:bg-blue-700, focus:ring-2, dark:text-white, max-md:hidden
		}
	}
}