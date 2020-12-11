import { write } from "fs";


export function handle(writeStream, node) {
    let handler; 
    console.log(node.left.name + " " + node.operator + " "); 
    writeStream.write(node.left.name + " " + node.operator + " "); 
    if(node.right.type === "BinaryExpression") {
        handler = require("./recurOnBinaryExpression"); 
        handler.handle(writeStream, node.right.left);
        writeStream.write(" " + node.right.operator + " "); 
        handler.handle(writeStream, node.right.right); 
    
        

    }
    else if(node.right.type === "Identifier") {
        console.log(node.right.name); 
        writeStream.write("" + node.right.name)
    }

    else if(node.right.type === "NumericLiteral" || node.right.type === "BooleanLiteral") {
        console.log(node.right.value); 
        writeStream.write("" + node.right.value)

    }

    else {
        console.log(node.right.type + " is a type that is unhandled at the moment"); 
    }
}

        
             
                  

                    
                             