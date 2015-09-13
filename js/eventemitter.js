/**
 * Created by santhoshkumar on 13/09/15.
 */

var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

function callbackOnce() {
    console.log("Callback should be called only once!");
}

function callbackOn() {
    console.log("Callback should be called twice!");
}

function callback() {
    console.log("Callback should be called twice again!");
}

ee.once("event", callbackOnce);
ee.emit("event");
ee.emit("event");

ee.on("event", callbackOn);
ee.emit("event");
ee.emit("event");
ee.removeListener("event", callbackOn);
ee.emit("event");

ee.on("event", callback);
ee.on("event", callback);
ee.emit("event");
ee.removeAllListeners("event");
ee.emit("event");