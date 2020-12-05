
export function handle(writeStream, node) {
    let handler; 
    if(node.expression.type === "AssignmentExpression") {
        handler = require("./handleAssignmentExpression.ts");
        handler.handle(writeStream, node.expression)

    }
    else {
        console.log("not handled yet"); 
    }

        
             
               
                
}
      

        
                 