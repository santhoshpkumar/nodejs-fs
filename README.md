# nodejs-fs
### Explore fs module for nodejs

#### The purpose of this project is to document and learn fs module usage in nodejs projects.

**fs** module is used for file based operations.
```
var fs = require("fs")
```
**fs** module provides both synchronous as well as asynchronous methods.
 
Every method in fs module have synchronous as well as asynchronous form. 
Asynchronous methods takes a last parameter as completion function callback and first parameter of the callback function is error. 
It is preferred to use asynchronous method instead of synchronous method as former never block the program execution where the latter one does.

**Streams** are objects that let you read data from a source or write data to a destination in continous fashion.

In Node.js, there are four types of streams.

Readable - Stream which is used for read operation.

Writable - Stream which is used for write operation.

Duplex - Stream which can be used for both read and write operation.

Transform - A type of duplex stream where the output is computed based on input.

Each type of **Stream** is an **EventEmitter** instance and throws several events at different instance of times. 
For example, some of the commonly used events are:

data - This event is fired when there is data is available to read.

end - This event is fired when there is no more data to read.

error - This event is fired when there is any error receiving or writing data.

finish - This event is fired when all data has been flushed to underlying system

##### File Operations

Following is the syntax of the method to open a file in asynchronous mode:
```
fs.open(path, flags[, mode], callback)
```
Following is the syntax of one of the methods to read from a file:
```
fs.read(fd, buffer, offset, length, position, callback)
```
This method will use file descriptor to read the file, if you want to read file using file name directly then you should use another method available.

Following is the syntax of one of the methods to write into a file:
```
fs.writeFile(filename, data[, options], callback)
```
This method will over-write the file if file already exists. If you want to write into an existing file then you should use another method available.

Following is the syntax of one of the methods to close an opened file:
```
fs.close(fd, callback)
```
Following is the syntax of the method to get the information about a file:
```
fs.stat(path, callback)
```
Following is the syntax of the method to truncate an opened file:
```
fs.ftruncate(fd, len, callback)
```
Following is the syntax of the method to delete a file:
```
fs.unlink(path, callback)
```
Following is the syntax of the method to create a directory:
```
fs.mkdir(path[, mode], callback)
```
Following is the syntax of the method to remove a directory:
```
fs.rmdir(path, callback)
```
Following is the syntax of the method to read a directory:
```
fs.readdir(path, callback)
```

The __filename represents the filename of the code being executed. 
This is the resolved absolute path of this code file. 
For a main program this is not necessarily the same filename used in the command line. 
The value inside a module is the path to that module file.

The __dirname represents the name of the directory that the currently executing script resides in.

The **setTimeout(cb, ms)** global function is used to run callback cb after at least ms milliseconds. 
The actual delay depends on external factors like OS timer granularity and system load. 
A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer.

The **clearTimeout( t )** global function is used to stop a timer that was previously created with setTimeout(). 
Here t is the timer returned by setTimeout() function.

The **setInterval(cb, ms)** global function is used to run callback cb repeatedly after at least ms milliseconds. 
The actual delay depends on external factors like OS timer granularity and system load. 
A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer using the function **clearInterval(t)**.

**console** object is used to print information on stdout and stderr.

**process** object is used to get information on current process. Provides multiple events related to process activities.