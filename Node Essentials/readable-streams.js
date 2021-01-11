/**
 * 
 * Streams are of 4 types:
 * 1. Readable - For read operation
 * 2. Writable - For write operation
 * 3. Duplex - For both read and write operation
 * 4. Transform - When the output is computed based on the input
 * 
 */

const fs = require('fs');

// Reading the Data using files using stream

var data = "";
var readStream = fs.createReadStream(__dirname + '/data.txt');
readStream.setEncoding('UTF8');

// This Emitter will be emitted by the interpreter automatically.
readStream.on('data', function(chunk){
    data += chunk;
});

// This Emitter will also be emitted by the interpreter automatically.
readStream.on('end', function(){
    console.log(data);
});
