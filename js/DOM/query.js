
//! ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ
getElementById("value") //* выбирает элемент, у которого атрибут id равен value. Если элемента с таким идентификатором нет, то возвращается null
getElementsByTagName("SPAN") //* выбирает все элементы, у которых тег равен SPAN. Возвращает список элементов (список типа NodeList), который аналогичен массиву.
tagName //* Оно возвращает название тега в верхнем регистре. 
getElementsByClassName("value") //* выбирает все элементы, которые имеют класс value. Возвращает список NodeList
getElementsByName("div") //* выбирает все элементы, которые называются div. Возвращает список NodeList
querySelector(`src[href="http://"]`) //* выбирает первый элемент, который соответствует css-селектору value
querySelectorAll(".value") //* выбирает все элементы, которые соответствуют css-селектору value(class="value"). Возвращает список NodeList
//! ЯВЛЯЕТСЯ ЛИ CHILDREN ПОТОМКОМ PARENT
const parentElement = document.querySelector(".parent");
const childElement = document.querySelector(".child");
if (parentElement.contains(childElement)) {
	console.log("Элемент является родителем");
} else {
	console.log("Элемент НЕ является родителем");
}
if (childElement.parentElement === parentElement) {
	console.log("Элемент является прямым родителем");
} else {
	console.log("Элемент НЕ является прямым родителем");
}
if (parentElement.contains(childElement)) {
	console.log("Элемент является предком");
} else {
	console.log("Элемент НЕ является предком");
}
//! ДВИЖЕНИЕ ПО DOM
let elem = document.querySelector(".element");
elem.parentElement //* - родитель
elem.children; //* - дети
elem.firstElementChild; //* - первый ребёнок
elem.lastElementChild; //* - последний ребёнок
elem.previousElementSibling; //* — предыдущий элемент
elem.nextElementSibling; //* - следующий соседний элемент
//! РАБОТА С DOM ЭЛЕМЕНТАМИ
//? КЛАССЫ, АТРИБУТЫ, СТИЛИ
document.element.classList.contains("class"); //* существует ли класс, есть true нет false 
document.element.classList.add("class"); //* добавить класс 
document.element.classList.remove("class"); //* удалить класс 
document.element.classList.toggle("class"); //* добавляет если не существует, удаляет если существует
document.element.classList.replace("class", "new_class"); //* заменяет на новый
document.element.hasAttributes() //* возвращает true, если у элемента имеются какие-либо атрибуты
document.element.getAttributesNames() //* возвращает названия атрибутов элемента
document.element.getAttribute("data-id") //* возвращает значение указанного атрибута
document.element.setAttribute("data-id", "one"); //* добавляет указанные атрибут и его значение к элементу
document.element.removeAttribute("data-id"); //* удаляет указанный атрибут
document.element.hasAttribute("data-id"); //* возвращает true при наличии у элемента указанного атрибута
document.element.toggleAttribute("data-id", "one"); //* добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
document.element.dataset.id; //* добавляет "data-id"
document.element.style.color = red; //* добавляет стили, свойства кэмелкейс fontSize
document.element.style.cssText = `color: blue; font-size: 20px;`; //* добавляет стили, но может перезаписать
document.element.hidden = true; //* Скроет элемент
document.element.hidden = false; //* Элемент станен видимым
//? РАЗМЕРЫ, ОРЕНТАЦИЯ
document.element.offsetWidth; //* Возвращают ширину, включая отступы и границу, но не включая поля. Значение вычисляется в пикселях и доступно только для чтения.
document.element.offsetHeight; //* Возвращают высоту...
document.element.getBoundingClientRect(); //* Возвращает объект, содержащий все размеры элемента и размеры его положения относительно области просмотра
document.element.clientWidth; //* Содержат ширину, элемента, включая отступы, но исключая границы. Возвращаемое значение является целым числом и доступно только для чтения
document.element.clientHeight; //* Содержат высоту, элемента, включая отступы, но исключая границы. Возвращаемое значение является целым числом и доступно только для чтения.
document.element.textContent; //* Позволяет считывать или задавать текстовое содержимое элемента.
document.element.innerText; //* Позволяет считывать или задавать текстовое содержимое элемента и стили.
document.element.innerHTML; //* innerHTML предназначен для установки или получения HTML разметки элемента.
document.element.outerHTML; //* устанавливает или возвращает HTML контент, представляющий сам элемент и его дочерние элементы.
document.element.querySelector('#elementId').remove(); //* элемент просто исчезает
document.element.querySelector("#elementId").removeChild(); //* элемент удаляется деликатно и с уважением
//? УДАЛЕНИЕ, СОЗДАНИЕ
document.element.remove(); //* удаляет элемент напрямую. Пример использования: const element = document.getElementById('myElement'); element.remove(). Однако он не поддерживается в очень старых браузерах. 3
document.element.parentNode.removeChild(element); //* удаляет указанный дочерний элемент из его родительского элемента в DOM. Чтобы использовать его, сначала нужно выбрать родительский элемент, затем вызвать removeChild() для него, передав дочерний элемент в качестве аргумента. Пример использования: const element = document.getElementById('myElement'); element.parentNode.removeChild(element). 53
//* Если работают с динамически созданными элементами, перед удалением стоит проверить их существование, чтобы избежать ошибок, если элемент ещё не создан или уже был удалён
elemDocument.insertAdjacentHTML("afterBegin", `<span></span>`);
// afterBegin в начало Node
// beforeEnd в конец Node
// beforeBegin до Node
// afterEnd после Node
elemDocument.prepend(elem);
// .prepend(elem) в начало Node
// .append(elem) в конец Node
// .before(elem) до Node
// .after(elem) после Node
// .replaceWith(elem) заменяет Node
elem.innerHTML = `<span></span>`;