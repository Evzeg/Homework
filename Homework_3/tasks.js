// __________________________________task_1_____________________________

let mass_1 = [2, 3, 4, 5];
let param_1 = 0;
for(let k = 0; k<= mass_1.length-1; k++) {
    param_1 += mass_1[k];     
}
console.log(param_1);

let z = 0;
param_2 = 0;
while(z <= mass_1.length-1) {
    param_2 += mass_1[z]; 
    z++;
}
console.log(param_2);

// __________________________________task_2_____________________________

for(let k = 0; k<=15; k++) {
  let massage_2 = 0;
    
  if(k % 2 == 0) {
      massage_2 = ' is even'
  } else {
      massage_2 = ' is odd'
  }
  console.log(k + massage_2);
}

// __________________________________task_3_____________________________

let arr_3 = [];
function randArray(k) {
    
    for(let i = 0; i<= k - 1; i++) {

    function randomIntager(min,max) {
        let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }

    arr_3.push(randomIntager(1,500))
   }
}
randArray(5);
console.log(arr_3);

// __________________________________task_4_____________________________

let numb_4 =  + prompt('Введіть число');
let degree_4 = + prompt('Введіть степень');

function raiseToDegree(a, b) {
    let result_4 = 0;
    if(Number.isInteger(a) == true && Number.isInteger(b) == true) {
        result_4 = 'Результат піднесення числа ' + a + ' до степеня ' + b + ' дорівнює ' + a ** b
    } else {
        result_4 = 'Введені числа повинні бути цілмими'
    }
    console.log(result_4);
};
raiseToDegree(numb_4, degree_4);

// __________________________________task_5_____________________________

function findMin() {
let min = arguments[0];
    
    for(let i = 0; i <= arguments.length; i++) {
        if(min > arguments[i]) min = arguments[i];
    }
    return min;
}
console.log(findMin(12, 14, 4, -4, 0.2));

// __________________________________task_6_____________________________

let arr_6 = [1, 2, 3, 5, 3];
let arr_6_2 = [1, 2, 3, 5, 11];

function findUnique(arr) {
    
    let result_6 = true;
    for( let i = 0; i <= arr.length; i++) {
        let param_6 = arr[i];
       
        for( let j = i + 1; j <= arr.length; j++) {
            let param_6_2 = arr[j];
            
            if( param_6_2 == param_6) {
                result_6 = false;  
                break;          
            } 
        }
    }
    return result_6;
}
console.log(findUnique(arr_6));
console.log(findUnique(arr_6_2));

// __________________________________task_7_____________________________

let arr_7_1 = [3, 4, 10, -5];
let arr_7_2 = [3, 4, 10, -5];
let arr_7_3 = [3, 4, 10, -5];

function getElemtnts(arr, num) {
    let newArr = [];
    if (num === undefined) {
            newArr.push(arr[arr.length - 1]);
    } 

    if (num < arr.length) {
        for(let i = arr.length - num; i <= arr.length -1; i++) {
            newArr.push(arr[i]);
      }
    }
    if(num >= arr.length) {
            newArr = arr;
    }
          
return newArr;
}
console.log(getElemtnts(arr_7_1));
console.log(getElemtnts(arr_7_2, 2));
console.log(getElemtnts(arr_7_3, 8));

// __________________________________task_8_____________________________

    
let str_8 = 'i love java script';
let arr_8 = str_8.split(' ');
console.log('Input string: ' + str_8);

for(let i = 0; i<= arr_8.length-1; i++) {
    arr_8[i] = arr_8[i].charAt(0).toUpperCase() + arr_8[i].slice(1);
}
str_8 = arr_8.join(' ');
console.log('Output string: ' + str_8);










