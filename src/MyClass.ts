import { IncomingMessage } from "http"

class MyClass {
    
    c : number

    constructor() {
        this.c = 0
    }

    inc() :void {
        this.c+=1; 
    }

    count(babel) {
        const t = babel.types
        return {
            Visitor: {
                Identifier: function(path) {
                    console.log("fuck"); 
                }
            }
        }

    }

    getC():number {
        return this.c
    }
}

export default MyClass