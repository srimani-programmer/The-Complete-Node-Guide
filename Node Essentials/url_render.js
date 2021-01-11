const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

http.createServer(function (req, res){
    let path = url.parse(req.url, true);

    if(req.url == "/"){
        fs.readFile("form.html", (err, data)=>{
            if(!err){
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
                res.end();
            }
        });
    }else if(path.pathname === "/data" && req.method === "POST"){
        var rawData = "";
        req.on('data', (data)=>{
            rawData += data;
        }).on('end', ()=>{
            let url_data = qs.parse(rawData);
            console.log(url_data.name + " " + url_data.age);  
            res.writeHead(200, {"Content-Type": "text"});
            res.write(url_data.name + " " + url_data.age)
            res.end("\nDone Data Received");
        });
    }else if(path.pathname == "/info" && req.method == "GET"){

        let data = qs.parse(path.query);
        console.log(data);
        console.log(data.name + " " + data.age);
        res.end("Done Data Received");
        
    }
}).listen(8888);