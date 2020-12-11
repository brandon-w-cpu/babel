

export function handle(writeStream, node) {
    let handler; 
    writeStream.write(node.loc.start.line + ", " + node.loc.end.line + ", " + node.loc.start.column + ", " + node.loc.end.column + ", " +
        JSON.stringify(node.body))
        for(let i of node.body) {
          if(i.type === "BlockStatement") {
            handler = require('./handleBlockStatement'); 
            handle(writeStream, node); 
          
          }
          else {
            writeStream.write(node.loc.start.line + ", " + node.loc.end.line + ", " + node.loc.start.column + ", " + node.loc.end.column + ", " +
            JSON.stringify(node.body))
          }
        }
             
             
                
   
}
      

        