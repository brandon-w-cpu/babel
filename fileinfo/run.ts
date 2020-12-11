import * as babylon from "babylon";
import traverse from "babel-traverse";
import {genMatches, percentMatch} from "./comparisons"
import { Store } from "./Store";
import {isIgnorable} from "./comparisons"; 
import {filterAST} from "./comparisons"
import {deepEqual} from "./comparisons"
import {compareAST} from "./comparisons"
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
/////////////////////////////////////////////////////////////////
var fs = require('fs');
var babel = require('babel-core');
var parse_file_1 = require('./registerFile1.ts');
var parse_file_2 = require('./registerFile2.ts');

var method = import('./registerFile1')



var file1 = "file1.js"; 
var file2 = "file2.js"; 
var file3 = "file3.js"
var arr = new Array<String>()

var src1 = fs.readFileSync(file1, 'utf8'); 
var src2 = fs.readFileSync(file2, 'utf8'); 


  var out1 = babel.transform(src1, {
    plugins: [parse_file_1]
  });

  var out2 = babel.transform(src2, {
    plugins: [parse_file_2]
  });



  //parseAST("", Store.items[0]); 

  for(let json of Store.p1) {
    
    filterAST(json)
  }

  
  

  for(let json of Store.p2) {
    
    filterAST(json)
  }

  for(let i = 0; i < Store.p1.length && i < Store.p1.length; i++) { 
    console.log(_.isEqual(Store.p1[i], Store.p2[i]))
    console.log("////////////////////////////////////////////////////////////////////////////")


  }
    
  //console.log(deepEqual(Store.p1, Store.p2))

  //compareAST(Store.p1, Store.p2)

  /*

  const readline = require('readline');

  let s = ""; 
  async function processLineByLine() {
    console.log('inside');
    const fileStream = fs.createReadStream('file1_register.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      //console.log(`Line from file: ${line}`);
      s+= line + "\n"; 
    }
    console.log('after');
  }

  processLineByLine()
    .then(() => {
      console.log('outside: ', s); 
    }); 

    */

  
  
  /*
  var srcreg1 :string = fs.readFileSync("./sample_register1.txt").toString(); 
  var srcreg2 :string = fs.readFileSync("./sample_register2.txt").toString(); 

  

  let reg1 = srcreg1.split('\n', 1000)
  let reg2 = srcreg2.split('\n', 1000)

  let r1 :Array<Array<string>> = new Array<Array<string>>(); 
  let r2 :Array<Array<string>> = new Array<Array<string>>(); 

  for(let i of reg1) {
   // console.log(i)
    let arr :Array<string> = i.split(',', 1000);
    r1.push(arr); 

  }

  for(let i of reg2) {
    // console.log(i)
     let arr :Array<string> = i.split(',', 1000);
     r2.push(arr); 
 
   }

   for(let line of r1) {
     for(let i = 0; i < line.length; i++) {
       //console.log(line[i]); 
     }
   }



   genMatches(r1, r2); 
   */

   

  

 

  


  



