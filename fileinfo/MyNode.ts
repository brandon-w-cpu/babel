class MyNode {
    ast :Array<String> 
    startLine :number
    endLine :number
    startCol :number
    endCol :number

    constructor(ast :Array<String>, startLine :number, endLine :number, startCol :number, endCol :number) {
        this.ast = ast; 
        this.startLine = startLine; 
        this.endLine = endLine; 
        this.startCol = startCol; 
        this.endCol = endCol; 
    }



}

export default MyNode