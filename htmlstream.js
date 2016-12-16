/**
 * Created by tranthanhtrung on 11/17/2016.
 */

var trumpet = require('trumpet');
var through2 = require('through2');

var tr = trumpet();

process.stdin.pipe(tr);
var stream = tr.selectAll('.loud').createStream();
stream.pipe(through2(function (chunk,_,next) {
    this.push(chunk.toString().toUpperCase());
    next();
})).pipe(stream);
//console.log(upcase);
tr.pipe(process.stdout);
