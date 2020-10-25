/**
* Переменные 
* let - объявление переменной, которая может изменяться
* const - объявление переменной, которая не может изменяться(константа) 
*/

// let lastName, secondName
// const age

// lastName = 'John'
// age = 19
// secondName = 'Johnson'

// alert(lastName)
// alert(age)
// alert(secondName)



/**
 * Строки. Работа со строками
 */

// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// console.log(phrase);

// let name = "Иван";

// Вставим переменную
// alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
// alert( `результат: ${1 + 2}` ); // результат: 3



/**
* Оператор typeof - позволяет узнать, какой тип переменных в каком-либо
* объекте
*/


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)



/**
 * Взаимодействие: alert, prompt, confirm 

 * Функция prompt принимает два аргумента
 * result = prompt(title, [default]); - Этот код отобразит модальное окно с текстом, 
 * полем для ввода текста и кнопками OK/Отмена. 
 * 
 * Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
 * Результат – true, если нажата кнопка OK. В других случаях – false.
 */


// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!


// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK



/** 
 * Преобразование типов
 * 
*/

//строковое преобразование

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string

// //числовое преобразование
// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number


/**
 * Базовые операторы, математика
 */

// let x = 1;

// x = -x;
// alert( x ); // -1, применили унарный минус 

/**
 * Математика
    Поддерживаются следующие математические операторы:

        Сложение +
        Вычитание -
        Умножение *
        Деление /
        Взятие остатка от деления %
        Возведение в степень **
 */

// alert( 5 % 2 ); // 1, остаток от деления 5 на 2
// alert( 8 % 3 ); // 2, остаток от деления 8 на 3

// alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)

// alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
// alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)


// Сложение строк при помощи бинарного +

// let s = "моя" + "строка";
// alert(s); // моястрока

// Укорочение мат. операторов

// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14



/**
 * Операторы сравнения
 */

// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно)

// alert( 'Я' > 'А' ); // true
// alert( 'Коты' > 'Кода' ); // true
// alert( 'Сонный' > 'Сон' ); // true

// Сравнение разных типов

// alert( '2' > 1 ); // true, строка '2' становится числом 2
// alert( '01' == 1 ); // true, строка '01' становится числом 1

// Строгое равентво

// alert( null === undefined ); // false

// Не строгое равентво

// alert( null == undefined ); // true



/**
 * Конструкция if ... else
 */

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }

//else if

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

// Несколько операторов "?"

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

/**
 * Так называемый «условный» оператор «вопросительный знак» позволяет 
 * нам сделать это более коротким и простым способом.
 * Оператор представлен знаком вопроса ?. Его также называют «тернарный», так как 
 * этот оператор, единственный в своём роде, имеет три аргумента.
Синтаксис:

        let result = условие ? значение1 : значение2;
 */

// Иногда оператор «вопросительный знак» ? используется в качестве замены if:

// let company = prompt('Какая компания создала JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');

/**
 * Логические операторы:
 *  || - ИЛИ
 *  && - И
 *  ! - НЕ
 */



 /**
  * Циклы while и for
  */

// Цикл While - проверка -> выполнение

// Цикл, который перебирает i от 0 до 2 (3 итерации)
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

//Цикл наооборот ->  от 2 до 0
// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }

// Цикл do while - выполнение -> проверка

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// Цикл for
// То есть, начало выполняется один раз, а затем каждая итерация
// заключается в проверке условия, после которой выполняется тело и шаг.

// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//        alert(i);
//      }

//Любая часть for может быть пропущена.

// let i = 0; // мы уже имеем объявленную i с присвоенным значением

// for (; i < 3; i++) { // нет необходимости в "начале"
//   alert( i ); // 0, 1, 2
// }

//Можно убрать и шаг:

// let i = 0;

// for (; i < 3;) {
//   alert( i++ );
// }

// Прерывание цикла - break

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// Переход к следующей итерации: continue

// for (let i = 0; i < 10; i++) {

//        // если true, пропустить оставшуюся часть тела цикла
//        if (i % 2 == 0) continue;
     
//        alert(i); // 1, затем 3, 5, 7, 9
//      }



// Конструкция "switch"

// let a = prompt('Введите число', '');

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
//     break;

//   default:
//     alert("Это не выполнится");
// }

// Группировка case

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;

//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }


/**
 * Функции
 */


// Только Петя
// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + Name;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert(userName); // Петя, значение внешней переменной было изменено функцией


// И Вася и Петя
// let userName = 'Вася';

// function showMessage() {
//   let userName = "Петя"; // объявляем локальную переменную

//   let message = 'Привет, ' + userName; // Петя
//   alert(message);
// }

// // функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();

// alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную


// Параметры в функциях

// function showMessage(from, text) { // аргументы: from, text
//        alert(from + ': ' + text);
// }
     
// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


// Возврат значений

// function sum(a, b) {
//        return a + b;
//      }
     
// let result = sum(1, 2);
// alert( result ); // 3



// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('А родители разрешили?');
// 	}
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
// 	alert( 'Доступ получен' );
// } else {
// 	alert( 'Доступ закрыт' );
// }


