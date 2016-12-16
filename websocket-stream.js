/**
 * Created by tranthanhtrung on 11/16/2016.
 */
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write("hello\n");