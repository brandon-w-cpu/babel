var babel = require('babel-core');
class MyFile {
    private babelPath :string
    private registerPath :string
    private filePath :string
    private content :string
    //private content :string
    //private contentAsArray :Array<string>
    //private regions :Array<Region> 
    private fs = require('fs');
    
/*
    public constructor(path :string, register :string) {   
        if(register === "file1") {
            this.babelPath = "../babel/registerFile1.ts"; 
            this.registerPath = "../fileinfo//file1_register.txt" 
            console.log("this is done"); 
            this.fs.copyFile(path, "../fileinfo/file1.js", Error)
            this.filePath = "../fileinfo/file1.js"
        }
        else if(register === "file2") {
            this.babelPath = "../babel/registerFile2.ts"; 
            this.registerPath = "../fileinfo//file2_register.txt" 
            this.fs.copyFile(path, "../fileinfo/file2.js", Error)
            this.filePath = "../fileinfo/file2.js"
        }

        else {
            throw new exception("need to put 'file1' or 'file2' for second parameter"); 
    }

   
}
*/

//temporary override 
constructor(over :string, dest :string) {
    this.content = over; 
    if(dest === "file1") {
        this.babelPath = "../babel/registerFile1.ts"; 
        this.registerPath = "../fileinfo//file1_register.txt" 
        console.log("this is done"); 
        //this.filePath = "../fileinfo/file1.js"

    }
    else if(dest === "file2") {
        this.babelPath = "../babel/registerFile2.ts"; 
        this.registerPath = "../fileinfo//file2_register.txt" 
        console.log("this is done"); 
        //this.filePath = "../fileinfo/file2.js"
        

    }
    console.log(this.babelPath); 
    console.log(this.registerPath); 

    this.getFromAST(); 
}

    private getFromAST() :void {
        let fs = require('fs');
        let babel = require('babel-core');
        let parse_file = require(this.babelPath); 
        let fileName = this.filePath;

       

        //read the code from this file
        // fs.readFile(fileName, function(err, data) {
        //if(err) throw err;
        // convert from a buffer to a string
       // var src = data.toString();
        var src = this.content; 
        // use our plugin to transform the source
        var out = babel.transform(src, {
        plugins: [parse_file]
        }); 
       // }); 
}

   

}
export default MyFile 