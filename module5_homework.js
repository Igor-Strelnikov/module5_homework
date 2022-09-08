// Задание 1   5.3 Логический тип и ветвление


const value = prompt (`Введите значение`);
const i = +value;
console.log(typeof i);

// Задание 2  5.3 Логический тип и ветвление


let a = 'true';
switch (typeof(a)) {
  case 'string':
    console.log(a + ' - строка');
    break;
  case 'boolean':
    console.log(a + ' - логический тип');
    break;
  case 'number':
    console.log(a + ' - число');
    break;
  default:
    console.log('Тип а не определен');
}

// Задание 3   5.4 Строки. Числа

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
  }
  reverseString('hello');

//   Задание 4  5.4 Строки. Числа

console.log (Math.floor(Math.random() * 101));

// Задание 5 5.5 Массивы и базовые методы работы с ними. Практикуемся с командой debugger

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
console.log(arr);

// Задание 6  5.6 Циклы

function checkArray(arr, curr = 0) {
  if (arr.length < 2 || curr == arr.length-1) {
    return true;
  }
  
  return typeof arr[curr] !== typeof arr[curr+1] 
    ? false 
    : checkArray(arr, ++curr)
}

console.log(checkArray([0, 1, 2, 3]))
console.log(checkArray([0, '1', 2, 3]))

// Задание 7 -   5.6 Циклы

// Задание 8  5.7 Ассоциативные массивы

let map = new Map();
map.set(true, 12);
map.set(1996, `data`);
map.set('ola ola', false);

console.log(map);

console.log(map.get(true));
console.log(map.get(1996));
console.log(map.get('ola ola'));

console.log(map.size);

console.log(map.keys());
console.log(map.values());