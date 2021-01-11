const fs = require('fs');

var writeStream = fs.createWriteStream('writeData.txt');

writeStream.write('Hello World');
writeStream.end();

// Finish is the default Event inorder to print the exit message after writing streams.
writeStream.on('finish', function(){
    console.log('Data is written Sucessfully.!');
});

