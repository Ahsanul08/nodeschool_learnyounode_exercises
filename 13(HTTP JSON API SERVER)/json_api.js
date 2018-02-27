var http = require('http');
var port = Number(process.argv[2]);
var url = require('url');

server = http.createServer(function (req, res) {
    if (req.method !== "GET"){
        res.end("This is not a GET request");
    }
    var result;
    var parsed_url = url.parse(req.url, true);
    var route = parsed_url.pathname;
    console.log(route);
    var tm = new Date(parsed_url.query.iso);
    console.log(tm);
    if (route === '/api/parsetime'){
        result = {
            "hour": tm.getHours(),
            "minute": tm.getMinutes(),
            "second": tm.getSeconds()
        };
    }
    else if(route === '/api/unixtime'){
        result = {"unixtime" : tm.getTime()};
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));

});

server.listen(port);