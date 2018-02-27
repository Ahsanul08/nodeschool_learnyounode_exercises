var filter_dir = require('./filter_dir');
var path = process.argv[2];
var ext = process.argv[3];

filter_dir(path, ext, function (err, data) {
    if(err){
        throw err;
    }
    else {
        data.forEach(function (file) {
            console.log(file);
        })
    }

});