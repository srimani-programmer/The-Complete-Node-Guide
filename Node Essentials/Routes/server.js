const http = require('http');
const url = require('url');
const handler = require('./requestHandler');

function startServer(route){
    function onRequest(req, res){
        var data = ""
        let urlPath = url.parse(req.url).pathname;
        req.setEncoding("UTF-8");
        req.on('data', function (chunk){
            data += chunk;
        });
        console.log("U1 Data:" + data);
        route(urlPath, handler, req, res);

        // req.addListener('end', function(){
            
        // });
        
    }

    http.createServer(onRequest).listen(8888);
}

exports.startServer = startServer;