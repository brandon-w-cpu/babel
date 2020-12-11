
export function handle(writeStream, node) {
    let handler; 
    if(node.expression.type === "AssignmentExpression") {
        //console.log(node); 
        handler = require("./handleAssignmentExpression.ts");
        handler.handle(writeStream, node.expression)

    }
    else {
        console.log("not handled yet"); 
    }

        
             
               
                
}
      

        
                 