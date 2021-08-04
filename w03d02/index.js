    //Part 01
function listParam(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}

listParam(1, '2', {three: 3});

    //Part 02
function bigNumber(num1, num2) {
    if (num1 > num2) return 1;
    else if (num1 === num2) return 0;
    return -1
}

console.log(bigNumber(3,2));
console.log(bigNumber(1,2));
console.log(bigNumber(2,2));

    //Part 03
const sum = (num1, num2) => {
    console.log(num1 + num2);
}

const sub = (num1, num2) => {
    console.log(num1 - num2);
}

const mlt = (num1, num2) => {
    console.log(num1 * num2);
}

const div = (num1, num2) => {
    console.log(num1 / num2);
}

sum(1,2);
sub(1,2);
mlt(1, 2);
div(1,2);

    //Part 04
function hello(name = 'Guest') {
    console.log('Hello ' + name + '!');
}

hello();
hello('Joe');

    //Part 05
function fibonachi1(num) {
    if (num <= 1) return num;
    else return fibonachi1(num - 1) + fibonachi1(num - 2);
}

console.log(fibonachi1(6));

     //Part 06
function fibonachi2(num) {
    let a = 1, b = 1;

    for (let i = 3; i <= num; i++) {
        let tmp = a + b;
        a = b;
        b = tmp;
    }
    return b;
}

console.log(fibonachi2(6));