import { write } from "fs";


export function handle(writeStream, node) {
    let handler; 
    console.log(node.kind + " " + node.declarations[0].id.name + " " + "=" + " "); 
    writeStream.write(node.kind + " " + node.declarations[0].id.name + " " + "=" + " "); 
    if(node.declarations[0].init.type === "BinaryExpression") {
        handler = require("./recurOnBinaryExpression"); 
        handler.handle(writeStream, node.declarations[0].init.left);
        writeStream.write(" " + node.declarations[0].init.operator + " "); 
        handler.handle(writeStream, node.declarations[0].init.right); 
        

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
                  

                    
                             

        
                 

        
             
             
            
            /*
             var s = ""

             var i = 0; 
             
             if(node.declarations[0].init.type === "BinaryExpression") {
             let origop = node.declarations[0].init.operator; 
             let op = node.declarations[0].init.operator; 
             let l = node.declarations[0].init.left; 
             
             let r = node.declarations[0].init.right; 
             console.log(op); 
             let il = node.declarations[0].init.left; 
             let ir = node.declarations[0].init.right;  
             while(true) {
                 //console.log(r);
                 //console.log(op)

                 if(l.type !== "BinaryExpression" && r.type !== "BinaryExpression") {
                     let tempA;
                     let tempB; 
                     if(r.type === "NumericLiteral") {
                         tempB = r.value; 
                     }
                     else if(r.type === "Identifier") {
                         tempB = r.name; 
                     }

                     else if(r.type === "BooleanLiteral") {
                         tempB = r.value; 
                     }


                     if(l.type === "NumericLiteral") {
                         tempA = l.value; 
                     }
                     else if(l.type === "Identifier") {
                         tempA = l.name; 
                     }

                     else if(l.type === "BooleanLiteral") {
                         tempA = l.value; 
                     }
                     
                     s = node.declarations[0].id.name + " = " + (tempA + " " + op + " " + tempB + " " + s); 
                     console.log(s); 
                     
                     writeStream.write(s); 
                     writeStream.write("\n"); 
                     break; 
                 }
                 else {
                    // console.log(r); 
                     if(r.type === "NumericLiteral") {
                         //console.log(r); 
                         s = r.value + " " + s; 
                     }

                     else if(r.type === "BooleanLiteral") {
                         //console.log(r); 
                         s = r.value + " " + s; 
                     }
                     else { 
                         //console.log("peepeepoopoo")
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
             s = node.declarations[0].id.name + " = " + node.declarations[0].init.value
             console.log(s); 
             writeStream.write(s)
             writeStream.write("\n")
         }
    }
    */

    

