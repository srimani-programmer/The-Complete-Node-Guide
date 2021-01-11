const fs = require('fs')

// Asynchronous way to retreive the data from the given directory path.
fs.readdir('/Users/srimanikanta/', (err, data) => {
    if(err){
        console.log("Something went wrong");
    }else{
        console.log(data);
    }
});

// // This line prints first before printing the Directories list.
// console.log("The complete list of directories and files are listed for the given path.");


setTimeout(() => {
    for(let i=0;i<10;i++){
        console.log(i);
    }
}, 5000);


console.log('End of the Code Execution.!')