const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, data) => {
    if(err){
        console.log("Something went wrong.!", err);
    }else{

        var data = JSON.parse(data);
        console.log(data.name);
        console.log(data.age);
        console.log(data.role);
    }
});

