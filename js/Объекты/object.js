
const settings = {
    country: "Country",
    get birthplace() { return this.country },
    getBirthplace() { return this.country},
}
console.log(settings.birthplace);  // выведет "Country"
console.log(settings.getBirthplace());  // выведет "Country"
//! МЕТОДЫ МАССИВОВ
//* object.hasOwnProperty("property") возвращает логическое значение, указывающее, содержит ли объект указанное свойство.