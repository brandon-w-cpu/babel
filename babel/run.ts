// run.js

var fs = require('fs');
var babel = require('babel-core');
var parse_file_1 = require('./registerFile1.ts');
var parse_file_2 = require('./registerFile2.ts');


// read the filename from the command line arguments
//var fileName = ".\\src\\file1.js"

// read the code from this file
//fs.readFile(fileName, function(err, data) {
  //if(err) throw err;
  //convert from a buffer to a string
  //var src = data.toString();
  
  var src = "class MyClass {   }"
  //var src2 = "class MyClass { method(a, b) { a = c + 6 - d - e} }"
  // use our plugin to transform the source
  var out = babel.transform(src, {
    plugins: [parse_file_1]
  });

  /*
  var out = babel.transform(src2, {
    plugins: [parse_file_2]
  });
*/
//})

  // print the generated code to screen
  //console.log(out.code);




//import MyFile from "../src/MyFile"
//let f1 = new MyFile("../fileinfo/inputfile1.js", "file1"); 
//let f1 = new MyFile("class MyClass { constructor(a, b) { c = a + b } }", "file1"); 

