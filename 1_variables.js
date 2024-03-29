let variable;
//  Переменная variable
variable;

//  Когда пишут код ниже
//  это означает - "Объявить переменную var1/var2/var3"
let var1;
var var2;
const var3;

//  Когда переменная принимает какое-либо значние, говорят "присвоить значение переменной var2"
//  или "прировнять var2 к значению". Значение - это те данные, которые стоят справа от равно
//  Если переменная принимает новое значение впервый раз после объявления то это называется "инициализация"

//  Инициализация
var2 = 5;
console.log(var2);

//  Присвоение
var2 = 7;

console.log('B');

//  Когда пишут код ниже
//  говорят "Объявили переменную var4/var5 и проинициализировали ее"
let var4 = 1.0;
let var5 = 'a';

//  Переменные объявленные с помощью ключевого слова const нельзя менять или присвоить новое значение.
//  Поэтому переменной объявленной с const "сразу инициализируются во время объявления"
//  Любой другой переменной можно присвоить новое значение, даже на основе собственного

var4 = var4 + 4;

//  Правильно с const
const acc = 9.8;

//  Неправильно с const
const acc2;
acc2 = 9.8;         //  Ошибка

//  Внимание!!! Исключения!!
//  Для объектов и массивов const не запрещает их изменять. const по отношению к массивам и объектам 
//  запрещает именно операцию присвоения
//  Пример
let obj = {};
obj.number1 = 1;
obj.number2 = 2;

let arr = [];
arr[0] = 9;
arr[1] = 8;

//  Любая переменная может быть любым типом. Переменные объявленные с помощью var или let могут менять
//  тип данных своих значений
//  Пример
let a = 1;      //  число
a = 'текст';    //  присвоили тип данных Строка
a = {
    'text': a
};              //  Присвоили тип данных Object

a = function () {

} //  присвоили тип данных function

/**
 * ЗАДАНИЯ!
 */

/**
 * № 1. Выполните действия описанные ниже.
 *      Если есть ошибки объясните их и почему это ошибки
 * 
 * 1) Объявите переменную text с помощью let
 * 2) Проинициализируйте переменную text любой строкой
 * 3) Объявите переменную number с помощью const и проинициализурейте ее любым числом
 * 4) Присвоей переменной text значение равное текущему значению text и значению переменной number
 * 5) Присвойте переменной number новое числовое значение (9)
 */

 /**
  * № 2. Опишите словестно операции которые происходят ниже
  */

let b;
let c = 2;
b = c;
b = b + 1;
const d = 4;
b = b == d;
var f = b;