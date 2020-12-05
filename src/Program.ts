//Represents a computer program, with multiple files inside. 
import MyFile from "./MyFile"
class Program {
    files : Array<MyFile> 
    name : String

    constructor(files :Array<MyFile>, name :String) {
        this.files = files; 
        this.name = name; 

    }

    addFile() :void {

    }

    getFiles() :Array<MyFile> {
        return this.files; 
    }

    getName() :String {
        return this.name; 
    }

    result() :Program {
        return this; 
    }


}
export default Program 