// some variable
const numberRows = 20;

let content = '<tr>\n' +
    '            <td><input type="text"></td>\n' +
    '            <td>\n' +
    '                <select>\n' +
    '                    <option>INT</option>\n' +
    '                    <option>VARCHAR</option>\n' +
    '                    <option>SYMBOL</option>\n' +
    '                    <option>CHAR</option>\n' +
    '                </select>\n' +
    '            </td>\n' +
    '            <td><input type="number"></td>\n' +
    '            <td>\n' +
    '                <select>\n' +
    '                    <option>Да</option>\n' +
    '                    <option>Нет</option>\n' +
    '                </select>\n' +
    '            </td>\n' +
    '            <td><input type="checkbox"></td>\n' +
    '        </tr>\n'

// create 20 table rows
let str = content;
for (let i = 1; i < numberRows; i++)
    str = str + content;

const tableBody = document.createElement("tbody");
const tableHead = document.querySelector("thead");
console.log(tableHead);

tableBody.innerHTML = str;

tableHead.after(tableBody);

// checked some checkboxes
const checkboxList = document.querySelectorAll("input[type='checkbox']");
checkboxList.forEach((elem, index) => {if (!(index % 2)) elem.checked = true});

// add new row use button
let str2 = content.slice(4);
str2 = str2.slice(0, -6);
console.log(str2);

const addNewRow = () => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = str2;
    const rowList = document.querySelectorAll("tr");
    // console.log(rowList);
    // console.log('rowList.length:', rowList.length);
    rowList[rowList.length-1].after(newRow);
    // alert('New Row Added.');
}