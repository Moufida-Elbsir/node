
var http=require("http")
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.end('<h1>I am a HTML element</h1>');
}).listen(8081);
