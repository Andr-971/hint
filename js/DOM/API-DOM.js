// 🔍 ⁡⁢⁣⁣ПОИСК ЭЛЕМЕНТОВ (SELECTION)⁡
{
    // ⭐ ⁡⁣⁣⁢Методы для нахождения элементов в документе.⁡
    document.getElementById(id) // ⁡⁣⁣⁢— находит элемент по уникальному ID.⁡
    document.querySelector(selector) // ⁡⁣⁣⁢— находит первый элемент по CSS-селектору.⁡
    document.querySelectorAll(selector) // ⁡⁣⁣⁢— находит все элементы по CSS-селектору (возвращает NodeList).⁡
    document.getElementsByClassName(clas) // ⁡⁣⁣⁢— находит элементы по имени класса (живая коллекция).⁡
    document.getElementsByTagName(tag) // ⁡⁣⁣⁢— находит элементы по тегу (живая коллекция).⁡
    element.closest(selector) // ⁡⁣⁣⁢— ищет ближайшего предка (включая сам элемент), соответствующего селектору.⁡
}
// ⁡⁢⁣⁣🛠 СОЗДАНИЕ И КЛОНИРОВАНИЕ (CREATION)⁡
{
    // ⭐ ⁡⁣⁣⁢Методы для создания новых узлов.⁡  
    document.createElement(tag) // ⁡⁣⁣⁢— создает новый элемент с указанным тегом.⁡
    document.createTextNode(text) // ⁡⁣⁣⁢— создает текстовый узел.⁡
    document.createDocumentFragment() // ⁡⁣⁣⁢— создает легкий контейнер для групповой вставки элементов.⁡
    element.cloneNode(deep) // ⁡⁣⁣⁢— клонирует элемент (если true, то со всеми дочерними).⁡
}
// ➕ ⁡⁢⁣⁣ВСТАВКА В DOM (INSERTION)⁡
{
    // ⭐ ⁡⁣⁣⁢Методы для добавления элементов на страницу.⁡
    parent.append(...nodes) // ⁡⁣⁣⁢— вставляет узлы в конец родителя.⁡
    parent.prepend(...nodes) // ⁡⁣⁣⁢— вставляет узлы в начало родителя.⁡
    element.before(...nodes) // ⁡⁣⁣⁢— вставляет узлы перед элементом.⁡
    element.after(...nodes) // ⁡⁣⁣⁢— вставляет узлы после элемента.⁡
    parent.appendChild(node) // ⁡⁣⁣⁢— добавляет узел в конец списка детей (старый стандарт).⁡
    parent.insertBefore(node, ref) // ⁡⁣⁣⁢— вставляет узел перед указанным дочерним ref.⁡
}
// ✏️ ⁡⁢⁣⁣ИЗМЕНЕНИЕ СОДЕРЖИМОГО И АТРИБУТОВ (MODIFICATION)⁡
{
    // ⭐ ⁡⁣⁣⁢Свойства и методы для изменения данных элемента.⁡
    element.innerHTML = html // ⁡⁣⁣⁢— свойство: устанавливает или получает HTML внутри элемента.⁡
    element.textContent = text // ⁡⁣⁣⁢— свойство: устанавливает или получает только текст (без тегов).⁡
    element.innerText = text // ⁡⁣⁣⁢— свойство: текст с учетом стилей (видимый пользователю).⁡
    element.setAttribute(name, value) // ⁡⁣⁣⁢— устанавливает значение атрибута.⁡
    element.getAttribute(name) // ⁡⁣⁣⁢— получает значение атрибута.⁡
    element.removeAttribute(name) // ⁡⁣⁣⁢— удаляет атрибут.⁡
    element.hasAttribute(name) // ⁡⁣⁣⁢— проверяет наличие атрибута.⁡
    element.replaceWith(...nodes) // ⁡⁣⁣⁢— заменяет элемент на новые узлы.⁡
}
// ⁡⁢⁣⁣🗑 УДАЛЕНИЕ (DELETION)⁡
{
    // ⭐ ⁡⁣⁣⁢Методы для очистки DOM.⁡
    element.remove() // ⁡⁣⁣⁢— удаляет элемент из дерева DOM.⁡
    parent.removeChild(child) // ⁡⁣⁣⁢— удаляет дочерний элемент (старый стандарт).⁡
    element.innerHTML = '' // ⁡⁣⁣⁢— свойство: быстрая очистка всего содержимого внутри.⁡
}
// 🧭 ⁡⁢⁣⁣НАВИГАЦИЯ ПО ДЕРЕВУ (TRAVERSAL)⁡
{
    // ⭐ ⁡⁣⁣⁢Свойства для перемещения между родственными элементами.⁡
    element.parentElement // ⁡⁣⁣⁢— свойство: возвращает родителя элемента.⁡
    element.children // ⁡⁣⁣⁢— свойство: коллекция всех дочерних элементов.⁡
    element.firstElementChild // ⁡⁣⁣⁢— свойство: первый дочерний элемент.⁡
    element.lastElementChild // ⁡⁣⁣⁢— свойство: последний дочерний элемент.⁡
    element.nextElementSibling // ⁡⁣⁣⁢— свойство: следующий соседний элемент.⁡
    element.previousElementSibling // ⁡⁣⁣⁢— свойство: предыдущий соседний элемент.⁡
}
// 🎨 ⁡⁢⁣⁣СТИЛИ И КЛАССЫ (STYLES & CLASSES)⁡
{
    // ⭐ ⁡⁣⁣⁢Управление визуальным представлением.⁡
    element.classList.add(clas) // ⁡⁣⁣⁢— добавляет класс.⁡
    element.classList.remove(clas) // ⁡⁣⁣⁢— удаляет класс.⁡
    element.classList.toggle(clas) // ⁡⁣⁣⁢— добавляет класс, если нет, и удаляет, если есть.⁡
    element.classList.contains(clas) // ⁡⁣⁣⁢— проверяет наличие класса (возвращает boolean).⁡
    window.getComputedStyle(element) // ⁡⁣⁣⁢— возвращает объект со всеми вычисленными стилями элемента.⁡
    element.style.property = value // ⁡⁣⁣⁢— свойство: установка inline-стиля (например, style.color).⁡
}
// 📏 ⁡⁢⁣⁣РАЗМЕРЫ И ПРОКРУТКА (DIMENSIONS & SCROLL)⁡
{
    // ⭐ ⁡⁣⁣⁢Получение геометрии и управление скроллом.⁡
    element.getBoundingClientRect() // ⁡⁣⁣⁢— возвращает координаты и размеры элемента относительно окна.⁡
    window.scrollBy(x, y) // ⁡⁣⁣⁢— прокручивает окно на относительное количество пикселей.⁡
    window.scrollTo(x, y) // ⁡⁣⁣⁢— прокручивает окно к абсолютным координатам.⁡
    element.scrollIntoView(options) // ⁡⁣⁣⁢— прокручивает страницу до видимости элемента.⁡
    element.offsetWidth // ⁡⁣⁣⁢— свойство: внешняя ширина элемента (включая границы).⁡
    element.offsetHeight // ⁡⁣⁣⁢— свойство: внешняя высота элемента.⁡
    element.clientWidth // ⁡⁣⁣⁢— свойство: внутренняя ширина (без скроллбара и границ).⁡
    element.clientHeight // ⁡⁣⁣⁢— свойство: внутренняя высота.⁡
}
// ⚡ ⁡⁢⁣⁣СОБЫТИЯ (EVENTS)⁡
{
    // ⭐ ⁡⁣⁣⁢Управление реакцией на действия пользователя.⁡
    element.addEventListener(event, handler) // ⁡⁣⁣⁢— вешает обработчик события.⁡
    element.removeEventListener(event, handler) // ⁡⁣⁣⁢— снимает обработчик события.⁡
    element.dispatchEvent(event) // ⁡⁣⁣⁢— программно запускает событие на элементе.⁡
    event.preventDefault() // ⁡⁣⁣⁢— метод внутри обработчика: отменяет стандартное действие браузера.⁡
    event.stopPropagation() // ⁡⁣⁣⁢— метод внутри обработчика: останавливает всплытие события.⁡
}
// 📄 ⁡⁢⁣⁣ДОКУМЕНТ И ОКНО (DOCUMENT & WINDOW)⁡
{
    // ⭐ ⁡⁣⁣⁢Общая информация и управление.⁡
    document.open() // ⁡⁣⁣⁢— открывает документ для записи (устаревшее).⁡
    document.close() // ⁡⁣⁣⁢— закрывает поток записи документа.⁡
    document.write(html) // ⁡⁣⁣⁢— пишет HTML прямо в поток документа (устаревшее).⁡
    window.alert(message) // ⁡⁣⁣⁢— показывает модальное окно с сообщением.⁡
    window.confirm(message) // ⁡⁣⁣⁢— показывает окно с подтверждением (OK/Cancel).⁡
    window.prompt(message) // ⁡⁣⁣⁢— показывает окно для ввода текста.⁡
    window.location.reload() // ⁡⁣⁣⁢— перезагружает текущую страницу.⁡
    window.history.back() // ⁡⁣⁣⁢— переход назад в истории браузера.⁡
    window.history.forward() // ⁡⁣⁣⁢— переход вперед в истории браузера.⁡
}