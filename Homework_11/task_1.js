// 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require('http');
const os = require('os');
const path = require('path');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`
    <div>Current user name: ${os.userInfo().username}</div>
    <div>OS type: ${os.type()}</div>
    <div>System work time: ${os.uptime() / 60} minutes</div>
    <div>Current work directory: ${path.dirname(__dirname)}</div>
    <div>Server file name: ${path.basename(__filename)}</div>
  `);
  response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');