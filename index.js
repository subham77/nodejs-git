const http=require("https");

http
        .createServer((req,res)=> {
        console.log(res);
        res.write("<h1>Home Page</h1>");
        res.end();
    });
	response.write("<h1>Home</h1>");
	response.end();
	break;
	default:
		response.writeHead(404,{
			"Content-Type":"text/html",
    	});
	response.write("<h1>Home</h1>");
	response.end();
	break;
}
})
    .listen(8080);