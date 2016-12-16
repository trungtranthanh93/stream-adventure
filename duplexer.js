/**
 * Created by tranthanhtrung on 11/17/2016.
 */
var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');
module.exports = function (cmd,args) {
    var ps = spawn(cmd,args);
    return duplexer2(ps.stdin,ps.stdout);
};