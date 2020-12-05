//Represents a user account for the client, who logs in/registers with their first name, last name, email, and password. 
import IAuthentication from "./IAuthentication"; 
import LoginAuthentication from "./LoginAuthentication"
import Match from "./Match"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
import Connection from "./Connection"
class MyAccount {
    first_name :String
    last_name :String
    email :String
    password :String

    constructor(f :String, l :String, e :String, p :String) {
        this.first_name = f;
        this.last_name = l; 
        this.email = e; 
        this.password = p; 

    }

    //requests a connection of a type to be passed to the IAuthentication class 
    requestConnection(type :String) {
        let c = new Connection(this, type);
        c.getAuthenticator().authenticate(this); 
    }
    //returns true if other is a duplicate account 
    equals(other :MyAccount) :Boolean {
        return this.first_name === other.first_name 
        && this.last_name === other.last_name
        && this.email === other.email
        && this.password === other.password 
    }
}
export default MyAccount