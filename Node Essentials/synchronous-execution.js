const fs = require('fs')

// Synchronous Call to retreive the data from the Directories.
let directories = fs.readdirSync("/Users/srimanikanta/")

console.log(directories)

console.log("Total List of Directories and Files are Displayed.")