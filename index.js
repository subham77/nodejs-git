const http=require("https");

http
    .createServer((req,res)=> {
        res.write("<h1>Home Page</h1>");
        res.end();

    })
    .listen(8080);