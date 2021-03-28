// Task 3 
let param_1 = 23;
let param_2 = 'Dogs';
// document.write(' ', param_1,' ', param_2);
alert(param_1 +' '+ param_2);

param_2 = param_1;

// document.write(' ', param_1,' ', param_2);
alert(param_1 +' '+ param_2);

// Task 4 
let obj = {
    String:'Dog',
    Number:23,
    Boolean: true,
    Undefined: undefined,
    Null: null,
}

// Task 5
let isAdult = confirm('Чи виповнилось Вам 18 років?');
console.log(isAdult);

// Task 7

let login = prompt('Введіть логін');
let email = prompt('Введіть e-mail');
let password = prompt('Введіть пароль');

// document.write(' Шановний користувач, Ваш логін: ', login,' Ваш e-mail: ', email, ' Ваш пароль: ', password);
alert('Шановний користувач!' + '\n' + ' Ваш логін: '+ login + '\n' + ' Ваш e-mail: ' + email + '\n' + ' Ваш пароль: ' + password)

// Task 8

let secPerHour = 60 * 60;
let secPerDay = 24 * secPerHour;
let secPerMonth = 30 * secPerDay;

alert('В одній годині ' + secPerHour + ' секунд \n' + 'В одній добі ' + secPerDay + ' секунд \n' + 'В одному місяці ' + secPerMonth + ' секунд')







