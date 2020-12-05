export function handle(writeStream, node) {
    let handler; 
    //writeStream.write(node.right.name + " " + node.right.operator + " "); 
    //console.log(op); 
    if(node.type === "BinaryExpression") {
        handler = require("./recurOnBinaryExpression");
        
        
       
        
        handler.handle(writeStream, node.left);
        writeStream.write(" " + node.operator + " "); 
        handler.handle(writeStream, node.right); 
        //writeStream.write("\n"); 

    }
    else if(node.type === "Identifier") {
        console.log(node.name)
        writeStream.write("" + node.name)
    }

    else if(node.type === "NumericLiteral" || node.type === "BooleanLiteral") {
        console.log(node.value)
        writeStream.write("" + node.value)

    }

    else {
        console.log(node.type + " is not a type that is currently being handled")
    }
}