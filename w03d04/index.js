    //Part 01
const obj = {
    a: 1,
    b: 2,
    c: 3
}

function listPropertyObject (obj1) {
    for (let key in obj1) {
        console.log(`${key} - ${obj1[key]}`);
    }
}

console.log('Part 01');
listPropertyObject(obj);

    //Part 02
function listAllPropertyObject (obj1) {
    for (let key in obj1) {
        console.log(key);
    }
}

console.log('Part 02');
listAllPropertyObject(obj);

    //Part 03
const mas01 = [1, 2, 3];
const mas02 = [4, 5, 6];
const mas03 = [7, 8, 9];

let map = new Map([
    [mas01, '123'],
    [mas02, '456'],
    [mas03, '789']
])

console.log('Part 03');

    //Part 04
console.log('Part 04')

const keysList = map.keys();

for (let key of keysList)
    console.log(key);

    //Part 05
console.log('Part 05')
let set = new Set();

set.add(1);
set.add(2);
set.add(3);

    //Part 06
console.log('Part 06')
console.log(set.has(3));
console.log(set.has(4));

    //Part 07
console.log('Part 07');
let mas = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
mas = new Set(mas);
console.log(mas);

    //Part 08
console.log('Part 08');
let map2 = new Map([
    ['Monday', 'Понедельник'],
    ['Tuesday', 'Вторник'],
    ['Wednesday', 'Среда'],
    ['Thursday', 'Четверг'],
    ['Friday', 'Пятница'],
    ['Saturday', 'Суббота'],
    ['Sunday', 'Воскресенье']
]);