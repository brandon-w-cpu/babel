

export function handle(writeStream, node) {
    let handler; 
    for(let innerNode of node.body) {
        if(innerNode.type === "VariableDeclaration") {
            console.log("variable declaration")
            handler = require("./handleVariableDeclaration"); 
            handler.handle(writeStream, innerNode); 
            writeStream.write("\n"); 
        }

        if(node.type === "BlockStatement") {
            
            console.log("block statement")
            handler = require("./handleBlockStatement");
            handler.handle(writeStream, innerNode)
            writeStream.write("\n"); 
        }

        if(node.type === "ExpressionStatement") {
            console.log("expression statement")
            console.log("this happens"); 
            handler = require("./handleExpressionStatement");
            handler.handle(writeStream, innerNode)
            writeStream.write("\n"); 
        }
    }
             
             
                
   
}
      

        