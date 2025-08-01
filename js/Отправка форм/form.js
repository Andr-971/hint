
//* Cоздание объекта FormData
var formData = new FormData();
//* Cоздание объекта FormData и добавлением в него всех полей формы subscribe
var formData = new FormData(document.forms.subscribe);
//* Один из наиболее используемых методов – это append (поддерживается большинством браузеров). Этот метод добавляет в объект FormData новую порцию данных (ключ-значение). При этом если указанного ключа нет в объекте, то данный метод добавит в FormData новый элемент ("ключ-значение").
formData.append('key', 'value1'); //"key":"value1"
//* В противном случае если указанный ключ есть уже у объекта FormData, то данный метод запишет его значение в качестве следующего значения этого ключа. После этого, с указанным ключом уже будет связано несколько значений (массив значений).
formData.append('key', 'value2'); //"key":["value1", "value2"]
//* Другой метод для добавления данных в объект FormData – это set (поддерживается не всеми браузерами). Отличается данный метод от append только тем, что он не добавляет ещё одно значение для ключа (если оно уже есть). Он просто изменяет текущее значение.
formData.set('key', 'value3'); //"key":"value3"
//* Для удаления данных из объекта FormData предназначен метод delete. Он убирает элемент из объекта FormData по имени ключа.
formData.delete("key");
//* Метод has позволяет поверить в объекте FormData наличия указанного ключа.
// данный метод вернёт true, если в FormData есть элемент с ключом key
// в противном случае он вернёт значение false
formData.delete('key');
//* Если вам необходимо узнать значение, связанное с ключом, то можно воспользоваться методом get. Если с ключом связано несколько значений, то данный метод вернёт первое из набора. Кроме метода get, есть ещё метод getAll. Он позволяет получить массив значений, связанных с указанным ключом.
// возвращает первое значение связанное с ключом key
formData.get('key'); // например: "value1"
// получить массив значений связанных с ключом
formData.getAll('key'); // например: ["value1","value2"]
//* Посмотреть весь массив
var fd = new FormData();
fd.append("text", "abc");
fd.append("file0", new Blob(["abcd"]));
fd.append("file1", new File(["efghi"], "file.txt"));
var res = Array.from(fd.entries(), ([key, prop]) => ({
	[key]: {
		ContentLength: typeof prop === "string" ? prop.length : prop.size,
	},
}));
console.log(res);