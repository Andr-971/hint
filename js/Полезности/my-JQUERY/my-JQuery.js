// Создаем основную функцию, которая будет выбирать элементы
function SimpleJQ(selector) {
    // Находим элементы DOM
    const elements = document.querySelectorAll(selector);

    // Возвращаем объект с методами для работы с элементами
    return {
        // Метод для работы с CSS стилями
        css: function (property, value) {
            // Если передали объект свойств
            if (typeof property === "object") {
                Object.entries(property).forEach(([key, val]) => {
                    elements.forEach((el) => (el.style[key] = val));
                });
                return this;
            }

            // Если получаем значение
            if (value === undefined) {
                return elements[0] ? elements[0].style[property] : null;
            }

            // Если устанавливаем значение
            elements.forEach((el) => (el.style[property] = value));
            return this;
        },

        // Метод для работы с HTML содержимым
        html: function (content) {
            if (content === undefined) {
                return elements[0] ? elements[0].innerHTML : null;
            }
            elements.forEach((el) => (el.innerHTML = content));
            return this;
        },

        // Метод для добавления обработчиков событий
        on: function (event, callback) {
            elements.forEach((el) => el.addEventListener(event, callback));
            return this;
        },

        // Метод для добавления классов
        addClass: function (className) {
            elements.forEach((el) => el.classList.add(className));
            return this;
        },

        // Метод для добавления/удаления классов
        toggle: function (className) {
            elements.forEach((el) => el.classList.toggle(className));
            return this;
        },

        // Метод для удаления классов
        removeClass: function (className) {
            elements.forEach((el) => el.classList.remove(className));
            return this;
        },
    };
}

// Создаем глобальную переменную $
window.$ = function (selector) {
    return new SimpleJQ(selector);
};

// Добавляем метод для обработки готовности документа
$.ready = function (callback) {
    if (document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
};
// Использование jQuery-подобной библиотеки
// $.ready(() => {
    // $(".my-element")
    // 	.css("color", "blue")
    // 	.addClass("active")
    // 	.on("mouseover", () => console.log("Hovered!"))
    // 	.html("New content");
//     let text = "Добавил див с спаном внутри него";
//     let content = `
//     <div class="block">
//         <span class="span">${text}</span>
//     </div>`;
//     $(".my-elem")
// 		.html(content)
// 		.css("cursor", "pointer")
// 		.on("click", () => {
// 			$(".my-elem").toggle("active");
// 		});
    
// });
