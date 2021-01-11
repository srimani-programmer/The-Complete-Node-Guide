const http = require('http');

http.createServer(function (request, response) {
    response.write("Hello......!")
    response.end();
}).listen(8888);