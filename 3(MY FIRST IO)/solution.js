var fs = require('fs');
var path = process.argv[2];

data = fs.readFileSync(path);

console.log(data.toString().split('\n').length -1);