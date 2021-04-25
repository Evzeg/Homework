// ___________________________________________Task_1___________________________________________________________________

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ___________________________________________Task_2___________________________________________________________________

let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names : [, name2, , name4], ages : [, age2, , age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// ___________________________________________Task_3___________________________________________________________________


function mul(...rest){
let mult = 1;
  for(let i = 0; i < rest.length; i++){

    if (isNaN(rest[i])) {
    continue;
    }

    mult *= rest[i];
  }
  return(mult);
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
 
// ___________________________________________Task_4___________________________________________________________________

let server = {
  data: 0,
  convertToString: function (callback) {
     callback(() => {
        return this.data + "";
     });
  }
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
  },
  notification: function () {
     return (callback) => {
        this.result = callback();
     };
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// ___________________________________________Task_5___________________________________________________________________

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"

function mapBuilder(keys, values) {
  let mapData = [];
  for( let i = 0; i < keys.length; i++) {
    let mapPart = [];

    mapPart.push(keys[i]);
    mapPart.push(values[i]);
    mapData.push(mapPart);

  }
  return new Map(mapData);
}







