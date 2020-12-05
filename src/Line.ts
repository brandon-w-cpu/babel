class Line {
    lineNo :number
    text :string

    constructor(lineNo :number, text :string) {
        this.lineNo = lineNo; 
        this.text = text; 
    }

    public getText() {
        return this.text; 
    }
    public getLineNo() {
        return this.lineNo
    }
}