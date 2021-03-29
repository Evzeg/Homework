// task_1

let x = 1;
let y = 2;

let res1 = String(x) + y;
// let res1 = x + '' + y;
console.log(res1);
console.log(typeof res1); 

let res2 = Boolean(x) + String(y);
// let res2 = Boolean(x) + '' + y ;
// let res2 = !!x + String(y);
console.log(res2);
console.log(typeof res2); 

let res3 = Boolean(x+y);
console.log(res3);
console.log(typeof res3); 

let res4 = parseInt(x + y / '');
console.log(res4);
console.log(typeof res4); 

// task_2

let rezultTask_2 = +prompt('Введіть число');
let massage1Task2 = 0;
let massage2Task2 = 0;
if (rezultTask_2 > 0 && rezultTask_2 % 2 == 0) {
    massage1Task2 = 'Введене число є парним доданим'
} else {
    massage1Task2 = 'Введене число не є парним доданим '
};
if (rezultTask_2 % 7 == 0) {
    massage2Task2 = 'Введене число є кратним числу 7'
} else {
    massage2Task2 = 'Введене число не є кратним числу 7'
}
console.log(massage1Task2 + '\n' + massage2Task2);

// task_3

let arr = [];

arr[0] = 10;
arr[1] = 'Hello world';
arr[2] = true;
arr[3] = null;
alert(arr.length);

arr[4] = prompt('Введіть значення наступного елементу масиву');
alert('пятий елемент масиву ' + arr[4])

delete arr[0];
alert(arr);

// task_4

let cities = ["Rome", "Lviv", "Warsaw"]; 
let str = cities.join(''*'');
console.log(str);

// task_5

let isAdult = +prompt('Вкажіть Ваш вік');
let rezultTask_5 = '';
switch(true) {
    case isAdult >=18:
        rezultTask_5 = 'Ви досягли повнолітнього віку';
        break;
    case isAdult <=10:
        rezultTask_5 = 'Ви ще надто молоді';
        break;
        default:
        rezultTask_5 = 'Ви у гарному віці';   

}
alert(rezultTask_5);

// task_6

let side_1 = +prompt('Введіть довжину першої сторони трикутника');
let side_2 = +prompt('Введіть довжину другої сторони трикутника');
let side_3 = +prompt('Введіть довжину третьої сторони трикутника');
let hypotenuse = null;
let leg_1 = null;
let leg_2 = null;
let massage_1 = null;
let massage_2 = null;
let perimeter = (side_1 + side_2 + side_3) / 2;
let area = Math.sqrt( perimeter * (perimeter - side_1) * (perimeter - side_2) * (perimeter - side_3) ).toFixed(3);

if(isNaN(perimeter)) {
    massage_1 = 'Incorrect data';
} else {
    massage_1 = 'S = ' + area;
}

if(side_1 > side_2 && side_1 > side_3) {
    hypotenuse = side_1;
    leg_1 = side_2;
    leg_2 = side_3;
} else if (side_2 > side_1 && side_2 > side_3) {
    hypotenuse = side_2;
    leg_1 = side_1;
    leg_2 = side_3;
} else {
    hypotenuse = side_3;
    leg_1 = side_1;
    leg_2 = side_2;
}

if (hypotenuse**2 == leg_1**2 + leg_2**2 ) {
    massage_2 = 'Даний трикутник є прямокутним';
} else {
    massage_2 = 'Даний трикутник не є прямокутним';
}

if(isNaN(perimeter)) {
    console.log(massage_1);
} else {
    console.log(massage_1);
    console.log(massage_2);
}

// task_7

let currentHours = new Date().getHours();
let currentMinutes = new Date().getMinutes();
let massage_3 = '';
let massage_4 = '';

if (currentHours >= 23 && currentHours < 5) {
    massage_3 = 'Доброї ночі';
} else if (currentHours >= 5 && currentHours < 11) {
    massage_3 = 'Доброго ранку';
} else if (currentHours >= 11 && currentHours < 17) {
    massage_3 = 'Доброго дня';
} else if (currentHours >= 17 && currentHours < 23) {
    massage_3 = 'Доброго вечора';
}

switch (true) {
    case currentHours >= 23 && currentHours <= 24 || currentHours >= 0 && currentHours < 5:
        massage_4 = 'Доброї ночі';
        break;
    case currentHours >= 5 && currentHours < 11:
        massage_4 = 'Доброго ранку';
        break;  
    case currentHours >= 11 && currentHours < 17:
        massage_4 = 'Доброго дня';
        break;     
    case currentHours >= 17 && currentHours < 23:
        massage_4 = 'Доброго вечора';
        break; 
        default: 
        massage_4  = 'Something is wrong';
}

alert(currentHours + ':' + currentMinutes + ' (with if)' + '\n' + massage_3 + '\n' + currentHours + ':' + currentMinutes + ' (with Switch)' + '\n' + massage_4 );







 