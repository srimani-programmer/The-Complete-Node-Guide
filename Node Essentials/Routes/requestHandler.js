const querystring = require('querystring');

function home(req, res){
    let htmlContent = 
`   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample Form</title>
    </head>
    <body>
        <form action="/review" method="post">
            First Name: <input type="text" name="u1"><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
    </html>
`
    res.writeHead(200, {'Content-Type': "text/html"});
    res.write(htmlContent);
    res.end();
}

function review(req, res){
    
    var data = "";

    req.on('data', function (chunk){
            data += chunk;
    });
    
    req.on('end', function(){
        console.log(data);
        res.writeHead(200, {'Content-Type': "text/plain"});
        res.write("Review Data: " + querystring.parse(data).text);
        res.end();
    });
}

function notFound(req, res){
    res.write("404 File Not Found");
    res.end();
}

exports.home = home;
exports.review = review;
exports.notFound = notFound;