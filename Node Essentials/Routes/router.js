function route(pathname, handler, req, res){
    if(pathname == "/"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Hello World From Server.!");
        res.end();
    }else if(pathname == "/home"){
        handler.home(req, res);
    }else if(pathname == "/review"){
        handler.review(req, res);
    }else{
        handler.notFound(req, res);
    }
}

exports.route = route;