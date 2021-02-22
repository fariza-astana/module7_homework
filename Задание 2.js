//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let sun = {};

function isEmpty(obj) {
  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
}
}
isEmpty(sun);


