
module.exports = sayHiByDateTime;

function sayHiByDateTime(userName) {
  let date = new Date();
  let currentHour = date.getHours();
  let timeRes = `<div>Date of request ${date}</div>`;

switch(true) {
  case (23 > currentHour && currentHour >= 17) : timeRes += 'Good evening, ' + userName;
    break;
  case (17 > currentHour && currentHour >= 11) : timeRes += 'Good day, ' + userName;
    break;
  case (11 > currentHour && currentHour >= 5) : timeRes += 'Good morning, ' + userName;
    break;
  case (currentHour >= 23 && currentHour <= 24 || currentHour >= 0 && currentHour < 5) : timeRes += 'Good night, ' + userName;
    break;
  default : timeRes += 'Something went wrong';
}

return timeRes;
}