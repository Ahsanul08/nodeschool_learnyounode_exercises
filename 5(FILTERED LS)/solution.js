var fs = require('fs');
var path = require('path');
var file_path = process.argv[2];
var ext = process.argv[3];

fs.readdir(file_path, function (err, files) {
    files.forEach(function (file) {
        if (path.extname(file).replace(".","") === ext){
            console.log(file);
        }
    });
});