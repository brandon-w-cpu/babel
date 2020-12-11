import { readFileSync } from 'fs';


class MyFileReader {
    path :string
    file 
    

    constructor(path :string) {
        this.path = path; 
        
       this.file = readFileSync(this.path); 
    }

    

    
}