fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function (err, data) {
    if(err){
        throw err;
    }
    console.log(data.toString().split('\n').length -1)
});
