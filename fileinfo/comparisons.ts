import { sign } from "crypto";

export function genMatches(r1 :Array<Array<string>>, r2 :Array<Array<string>>) {
  let line1no = 0; 
  let line2no = 0; 
  let matchLine = 0;
  let compLine = 0; 
  
  let lineSame = 0;
   for(let line1 of r1) {
     for(let line2 of r2) {
       for(let i = 4; i < line1.length && i < line2.length; i++) {
         
        if(i > line1.length || i > line2.length) {

        }
        else {
        
        //console.log("Comparing " + line1[i] + " to " + line2[i]);
         if(!isIgnorable(line1[i]) || !isIgnorable(line2[i])) {
            
            //console.log(line1[i] === line2[i]); 
            if(line1[i] !== line2[i]) {
              
              lineSame+=1; 
            }
            else {
              //console.log("perfect match was obtained")
            }
            
            
         }

         else {
          /*
          console.log("perfect match was obtained, but was ignored in scheme of line comparison"); 
          console.log("info of match:")
          console.log("match is: " + line1[i] + " to " + line2[i])
          */
          

        }
      }

         
         
       }

       if(lineSame == 0 && line1 !== undefined && line2 !== undefined) {
          
        console.log("perfect match was obtained"); 
        matchLine++; 
        
        console.log("info of match:")
        console.log("match is: " + "\n" + line1 + "\n" +  " to " + "\n" + line2); 
        console.log("file1:   startline: " + line1[0]);  
        console.log("file1:   endline: " + line1[1]);  
        console.log("file1:   startcol: " + line1[2]);  
        console.log("file1:   endcol: " + line1[3]);  
        console.log(); 
        console.log("file2:   startline: " + line2[0]);  
        console.log("file2:   endline: " + line2[1]);  
        console.log("file2:   startcol: " + line2[2]);  
        console.log("file2:   endcol: " + line2[3]);  
        
    
       
       
     
   }
   //compLine++; 
   lineSame = 0; 
  }

}
}


export function percentMatch(r1 :Array<Array<string>>, r2 :Array<Array<string>>) {
    let numMatches = 0;
    let numComparisons = 0; 

    for(let i = 0; i < r1.length && r2.length; i++) {
        for(let j = 0; j < r1[i][j].length && j < r2[i][j].length; j++) {
            if(!isIgnorable(r1[i][j]) && !isIgnorable(r2[i][j])) {
                console.log("Comparing " + r1[i][j] + " to " + r2[i][j]);
                if(r1[i][j] === r2[i][j]) {
                    console.log("perfect match was obtained");
                    numMatches++; 
                }
                numComparisons++; 
             }
        }

    }
    if(numComparisons == 0) {
      numMatches = 1;
      numComparisons = 1; 
    }
    return numMatches / numComparisons; 
}

export function isIgnorable(s) {
  return s.includes("loc") || 
  s.includes("start") || 
  s.includes("end") || 
  s.includes("line") ||
  s.includes("column") ||
  s.includes("static") ||
  s.includes("computed") || 
  s.includes("__clone")  //|| s.includes("name") || s.includes("identifierName") 
 
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

export function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

export function filterAST(json :JSON) {
    for(let key in json) {
      let elem = json[key]
      if(key === "loc" || key === "start" || key === "end") {
        
       delete json[key]
     }
    else if(elem !== null) {
     if((<any>elem).type !== undefined) {
     //  console.log("recursion")
       filterAST(elem)
       
      // console.log("out of recursion")
     }

     else if(key === "params") {
       for(let e of elem) {
         filterAST(e); 
       }
     }
     else {
       //console.log("no recursion")
     }

    }
  
  
    
  
   
  }
}


export function compareAST(ast1, ast2) {
 

  for(let i = 0; i < ast1.length; i++) {
    for(let j = 0; j < ast2.length; j++) {
      
     // console.log(ast1[i]); 
      
       
      //  console.log(ast1[i].key.name + " comparing to " + ast2[j].key.name) 
       deepEqual(ast1[i] , ast2[j])
    }
      
   
}
}

/*
export function helperCompareAST(j1 :JSON, j2 :JSON) {
  for(let key in j1) {
    if(!isIgnorable(key)) {

      let elem = j1[key];

      if(elem === null) { 

      }
      else if(elem.type !== undefined ) {
        
        console.log()
        compareAST(elem, j2); 
      }
      else if(key === "body") {
        compareAST(s, elem); 
        
      }
      else if(key === "params") {
      
        compareAST(s, elem); 
        
      }
      else {


        //console.log(s + key + " -> " + elem); 
      }
        
    }
  }
  */


