var http = require("http");
var count = 0;
var resultList = ["", "", ""];
var urlList = process.argv.slice(2,5);


function httpGet(index) {
    http.get(urlList[index], function (response) {
        response.setEncoding("utf8");
        response.on("data", function (data) {
            resultList[index] += data;
        });
        response.on("end", function () {
            count += 1;
            if(count === 3){
                resultList.forEach(function (item) {
                    console.log(item);
                });
            }

        });
    });

}

for (var i=0; i< urlList.length; i++){
    httpGet(i);
}


