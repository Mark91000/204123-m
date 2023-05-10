/***********************************************************/
/** Пример замыкания **/
// const PI = 3.14159;
// function getCircleLength(radius) {
//     return 2 * PI * radius;
// }

/**********************************************************/
/** Пример работы с DOM **/
// const button = document.querySelector('.button');
// let count = 0;
// const greeting = `You pressed ${count} times!`;
// button.addEventListener('click', (event) => {
//     count++;
//     console.log(greeting);
// });
/**********************************************************/

/**********************************************************/

// for (let i = 0; i < 10; i++) {

//     console.log('Iteration ' + i);
// }
// Раскомментируйте
//console.log('Now our iterator is: ' + i);

// Здесь что-то не работает. Почему?
// Как сделать так, чтобы работало?
// Что будет, если вместо let мы используем var?

  /**********************************************************/
// function outerFunction(text) {
//     const outerProperty = 'Outer Property';
//     // 1
//     function innerFunction() {
//       // 2
//         const innerProperty = 'Inner';
//         console.log(`${innerProperty} ${text}`)
//     }
//     // 3
    
//     innerFunction();
//     // 4
// }
// // 5
// outerFunction('TextArgument');
// Что выведет код?
// Что будет, если на месте метки 1 вызвать innerFunction?
// Что будет, если в точке 2 поставить console.log(outerProperty)?
// Что будет, если в точке 3 поставить console.log(outerProperty)?
// Что будет, если в точке 4 поставить console.log(innerProperty)?
// Что будет, если в точке 5 поставить console.log(innerProperty)?
// Что будет, если в точке 5 поставить console.log(outerProperty)?

/**********************************************************/

// Пишем функцию counter. Она должна считать число своих запусков. Функция должна вернуть другую функцию, которая увеличивает значение счетчика на 1, и выводит его в консоль.
// function counter(){
//     let count = 0
//     return function(){
//         count ++;
//         console.log( 'Counter is ' + count);
//     }
// }
//  let res = counter()
//  res()
//  res()
//  res()

//  let res1 = counter()
//  res1()
//  res1()

// Написать функцию, которая возвращает сумму двух аргументов, но при этом должна вызываться так:
  // sum(a)(b)

//   function sum(a){
//     return function(b){
//         // console.log(a + b);
//         return(a + b)
//     }
//   }
//  console.log( sum(2)(3) );
 
// Написать функцию-"фабрику", которая будет делать функции, умножающие на произвольное число.
//   То есть, функция принимает аргумент multiplier (первый множитель) и возвращает другую функцию,
//   которая принимает аргумент num - второй множитель. Результатом должно быть произведение множителей.

// function fabric (multiplier){
//     return function(num){
//         return  multiplier * num
//     }
// }
// console.log(fabric(3)(4));

// ---------------------------------------



// Написать функцию кэширования. Предположим, у нас есть функция, которая выполняет сложные и долгие математические вычисления для одного аргумента (вычисление факториала). Задача повышенной сложности.
// ```
// ```
// Нужно написать функцию-"обертку", которая будет вести кэш. То есть, нам нужно при каждом вызове функции factorial, запоминать в этот "кэш" аргумент этой функции, и результат. Если при вызове функции factorial мы видим что аргумент есть в кэше - то возвращаем значение из кэша. Если в кэше такого значения нет - то вычисляем ответ, возвращаем его, и также запоминаем в кэш.
//  - для кэша, рекомендуется использовать объект, в котором ключами будут аргументы функции-факториала
//  - проверка существования свойства в объекте, когда название свойства неизвестно:

// let obj = { prop1: 'val1', prop2: 'val2' };
// console.log(obj['prop1']); // выведет val1
// console.log(obj['prop100']); // выведет undefined

function factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result = result * i;
    }
    return result;
  }
function wrapper(){
    let cashe = {};
    return function factorial(a){
        if (cashe[a]){
            console.log('from casche');
            return cashe[a];
        }
        else{
            let result = 1;
            for (let i = 1; i <= a; i++) {
              result = result * i;
            }
            cashe[a] = result;
            console.log('calculated');
            return result;
        }
    }
}
const fact = wrapper();
console.log(fact(4));
console.log(fact(5));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));








/************* Блок работы с DOM ********************/
/*
const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
    let text = input.value;
    let textContainer = document.querySelector('.modal-content-text');
    textContainer.innerText = text;
    modal.style.display = 'block';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
*/
