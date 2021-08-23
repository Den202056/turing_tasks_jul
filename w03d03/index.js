
    //Part 01
// console.log('Part 01');
// let a = 0;
//
// console.log('/////////////while////////////////');
// while (a < 10) {
//     a = a + 1;
//     console.log({a});
// }
//
// console.log('///////////do...while////////////////');
//
// a = 0;
// do {
//     a = a + 1;
//     console.log({a});
// } while (a < 10);
//
// console.log('///////////for ////////////////');
// for (a = 1; a <= 10; a++)
//     console.log({a});

    //Part 02
//console.log('Part 02');
// let counter = 0;
// let str01;
//
// do {
//     counter = counter + 1;
//     str01 = prompt('To complete input string \'Завершить\'');
//     alert('Counter = ' + counter);
// } while (str01 !== 'Завершить');

    //Part 03
// console.log('Part 03');
// for (let i = 0; i <= 20; i++)
//     if (i % 2) console.log({i});

    //Part 04
    //????

    //Part 05
// let var1 = 1;
// let var2 = 2;
// let tmp = var1;
//
// console.log({var1, var2});
// var1 = var2;
// var2 = tmp;
// console.log({var1, var2});

    //Part 06
// console.log('Part 06');
// let str02 = String('143.2343');
// const resultStr = str02.slice(0,6);
// console.log({resultStr});

    //Part 07
// console.log('Part 07');
// let num01 = 42.2654;
// const roundNum = Math.round(num01 * 10) / 10;
// console.log({num01, roundNum});

    //Part 08
// console.log('Part 08');
// let str03 = 'I learn JavaScript';
// console.log('Index substring: ', str03.indexOf('JavaScript'));

    //Part 09
// console.log('Part 09');

// function showCounter() {
//     let count = 0;
//     return function () {
//         return count = count + 1;
//     }
// }

// function numberCounter(start = 0) {
//     return () => ++start;
// }
//
// const counter = numberCounter();
//
// for (let i = 1; i < 10; i++)
//     console.log('Count: ', counter());

    //Part 10
// console.log('Part 10');
//
// function showContext() {
//     const str04 = 'Test';
//     console.log(this);
// }
//
// showContext();
//
// const obj = {
//     str05: 'Test 2',
//     callFunc: showContext
// }
//
// obj.callFunc();
//
// const foo = new showContext();

    //Part 11
console.log('Part 11');
