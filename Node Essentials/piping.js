/**
 * 
 * Piping is a mechanism to connect output of one stream to another stream. 
 * It is normally used to get data from one stream and to pass the output 
 * of that stream to another stream. There is no limit on piping operations.
 * 
 */
const fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/node.txt');
var writeStream = fs.createWriteStream('output_node_pipe.txt');

readStream.pipe(writeStream);

readStream.on('end', function(){
    console.log("Data Copied Sucessfully.!");
});