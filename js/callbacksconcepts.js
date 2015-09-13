/**
 * Created by santhoshkumar on 13/09/15.
 */

var fs = require("fs");

console.log("***************");
console.log("Program Started");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("Async read output:");
    console.log(data.toString());
    console.log("Completed Async read.");
    console.log("*********************");
});

var data = fs.readFileSync('input.txt');

console.log("Sync read output:");
console.log(data.toString());
console.log("Completed Sync read.");

console.log("Program Ended");
console.log("*************");
// Note that the in the output the async read might happen after the end of execution of all program statements.