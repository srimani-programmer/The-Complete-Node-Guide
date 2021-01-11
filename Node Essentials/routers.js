const http = require('http');
const url = require('url');

http.createServer(function(req, res){

    // Parsing the URL
    let urlPath = url.parse(req.url).pathname;
    console.log('Requested URL Path: ' + urlPath);
    
    if(urlPath == '/'){
        res.write('Hello World');
    }else if(urlPath == '/student'){
        res.write('Welcome to Student Page.');
    }
    
    // Closing the Connection.
    res.end();
}).listen(8888);