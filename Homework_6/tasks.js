// ___________________________________________Task_1___________________________________________________________________

document.getElementById('test').innerHTML = 'Last';
document.querySelector('div').innerHTML = 'Last';

// ___________________________________________Task_2___________________________________________________________________

let img = document.querySelector('.image');
img.setAttribute('src', 'cat.jpg');
alert(img.src);
// ___________________________________________Task_3___________________________________________________________________

// скріпт прописаний в task_3.html

// ___________________________________________Task_4___________________________________________________________________

let elemLi = document.querySelectorAll('#list li');
console.log(elemLi[0].outerText + ' ' + elemLi[4].outerText + ' ' + elemLi[1].outerText + ' ' + elemLi[3].outerText + ' ' + elemLi[2].outerText);

// ___________________________________________Task_5___________________________________________________________________

let changeTitle = document.querySelector('h1');
let changeP = document.querySelectorAll('#myDiv p');
let changeUl = document.querySelector('#myList');
let changeSpan = document.querySelector('span');

changeTitle.style.backgroundColor = '#90EE90';
changeP[1].style.color = 'red';
changeP[2].style.textDecoration = 'underline';
changeP[3].style.fontStyle = 'italic';
changeUl.style.display = 'flex';
changeUl.style.listStyle = 'none';
changeSpan.style.color = 'transparent';

// ___________________________________________Task_6___________________________________________________________________

let input_1 = document.querySelector('#input1');
let input_2 = document.querySelector('#input2');
let mess_1 = prompt('Enter first message');
let mess_2 = prompt('Enter second message');

input_1.value = mess_1;
input_2.value = mess_2;

let change = input_1.value;
input_1.value = input_2.value;
input_2.value = change;

// ___________________________________________Task_7___________________________________________________________________

let elemMain = document.createElement('main');
let elemDiv = document.createElement('div');
let elemP = document.createElement('p');

elemMain.classList.add('mainClass', 'check', 'item');
elemDiv.id = 'myDiv';
elemP.innerText = 'First paragraph';

document.body.prepend(elemMain);

let main = document.querySelector('main');
main.prepend(elemDiv);

let div = document.querySelector('div');
div.prepend(elemP);





