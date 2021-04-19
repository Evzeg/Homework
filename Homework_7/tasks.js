// ___________________________________________Task_1___________________________________________________________________

let wind_1 = window.open('', 'Task_1', 'width=300, height=300, left=100, top=100');

function changeSise() {
  wind_1.resizeTo(500, 500);  
}

function changeLocation() {
  wind_1.moveTo(200,200);
}

function closeWindow() {
  wind_1.close();  
}
const arr_1 = [changeSise, changeLocation, closeWindow];
let timeout = 2000;

for (var i = 0; i < arr_1.length; i++) {
  setTimeout(arr_1[i], timeout += 2000) 
}

// ___________________________________________Task_2___________________________________________________________________

function changeParam() {
  document.getElementById('text').style.color = 'orange';
  document.getElementById('text').style.fontSize = '20px';
  document.getElementById('text').style.fontFamily = 'Comic Sans MS';
};
document.getElementById('myBtn').onclick = changeParam;

// ___________________________________________Task_3___________________________________________________________________

function changeColorPageBlue() {
  document.querySelector('body').style.backgroundColor = 'blue'
}

function changeColorPagePink() {
  document.querySelector('body').style.backgroundColor = 'pink'
}

function changeColorPageBrown() {
  document.querySelector('body').style.backgroundColor = 'brown'
}

function changeColorPageWhite() {
  document.querySelector('body').style.backgroundColor = 'white'
}

function changeColorPageYellow() {
  document.querySelector('body').style.backgroundColor = 'yellow'
}

document.getElementById('Btn_1').onclick = changeColorPageBlue;
document.getElementById('Btn_2').ondblclick = changeColorPagePink;
document.getElementById('Btn_3').onmousedown = changeColorPageBrown;
document.getElementById('Btn_3').onmouseup = changeColorPageWhite;
document.getElementById('link_1').onmouseover = changeColorPageYellow;
document.getElementById('link_1').onmouseout = changeColorPageWhite;

// ___________________________________________Task_4___________________________________________________________________

let removeBtn = document.querySelector('#remove_4 button');
let selectElem = document.querySelector('#remove_4 select');

removeBtn.addEventListener('click', removeSelect);

function removeSelect(event) {
  selectElem.querySelector('option:checked').remove();

  if (selectElem.length < 1) {
    removeBtn.setAttribute('disabled', 'true');
    selectElem.setAttribute('disabled', 'true');
  }
}

// ___________________________________________Task_5___________________________________________________________________

let liveBtn_5 = document.querySelector('#Btn_5');
let result_5 = document.querySelector('#result_5');

function mouseDown_4(event) {
    result_5.innerHTML = 'I was pressed!';
  }
  
  function mouseEnter_4(event) {
    result_5.innerHTML = 'Mouse on me!';
  }
  
  function mouseOut_4(event) {
    result_5.innerHTML = 'Mouse is not on me!';
  }

liveBtn_5.addEventListener('mousedown', mouseDown_4);
liveBtn_5.addEventListener('mouseenter', mouseEnter_4);
liveBtn_5.addEventListener('mouseout', mouseOut_4);

// ___________________________________________Task_6___________________________________________________________________

let result_6 = document.querySelector('#result_6');

window.addEventListener('resize', resizeWindow);

function resizeWindow(event) {
    result_6.innerHTML = 'width = ' + window.innerWidth + 'px, height = ' + window.innerHeight + 'px';
}

// ___________________________________________Task_7___________________________________________________________________
// Нажаль, не встиг виконати