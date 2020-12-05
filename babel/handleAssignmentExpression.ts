import { write } from "fs";


export function handle(writeStream, node) {
    let handler; 
    console.log(node.left.name + " " + node.operator + " "); 
    writeStream.write(node.left.name + " " + node.operator + " "); 
    //writeStream.write(node.left.name + " " + node.operator + " "); 
    if(node.right.type === "BinaryExpression") {
        handler = require("./recurOnBinaryExpression"); 
       // console.log(node.right.left); 
        handler.handle(writeStream, node.right.left);
        writeStream.write(" " + node.right.operator + " "); 
        handler.handle(writeStream, node.right.right); 
        //writeStream.write("peepee"); 
    
        

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

        
             /*
               
                
                let a = node; 
                let origop = a.operator; 
                if(a.right.type === "BinaryExpression") {
                
            
                    let op = a.right.operator; 
                
                let l = a.right.left; 
                let r = a.right.right; 
                let il = a.right.left
                let ir = a.right.right; 

                var s = ""

                var i = 0; 
                //{a = a + b + c
                
                //console.log(a.right.left);
                while(true) {
                    //console.log(r);
                    //console.log(op)

                    if(l.type !== "BinaryExpression" && r.type !== "BinaryExpression") {
                        let tempB; 
                        if(r.type === "NumericLiteral") {
                            tempB = r.value; 
                        }
                        else if(r.type === "Identifier") {
                            tempB = r.name; 
                        }
                        
                        s = a.left.name + " " + origop + " " + (l.name + " " + op + " " + tempB + " " + s); 
                        //console.log(s); 
                        
                        writeStream.write(s); 
                        writeStream.write("\n"); 
                        return 0; 
                    }
                    else {
                       // console.log(r); 
                        if(r.type === "NumericLiteral") {
                            console.log("found one"); 
                            s = r.name + " " + s; 
                        }
                        else { 
                            s  = r.name + " " + s; 
                        }
                        s =  (op) + " " + s; 
                        op = l.operator;  
                        let h = l; 
                        l = l.left; 
                        r = h.right; 

                    if(i > 4) {
                        return 0; 
                    }
                    i++
                    }

                    }
                }
                else {
                    if(a.right.type === "NumericLiteral" || a.right.type === "BooleanLiteral") {
                        s = a.left.name + origop + a.right.value; 
                    }
                    else if (a.right.type === "Identifier") {
                        s = a.left.name + origop + a.right.name; 
                    }
                    console.log(s); 
                    writeStream.write(s); 
                }
            }
            */
                  

                    
                             