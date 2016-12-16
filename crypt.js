/**
 * Created by tranthanhtrung on 11/17/2016.
 */
var crypto = require('crypto');
process.stdin.pipe(crypto.createDecipher('ase256', process.argv[2])).pipe(process.stdout);
