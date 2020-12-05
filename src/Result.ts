//represents the results of calling compareFiles() in PlagiarismDetector. Contains the percent similarity and the array of Matches that 
//were accumulated from running compareFiles().  
import Match from "./Match"
class Result {
    percentSimilarity;
    matches :Array<Match>

    constructor(percentSimilarity, matches :Array<Match>) {
        this.percentSimilarity = percentSimilarity; 
        this.matches = matches; 
    }
    //returns percent similarity 
    getPercent() {
        return this.percentSimilarity; 
    }
    //returns array of matches in the result 
    getMatches() :Array<Match> {
        return this.matches; 
    }

    addMatch(m :Match) {
        this.matches.push(m); 
    }

}
export default Result