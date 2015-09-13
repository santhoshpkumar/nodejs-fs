/**
 * Created by santhoshkumar on 13/09/15.
 */

var fs = require("fs");

console.log("***************");
console.log("Program Started");

// Read the file asynchronously, the read output is returned via a callback
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("Async read output:");
    console.log(data.toString());
    console.log("Completed Async read.");
    console.log("*********************");
});

// Read the file synchronously, this will block the event loop until file read is complete.
var data = fs.readFileSync('input.txt');

console.log("Sync read output:");
console.log(data.toString());
console.log("Completed Sync read.");
console.log("Program Ended");
console.log("*************");
// Note that the in the output the async read might happen after the end of execution of all program statements.

// These two examples explain the concept of blocking and non-blocking calls.
// Second example shows that program blocks until it reads the file and then only
// it proceeds to end the program where as in First example, program does not wait
// for file reading but it just proceeded to print "Program Ended" and same time
// program without blocking continues reading the file.

// Thus, a blocking program executes very much in sequence and from programming point
// of view its easier to implement the logic but non-blocking programs does not execute
// in sequence, so in case a program needs to use any data to be processed, it should
// be kept with-in the same block to make it sequential execution.