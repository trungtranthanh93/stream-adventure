/**
 * Created by tranthanhtrung on 11/16/2016.
 */
var request = require('request');
process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);
