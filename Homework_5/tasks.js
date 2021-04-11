// ___________________________________________Task_1___________________________________________

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development", 
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));  

// ___________________________________________Task_2___________________________________________

let keysObj = [];
let keysValues = [];
let student = {
    name : 'Evgen',
    surname : 'Zayats',
    gtoup : 375,
    experience : 4,
    'knowledge of English':true,
};

function showProps(obj) {
   return keysObj = Object.keys(student);
} 
console.log(showProps(student));

keysValues = Object.values(student);
console.log(keysValues);

// ___________________________________________Task_3___________________________________________

class Persone {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.surname + ' ' + this.name;
    }
}

class Student extends Persone {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        this.midleName = midleName;
        return this.surname + ' ' + this.name + ' ' + this.midleName ;
    }
    showCourse() {
        let res = (new Date()).getFullYear() - this.year
        if (res > 5) { res = 5;};
        return res;
    }
}
let stud1 = new Student('Petro', 'Pertenko', 2015)
console.log(stud1);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 

// ___________________________________________Task_4___________________________________________

let workers = [];
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRat, workingDays) {
        this.fullName = fullName;
        this.dayRat = dayRat;
        this.workingDays = workingDays;
    }        
    get showExp() {
        return this.#experience;
       }

    set setExp(value) {
        if(value !== this.#experience) {
                this.#experience = value;
           }
        return this.#experience;
        }
    
    showSalary() {
        // console.log(this.fullName + ' salary: ' + this.dayRat * this.workingDays); 
        return this.dayRat * this.workingDays;
   
    };
    showSalaryWithExperience() {
        console.log(this.fullName + ' salary: ' + this.dayRat * this.workingDays * this.#experience);

    }
}

let worker1 = new Worker ("John Johnson", 20, 23);
console.log(worker1.fullName + ': ' + worker1.showSalary());                 

console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName + ': ' + worker2.showSalary());
worker2.setExp = 1.2;

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName + ': ' + worker3.showSalary());
worker3.setExp = 1.4;

workers.push(worker1, worker2, worker3);
workers.sort(function(a, b) {return b.showExp - a.showExp;
  });
console.log(workers);
  for (let element of workers) {
    console.log(`${element.fullName} salary: ${element.showSalary()}`);
  }



// ___________________________________________Task_5___________________________________________

class GeometricFigure {
    getArea() {
      return 0;
    }  

    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
}  

class Triangle extends GeometricFigure {
    constructor(side, height) {
      super();
      this.side = side;
      this.height = height;
    }  

    getArea() {
      return (this.side * this.height) / 2;
    }
}  

class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
  
    getArea() {
      return Math.pow(this.side, 2);
    }
}
  
class Circle extends GeometricFigure {
    constructor(radius) {
      super();  
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
}
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));
  
  function handleFigures(array) {
    const totalValue = array.reduce((accumulator, currentFigure) => {
      if (currentFigure instanceof GeometricFigure) {
        console.log(`Geometric figure: ${currentFigure.toString()} - area: ${currentFigure.getArea()}`);
  
        return accumulator + currentFigure.getArea();
      } else {
        return accumulator;
      }
    }, 0);
  
    return totalValue;
  }