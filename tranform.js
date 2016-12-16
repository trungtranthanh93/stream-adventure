var split = require('split');
var through2 = require('through2');
var count = 0;
process.stdin.pipe(split())
.pipe(through2(function (line,_,next) {
	this.push( (count % 2 == 0) 
	? line.toString().toLowerCase()+ '\n'
	: line.toString().toUpperCase() + '\n');
	count++;
	next();
}))
.pipe(process.stdout);