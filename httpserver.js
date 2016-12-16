var http = require('http');
var through2 = require('through2')
function requestListener(request,response) {
	response.writeHead(200);
	if(request.method=='POST'){
		request.pipe(through2(function(chunk,_,next) {
			this.push(chunk.toString().toUpperCase());
			next();
		})).pipe(response);
	}
	else{ 
		response.end('send me a POST\n')
	};
}
var server = http.createServer(requestListener);
server.listen(process.argv[2]);