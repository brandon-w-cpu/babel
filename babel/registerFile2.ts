/*
module.exports = function(babel) {
    const fs = require('fs');
    let writeStream = fs.createWriteStream("fileinfo/file2_register.txt"); 
    var t = babel.types; 
    let s = ""
    return {

        visitor: {
        
            ExpressionStatement(path) {
                let a = path.node.expression
                let origop = a.operator; 
                let op = a.right.operator; 
                let l = a.right.left; 
                let r = a.right.right; 
                let il = a.right.left
                let ir = a.right.right; 

                var s = ""

                var i = 0; 
                //{a = a + b + c
                
                console.log(a.right.left);
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
                        console.log(s); 
                        
                        writeStream.write(s); 
                        writeStream.write("\n"); 
                        return 0; 
                    }
                    else {
                        console.log(r); 
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
                    
                    /*
                    console.log(l)
                    s+= l.name; 
                    s+= op; 
                    l = r  
                    let h = l; 
                    l = l.left; 
                    r = h.right; 
                    i++; 

                    if(i > 50) {
                        return 0; 
                    }
        
                }

                //console.log(s); 
                

                    
                               
            },

            ClassMethod(path) {
                s = "function found here with params "
                s += "[" 
                for(let i of path.node.params) {
                    s += i.name + ", "
                }

                s = s.substring(0, s.length - 2); 

                s += "]"
                writeStream.write(s);
                writeStream.write("\n") 
            }
            
        }
    }
    
    }


    */
