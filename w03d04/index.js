    //Part 01
const obj = {
    a: 1,
    b: 2,
    c: 3
}

function listPropertyObject (obj1) {
    for (let [key, value] of obj1) {
        console.log( );
    }
}

// function listPropertyObject (obj1) {
//     for (let key in obj1) {
//         console.log(`${key} - ${obj1[key]}`);
//     }
// }

listPropertyObject(obj);

    //Part 02
function listAllPropertyObject (obj1) {
    for (let key in obj1) {
        console.log(key);
    }
}

listAllPropertyObject(obj);

    //Part 03
const mas01 = [1, 2, 3];
const mas02 = [4, 5, 6];
const mas03 = [7, 8, 9];

const map01 = ()