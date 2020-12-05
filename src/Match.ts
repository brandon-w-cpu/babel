//Represents a match between two regions of code. Contains the match_id and the two offending regions, represented as Region. 
import IAuthentication from "./Connection"; 
import LoginAuthentication from "./LoginAuthentication"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
class Match {
    match_id
    region1 :Region 
    region2 :Region 

    constructor(match_id, region1 :Region, region2 :Region) {
        this.match_id = match_id
        this.region1 = region1; 
        this.region2 = region2; 
    }

    //returns match id 
    getMatchID() {
        return this.match_id 
    }
    //returns first offending region
    getRegion1() :Region  {
        return this.region1; 
    }
    //returns second offending region 
    getRegion2() :Region {
        return this.region2; 
    }
}

export default Match 