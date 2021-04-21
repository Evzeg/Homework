
// ___________________________________________Task_1___________________________________________________________________

let str_1 ='regexp';
let str_2 ='RegExp';

function checkUpper(str) {
    let regExp = /^[A-Z]/;
    let firstSymbolUpper = regExp.test(str);

    if (firstSymbolUpper) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}

console.log(checkUpper(str_1));
console.log(checkUpper(str_2));

// ___________________________________________Task_2___________________________________________________________________

let e_mail = 'Qmail2@gmail.com';

function checkEmail(email) {
    let regExp = /^[A-Za-z0-9]\w+\@\w+\.\w+/;
    return regExp.test(email);
  }

console.log(checkEmail(e_mail));

// ___________________________________________Task_3___________________________________________________________________

let regExp_3 = /d(b+)(d)/gi;
console.log(regExp_3.exec("cdbBdbsbz"));

// ___________________________________________Task_4___________________________________________________________________

let a = "Java Script"
console.log(a);
a = ((a.match(/Script/g).concat(a.match(/Java/g))).join(','));
console.log(a);

// ___________________________________________Task_5___________________________________________________________________

let cardNumb = '9999-9999-9999-9999';

function checkCard(cardNum) {
  let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

  let isValid = regExp.test(cardNum);

  if (isValid) {
    return true;
  } else {
    return false;
  }
}

console.log(checkCard(cardNumb));

// ___________________________________________Task_6___________________________________________________________________

let mail_1 = 'my_mail@gmail.com';
let mail_2 = '#my_mail@gmail.com';

function checkEmails(email) {
   
    let regExp = /^[A-Za-z0-9]-?\w+-?\w+-?\@\w+\.\w+/;

    if (regExp.test(email)) {
        return 'Email is correct!';
    } else {
        return 'Email is not correct!';
    }
}

console.log(checkEmails(mail_1));
console.log(checkEmails(mail_2));


// ___________________________________________Task_7___________________________________________________________________

let log_1 = 'ee1.1ret3';
let log_2 = 'ee1*1ret3';

function checkLogin(login) {
  let regExp = /^\D[A-Za-z0-9.]{2,10}$/gi;
  let regExpNum = /\d\.?\d?/gi;

  console.log(regExp.test(login));
  console.log(login.match(regExpNum));
}

checkLogin(log_1);
checkLogin(log_2);

