
const http = require('http');
const os = require('os');
const hiFunc = require('./personalmodule');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
	response.write(hiFunc(os.userInfo().username));
	response.end();
}).listen(5000);
  
console.log('Server running at http://127.0.0.1:5000/');