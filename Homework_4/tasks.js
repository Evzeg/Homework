// ____________________________________Task_1________________________________________________

function calcRectangleArea(height, width) {
 if (isNaN(height) || isNaN(width)) {
    throw new Error('Use numbers');
 }
 let s = height * width;
    return s;
} 

try {
    console.log(calcRectangleArea('h20', 3));
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

// ____________________________________Task_2________________________________________________

function checkAge() {

    let age = prompt('Enter your age');
    
    if(age.length == 0) {
        alert('The field is empty! Please enter your age');
        throw new Error('Empty line');
    } else if (isNaN(age)){
        alert('Enter your number of years');
        throw new Error('Undefined number');
    } else if (age < 14){ 
        alert('You are too young');
        throw new Error('User is too young');
    } else {
        alert('You can watch this movie');
    }
}

try {
    checkAge();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

// ____________________________________Task_3________________________________________________

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}
function showMonthName(month){
    if(month > 12 || month < 1) {
        throw new MonthException('Incorrect month number');
    } else if (isNaN(month)) {
        throw new MonthException('Enter the number of month');
    }
    return months[month -1];
}
try {
    console.log(showMonthName('5'));
    console.log(showMonthName('14'));
} catch (err) {
    console.log(err.name, err.message);
}

// ____________________________________Task_4________________________________________________

function showUser(userId) {    
    if (userId < 0) {
        throw new Error('ID must not be negative: ' + userId);
    };
let userArr = new Object();
userArr.id = userId;
return userArr;
}

function showUsers(usersArr) {
    let newArr = [];
    for (let i = 0; i < usersArr.length; i++) {
        
        try { 
            newArr.push(showUser(usersArr[i]));
        } catch (err) {
            console.log(err.name, err.message);
        }
                    
    }
    return newArr;
};
console.log(showUsers([7, -12, 44, 22]));

// ___________________________________________________________________________________________