
//Represents a region of code, with a start and end line, and content, to be stored in result.  
class Region {
    startLine
    endLine
    content :string

    constructor(startLine, endLine, content :string) {
        this.startLine = startLine; 
        this.endLine = endLine; 
        this.content = content;
        
    }

    //calculates length of code segment 
    getLength() {
        return this.endLine - this.startLine; 
    }

    //returns start line 
    getStart() {
        return this.startLine;
    }

    //returns end line 
    getEnd() {
        return this.endLine; 
    }
    //returns content of region 
    getContent() :String {
        return this.content
    }
}

export default Region; 