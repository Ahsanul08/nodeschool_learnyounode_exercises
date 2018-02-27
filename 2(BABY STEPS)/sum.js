var args = process.argv.slice(2);
var sum = 0;

args.forEach(function (value) {
    sum += Number(value);
});

console.log(sum);