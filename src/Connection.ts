//Represents a connection between the client (MyAccount) 
//and a specific authentication service (one of LoginAuthentication, RegisterAuthentication, PasswordResetAuthentication)
//This class acts as a factory for IAuthentication and its different types while being able to get data from both the client
// and its corresponding authentication type 

import IAuthentication from "./IAuthentication"; 
import LoginAuthentication from "./LoginAuthentication"
import Match from "./Match"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
class Connection {
    user :MyAccount;
    authenticator: IAuthentication
    static allConnections :Array<Connection>
    constructor(user:MyAccount, type :String) {
        this.user = user; 
        if(type === "login") {
            this.authenticator = new LoginAuthentication(); 
        }

        else if(type === "register") {
            this.authenticator = new RegisterAuthentication(); 
        }

        else if(type === "reset") {
            this.authenticator = new PasswordResetAuthentication(); 
        }
        else {
            //do nothing
        }
    }

    //Adds another connection to the list of connections being made 
    public static addTo(c :Connection):void {
        this.allConnections.push(c); 
    }

    //gets the account that is making the connection
    getUser() :MyAccount {
        return this.user; 
    }
    //gets authentication service being requested in the connection 
    getAuthenticator() :IAuthentication {
        return this.authenticator.getAuthenticator(); 
    }


}

export default Connection