const fs = require('fs');

let data = {
    "name" : "Sri Manikanta Palakollu",
    "age" : 21,
    "role" : "Software Developer."
}

fs.writeFile('person.json', JSON.stringify(data), (err, data) => {
    if(err){
        console.log("Something Went Wrong.!", err);
    }
});