//Represents the Plagiarism detector itself. It contains two programs and a result object, that it uses to store the data that
//we get from running "comparePrograms()" in order to find plagiarism and the different regions of matching code 
import IAuthentication from "./Connection"; 
import LoginAuthentication from "./LoginAuthentication"
import Match from "./Match"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
import Result from "./Result"; 
class PlagiarismDetector {
    private program1 : Program;
    private program2 : Program;
    private result : Result; 
    constructor(p1 :Program, p2 :Program, r :Result) {
        this.program1 = p1; 
        this.program2 = p2; 
        this.result = r; 
        this.comparePrograms(); 
    }

    /*
    makeRegions(program : Program) {
        for(let file of program.getFiles()) {
            file.makeRegions(0); 
        }
    }
    */

    //method that compares programs and generates matches, adding them to results. 
    comparePrograms() :void {
        //this.makeRegions(this.program1);
        //this.makeRegions(this.program2);  
        for(let i of this.program1.getFiles()) {
            for(let j of this.program2.getFiles()) {
                this.compareFiles(i, j)
                
            }
        }

    }

    //method that compares individual files and iterates on their contents. 
    compareFiles(a :MyFile,  b :MyFile) {

       
       /* for (let ar of a.getRegions()) {
            for(let br of a.getRegions()) {
                this.compareContent(ar, br); 
            }
        }
        */
    }

    //Meat of the plagiarism detector, actually making the comparisons between all the regions of the program. For now it just does string comparisons 
    compareContent(ar :Region, br :Region) {
        
        
        
        /*let linesA = this.splitLine(ar.content)
        let linesB = this.splitLine(br.content)

        for(let lineA of linesA) {
            for(let lineB of linesB) {
                if(lineA.getText() === lineB.getText()) {
                    let r1 = new Region(lineA.getLineNo(), lineA.getLineNo(), lineA.getText())
                    let r2 = new Region(lineB.getLineNo(), lineB.getLineNo(), lineB.getText())
                    let m = new Match(1,r1, r2)
                    this.result.addMatch(m); 
                }
            }
        }
        */


    }
    /*
    splitLine(s :string) :Array<Line> {
        let result = []
        let lineno = 1; 
        let line = ""
        for(let char of s) {
            if(char == '\n') {
                result.push(lineno, line)
                line = "";
                lineno++; 
            }
            else {
                line+= char
            }
        }

        return result;
    }
    */

}

export default PlagiarismDetector