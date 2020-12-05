module.exports = function(babel) {
    const fs = require('fs');
    let handler = require('./handleVariableDeclaration'); 
    let writeStream = fs.createWriteStream("./fileinfo/file1_register.txt"); 
    var t = babel.types; 
    let s = ""
    return {

        visitor: {

            BlockStatement(path) {
                for(let node of path.node.body) {
                    if(node.type === "VariableDeclaration") {
                        console.log("variable declaration")
                        handler = require("./handleVariableDeclaration"); 
                        handler.handle(writeStream, node); 
                        writeStream.write("\n"); 
                        
                    }

                    if(node.type === "BlockStatement") {
                        
                        handler = require("./handleBlockStatement"); 
                        handler.handle(writeStream, node)
                        console.log("found a block statement")
                        writeStream.write("\n"); 
                    }

                    if(node.type === "ExpressionStatement") {
                        console.log("expression statement")
                        handler = require("./handleExpressionStatement");
                        handler.handle(writeStream, node)
                        writeStream.write("\n"); 
                    }
                }
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



