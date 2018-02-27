var fs = require('fs');
var path = require('path');

module.exports = function (dir_name, ext, callback) {
    fs.readdir(dir_name, function (err, files) {
       if(err){
           callback(err);
       }
       else{
           var fileList = [];
           files.forEach(function (file) {
               if (path.extname(file).replace(".","") === ext){
                   fileList.push(file);
               }
           });
           callback(null, fileList);
       }
    });
};