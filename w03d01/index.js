
    //Part 01
const str_ = 'Hello!';
alert('Part 1\n\n' + str_);

    //Part 02
let num_ = prompt( 'Part 2\n\nInput number: ');
alert('Part 2\n\nNumber = ' + num_);

    //Part 03
num = 3;
str = '';

alert('Part 3\n\nnum = ' + num + '  -  ' + !!num + '\n\nall number true except 0 and not number');
    //all number true except 0 and not number
alert('Part 3\n\nstr = \' \' ' + str + '  -  ' + !!str + '\n\nall string true except empty string');
    //all string true except empty string

    //Part 04, 05
let number1 = prompt('Part 4, 5\n\n' + 'Input first number: ');
let number2 = prompt('Part 4, 5\n\n' + 'Input second number: ');
let sum = Number(number1) + Number(number2);
let ost = Number(number1) % Number(number2);
alert('Part 4, 5\n\nSum = ' + sum + '       ' + number1 + ' % ' + number2 + ' = ' + ost);

    //Part 06
let i = 1;
let a = ++i;
alert('Part 6\n\ni = 1\n\na=++i  =  ' + a + '\n\nbefore i = i + 1 after a = i');
    //before i + 1 after a = i
i = 1;
let b = i++;
alert('Part 6\n\ni = 1\n\nb=i++  =  ' + b + '\n\nbefore b = i after i = i + 1');
    //before b = i after i + 1

    //Part 07
let number3 = prompt('Part 7\n\nInput number: ');
if (number3 % 2) alert('Part 7\n\nNumber is odd!');
    else alert('Part 7\n\nNumber is even!');

    //Part 08
alert('Part 8\n\n1  ==  \'1\'  -  ' + (1=='1') + '\n\n1 === \'1\'  -  ' + (1==='1') );
alert('Part 8\n\n0 == False  -  ' + (0==false) + '\n\n0 === False  -  ' + (0===false));

    //Part 09
alert('Part 9\n\ntypeof  11\n\n' + typeof 11);
alert('Part 9\n\ntypeof  \'Hello\'\n\n' + typeof 'Hello');
alert('Part 9\n\ntypeof  {a: 1}\n\n' + typeof {a: 1});
alert('Part 9\n\ntypeof  null\n\n' + typeof null);
alert('Part 9\n\ntypeof  false\n\n' + typeof false);

    //Part 10
const A = 201;
A % 2 ?
    alert('Part 10\n\nA = ' + A + '\n\nA % 2 ? \'odd\' : \'even\'\n\nA is odd') :
        alert('Part 10\n\nA = ' + A + '\n\nA % 2 ? \'odd\' : \'even\'\n\nA is even');

    //Part 11
const truePass = '123456';
let pass = prompt('Enter password: ');
if (pass === truePass) alert('Part 11\n\nPassword correct!');
else alert('Part 11\n\nPassword incorrect!');

    //Part 12
a = 30;
alert('Part 12\n\na = 30\n\n!a  -  ' + !a);