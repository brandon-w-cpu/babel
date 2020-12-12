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

  console.log(Store.p1)

  for(let i = 0; i < Store.p1.length && i < Store.p1.length; i++) { 
   // console.log((Store.p1[i]))
   // console.log("////////////////////////////////////////////////////////////////////////////")


  }
  //console.log((Store.p1[0]))
  
 // console.log((Store.p2[0]))

  console.log(deepEqual(Store.p1[0], Store.p2[0]))
  //console.log(deepEqual(Store.p1, Store.p2))

   

  

 

  


  



